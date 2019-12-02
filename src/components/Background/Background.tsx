import * as React from 'react'

import './style.scss'
import { useThree } from 'react-three-fiber'
import { a } from 'react-spring/three'

interface IBackgroundProps {
    color: string
}

export const Background: React.FC<IBackgroundProps> = ({ color }) => {
    const { viewport } = useThree()
    return (
        <mesh scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry attach="geometry" args={[1, 1]} />
            <a.meshBasicMaterial attach="material" color={color} depthTest={false} />
        </mesh>
    )
}
