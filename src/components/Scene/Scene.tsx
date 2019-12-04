import * as React from 'react'

import './style.scss'
import * as THREE from 'three'
import { ReactThreeFiber } from 'react-three-fiber'

interface ISceneProps {
    children: any
}

export const Scene: React.FC<ISceneProps &
    ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>> = ({ children, ...props }) => {
    return <group {...props}>{children}</group>
}
