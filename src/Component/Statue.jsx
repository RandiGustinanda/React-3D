import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Statue(props) {
  const { nodes, materials } = useGLTF('/React-3D/statue-transformed.glb')
  
  const groupRef = useRef()

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.5 // mengatur rotasi pada sumbu y
  })

  return (
    <group ref={groupRef} {...props} dispose={null} scale={[0.6, 0.6, 0.6]}>
      <group position={[0.4, 1.09, 1.09]} rotation={[3.14, 0, -3.14]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials['default']}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials['default']}
          castShadow
          receiveShadow
        />
      </group>
    </group>
  )
}

useGLTF.preload('/React-3D/statue-transformed.glb')