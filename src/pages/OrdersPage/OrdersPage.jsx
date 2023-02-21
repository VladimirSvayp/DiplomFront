import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import { MAIN_ROUTE, PROFILE_ROUTE } from '../../utils/consts'

import './OrdersPage.scss'

const OrdersPage = () => {
    return (
        <div className="orders">
            <div className="container">
                <BreadCrumb items={[
                    {
                        label: 'Главная',
                        path: MAIN_ROUTE
                    },
                    {
                        label: 'Профиль',
                        path: PROFILE_ROUTE
                    },
                    {
                        label: 'Заказы',
                        path: null
                    },
                ]} />
                <div className="orders__inner">
                    <div className="profile__sidebar">
                        <Link className="profile__sidebar-item" to="/profile">Профиль</Link>
                        <Link className="profile__sidebar-item profile__sidebar-active" to="#">Заказы</Link>
                        <Link className="profile__sidebar-item" to="#">Подписка</Link>
                    </div>
                    <div className="orders__main">
                        <h2 className="orders__title">Заказы</h2>
                        <div className="orders__item">
                            <Link to="#" className="orders__number">№ заказа: 8427369</Link>
                            <div className="orders__date">10.10.2021</div>
                            <div className="orders__price">7826 ₽</div>
                            <div className="orders__status">оплачен</div>
                            <Link to="#" className="orders__btn">Подробнее</Link>
                        </div>
                        <div className="orders__item">
                            <Link to="#" className="orders__number">№ заказа: 8427369</Link>
                            <div className="orders__date">10.10.2021</div>
                            <div className="orders__price">7826 ₽</div>
                            <div className="orders__status">доставлен</div>
                            <Link to="#" className="orders__btn">Подробнее</Link>
                        </div>
                        <div className="orders__item">
                            <Link to="#" className="orders__number">№ заказа: 8427369</Link>
                            <div className="orders__date">10.10.2021</div>
                            <div className="orders__price">7826 ₽</div>
                            <div className="orders__status">завершен</div>
                            <Link to="#" className="orders__btn">Подробнее</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersPage