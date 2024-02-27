import React, { useEffect, useRef } from 'react';
import './btThree.css';
import * as THREE from 'three';

import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

const BtThree = (params) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let container, renderer, scene, camera, particles, textMesh, textMaterial;


    try {
      container = containerRef.current;
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
      camera.position.z = 2;

      // Particles
      particles = new THREE.Group();
      const particleGeometry = new THREE.SphereGeometry(0.1, 32, 32);
      const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

      for (let i = 0; i < 1000; i++) {
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);
        const [x, y, z] = Array.from({ length: 3 }, () => THREE.MathUtils.randFloatSpread(100));
        particle.position.set(x, y, z);
        particles.add(particle);
      }

      const pointLight = new THREE.PointLight( 0xffffff, 4.5, 0, 0 );
      pointLight.color.setHSL(49, 37, 57);
      pointLight.position.set( 0, 100, 90 );
      scene.add( pointLight );

      scene.add(particles);

      // Text
      const fontLoader = new FontLoader();
      fontLoader.load('./fonts/bladRunner.json', function (font) {
        const textGeometry = new TextGeometry(""+params.setText, {
          font: font,
          size: params.sizeFont,
          height: 0.1,
          curveSegments: 8,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.02,
          bevelOffset: 0,
          bevelSegments: 5
        });
        
        textGeometry.computeBoundingBox();
        const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;

        const textPosX = -textWidth / 2;
        const textPosY = 0; 
        const textPosZ = -10; 

        textMaterial = new THREE.MeshStandardMaterial({color:'#fcba03'});
        textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(textPosX, textPosY-(params.sizeFont-3), textPosZ);
        scene.add(textMesh);
      });

      const handleMouseMove = (event) => {
        const mouseX = event.clientX / window.innerWidth * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
        vector.unproject(camera);
        const dir = vector.sub(camera.position).normalize();
        const distance = -camera.position.z / dir.z;
        const pos = camera.position.clone().add(dir.multiplyScalar(distance));
        particles.position.copy(pos);
      };

      const handleClick = () => {
        pointLight.color.setHSL( Math.random(), 1, 0.4 );
      };

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('click', handleClick);

      const animate = () => {
        requestAnimationFrame(animate);
        particles.rotation.x += 0.001;
        particles.rotation.y += 0.001;
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('click', handleClick);
        container.removeChild(renderer.domElement);
      };
    } catch (ex) {
      console.log("erro Ex: " + ex);
    }
  }, [params]);

  return <div ref={containerRef} className='Button-header' />;
};

export default BtThree;