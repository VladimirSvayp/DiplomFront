import React from 'react'

import './MainInfo.scss'

const MainInfo = () => {
    return (
        <section className="maininfo">
            <div className="container">
                <div className="maininfo__inner">
                    <div className="maininfo__left">
                        <h2 className="maininfo__title">О компании</h2>
                        <p className="maininfo__text">Стартовав в 2007 году, интернет-магазин Графика успешно занял
                            лидирующую позицию на рынке и продолжает развиваться, расширяя ассортимент и географию
                            присутствия. </p>
                        <p className="maininfo__text">Наш интернет-магазин предлагает оригинальную новую продукцию
                            различных мировых брендов. Наши консультанты помогут Вам сориентироваться во всем
                            многообразии современных товаров.</p>
                        <p className="maininfo__text">Мы постоянно обновляем свой ассортимент с учетом последних новинок
                            и предлагаем Вам только оригинальную продукцию ведущих производителей!</p>
                        <p className="maininfo__text">Сотрудничая с нами, вы можете быть уверены в качестве продукции и
                            оперативности ее доставки. Более того, у нас — умеренные цены и гарантии качества.</p>
                        <p className="maininfo__text">Обратившись к нам Вы сделали правильный выбор, и мы гарантируем
                            вам только удачные покупки и качественные услуги!</p>
                    </div>
                    <div className="maininfo__right">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainInfo
