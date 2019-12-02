import * as React from 'react'

import './style.scss'
import { OpaqueInterpolation } from 'react-spring'
import { a } from 'react-spring/three'
import { useThree } from 'react-three-fiber'
import { Text, Background } from '@components'

interface ISceneProps {
    top: any
    mouse: OpaqueInterpolation<any>
}

export const Scene: React.FC<ISceneProps> = ({ top, mouse }) => {
    const { size } = useThree()
    const scrollMax = size.height * 4.5
    return (
        <>
            <Text>lorem</Text>
        </>
    )
}
