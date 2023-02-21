import React from 'react'

import './MainContacts.scss'

const MainContacts = () => {
    return (
        <section className="maincontacts">
                <div className="container">
                    <div className="maincontacts__inner">
                        <div className="maincontacts__left">
                            <div className="maincontacts__contacts">
                                <h2 className="maincontacts__title">Контакты</h2>
                                <p className="maincontacts__phone">
                                    <span>Телефон:</span> +7 (8112) 56 85 58
                                </p>
                                <p className="maincontacts__email">
                                    <span>E-mail:</span> officegraphic@rambler.ru
                                </p>
                                <p className="maincontacts__address">
                                    <span>Адрес:</span> г.Псков ул.Конная, д.35
                                </p>
                                <p className="maincontacts__worktime">
                                    <span>Режим работы:</span> Пн - Чт с 9:00 до 17:30 | Пт. с 9:00 до 16:30
                                </p>
                            </div>
                            <div className="maincontacts__form">
                                <h2 className="maincontacts__form-title">Остались вопросы?</h2>
                                <form action="">
                                    <p>Ваше имя</p>
                                    <input type="text" className="maincontacts-name" placeholder="Имя" />
                                    <p>Ваш телефон</p>
                                    <input type="tel" className="maincontacts-phone" placeholder="+7 ___ _______" />
                                    <p>Ваш комментарий</p>
                                    <textarea className="maincontacts-text" name="" id="" cols="30" rows="10"
                                        placeholder="Комментарий"></textarea>
                                    <button>Заказать звонок</button>
                                </form>
                            </div>


                        </div>
                        <div className="maincontacts__right">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.8561012914947!2d28.31332869775494!3d57.81785104373854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c01ece2b36932f%3A0xde70def532da6c82!2z0JPRgNCw0YTQuNC60LA!5e0!3m2!1sru!2sru!4v1653922181075!5m2!1sru!2sru"
                                width="540" height="620" style={{border:0}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default MainContacts
