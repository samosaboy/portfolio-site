import React, { useMemo } from 'react'
import { useThree } from 'react-three-fiber'
import { a } from 'react-spring/three'

import './style.scss'

interface ITextProps {
    children: any
    position: any
    opacity?: number
    color: string
    fontSize: number
}

export const Text: React.FC<ITextProps> = ({
    children,
    position,
    opacity,
    color = 'white',
    fontSize = 410,
}) => {
    const {
        size: { width, height },
        viewport: { width: viewportWidth, height: viewportHeight },
    } = useThree()
    const scale = viewportWidth > viewportHeight ? viewportWidth : viewportHeight
    const canvas = useMemo(() => {
        const canvas = document.createElement('canvas')
        canvas.width = canvas.height = 2048
        const context = canvas.getContext('2d')
        context.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.fillStyle = color
        context.fillText(children, 1024, 1024 - 410 / 2)
        return canvas
    }, [children, width, height])
    return (
        <a.sprite scale={[scale, scale, 1]} position={position}>
            <a.spriteMaterial attach="material" transparent opacity={opacity}>
                <canvasTexture
                    attach="map"
                    image={canvas}
                    premultiplyAlpha
                    // onUpdate={s => (s.needsUpdate = true) as any}
                />
            </a.spriteMaterial>
        </a.sprite>
    )
}

