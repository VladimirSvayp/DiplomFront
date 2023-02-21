import React, { useEffect } from 'react'

import './CartPage.scss'

import { MAIN_ROUTE } from '../../utils/consts'

import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import { useContext } from 'react'
import { Context } from '../..'
import { deleteOneBasketProducts, fetchBasketProducts, getAll } from '../../axios/basketProductAPI'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import CartCounter from '../../components/CartCounter'
import CartTotalPrice from '../../components/CartTotalPrice'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const CartPage = observer(() => {
    const { user } = useContext(Context)
    const [loading, setLoading] = useState(true)
    const [basket, setBasket] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        console.log('updated')

        getAll(user.basketId)
            .then(data => {
                let newIdArr = data.map(elem => elem.productId)
                let newCountsArr = data.map(elem => elem.count)
                return fetchBasketProducts(newIdArr)
                    .then(data1 => {
                        const newArr = data1.map((item, index) => ({ products: item, count: newCountsArr[index] }))
                        user.setBasket(newArr)
                    })
            }).finally(() => {
                let count = user.basket.reduce((prev, current) => {
                    console.log(current.count)
                    return prev + current.count
                }, 0)
                user.setBasketCount(count)
            })
        setLoading(false)
    }, [totalPrice])

    const removeOne = async (productId, count, price) => {
        const data = await deleteOneBasketProducts(user.basketId, productId)

        let newPrice = totalPrice - (price * count)
        setTotalPrice(newPrice)
    }

    return (
        <>
            {loading ? 'sad' : (
                <div className="cart">
                    <div className="container">
                        <BreadCrumb items={[
                            {
                                label: 'Гланая',
                                path: MAIN_ROUTE
                            },
                            {
                                label: 'Корзина',
                                path: null
                            },
                        ]} />
                        <div className="cart__title">Корзина</div>
                        <div className="cart__inner">
                            <div className="cart__items">
                                {user.basket.map(item =>
                                    <div key={item.products.id} className="cart__item">
                                        <img src={process.env.REACT_APP_API_URL + item.products.image} alt="product-img" className="cart__img" />
                                        <div className="cart__item-name">{item.products.name}</div>
                                        <div className="cart__price">{item.products.price} руб</div>
                                        <CartCounter basket={basket} setBasket={setBasket} basketId={user.basketId} productId={item.products.id} price={item.products.price} count={item.count} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                                        <button
                                            onClick={() => removeOne(item.products.id, item.count, item.products.price)}
                                            style={{ background: 'none', border: 'none', marginLeft: '10px', cursor: 'pointer' }}
                                        >
                                            <DeleteForeverIcon sx={{ fontSize: '25px' }} />
                                        </button>
                                    </div>
                                )}
                            </div>
                            <CartTotalPrice basket={basket} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                        </div>
                    </div>
                </div>
            )}
        </>

    )
})

export default CartPage
