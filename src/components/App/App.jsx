import React, { useContext } from 'react';

import './App.scss';

import Header from '../../layouts/Header';
import Footer from '../Footer';
import AppRouter from '../AppRouter';
import { Context } from '../..';
import { useState } from 'react';
import { useEffect } from 'react';
import { check } from '../../axios/userAPI';
import { observer } from 'mobx-react-lite';
import { getId } from '../../axios/basketAPI';
import { fetchBasketProducts, getAll } from '../../axios/basketProductAPI';

const App = observer(() => {
    const { user } = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        check()
            .then((data) => {
                user.setUser(data);
                return getId(data.id);
            })
            .then((data1) => {
                console.log(`data1 = ${data1.id}`);
                user.setBasketId(data1.id);
                return getAll(data1.id);
            })
            .then((data2) => {
                let newIdArr = data2.map((elem) => elem.productId);
                let newCountsArr = data2.map((elem) => elem.count);
                return fetchBasketProducts(newIdArr).then((data3) => {
                    const newArr = data3.map((item, index) => ({
                        products: item,
                        count: newCountsArr[index],
                    }));
                    user.setBasket(newArr);
                });
            })
            .finally(() => setLoading(false));
        user.setIsAuth(true);
    }, []);

    return (
        <>
            {loading ? (
                <div></div>
            ) : (
                <div className="wrapper">
                    <Header />
                    <AppRouter />
                    {/* <Footer /> */}
                </div>
            )}
        </>
    );
});
export default App;
