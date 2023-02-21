import React from 'react'
import { Link } from 'react-router-dom'
import { POST_ROUTE } from '../../utils/consts'

import './MainBlog.scss'

const MainBlog = () => {
    return (
        <section className="mainblog">
            <div className="container">
                <div className="mainblog__inner">
                    <div className="mainblog__title">Наш блог</div>
                    <div className="mainblog__cards">
                        <div className="mainblog__card">
                            <div className="mainblog__content">
                                <p className="mainblog__subtitle">Как выбрать калькулятор</p>
                                <p className="mainblog__text">В этой статье мы расскажем о видах калькуляторов и какую
                                    модель калькулятора подобрать для работы.</p>
                                <Link to={POST_ROUTE} className="mainblog__link">Перейти</Link>
                            </div>
                        </div>
                        <div className="mainblog__card">
                            <div className="mainblog__content">
                                <p className="mainblog__subtitle">Станок для подшивки бумаг</p>
                                <p className="mainblog__text">Представляем Вашему вниманию брошюровочный станок - YUNGER
                                    M168 A PRO. Один из самых популярных в своей категории.</p>
                                <Link to="/post/2" className="mainblog__link">Перейти</Link>
                            </div>
                        </div>
                        <div className="mainblog__card">
                            <div className="mainblog__content">
                                <p className="mainblog__subtitle">Архивация документов</p>
                                <p className="mainblog__text">На сегодняшний день трудно представить нашу жизнь без
                                    различных документов и ценных бумаг. Если в повседневных делах с новыми
                                    бумагами, требующими сохранности, человек сталкивается не так часто – то в
                                    офисах и бухгалтериях горы бумаг растут ежеминутно, и все они нуждаются не
                                    только в надёжной защите, но и в порядке. Архивирование документов является
                                    необходимым процессом для каждого офиса. Все бумаги и документы должны быть
                                    грамотно систематизированы и упорядочены. И конечно, тут никак не обойтись без
                                    канцелярских папок. Существует множество различных папок для бумаг, а какие же
                                    они бывают, сейчас узнаем!</p>
                                <Link to="/post/3" className="mainblog__link">Перейти</Link>
                            </div>
                        </div>
                    </div>
                    <Link to="/blog" className="mainblog__btn">Показать еще</Link>
                </div>
            </div>
        </section>
    )
}

export default MainBlog