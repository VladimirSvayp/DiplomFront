import React from 'react'

import './Header.scss'

import HeaderTop from './HeaderTop'
import HeaderNav from './HeaderNav'
import { observer } from 'mobx-react-lite'

const Header = observer(() => {
    return (
        <header className="header">
            <HeaderTop />
            <HeaderNav />
        </header>
    )
})

export default Header
