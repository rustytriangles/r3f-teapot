import React, { useRef, useState} from 'react';
import { Canvas, useFrame } from 'react-three-fiber'

function Box(props) {

  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  const rot_inc = 0.05
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += rot_inc))

  const xsize = 1
  const ysize = 1
  const zsize = 2

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[xsize, ysize, zsize]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-2.1, 0, 0]} />
      <Box position={[2.1, 0, 0]} />
    </Canvas>
  )
}

export default App;
