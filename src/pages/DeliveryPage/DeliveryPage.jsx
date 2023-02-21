import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import { MAIN_ROUTE } from '../../utils/consts'

import './DeliveryPage.scss'

const DeliveryPage = () => {
    return (
        <section className="delivery">
            <div className="container">
                <div className="delivery__inner">
                    <BreadCrumb items={[
                        {
                            label: 'Главная',
                            path: MAIN_ROUTE
                        },
                        {
                            label: 'Доставка',
                            path: null
                        },
                    ]} />
                    <div className="delivery__switch">
                        <Link to="#" className="delivery__switch-del">Доставка</Link>
                        <Link to="#" className="delivery__switch-pay">Оплата</Link>
                    </div>
                    <div className="delivery__info">
                        <h6 className="delivery__title">Как и когда можно получить заказ?</h6>
                        <div className="delivery__content">
                            <h6 className=" delivery__subtitle delivery__subtitle-del">Способ 1. Получение заказа в магазине. Бесплатно!</h6>
                            <p className="delivery__text">Если вы решили приобрести что-то небольшое , вы можете забрать покупку в нашем магазине. </p>
                        </div>
                        <div className="delivery__content">
                            <h6 className="delivery__subtitle delivery__subtitle-pay">Способ 2. Стандартная доставка</h6>
                            <p className="delivery__text">При заказе свыше 1000 рублей - доставка по городу бесплатно. </p>
                        </div>
                    </div>
                    <div className="payment__info">
                        <h6 className="payment__title">Способы оплаты</h6>
                        <div className="payment__content">
                            <h6 className=" payment__subtitle">Способ 1. Банковской картой</h6>
                            <p className="delivery__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic! </p>
                        </div>
                        <div className="payment__content">
                            <h6 className="payment__subtitle">Способ 2. Наличными</h6>
                            <p className="delivery__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptatibus. </p>
                        </div>
                        <div className="payment__content">
                            <h6 className="payment__subtitle">Способ 3. Онлайн</h6>
                            <p className="payment__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptatibus. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeliveryPage
