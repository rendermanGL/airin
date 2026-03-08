import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ParticleSystemProps {
  className?: string;
}

export default function ParticleSystem({ className = '' }: ParticleSystemProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const linesRef = useRef<THREE.LineSegments | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>();
  const [webGLAvailable, setWebGLAvailable] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) { setWebGLAvailable(false); return; }
    } catch { setWebGLAvailable(false); return; }

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Particle system setup - optimized count for mobile
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 35 : 50;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const depths = new Float32Array(particleCount); // For parallax effect

    // Initialize particles with random positions and depths
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Random positions
      const x = (Math.random() - 0.5) * 80;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 30;
      
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
      
      // Random velocities for floating motion
      velocities[i3] = (Math.random() - 0.5) * 0.015;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.015;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.008;
      
      // Depth for parallax (0-1, where 1 is closest)
      depths[i] = Math.random() * 0.6 + 0.2; // 0.2 to 0.8 range
    }

    // Create circular particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext('2d')!;
    
    // Draw circle
    context.beginPath();
    context.arc(16, 16, 14, 0, Math.PI * 2);
    context.fillStyle = '#ffffff';
    context.fill();
    
    const circleTexture = new THREE.CanvasTexture(canvas);

    // Regular particles
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x854F6C,
      size: isMobile ? 2.5 : 3.5,
      transparent: true,
      opacity: 0.12,
      sizeAttenuation: true,
      map: circleTexture
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Line system for connections
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x854F6C,
      transparent: true,
      opacity: 0.08
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);
    linesRef.current = lines;

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Window resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Animation loop with performance optimizations
    let frameCount = 0;
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      frameCount++;

      const time = Date.now() * 0.001;
      const positionAttribute = particles.geometry.attributes.position;
      const positions = positionAttribute.array as Float32Array;

      // Update particle positions
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const depth = depths[i];

        // Gentle floating animation
        positions[i3] += velocities[i3] * depth;
        positions[i3 + 1] += velocities[i3 + 1] * depth + Math.sin(time * 0.5 + i * 0.1) * 0.008;
        positions[i3 + 2] += velocities[i3 + 2] * depth;

        // Mouse repulsion with parallax depth
        const mouseInfluence = depth * (isMobile ? 3 : 4);
        const mouseX = mouseRef.current.x * 25;
        const mouseY = mouseRef.current.y * 20;
        
        const dx = positions[i3] - mouseX;
        const dy = positions[i3 + 1] - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repulsionRadius = isMobile ? 8 : 12;

        if (distance < repulsionRadius && distance > 0) {
          const force = (repulsionRadius - distance) / repulsionRadius * 0.08;
          const normalizedDx = dx / distance;
          const normalizedDy = dy / distance;
          
          positions[i3] += normalizedDx * force * mouseInfluence;
          positions[i3 + 1] += normalizedDy * force * mouseInfluence;
        }

        // Soft boundary constraints
        const boundX = 40;
        const boundY = 25;
        
        if (Math.abs(positions[i3]) > boundX) {
          positions[i3] = Math.sign(positions[i3]) * boundX;
          velocities[i3] *= -0.5;
        }
        if (Math.abs(positions[i3 + 1]) > boundY) {
          positions[i3 + 1] = Math.sign(positions[i3 + 1]) * boundY;
          velocities[i3 + 1] *= -0.5;
        }
      }

      // Update connections (optimize by checking fewer combinations)
      if (frameCount % (isMobile ? 3 : 2) === 0) {
        const linePositions: number[] = [];
        const maxDistance = isMobile ? 12 : 15;

        for (let i = 0; i < particleCount; i++) {
          for (let j = i + 1; j < particleCount; j++) {
            const i3 = i * 3;
            const j3 = j * 3;

            const dx = positions[i3] - positions[j3];
            const dy = positions[i3 + 1] - positions[j3 + 1];
            const dz = positions[i3 + 2] - positions[j3 + 2];
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (distance < maxDistance) {
              linePositions.push(
                positions[i3], positions[i3 + 1], positions[i3 + 2],
                positions[j3], positions[j3 + 1], positions[j3 + 2]
              );
            }
          }
        }

        // Update line geometry
        if (linePositions.length > 0) {
          lines.geometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(linePositions, 3)
          );
          lines.geometry.attributes.position.needsUpdate = true;
        }
      }

      // Update particle positions
      positionAttribute.needsUpdate = true;
      renderer.render(scene, camera);
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      circleTexture.dispose();
    };
  }, []);

  if (!webGLAvailable) {
    return null;
  }

  return (
    <div 
      ref={mountRef} 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}