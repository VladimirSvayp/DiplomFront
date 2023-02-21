import { makeAutoObservable } from "mobx"

export default class ProductStore {
    constructor() {
        this._types = []
        this._brands = []
        this._selectedType = null
        this._selectedBrand = []
        this._products = []
        this._selectedProducts = []
        this._searchInput = null
        this._page = 1
        this._totalCount = 0
        this._limit = 10
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    setSearchInput(searchInput) {
        this._searchInput = searchInput
    }

    setProducts(products) {
        this._products = products
    }
    setSelectedProducts(selectedProducts) {
        this._selectedProducts = selectedProducts
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }

    get searchInput() {
        return this._searchInput
    }

    get products() {
        return this._products
    }
    get selectedProducts() {
        return this._selectedProducts
    }
    get page() {
        return this._page
    }
    get totalCount() {
        return this._totalCount
    }
    get limit() {
        return this._limit
    }
}