import { Stack } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../..'
import { registration } from '../../axios/userAPI'
import { MAIN_ROUTE } from '../../utils/consts'
import './RegistrationModal.scss'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const RegistrationModal = observer(({ active, setActive, setLogActive }) => {
    const { user } = useContext(Context)
    const [firstName, setFirstName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visiblePassword, setVisiblePassword] = useState(false)
    const navigate = useNavigate()

    const onHandleButton = async () => {
        try {
            let data
            data = await registration(firstName, surname, email, password)
            console.log(data)
            user.setUser(data)
            user.setIsAuth(true)
            setActive(false)
            navigate(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <h2 style={{ textAlign: 'center', fontSize: '22px', lineHeight: '26px' }}>Войдите или зарегистрируйтесь</h2>
                <button
                    className='navigate__btn'
                    onClick={() => {
                        setActive(false)
                        setLogActive(true)
                    }}
                >
                    Вход
                </button>

                <button
                    className='navigate__btn active'>Регистрация</button>
                <hr />
                <form
                    onSubmit={e => e.preventDefault()}
                    className='registration__form' style={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>
                    <Stack>
                        <label htmlFor="name-input">Имя:</label>
                        <input id='name-input' type="text" placeholder='Имя' value={firstName} onChange={e => setFirstName(e.target.value)} />
                        <label htmlFor="surname-input">Фамилия:</label>
                        <input id='surname-input' type="text" placeholder='Фамилия' value={surname} onChange={e => setSurname(e.target.value)} />
                        <label htmlFor="email-input">E-mail:</label>
                        <input id='email-input' type="email" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
                        <div style={{display: 'flex', flexDirection: 'column', position: 'relative'}}>
                            <label htmlFor="password-input">Пароль:</label>
                            <input 
                                style={{
                                    padding: '13px 50px 13px 15px'
                                }}
                                id='password-input' 
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
                    <button className='handle__btn' onClick={onHandleButton}>Зарегистрироваться</button>
                </form>
            </div>
        </div>
    )
})

export default RegistrationModal