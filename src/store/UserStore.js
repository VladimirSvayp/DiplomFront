import { makeAutoObservable } from 'mobx'

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._basketId = []
        this._basket = []
        this._basketCount = 0
        this._totalPrice = 0
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setBasketId(basketId) {
        this._basketId = basketId
    }
    setBasket(basket) {
        this._basket = basket
    }
    setBasketCount(basketCount) {
        this._basketCount = basketCount
    }
    setTotalPrice(totalPrice) {
        this._totalPrice = totalPrice
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
    get basketId() {
        return this._basketId
    }
    get basket() {
        return this._basket
    }
    get basketCount() {
        return this._basketCount
    }
    get totalPrice() {
        return this._totalPrice
    }
}