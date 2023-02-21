import React from 'react'

import './MiniCatalog.scss'

import CATALOG1 from '../../assets/mcatalog1.jpg'
import CATALOG2 from '../../assets/mcatalog2.jpg'
import CATALOG3 from '../../assets/mcatalog3.jpg'
import CATALOG4 from '../../assets/mcatalog4.jpg'
import CATALOG5 from '../../assets/mcatalog5.jpg'

const MiniCatalog = () => {
    return (
        <section className="minicatalog">
            <div className="container">
                <div className="minicatalog__inner">
                    <div className="minicatalog__item minicatalog__item1">
                        <div className="minicatalog__img minicatalog__img-big">
                            <img src={CATALOG1} alt="catalog" />
                        </div>
                        <div className="minicatalog__subtitle">
                            <p>Text</p>
                        </div>
                    </div>
                    <div className="minicatalog__item minicatalog__item2">
                        <div className="minicatalog__img">
                            <img src={CATALOG2} alt="catalog" />
                        </div>
                        <div className="minicatalog__subtitle">
                            <p>Text</p>
                        </div>
                    </div>
                    <div className=" minicatalog__item minicatalog__item3">
                        <div className="minicatalog__img">
                            <img src={CATALOG3} alt="catalog" />
                        </div>
                        <div className="minicatalog__subtitle">
                            <p>Text</p>
                        </div>
                    </div>
                    <div className="minicatalog__item minicatalog__item4">
                        <div className="minicatalog__img">
                            <img src={CATALOG4} alt="catalog" />
                        </div>
                        <div className="minicatalog__subtitle">
                            <p>Text</p>
                        </div>
                    </div>
                    <div className="minicatalog__item minicatalog__item5">
                        <div className="minicatalog__img">
                            <img src={CATALOG5} alt="catalog" />
                        </div>
                        <div className="minicatalog__subtitle">
                            <p>Text</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MiniCatalog