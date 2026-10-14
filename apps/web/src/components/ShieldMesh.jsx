"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ORANGE = new THREE.Color(0xf26b21);
const CYAN = new THREE.Color(0x22d3ee);

/**
 * 3D glowing shield with a network mesh — a faceted shield shape with a
 * wireframe mesh surface, pulsing core, radiating defence rings and orbiting
 * data particles. Pure three.js.
 */
const ShieldMesh = ({ className = '' }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return undefined;

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
        camera.position.set(0, 0, 6.4);

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

        // --- Shield shape: a flattened, pointed-top shield via lathe-ish custom geometry ---
        // Build a 2D shield silhouette and extrude it.
        const shieldShape = new THREE.Shape();
        const w = 1.35;
        const h = 1.7;
        shieldShape.moveTo(0, h); // top centre
        shieldShape.quadraticCurveTo(w, h * 0.92, w, h * 0.35);
        shieldShape.quadraticCurveTo(w * 0.78, -h * 0.55, 0, -h);
        shieldShape.quadraticCurveTo(-w * 0.78, -h * 0.55, -w, h * 0.35);
        shieldShape.quadraticCurveTo(-w, h * 0.92, 0, h);

        const extrudeSettings = {
            depth: 0.32,
            bevelEnabled: true,
            bevelThickness: 0.08,
            bevelSize: 0.08,
            bevelSegments: 3,
            curveSegments: 24,
        };
        const shieldGeo = new THREE.ExtrudeGeometry(shieldShape, extrudeSettings);
        shieldGeo.center();
        const shieldMat = new THREE.MeshBasicMaterial({
            color: 0x0b1f3a,
            transparent: true,
            opacity: 0.9,
        });
        const shield = new THREE.Mesh(shieldGeo, shieldMat);
        group.add(shield);

        // --- Wireframe mesh over the shield surface ---
        const wireGeo = new THREE.ExtrudeGeometry(shieldShape, {
            depth: 0.34,
            bevelEnabled: false,
            curveSegments: 14,
        });
        wireGeo.center();
        const wireMat = new THREE.MeshBasicMaterial({
            color: CYAN,
            wireframe: true,
            transparent: true,
            opacity: 0.28,
        });
        const wire = new THREE.Mesh(wireGeo, wireMat);
        group.add(wire);

        // --- Shield edge outline (bright) ---
        const edgeGeo = new THREE.EdgesGeometry(shieldGeo);
        const edgeMat = new THREE.LineBasicMaterial({ color: CYAN, transparent: true, opacity: 0.75 });
        const edge = new THREE.LineSegments(edgeGeo, edgeMat);
        group.add(edge);

        // --- Inner core emblem (a glowing chevron/shield core) ---
        const coreGeo = new THREE.CircleGeometry(0.55, 32);
        const coreMat = new THREE.MeshBasicMaterial({
            color: ORANGE,
            transparent: true,
            opacity: 0.2,
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        core.position.z = 0.34;
        group.add(core);

        const coreEdgeGeo = new THREE.EdgesGeometry(new THREE.CircleGeometry(0.55, 32));
        const coreEdgeMat = new THREE.LineBasicMaterial({ color: ORANGE, transparent: true, opacity: 0.85 });
        const coreEdge = new THREE.LineSegments(coreEdgeGeo, coreEdgeMat);
        coreEdge.position.z = 0.35;
        group.add(coreEdge);

        // --- Defence rings radiating around the shield ---
        const ringGroup = new THREE.Group();
        group.add(ringGroup);
        const rings = [];
        for (let i = 0; i < 3; i += 1) {
            const r = 2.0 + i * 0.45;
            const ringGeo = new THREE.RingGeometry(r, r + 0.012, 96);
            const ringMat = new THREE.MeshBasicMaterial({
                color: i % 2 === 0 ? CYAN : ORANGE,
                transparent: true,
                opacity: 0.22 - i * 0.05,
                side: THREE.DoubleSide,
            });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.position.z = -0.2;
            ringGroup.add(ring);
            rings.push(ring);
        }

        // --- Orbiting data particles (the "network mesh") ---
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 100 : 200;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const orbits = [];
        for (let i = 0; i < particleCount; i += 1) {
            const radius = 1.8 + Math.random() * 1.5;
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
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const particles = new THREE.Points(pGeo, pMat);
        scene.add(particles);

        // --- Faint connection lines from core to a few particles ---
        const linkCount = isMobile ? 7 : 14;
        const linkPositions = new Float32Array(linkCount * 2 * 3);
        const linkOrbits = orbits.slice(0, linkCount);
        const linkGeo = new THREE.BufferGeometry();
        linkGeo.setAttribute('position', new THREE.BufferAttribute(linkPositions, 3));
        const linkMat = new THREE.LineBasicMaterial({ color: ORANGE, transparent: true, opacity: 0.22 });
        const links = new THREE.LineSegments(linkGeo, linkMat);
        scene.add(links);

        let raf = 0;
        const clock = new THREE.Clock();

        const animate = () => {
            const t = clock.getElapsedTime();

            group.rotation.y = Math.sin(t * 0.3) * 0.5 + t * 0.12;
            group.rotation.x = Math.sin(t * 0.22) * 0.16 - 0.18;

            wire.material.opacity = 0.24 + Math.sin(t * 1.3) * 0.08;
            core.material.opacity = 0.16 + (Math.sin(t * 2.0) * 0.5 + 0.5) * 0.22;
            coreEdge.material.opacity = 0.6 + Math.sin(t * 2.0) * 0.25;
            edge.material.opacity = 0.6 + Math.sin(t * 1.1) * 0.15;

            rings.forEach((ring, i) => {
                ring.rotation.z = t * (0.1 + i * 0.05) * (i % 2 === 0 ? 1 : -1);
                ring.material.opacity = (0.2 - i * 0.05) + Math.sin(t * 1.4 + i) * 0.05;
            });

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
                lp[i * 6 + 2] = 0.36;
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
            shieldGeo.dispose();
            shieldMat.dispose();
            wireGeo.dispose();
            wireMat.dispose();
            edgeGeo.dispose();
            edgeMat.dispose();
            coreGeo.dispose();
            coreMat.dispose();
            coreEdgeGeo.dispose();
            coreEdgeMat.dispose();
            rings.forEach((r) => { r.geometry.dispose(); r.material.dispose(); });
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

export default ShieldMesh;

export { ShieldMesh };
