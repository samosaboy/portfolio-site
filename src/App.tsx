import React, { useCallback } from 'react'
import './App.css'

import { Canvas } from 'react-three-fiber'
import { Scene } from '@components'
import { useSpring } from 'react-spring'

function App() {
    const [{ top, mouse }, set] = useSpring(() => ({ top: 0, mouse: [0, 0] }))
    const onMouseMove = useCallback(
        ({ clientX: x, clientY: y }) =>
            set({ mouse: [x - window.innerWidth / 2, y - window.innerHeight / 2] }),
        []
    )
    const onScroll = useCallback(e => set({ top: e.target.scrollTop }), [])

    return (
        <>
            <Canvas>
                <Scene top={top} mouse={mouse} />
            </Canvas>
            <div className="scroll-container" onScroll={onScroll} onMouseMove={onMouseMove}>
                <div style={{ height: '525vh' }} />
            </div>
        </>
    )
}

export default App;
