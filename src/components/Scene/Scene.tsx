import * as React from 'react'

import './style.scss'

interface ISceneProps {
    children: any
}

export const Scene: React.FC<ISceneProps> = ({ children }) => {
    return children
}
