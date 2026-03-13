import {Suspense,useEffect,useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, OrbitControls,Preload,useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader";

const Avatar = () => {
    const character = useGLTF('./avatar/model.glb')
    return (
      <mesh>
        <hemisphereLight intensity={1.8} groundColor="black"/>
        <pointLight intensity={1}/>
        <spotLight
          position={[0, -10, 0.05]}
          angle={1}
          penumbra={1}
          intensity={500}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive object={character.scene}
        scale={2.5}
        position={[0,-1.5,-1.5]}
        rotation={[0,0,0]}/>
      </mesh>
    )

}

const AvatarCanvas = () => {
return (
    <Canvas
    frameloop='demand' 
    shadows 
    camera={{ position : [1,5,1],fov:80}}
    gl={{preserveDrawingBuffer : true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        enableZoom={false}
        // maxPolarAngle={Math.PI / 2}
        // minPolarAngle={Math.PI / 2}
        />
        <Avatar/>
      </Suspense>
      <Preload all />
    </Canvas>
)

}

export default AvatarCanvas