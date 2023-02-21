import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './ProfilePage.scss'

import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import { MAIN_ROUTE } from '../../utils/consts'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'
import ChangeProfileModal from '../../components/modal/ChangeProfileModal'

const ProfilePage = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const [activeModal, setActiveModal] = useState(false)
    const logOut = () => {
        localStorage.removeItem('token')
        user.setUser({})
        user.setIsAuth(false)
        navigate(MAIN_ROUTE)
    }
    return (
        <section className="profile">
            <div className="container">
                <BreadCrumb items={[
                    {
                        label: 'Главная',
                        path: MAIN_ROUTE
                    },
                    {
                        label: 'Профиль',
                        path: null
                    }
                ]} />
                <div className="profile__inner">
                    <div className="profile__sidebar">
                        <Link className="profile__sidebar-item profile__sidebar-active" to="#">Профиль</Link>
                        <Link className="profile__sidebar-item" to="/orders">Заказы</Link>
                        <Link className="profile__sidebar-item" to="#">Подписка</Link>
                    </div>
                    <div className="profile__main">
                        <div className="profile__info">
                            <div href="#1" className="profile__avatar">
                                <img
                                    style={{ borderRadius: '50%' }}
                                    src={process.env.REACT_APP_API_URL + user.user.image}
                                    alt="avatar" />
                            </div>
                            <div className="profile__name">
                                <p>{`${user.user.first_name} ${user.user.surname}`}</p>
                            </div>
                            <div className="profile__phone">
                                <p>Телефон: <span>{user.user.phone ? user.user.phone : 'не указан'}</span></p>
                            </div>
                            <div className="profile__email">
                                <p>E-mail: <span>{`${user.user.email}`}</span></p>
                            </div>
                        </div>
                        <button
                            onClick={() => setActiveModal(true)}
                            style={{background: 'none', padding: '9px 20px', borderRadius: '9px', textTransform: 'uppercase', fontWeight: 'bold', marginRight: '20px', cursor: 'pointer'}}
                        >
                            Изменить данные
                        </button>
                        <button
                            style={{background: 'none'}}
                            onClick={logOut}
                            className="profile__exit"
                        >
                            Выйти
                        </button>
                    </div>
                </div>
            </div>
            <ChangeProfileModal active={activeModal} setActive={setActiveModal} title='phone_number' />
        </section>
    )
})

export default ProfilePage
