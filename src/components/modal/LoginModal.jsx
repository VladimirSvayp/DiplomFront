import { Stack } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../..'
import { login } from '../../axios/userAPI'
import { MAIN_ROUTE } from '../../utils/consts'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './LoginModal.scss'

const LoginModal = observer(({ active, setActive, setRegActive }) => {
    const { user } = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visiblePassword, setVisiblePassword] = useState(false)
    const navigate = useNavigate()

    const onHandleButton = async () => {
        try {
            let data
            data = await login(email, password)
            console.log(data)
            user.setUser(data)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
            setActive(false)
        } catch (e) {
            alert(e)
        }

    }
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <h2>Войдите или зарегистрируйтесь</h2>

                <button className='navigate__btn active'>
                    Вход
                </button>

                <button
                    className='navigate__btn'
                    onClick={() => {
                        setActive(false)
                        setRegActive(true)
                    }}>Регистрация</button>
                <hr />
                <form
                    onSubmit={e => e.preventDefault()}
                    className='registration__form' style={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>
                    <Stack>
                        <label htmlFor="email-login-input">E-mail</label>
                        <input id='email-login-input' type="email" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
                        <div style={{display: 'flex', flexDirection: 'column', position: 'relative'}}>
                            <label htmlFor="password-login-input">Пароль:</label>
                            <input 
                                style={{
                                    padding: '13px 50px 13px 15px'
                                }}
                                id='password-login-input' 
                                type={!visiblePassword ? "password" : "text"}
                                placeholder='пароль' 
                                value={password} 
                                onChange={e => setPassword(e.target.value)}                                
                                />
                            <button
                                style={{position: 'absolute', border: 'none', background: 'none', right: '20px', top: '37px', cursor: 'pointer'}}
                                onClick={() => setVisiblePassword(!visiblePassword)}
                            >
                                {!visiblePassword ? <VisibilityIcon /> : <VisibilityOffIcon />}                                
                                </button>
                        </div>
                    </Stack>

                    <button className='handle__btn' onClick={onHandleButton}>Войти</button>
                </form>
            </div>
        </div>
    )
})

export default LoginModal