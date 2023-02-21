import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../..'
import { change } from '../../axios/userAPI'

const ChangePhoneModal = observer(({ active, setActive, title }) => {
    const { user } = useContext(Context)
    const [name, setName] = useState(user.user.first_name)
    const [surname, setSurname] = useState(user.user.surname)
    const [email, setEmail] = useState(user.user.email)
    const [phone, setPhone] = useState(user.user.phone)
    const [file, setFile] = useState(null)

    const selectFile = e => {
        console.log(e.target.files);
        console.log(e.target.files[0]);
        setFile(e.target.files[0])
    }

    const onHandleButton = async () => {
        const formData = new FormData()
        formData.append('first_name', name)
        formData.append('surname', surname)
        formData.append('email', email)
        formData.append('prev_email', user.user.email)
        formData.append('phone_number', phone)
        formData.append('image', file)
        let data
        data = await change(formData)
        user.setUser(data)
        setActive(false)
    }
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <h2
                    style={{ textAlign: 'center' }}
                >
                    Изменить данные
                </h2>
                <form onSubmit={e => e.preventDefault()} action="" className='registration__form' style={{ display: 'flex', flexDirection: 'column' }}>
                    <input
                        style={{}}
                        placeholder='Имя'
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    <input
                        style={{}}
                        placeholder='Фамилия'
                        type="text"
                        value={surname}
                        onChange={e => setSurname(e.target.value)} />
                    <input
                        style={{}}
                        placeholder='e-mail'
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <input
                        style={{}}
                        placeholder='+7(___) _______'
                        type="number"
                        value={phone}
                        onChange={e => setPhone(e.target.value)} />
                    <input
                        style={{}}
                        type="file"
                        onChange={selectFile} />
                    <button className='handle__btn' onClick={onHandleButton}>Изменить</button>
                </form>

            </div>
        </div>
    )
})

export default ChangePhoneModal