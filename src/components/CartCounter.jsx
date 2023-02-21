import { Box } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { useContext } from 'react'
import { Context } from '..'
import { updateBasketProducts } from '../axios/basketProductAPI'

const CartCounter = observer(({ basket, productId, basketId, price, setTotalPrice, totalPrice, count, setBasket }) => {
    const [counter, setCounter] = useState(count)
    const { user } = useContext(Context)

    // user.setBasketCount(totalCount)
    const incCount = async () => {
        await updateBasketProducts(basketId, productId, 'increment')        
        setCounter(counter+1)
        let sum = totalPrice + price
        setTotalPrice(sum)
        let basketCount = user.basketCount + 1
        user.setBasketCount(basketCount)
    }

    const decCount = async () => {
        if (counter === 1) {
            return
        }
        await updateBasketProducts(basketId,productId, 'decrement')
        setCounter(counter-1)
        let sum = totalPrice - price
        setTotalPrice(sum)
        let basketCount = user.basketCount - 1
        user.setBasketCount(basketCount)
    }
    return (
        // <div className="cart__amount">5 шт</div>
        <Box sx={{ mr: '10px' }}>
            <button
                style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}
                onClick={decCount}
            >
                -
            </button>
            <span style={{ margin: '0 10px', fontSize: '23px' }}>{counter}</span>
            <button
                style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}
                onClick={incCount}
            >
                +
            </button>
        </Box>
    )
})

export default CartCounter