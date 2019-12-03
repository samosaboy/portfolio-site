import * as React from 'react'

import './style.scss'
import { Scene, Text } from '@components'
import { OpaqueInterpolation } from 'react-spring'

interface IMainProps {
    top: OpaqueInterpolation<any>
    mouse: OpaqueInterpolation<any>
}

export const Main: React.FC<IMainProps> = ({ top, mouse }) => {
    return (
        <Scene>
            <Text
                opacity={top.interpolate([0, 200], [1, 0])}
                position={top.interpolate(top => [0, -1 + top / 200, 0])}
            >
                lorem!
            </Text>
        </Scene>
    )
}
