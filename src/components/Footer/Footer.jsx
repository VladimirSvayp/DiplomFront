import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'

import LOGO from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__logo">
                        <img src={LOGO} alt="logo" />
                            <address>
                                г.Псков ул.Конная, д.35
                            </address>
                    </div>
                    <div className="footer__catalog">
                        <h5>Каталог</h5>
                        <ul>
                            <li>
                                <Link to="#">Бумага и бумажная продукция</Link>
                            </li>
                            <li>
                                <Link to="#">Офисные принадлежности</Link>
                            </li>
                            <li>
                                <Link to="#">Офисная техника и расходные материалы</Link>
                            </li>
                            <li>
                                <Link to="#">Товары для школы и детского творчества</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__nav">
                        <ul>
                            <li>
                                <Link to="/promotion">Акции</Link>
                            </li>
                            <li>
                                <Link to="#">Покупки</Link>
                            </li>
                            <li>
                                <Link to="/company">Компания</Link>
                            </li>
                            <li>
                                <Link to="/contacts">Контакты</Link>
                            </li>
                            <li>
                                <Link to="/support">Помощь</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__delivery">
                        <ul>
                            <li>
                                <Link to="/delivery">Доставка</Link>
                            </li>
                            <li>
                                <Link to="/delivery">Условия оплаты</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__info">
                        <a href="tel:+78112568558" className="footer__btn">Заказать звонок</a>
                        <a href="tel:+78112568558" className="footer__phone">+7 (8112) 56 85 58</a>
                        <a href="mailto:officegraphic@rambler.ru" className="footer__email">officegraphic@rambler.ru</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
