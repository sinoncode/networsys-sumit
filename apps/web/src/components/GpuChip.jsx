"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ORANGE = new THREE.Color(0xf26b21);
const CYAN = new THREE.Color(0x22d3ee);

/**
 * 3D glowing GPU chip — a square die with a glowing grid of circuit traces,
 * orbiting data particles and pulsing edge light. Pure three.js.
 */
const GpuChip = ({ className = '' }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return undefined;

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
        camera.position.set(0, 0, 6.2);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

        const setSize = () => {
            const w = Math.max(mount.clientWidth, 1);
            const h = Math.max(mount.clientHeight, 1);
            renderer.setSize(w, h);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        };
        setSize();
        mount.appendChild(renderer.domElement);
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';

        const group = new THREE.Group();
        scene.add(group);

        // --- The die: a thin box ---
        const dieGeo = new THREE.BoxGeometry(2.4, 2.4, 0.28);
        const dieMat = new THREE.MeshBasicMaterial({
            color: 0x0b1f3a,
            transparent: true,
            opacity: 0.92,
        });
        const die = new THREE.Mesh(dieGeo, dieMat);
        group.add(die);

        // --- Glowing grid of circuit traces on the die face (wireframe plane) ---
        const gridGeo = new THREE.PlaneGeometry(2.2, 2.2, 12, 12);
        const gridMat = new THREE.MeshBasicMaterial({
            color: CYAN,
            wireframe: true,
            transparent: true,
            opacity: 0.32,
        });
        const grid = new THREE.Mesh(gridGeo, gridMat);
        grid.position.z = 0.145;
        group.add(grid);

        // --- Inner core square (the GPU silicon) ---
        const coreGeo = new THREE.PlaneGeometry(1.1, 1.1);
        const coreMat = new THREE.MeshBasicMaterial({
            color: ORANGE,
            transparent: true,
            opacity: 0.22,
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        core.position.z = 0.15;
        group.add(core);

        // --- Core wireframe outline ---
        const coreEdgeGeo = new THREE.EdgesGeometry(new THREE.PlaneGeometry(1.1, 1.1));
        const coreEdgeMat = new THREE.LineBasicMaterial({ color: ORANGE, transparent: true, opacity: 0.85 });
        const coreEdge = new THREE.LineSegments(coreEdgeGeo, coreEdgeMat);
        coreEdge.position.z = 0.16;
        group.add(coreEdge);

        // --- Die edge outline (bright) ---
        const dieEdgeGeo = new THREE.EdgesGeometry(dieGeo);
        const dieEdgeMat = new THREE.LineBasicMaterial({ color: CYAN, transparent: true, opacity: 0.7 });
        const dieEdge = new THREE.LineSegments(dieEdgeGeo, dieEdgeMat);
        group.add(dieEdge);

        // --- Pin traces radiating from the die edges ---
        const pinCount = 9; // per side
        const pinPositions = [];
        const span = 2.0;
        const half = 1.2;
        for (let i = 0; i < pinCount; i += 1) {
            const t = -span / 2 + (span * i) / (pinCount - 1);
            // top + bottom (vertical traces going outward in y)
            pinPositions.push(t, half, 0.15, t, half + 0.55, 0.15);
            pinPositions.push(t, -half, 0.15, t, -half - 0.55, 0.15);
            // left + right (horizontal traces going outward in x)
            pinPositions.push(-half, t, 0.15, -half - 0.55, t, 0.15);
            pinPositions.push(half, t, 0.15, half + 0.55, t, 0.15);
        }
        const pinGeo = new THREE.BufferGeometry();
        pinGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pinPositions), 3));
        const pinMat = new THREE.LineBasicMaterial({ color: CYAN, transparent: true, opacity: 0.45 });
        const pins = new THREE.LineSegments(pinGeo, pinMat);
        group.add(pins);

        // --- Orbiting data particles ---
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 90 : 180;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const orbits = [];
        for (let i = 0; i < particleCount; i += 1) {
            const radius = 1.7 + Math.random() * 1.3;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const speed = 0.18 + Math.random() * 0.5;
            orbits.push({ radius, theta, phi, speed });
            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.cos(phi);
            positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
            const c = Math.random() > 0.6 ? ORANGE : CYAN;
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }
        const pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        const pMat = new THREE.PointsMaterial({
            size: 0.055,
            vertexColors: true,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const particles = new THREE.Points(pGeo, pMat);
        scene.add(particles);

        // --- Faint connection lines from core to a few particles ---
        const linkCount = isMobile ? 6 : 12;
        const linkPositions = new Float32Array(linkCount * 2 * 3);
        const linkOrbits = orbits.slice(0, linkCount);
        const linkGeo = new THREE.BufferGeometry();
        linkGeo.setAttribute('position', new THREE.BufferAttribute(linkPositions, 3));
        const linkMat = new THREE.LineBasicMaterial({ color: ORANGE, transparent: true, opacity: 0.25 });
        const links = new THREE.LineSegments(linkGeo, linkMat);
        scene.add(links);

        let raf = 0;
        const clock = new THREE.Clock();

        const animate = () => {
            const t = clock.getElapsedTime();

            group.rotation.y = Math.sin(t * 0.3) * 0.5 + t * 0.12;
            group.rotation.x = Math.sin(t * 0.22) * 0.18 - 0.25;

            grid.material.opacity = 0.28 + Math.sin(t * 1.4) * 0.08;
            core.material.opacity = 0.18 + (Math.sin(t * 2.1) * 0.5 + 0.5) * 0.22;
            coreEdge.material.opacity = 0.6 + Math.sin(t * 2.1) * 0.25;
            dieEdge.material.opacity = 0.55 + Math.sin(t * 1.1) * 0.15;

            const pos = particles.geometry.attributes.position.array;
            for (let i = 0; i < particleCount; i += 1) {
                const o = orbits[i];
                const ang = o.theta + t * o.speed;
                const r = o.radius;
                pos[i * 3] = r * Math.sin(o.phi) * Math.cos(ang);
                pos[i * 3 + 1] = r * Math.cos(o.phi);
                pos[i * 3 + 2] = r * Math.sin(o.phi) * Math.sin(ang);
            }
            particles.geometry.attributes.position.needsUpdate = true;
            particles.rotation.y = t * 0.05;

            const lp = links.geometry.attributes.position.array;
            for (let i = 0; i < linkCount; i += 1) {
                const o = linkOrbits[i];
                const ang = o.theta + t * o.speed;
                const r = o.radius;
                lp[i * 6] = 0;
                lp[i * 6 + 1] = 0;
                lp[i * 6 + 2] = 0.16;
                lp[i * 6 + 3] = r * Math.sin(o.phi) * Math.cos(ang);
                lp[i * 6 + 4] = r * Math.cos(o.phi);
                lp[i * 6 + 5] = r * Math.sin(o.phi) * Math.sin(ang);
            }
            links.geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
            raf = requestAnimationFrame(animate);
        };

        if (reduced) {
            renderer.render(scene, camera);
        } else {
            raf = requestAnimationFrame(animate);
        }

        const onResize = () => setSize();
        window.addEventListener('resize', onResize);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', onResize);
            renderer.dispose();
            dieGeo.dispose();
            dieMat.dispose();
            gridGeo.dispose();
            gridMat.dispose();
            coreGeo.dispose();
            coreMat.dispose();
            coreEdgeGeo.dispose();
            coreEdgeMat.dispose();
            dieEdgeGeo.dispose();
            dieEdgeMat.dispose();
            pinGeo.dispose();
            pinMat.dispose();
            pGeo.dispose();
            pMat.dispose();
            linkGeo.dispose();
            linkMat.dispose();
            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} className={className} aria-hidden="true" />;
};

export default GpuChip;

export { GpuChip };
