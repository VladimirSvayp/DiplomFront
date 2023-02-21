import React from 'react'
import { Link } from 'react-router-dom'

import './BlogPage.scss'

const BlogPage = () => {
    return (
        <div className="blog">
            <div className="container">
                <div className="blog__inner">
                    {/* <section>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Главная</a></li>
                            <li className="breadcrumb-item active">Блог</li>
                        </ol>
                    </section> */}
                    <Link to="./postpage.html" className="blog__solocontent blog__post-1">
                        <div className="blog__content">
                            <h6>Как выбрать калькулятор</h6>
                            <p>В этой статье мы расскажем о видах калькуляторов и какую модель калькулятора
                                подобрать для работы.</p>
                        </div>
                    </Link>
                    <div className="blog__duocontent">
                        <Link to="#" className="blog__item blog__post-2">
                            <div className="blog__content">
                                <h6>Станок для подшивки бумаг</h6>
                                <p>Представляем Вашему вниманию брошюровочный станок - YUNGER M168 A PRO. Один из
                                    самых
                                    популярных в своей категории.</p>
                            </div>
                        </Link>
                        <Link to="#" className="blog__item blog__post-3">
                            <div className="blog__content">
                                <h6>Архивация документов</h6>
                                <p>На сегодняшний день трудно представить нашу жизнь без различных документов и
                                    ценных
                                    бумаг. </p>
                            </div>
                        </Link>
                    </div>
                    <Link to="#" className="blog__solocontent blog__post-4">
                        <div className="blog__content">
                            <h6>Ручки на ваш выбор</h6>
                            <p>Несмотря на стремительное развитие современных технологий и перехода письма от
                                ручного в электронный, старая и добрая письменная ручка всё так же остаётся
                                неотъемлемой частью нашей жизни.</p>
                        </div>
                    </Link>
                    <div className="blog__duocontent">
                        <Link to="#" className="blog__item blog__post-5">
                            <div className="blog__content">
                                <h6>Кресла</h6>
                                <p>Акции с 15-ого по 20-ое апреля</p>
                            </div>
                        </Link>
                        <Link to="#" className="blog__item blog__post-6">
                            <div className="blog__content">
                                <h6>Набор школьника к 1 сентября</h6>
                                <p>До первого сентября осталось уже не так много времени, а это значит, что перед
                                    родителями
                                    стоит важный вопрос - что купить ребёнку в школу? </p>
                            </div>
                        </Link>
                    </div>
                    <Link to="#" className="blog__btn">Показать ещё</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogPage
