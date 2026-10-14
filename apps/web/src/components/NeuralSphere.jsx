"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ORANGE = new THREE.Color(0xf26b21);
const CYAN = new THREE.Color(0x22d3ee);

/**
 * 3D rotating neural core / GPU sphere with orbiting particles.
 * Pure three.js — owns its own scene, animation loop, and cleanup.
 */
const NeuralSphere = ({ className = '' }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return undefined;

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
        camera.position.z = 4.4;

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

        // Core wireframe icosahedron — the "GPU core"
        const coreGeo = new THREE.IcosahedronGeometry(1.1, 2);
        const coreMat = new THREE.MeshBasicMaterial({
            color: CYAN,
            wireframe: true,
            transparent: true,
            opacity: 0.6,
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        scene.add(core);

        // Inner glowing sphere
        const innerGeo = new THREE.SphereGeometry(0.82, 32, 32);
        const innerMat = new THREE.MeshBasicMaterial({
            color: ORANGE,
            transparent: true,
            opacity: 0.14,
        });
        const inner = new THREE.Mesh(innerGeo, innerMat);
        scene.add(inner);

        // Outer translucent shell
        const shellGeo = new THREE.SphereGeometry(1.38, 48, 48);
        const shellMat = new THREE.MeshBasicMaterial({
            color: CYAN,
            wireframe: true,
            transparent: true,
            opacity: 0.16,
        });
        const shell = new THREE.Mesh(shellGeo, shellMat);
        scene.add(shell);

        // Orbiting particles
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 120 : 240;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const orbits = [];

        for (let i = 0; i < particleCount; i += 1) {
            const radius = 1.55 + Math.random() * 1.15;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const speed = 0.18 + Math.random() * 0.5;
            const tilt = (Math.random() - 0.5) * 0.5;
            orbits.push({ radius, theta, phi, speed, tilt });

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.cos(phi);
            positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

            const c = Math.random() > 0.62 ? ORANGE : CYAN;
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        const pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        const pMat = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const particles = new THREE.Points(pGeo, pMat);
        scene.add(particles);

        // Faint connection lines from core to a few particles
        const linkCount = isMobile ? 7 : 14;
        const linkPositions = new Float32Array(linkCount * 2 * 3);
        const linkOrbits = orbits.slice(0, linkCount);
        const linkGeo = new THREE.BufferGeometry();
        linkGeo.setAttribute('position', new THREE.BufferAttribute(linkPositions, 3));
        const linkMat = new THREE.LineBasicMaterial({
            color: CYAN,
            transparent: true,
            opacity: 0.22,
        });
        const links = new THREE.LineSegments(linkGeo, linkMat);
        scene.add(links);

        let raf = 0;
        const clock = new THREE.Clock();

        const animate = () => {
            const t = clock.getElapsedTime();

            core.rotation.y = t * 0.25;
            core.rotation.x = t * 0.15;
            shell.rotation.y = -t * 0.18;
            shell.rotation.z = t * 0.1;
            inner.scale.setScalar(1 + Math.sin(t * 1.6) * 0.05);

            const pos = particles.geometry.attributes.position.array;
            for (let i = 0; i < particleCount; i += 1) {
                const o = orbits[i];
                const ang = o.theta + t * o.speed;
                const r = o.radius;
                pos[i * 3] = r * Math.sin(o.phi) * Math.cos(ang);
                pos[i * 3 + 1] = r * Math.cos(o.phi) + Math.sin(t * o.speed + o.theta) * o.tilt;
                pos[i * 3 + 2] = r * Math.sin(o.phi) * Math.sin(ang);
            }
            particles.geometry.attributes.position.needsUpdate = true;
            particles.rotation.y = t * 0.05;

            // Update link endpoints (core center -> particle)
            const lp = links.geometry.attributes.position.array;
            for (let i = 0; i < linkCount; i += 1) {
                const o = linkOrbits[i];
                const ang = o.theta + t * o.speed;
                const r = o.radius;
                lp[i * 6] = 0;
                lp[i * 6 + 1] = 0;
                lp[i * 6 + 2] = 0;
                lp[i * 6 + 3] = r * Math.sin(o.phi) * Math.cos(ang);
                lp[i * 6 + 4] = r * Math.cos(o.phi) + Math.sin(t * o.speed + o.theta) * o.tilt;
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
            coreGeo.dispose();
            coreMat.dispose();
            innerGeo.dispose();
            innerMat.dispose();
            shellGeo.dispose();
            shellMat.dispose();
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

export default NeuralSphere;

export { NeuralSphere };
