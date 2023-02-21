import { Container } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import CreateBrand from '../../components/modal/adminModal/CreateBrand'
import CreateProduct from '../../components/modal/adminModal/CreateProduct'
import CreateType from '../../components/modal/adminModal/CreateType'
import './AdminPage.scss'

const AdminPage = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)
    return (
        <div>
            <Container style={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>
                <button
                    style={{ width: '230px', margin: '0 auto 30px', padding: '7px 0', borderRadius: '9px', background: '#fff', fontSize: '20px', cursor: 'pointer' }}
                    onClick={() => setTypeVisible(true)}
                >
                    Добавить тип
                </button>
                <button
                    style={{ width: '230px', margin: '0 auto 30px', padding: '7px 0', borderRadius: '9px', background: '#fff', fontSize: '20px', cursor: 'pointer' }}
                    onClick={() => setBrandVisible(true)}
                >
                    Добавить бренд
                </button>
                <button
                    style={{ width: '230px', margin: '0 auto 30px', padding: '7px 0', borderRadius: '9px', background: '#fff', fontSize: '20px', cursor: 'pointer' }}
                    onClick={() => setProductVisible(true)}
                >
                    Добавить продукт
                </button>
                <CreateType active={typeVisible} setActive={setTypeVisible} />
                <CreateBrand active={brandVisible} setActive={setBrandVisible} />
                <CreateProduct active={productVisible} setActive={setProductVisible} />

            </Container>
        </div>
    )
}

export default AdminPage