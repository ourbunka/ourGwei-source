/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('https://storageapi.fleek.co/f3e11ea2-1567-46e4-a8eb-83ae244763e2-bucket/eth.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.shadowmap.geometry} material={materials.shadowmap} position={[0, -2.3, 0]} scale={65.88} />
    </group>
  )
}

useGLTF.preload('https://storageapi.fleek.co/f3e11ea2-1567-46e4-a8eb-83ae244763e2-bucket/eth.glb')
