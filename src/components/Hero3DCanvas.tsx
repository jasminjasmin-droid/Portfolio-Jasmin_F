import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for objects to rotate together with mouse
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Golden Geodesic Polyhedron (Core 3D object)
    const icosaGeometry = new THREE.IcosahedronGeometry(3.2, 2);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xD4AF37,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const icosaMesh = new THREE.Mesh(icosaGeometry, wireframeMaterial);
    mainGroup.add(icosaMesh);

    // 2. Inner Golden Octahedron
    const innerGeometry = new THREE.OctahedronGeometry(2.0, 1);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0xF3CA65,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerMesh);

    // 3. Golden Orbital Rings
    const ring1Geo = new THREE.TorusGeometry(4.2, 0.025, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0xD4AF37, transparent: true, opacity: 0.4 });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(4.6, 0.02, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xE6C265, transparent: true, opacity: 0.3 });
    const ring2 = new THREE.Mesh(ring2Geo, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    // 4. Ambient 3D Gold Particles Field
    const particleCount = 450;
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Disperse in spherical volume
      const radius = 3.5 + Math.random() * 8.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);

      scales[i / 3] = Math.random();
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle texture canvas for soft circular gold dots
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 220, 120, 1)');
      gradient.addColorStop(0.3, 'rgba(212, 175, 55, 0.8)');
      gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.22,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      targetRotationY = mouseX * 0.45;
      targetRotationX = -mouseY * 0.45;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous autonomous 3D rotation
      icosaMesh.rotation.y = elapsedTime * 0.12;
      icosaMesh.rotation.x = elapsedTime * 0.08;

      innerMesh.rotation.y = -elapsedTime * 0.2;
      innerMesh.rotation.z = elapsedTime * 0.15;

      ring1.rotation.z = elapsedTime * 0.1;
      ring2.rotation.z = -elapsedTime * 0.08;

      particles.rotation.y = elapsedTime * 0.04;
      particles.rotation.x = elapsedTime * 0.02;

      // Smooth mouse follow (damping/lerp)
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      icosaGeometry.dispose();
      wireframeMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ring1Geo.dispose();
      ringMat1.dispose();
      ring2Geo.dispose();
      ringMat2.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80 overflow-hidden"
      aria-hidden="true"
    />
  );
};
