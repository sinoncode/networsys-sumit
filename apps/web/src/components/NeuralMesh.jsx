"use client";
import React, { useEffect, useRef } from 'react';

const ORANGE = { r: 242, g: 107, b: 33 };
const CYAN = { r: 34, g: 211, b: 238 };
const LINK_DIST = 120;
const MOUSE_DIST = 170;

const mix = (a, b, t) => ({
    r: Math.round(a.r + (b.r - a.r) * t),
    g: Math.round(a.g + (b.g - a.g) * t),
    b: Math.round(a.b + (b.b - a.b) * t),
});

const rgba = (c, a) => `rgba(${c.r},${c.g},${c.b},${a})`;

const NeuralMesh = ({ className = '' }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return undefined;

        const ctx = canvas.getContext('2d');
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const mouse = { x: -9999, y: -9999 };
        let particles = [];
        let raf = 0;
        let w = 0;
        let h = 0;

        const build = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const rect = canvas.getBoundingClientRect();
            w = rect.width;
            h = rect.height;
            canvas.width = Math.round(w * dpr);
            canvas.height = Math.round(h * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const divisor = window.innerWidth < 768 ? 30000 : 16000;
            const count = Math.min(Math.floor((w * h) / divisor), window.innerWidth < 768 ? 55 : 110);
            particles = Array.from({ length: count }, (_, i) => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: 1.2 + Math.random() * 1.6,
                tint: i % 3 === 0 ? ORANGE : CYAN,
            }));
        };

        const draw = () => {
            ctx.clearRect(0, 0, w, h);

            for (const p of particles) {
                // gentle cursor repulsion
                const dxm = p.x - mouse.x;
                const dym = p.y - mouse.y;
                const dm = Math.hypot(dxm, dym);
                if (dm < MOUSE_DIST && dm > 0.01) {
                    const force = ((MOUSE_DIST - dm) / MOUSE_DIST) * 0.6;
                    p.x += (dxm / dm) * force;
                    p.y += (dym / dm) * force;
                }

                p.x += p.vx;
                p.y += p.vy;

                if (p.x < -20) p.x = w + 20;
                if (p.x > w + 20) p.x = -20;
                if (p.y < -20) p.y = h + 20;
                if (p.y > h + 20) p.y = -20;
            }

            // links
            for (let i = 0; i < particles.length; i += 1) {
                const a = particles[i];
                for (let j = i + 1; j < particles.length; j += 1) {
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const d = Math.hypot(dx, dy);
                    if (d < LINK_DIST) {
                        const alpha = (1 - d / LINK_DIST) * 0.35;
                        const c = mix(a.tint, b.tint, 0.5);
                        ctx.strokeStyle = rgba(c, alpha);
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }

                // link to cursor
                const dxm = a.x - mouse.x;
                const dym = a.y - mouse.y;
                const dm = Math.hypot(dxm, dym);
                if (dm < MOUSE_DIST) {
                    const alpha = (1 - dm / MOUSE_DIST) * 0.5;
                    ctx.strokeStyle = rgba(mix(a.tint, CYAN, 0.4), alpha);
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }

            // nodes
            for (const p of particles) {
                ctx.fillStyle = rgba(p.tint, 0.85);
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        const loop = () => {
            draw();
            raf = requestAnimationFrame(loop);
        };

        const onMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const onLeave = () => {
            mouse.x = -9999;
            mouse.y = -9999;
        };

        build();

        if (reduced) {
            draw();
        } else {
            raf = requestAnimationFrame(loop);
            window.addEventListener('pointermove', onMove, { passive: true });
            window.addEventListener('pointerleave', onLeave);
        }

        const onResize = () => {
            build();
            if (reduced) draw();
        };
        window.addEventListener('resize', onResize);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', onResize);
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerleave', onLeave);
        };
    }, []);

    return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};

export default NeuralMesh;

export { NeuralMesh };
