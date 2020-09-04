import React, { useRef, useState, useMemo} from 'react';
import { Canvas, useFrame } from 'react-three-fiber'
import TeapotGeometry from './Teapot.js'

function Teapot(props) {

  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  const rot_inc = 0.02
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += rot_inc))

  const geometry = useMemo(() => {

      return new TeapotGeometry()
  }, [])

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      geometry = {geometry}
      >
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const SceneData = () => {
    return (
      <Canvas>
        <ambientLight />
        <pointLight position={[10, -10, -1]} />
        <Teapot position={[0, 0, 0]} />
      </Canvas>
    )
}

export default SceneData
