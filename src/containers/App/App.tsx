import * as React from 'react'

import './style.scss'
import { useSpring } from 'react-spring'
import { useCallback } from 'react'
import { Canvas } from 'react-three-fiber'
import { Scene } from '@components'

interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
    const [{ top, mouse }, set] = useSpring(() => ({ top: 0, mouse: [0, 0] }))
    const onMouseMove = useCallback(
        ({ clientX: x, clientY: y }) =>
            set({ mouse: [x - window.innerWidth / 2, y - window.innerHeight / 2] }),
        []
    )
    const onScroll = useCallback(e => set({ top: e.target.scrollTop }), [])

    return (
        <>
            <Canvas
                style={{
                    position: 'absolute',
                    top: 0,
                }}
            >
                <Scene top={top} mouse={mouse} />
            </Canvas>
        </>
    )
}
