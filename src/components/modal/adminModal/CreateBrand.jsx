import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { Context } from '../../..'
import { createBrand } from '../../../axios/productAPI'


const CreateBrand = observer(({ active, setActive }) => {
    const {product} = useContext(Context)
    const [name, setName] = useState('')
    const onHandle = async () => {
        await createBrand(name)
        setName('')
        setActive(false)
    }
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <h2 style={{textAlign: 'center'}}>Добавление брендов</h2>
                <form
                    className='registration__form'
                    onSubmit={e => e.preventDefault()}
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    <button onClick={onHandle} className='handle__btn'>Добавить</button>
                </form>
            </div>
        </div>
    )
})

export default CreateBrand