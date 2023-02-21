import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { getId } from '../../axios/basketAPI';
import { create } from '../../axios/basketProductAPI';

import { PRODUCT_ROUTE } from '../../utils/consts';
import { Context } from '../..';
import styles from './CatalogCard.module.scss';

const CatalogCard = ({ item }) => {
    const { user } = useContext(Context);

    // Добавление товара в корзину
    const addBasket = async (id) => {
        await getId(user.user.id).then((data) => user.setBasketId(data.id));
        await create(user.basketId, id);
        const newBasketCount = user.basketCount + 1;
        user.setBasketCount(newBasketCount);
    };

    return (
        <div key={item.id} className={styles.card}>
            <NavLink className={styles.card__link} to={PRODUCT_ROUTE + '/' + item.id}>
                <img
                    className={styles.card__img}
                    src={`${process.env.REACT_APP_API_URL}${item.image}`}
                    alt="product-img"
                />
            </NavLink>
            <h3 className={styles.card__title}>{item.name}</h3>
            <span className={styles.card__price}>{item.price} руб.</span>
            <button className={styles.card__btn} onClick={() => addBasket(item.id)}>
                <span>В корзину</span>
                <AddShoppingCartIcon />
            </button>
        </div>
    );
};

export default CatalogCard;
