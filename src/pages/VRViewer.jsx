import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function PanoramaViewer({ image }) {
  return (
    <Canvas>
      <mesh>
        <sphereGeometry args={[500, 60, 40]} scale={[-1, 1, 1]} />
        <meshBasicMaterial map={image} side={2} />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

const VRViewer = () => {
  const [image, setImage] = useState(null);
  const inputRef = useRef();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const texture = await new Promise((resolve) => {
        new window.THREE.TextureLoader().load(url, resolve);
      });
      setImage(texture);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">360° VR Viewer</h1>
      <input
        type="file"
        accept="image/jpeg,image/jpg"
        ref={inputRef}
        onChange={handleFileChange}
        className="mb-4"
      />
      {image && (
        <div className="w-full h-[600px]">
          <PanoramaViewer image={image} />
        </div>
      )}
    </div>
  );
};

export default VRViewer;
