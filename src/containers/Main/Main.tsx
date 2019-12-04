import * as React from 'react'

import './style.scss'

interface IMainProps {}

export const Main: React.FC<IMainProps> = () => {
    const renderLinks = () => {
        return [
            {
                name: 'github',
                url: 'https://www.github.com/samosaboy'
            },
            {
                name: 'dribbble',
                url: 'https://dribbble.com/nvarsh'
            }
        ].map(link => (
            <a key={link.name} href={link.url} title={link.name}>{link.name}</a>
        ))
    }

    return (
        <div className={'container'}>
            <h1>currently this portfolio <br/>is being built</h1>
            <span
                className={'title'}>i am EXTRA lazy this time of year <br/>check some of the links below instead</span>

           <span className={'description'}>
                {renderLinks()}
           </span>
        </div>
    )
}
