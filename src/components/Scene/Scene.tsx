import * as React from 'react'

import './style.scss'
import { OpaqueInterpolation } from 'react-spring'
import { a } from 'react-spring/three'
import { useThree } from 'react-three-fiber'
import { Text } from '@components'

interface ISceneProps {
    top: OpaqueInterpolation<string | number>
    mouse: OpaqueInterpolation<any>
}

export const Scene: React.FC<ISceneProps> = ({ top, mouse }) => {
    const { size } = useThree()
    const scrollMax = size.height * 4.5
    return (
        <>
            <a.spotLight
                intensity={1.2}
                color="white"
                position={mouse.interpolate((x, y) => [x / 100, -y / 100, 6.5])}
            />
            <Text
                position={top.interpolate(top => [
                    0,
                    -20 + ((Number(top) * 10) / scrollMax) * 2,
                    0,
                ])}
                color="black"
                fontSize={150}
            >
                Ipsum
            </Text>
        </>
    )
}
