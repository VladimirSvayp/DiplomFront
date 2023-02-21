import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Context } from '../../..'
import { createProduct } from '../../../axios/productAPI'
import { fetchTypes, fetchBrands } from '../../../axios/productAPI'


const CreateProduct = observer(({ active, setActive }) => {
    const { product } = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [count, setCount] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    const addProduct = async () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('count', `${count}`)
        formData.append('image', file)
        formData.append('brandId', product.selectedBrand)
        formData.append('typeId', product.selectedType)
        formData.append('info', JSON.stringify(info))
        await createProduct(formData)
        setActive(false)
    }

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
        fetchBrands().then(data => product.setBrands(data))
    }, [])

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <h2 style={{ textAlign: 'center' }}>Добавление товара</h2>
                <form
                    className='registration__form'
                    onSubmit={e => e.preventDefault()}
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <select name='type' onChange={e => product.setSelectedType(e.target.value)}>
                        <optgroup>
                            <option selected disabled>--Выберите тип товара--</option>
                            {product.types.map(type =>
                                <option key={type.id} value={type.id}>{type.name}</option>
                            )}
                        </optgroup>
                    </select>
                    <select name='brand' onChange={e => product.setSelectedBrand(e.target.value)}>
                        <optgroup>
                            <option selected disabled>--Выберите бренд товара--</option>
                            {product.brands.map(brand =>
                                <option key={brand.id} value={brand.id}>{brand.name}</option>
                            )}
                        </optgroup>
                    </select>
                    <input
                        type='text'
                        placeholder='Введите название товара'
                        velue={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type='number'
                        placeholder='Введите стоимоть товара'
                        velue={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                    <input
                        type='number'
                        placeholder='Введите количество товара'
                        velue={count}
                        onChange={e => setCount(e.target.value)}
                    />
                    <input
                        type='file'
                        onChange={selectFile}
                    />

                    <button onClick={addInfo} className='handle__btn'>Добавить новое свойство</button>
                    {info.map(i =>
                        <div key={i.number}>
                            <input
                                placeholder='Введите название свойства'
                                value={i.title}
                                onChange={e => changeInfo('title', e.target.value, i.number)}
                            />
                            <input
                                placeholder='Введите описание свойства'
                                value={i.description}
                                onChange={e => changeInfo('description', e.target.value, i.number)}
                            />
                            <button
                                onClick={() => removeInfo(i.number)}
                            >
                                Удалить
                            </button>
                        </div>
                    )}
                </form>
                <button onClick={addProduct}>Добавить</button>
            </div>
        </div>
    )
})

export default CreateProduct