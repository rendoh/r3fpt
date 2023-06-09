import { Canvas, useFrame } from '@react-three/fiber';
import { FC, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import { useScreenshot } from '../states/screenshot';
import fragmentShader from './fragment.glsl';
import * as styles from './Sketch.css';
import vertexShader from './vertex.glsl';

const defaultTexture = new THREE.Texture();
const loader = new THREE.TextureLoader();

export const Sketch: FC = () => (
  <div className={styles.container}>
    <Canvas>
      <Effect />
    </Canvas>
  </div>
);

const Effect: FC = () => {
  const progressRef = useRef({ value: 1 });

  const [texture, setTexture] = useState<THREE.Texture>(defaultTexture);
  const screenshot = useScreenshot();
  useEffect(() => {
    setTexture((prev) => {
      if (prev !== defaultTexture) {
        prev.dispose();
      }
      if (screenshot) {
        return loader.load(screenshot, () => {
          progressRef.current.value = 0;
        });
      }
      return defaultTexture;
    });
  }, [screenshot]);

  const elapsedRef = useRef(0);
  useFrame(({ clock }, delta) => {
    elapsedRef.current = clock.elapsedTime;
    progressRef.current.value = Math.min(progressRef.current.value + delta, 1);
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2, 1, 1]} />
      <shaderMaterial
        uniforms-uTexture={{ value: texture }}
        uniforms-uTime={{ value: elapsedRef.current }}
        uniforms-uProgress={progressRef.current}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
      />
    </mesh>
  );
};
