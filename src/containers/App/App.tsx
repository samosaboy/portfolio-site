import * as React from 'react'

import './style.scss'
import { useSpring } from 'react-spring/three'
import { useCallback } from 'react'
import { Canvas } from 'react-three-fiber'
import { Main } from '@containers'

interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
    const [{ top, mouse }, set] = useSpring(() => ({ top: 0, mouse: [0, 0] }))
    const onMouseMove = useCallback(
        ({ clientX: x, clientY: y }) =>
            set({ mouse: [x - window.innerWidth / 2, y - window.innerHeight / 2] }),
        []
    )
    const onScroll = useCallback(e => {
        set({ top: e.target.scrollTop })
    }, [])

    return (
        <>
            <Canvas
                style={{
                    position: 'absolute',
                    top: 0,
                }}
            >
                <Main top={top} mouse={mouse} />
            </Canvas>
            <div className="scroll-container" onScroll={onScroll} onMouseMove={onMouseMove}>
                <div style={{ height: '525vh' }} />
            </div>
        </>
    )
}
