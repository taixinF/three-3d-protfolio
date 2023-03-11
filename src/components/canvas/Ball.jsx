import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25}/>
            <directionalLight position={[0, 0, 0.05]}/>
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]}/>
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    flatShading
                />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({icon}) => {
    return (
        <Canvas
            frameloop='demand'
            dpr={[1, 2]}
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls enableZoom={false}/>
                <Ball imgUrl={icon}/>
            </Suspense>

            {/*//使用 useLoader 钩子，你可以使用 three.js 的内置加载器来加载模型、纹理、字体等资源，并在组件加载之前预加载它们。例如，要预加载一个模型文件，可以使用以下代码：*/}
            {/*例如 Preload 组件，它可以用于同时预加载多个资源。*/}
            <Preload all/>
        </Canvas>
    );
};

export default BallCanvas;
