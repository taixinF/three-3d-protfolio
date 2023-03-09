import {Suspense, useEffect, useState} from 'react'
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

const Computers = () => {
    const computer = useGLTF('./public/desktop_pc/scene.gltf')

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black"/>
            <primitive object={computer.scene}></primitive>
        </mesh>
    )
}


const ComputersCanvas = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{position: [20, 3, 5], fov: 25}}
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense
                fallback={<CanvasLoader/>}
            >
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers></Computers>
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}

export default Computers
