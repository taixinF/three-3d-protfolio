import React from 'react'
import {useGLTF} from "@react-three/drei";

const Computers = () => {
    const computer = useGLTF('./desktop_pc/scene.gltf')
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="block"/>
        </mesh>
    )
}

export default Computers