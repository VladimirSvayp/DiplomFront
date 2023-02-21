import React from 'react'

import './CatalogPage.scss'

const CatalogPage = () => {
    return (
        <section className="precatalog">
            <div className="container">
                {/* <section>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Главная</a></li>
                        <li className="breadcrumb-item"><a href="#">Личный кабинет</a></li>
                        <li className="breadcrumb-item active">Каталог</li>
                    </ol>
                </section> */}
                <div className="precatalog__inner">
                    <h2 className="precatalog__title">Каталог товаров</h2>
                    <div className="precatalog__cards">
                        <div className="precatalog__card">
                            <div className="precatalog__content">
                                <h5 className="precatalog__subtitle">Бумага и бумажная продукция</h5>
                                <p className="precatalog__amount">(222)</p>
                            </div>
                        </div>
                        <div className="precatalog__card">
                            <div className="precatalog__content">
                                <h5 className="precatalog__subtitle">Офисная мебель и демонстрационное оборудование</h5>
                                <p className="precatalog__amount">(30)</p>
                            </div>
                        </div>
                        <div className="precatalog__card">
                            <div className="precatalog__content">
                                <h5 className="precatalog__subtitle">Офисная техника и расходные материалы</h5>
                                <p className="precatalog__amount">(89)</p>
                            </div>
                        </div>
                        <div className="precatalog__card">
                            <div className="precatalog__content">
                                <h5 className="precatalog__subtitle">Офисные принадлежности</h5>
                                <p className="precatalog__amount">(316)</p>
                            </div>
                        </div>
                        <div className="precatalog__card">
                            <div className="precatalog__content">
                                <h5 className="precatalog__subtitle">Папки и системы архивации документов</h5>
                                <p className="precatalog__amount">(123)</p>
                            </div>
                        </div>
                        <div className="precatalog__card">
                            <div className="precatalog__content">
                                <h5 className="precatalog__subtitle">Письменные и чертежные принадлежности</h5>
                                <p className="precatalog__amount">(391)</p>
                            </div>
                        </div>
                        <div className="precatalog__card">
                            <div className="precatalog__content">
                                <h5 className="precatalog__subtitle">Товары для школы и детского творчества</h5>
                                <p className="precatalog__amount">(57)</p>
                            </div>
                        </div>
                        <div className="precatalog__card">
                            <div className="precatalog__content">
                                <h5 className="precatalog__subtitle">Хозяйственные товары</h5>
                                <p className="precatalog__amount">(88)</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CatalogPage
