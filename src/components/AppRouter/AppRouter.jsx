import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Context } from '../..'
import { adminRoutes, authRoutes, publicRoutes } from '../../routes'
import { MAIN_ROUTE } from '../../utils/consts'

const AppRouter = observer(() => {

    const { user } = useContext(Context)

    return (
        <main className="main">
            <Routes>
                {user.user.role === 'ADMIN' && adminRoutes.map(({ path, Element }) =>
                    <Route key={path} path={path} element={<Element />} />
                )}
                {user.isAuth && authRoutes.map(({ path, Element }) =>
                    <Route key={path} path={path} element={<Element />} />
                )}
                {publicRoutes.map(({ path, Element }) =>
                    <Route key={path} path={path} element={<Element />} />
                )}
                <Route path='*' element={<Navigate replace to={MAIN_ROUTE} />} />
            </Routes>
        </main>
    )
})

export default AppRouter