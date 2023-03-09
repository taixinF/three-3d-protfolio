import React, {Suspense, useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='black'/>
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1}/>
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // 为屏幕大小的变化添加一个监听器
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        //设置“isMobile”状态变量的初始值
        setIsMobile(mediaQuery.matches);

        // 定义一个回调函数来处理媒体查询的更改
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        // 将回调函数添加为媒体查询更改的监听器
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // 卸载组件时删除侦听器
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{position: [20, 3, 5], fov: 25}}
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile}/>
            </Suspense>

            <Preload all/>
        </Canvas>
    );
};

export default ComputersCanvas;
