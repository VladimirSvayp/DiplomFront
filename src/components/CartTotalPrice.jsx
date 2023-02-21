import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '..'

const CartTotalPrice = observer(({basket, totalPrice, setTotalPrice}) => {
    const {user} = useContext(Context)
    useEffect(() => {
        let sum = user.basket.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.count * currentValue.products.price
        }, 0)
        setTotalPrice(sum)
    }, [])
    return (
        <div className="cart__info">
            <div className="cart__cost">Сумма: <span>{totalPrice} руб</span></div>
            <p className="cart__promocode">Промокод</p>
            <form className="cart__form" action="">
                <input type="text" />
                <button></button>
            </form>
            <button className="cart__btn">Оформить</button>
        </div>
    )
})

export default CartTotalPrice