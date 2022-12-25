// Libraries
import { Canvas } from '@react-three/fiber';
import { useState, useEffect } from 'react';
import getColor from './utilities/color';

function App() {
  return (
    <div className="relative flex flex-col min-h-screen bg-slate-800">
      <div className="absolute h-full w-full">
        <Canvas>
          <CustomMesh
            width={3}
            height={1}
            depth={1}
          />
        </Canvas>
      </div>
    </div>
  );
}

function CustomMesh({ width, height, depth }: { width: number; height: number; depth: number }) {
  const [state, setState] = useState(0);
  const [color, setColor] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setState((oldState) => {
        const value = (oldState + 0.005) % 2.2;
        return value;
      });

      setColor((oldState) => {
        const value = (oldState + 10) % 255;
        return value;
      });
    }, 16);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <mesh>
      <boxGeometry args={[width * state, height * state, depth * state]} />
      <meshStandardMaterial />

      <ambientLight intensity={0.1} />
      <directionalLight
        color={'rgba(' + getColor('rgba').join(', ') + ')'}
        position={[0, 0, 5]}
      />
    </mesh>
  );
}

export default App;
