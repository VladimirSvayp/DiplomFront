import React from 'react'

import './PostPage.scss'

import IMAGE from '../../assets/calculator.jpg'
import { Link } from 'react-router-dom'

const PostPage = () => {
    return (
        <div className="post">
            <div className="container">
                <div className="post__inner">
                    {/* <section>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Главная</a></li>
                            <li className="breadcrumb-item"><a href="#">Блог</a></li>
                            <li className="breadcrumb-item active">Как выбрать калькулятор</li>
                        </ol>
                    </section> */}

                    <div className="post__description">
                        <h2 className="post__title">Как выбрать калькулятор</h2>
                        <p className="post__date">20 января 2021</p>
                        <img src={IMAGE} alt="post" className="post__photo" />
                            <div className="post__subtitle">На сегодняшний день мы всё чаще прибегаем за помощью к различным
                                техникам и устройствам, и одним из таких помощников служит калькулятор. Сейчас им
                                пользуются практически все: школьники и студенты, инженеры и учёные, работники офисов и
                                производственных компаний. На полках канцтоваров можно встретить большое количество
                                калькуляторов, которые отличаются функциями и стоимостью, как от нескольких сотен, так и
                                от тысячи рублей. Как разобраться в таком широком ассортименте, избежать серьёзных трат
                                и выбрать подходящую для себя модель калькулятора? Сейчас разберёмся.</div>
                    </div>

                    <div className="post__content">

                    </div>

                    <div className="post__more">
                        <h3 className="post__more-title">
                            Узнайте больше
                        </h3>
                        <div className="post__items">
                            <Link to="#" className="post__more-item">
                                <div className="post__more-content">
                                    <h6>Станок для подшивки бумаг</h6>
                                    <p>Представляем Вашему вниманию брошюровочный станок - YUNGER M168 A PRO. Один
                                        из
                                        самых
                                        популярных в своей категории.</p>
                                </div>
                            </Link>
                            <Link to="#" className="post__more-item">
                                <div className="post__more-content">
                                    <h6>Набор для школьник к 1 сентября</h6>
                                    <p>До первого сентября осталось уже не так много времени, а это значит, что
                                        перед
                                        родителями стоит важный вопрос - что купить ребёнку в школу? </p>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PostPage
