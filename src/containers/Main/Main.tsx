import * as React from 'react'

import './style.scss'
import { Background, Scene, Text } from '@components'
import { OpaqueInterpolation } from 'react-spring'
import { a } from 'react-spring/three'
import { useThree } from 'react-three-fiber'

interface IMainProps {
    top: OpaqueInterpolation<any>
    mouse: OpaqueInterpolation<any>
}

export const Main: React.FC<IMainProps> = ({ top, mouse }) => {
    const { size } = useThree()
    const scrollMax = size.height * 1.5

    return (
        <>
            <Background color={top.interpolate([0, scrollMax], ['#0002FA', '#2E2746'])} />
            <Scene position={[-2.5, 0, 0]}>
                <Text
                    textAlign={'left'}
                    fontSize={48}
                    opacity={top.interpolate([0, 150], [1, 0])}
                    position={top.interpolate(top => [0, -1 + top / 100, 0])}
                >
                    i'm a fullstack dev with an art degree
                </Text>
                <Text
                    textAlign={'left'}
                    color={'#5dd2fa'}
                    fontSize={48}
                    opacity={top.interpolate([0, 150], [1, 1])}
                    position={top
                        .interpolate({ range: [0, -5, 0], output: [0, -1, 0] })
                        .interpolate(top => [0, -1.25 + top / 300, 0])}
                >
                    that means i'm gunna make beautiful stuff
                </Text>
            </Scene>
            <Scene position={[0, -1, -1]}>
                <a.spotLight
                    intensity={0.5}
                    color="white"
                    position={[0, 0, 100]}
                />
                <mesh visible position={[0, 0, 0]}>
                    <circleBufferGeometry attach={'geometry'} args={[1, 48]} />
                    <meshStandardMaterial attach={'material'} color={'#5dd2fa'} />
                </mesh>
            </Scene>
        </>
    )
}
