import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// Импорт иконок и компонентов Material UI
import { Container } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import LOGO from '../../../assets/logo.png';
import PROFILE from '../../../assets/profile.svg';
import { Context } from '../../..';
import LoginModal from '../../../components/modal/LoginModal';
import RegistrationModal from '../../../components/modal/RegistrationModal';
import { CATALOG_ROUTE, MAIN_ROUTE } from '../../../utils/consts';
import { fetchProducts } from '../../../axios/productAPI';
import styles from './HeaderTop.module.scss';

const HeaderTop = observer(() => {
    const { user } = useContext(Context);
    const { product } = useContext(Context);
    const [modalLoginActive, setModalLoginActive] = useState(false);
    const [modalRegistrationActive, setModalRegistrationActive] = useState(false);
    const [basketCount, setBasketCount] = useState(0);
    const [searchInput, setSearchInput] = useState('');
    const [openBurger, setOpenBurger] = useState(false);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
        navigate(MAIN_ROUTE);
    };

    const onHandleSearch = async (e) => {
        e.preventDefault();
        let updateSearch = searchInput.split(' ');
        updateSearch = updateSearch.join('-');
        console.log(updateSearch);
        product.setSearchInput(updateSearch);
        await fetchProducts(null, null, null, product.searchInput, 1, 12)
            .then((data) => {
                console.log(data);
                product.setProducts([...data.rows]);
                product.setSelectedProducts([...data.rows]);
                console.log(data.count);
                product.setTotalCount(data.count);
                product.setPage(1);
            })
            .finally(() => navigate(CATALOG_ROUTE));
    };

    useEffect(() => {
        let count = user.basket.reduce((prev, current) => {
            console.log(current.count);
            return prev + current.count;
        }, basketCount);
        user.setBasketCount(count);
        console.log('sadas');
    }, []);

    console.log(user.basket);

    return (
        <div className={styles.header__top}>
            <Container>
                {user.isAuth ? (
                    <>
                        <div className={styles.header__content}>
                            <Link to="/">
                                <img src={LOGO} alt="logo" className={styles.logo} />
                            </Link>
                            <form className={styles.header__search}>
                                <input
                                    value={searchInput}
                                    type="text"
                                    onChange={(e) => setSearchInput(e.target.value)}
                                />
                                <button onClick={onHandleSearch}></button>
                            </form>
                            <a href="tel:+78112568558" className={styles.header__phone}>
                                +7 (8112) 56 85 58
                            </a>
                            <div className={styles.header__buttons}>
                                {user.user.role === 'ADMIN' && (
                                    <Link to="/admin" className={styles.header__admin}>
                                        <AdminPanelSettingsIcon
                                            sx={{ color: '#fff', fontSize: '32px' }}
                                        />
                                    </Link>
                                )}
                                <Link to="/profile" className={styles.header__profile}>
                                    <img src={PROFILE} alt="profile" />
                                </Link>
                                <Link
                                    to="/cart"
                                    // className="header__cart"
                                    style={{
                                        margin: '0 10px',
                                        position: 'relative',
                                    }}>
                                    <ShoppingCartIcon sx={{ color: '#fff', fontSize: '32px' }} />
                                    {!!user.basketCount && (
                                        <span
                                            style={{
                                                position: 'absolute',
                                                border: '',
                                                background: '#000',
                                                borderRadius: '50%',
                                                height: '20px',
                                                width: '20px',
                                                textAlign: 'center',
                                                color: '#fff',
                                                right: '-5px',
                                                top: '-10px',
                                            }}>
                                            {user.basketCount}
                                        </span>
                                    )}
                                </Link>
                                <button
                                    style={{ background: 'none', border: 'none' }}
                                    onClick={logOut}>
                                    <LogoutIcon sx={{ color: '#fff', fontSize: '32px' }} />
                                </button>
                            </div>
                            <button
                                onClick={() => setOpenBurger(!openBurger)}
                                className={styles.burger__btn}>
                                <MenuOpenIcon sx={{ fontSize: '32px' }} />
                            </button>
                        </div>
                        <div
                            className={
                                openBurger
                                    ? `${styles.burger_menu} ${styles.active}`
                                    : `${styles.burger_menu}`
                            }>
                            <button
                                onClick={() => setOpenBurger(!openBurger)}
                                className={styles.burger__btn}>
                                Открыть
                            </button>
                            <div className={styles.burger__buttons}>
                                {user.user.role === 'ADMIN' && (
                                    <Link to="/admin" className={styles.header__admin}>
                                        <AdminPanelSettingsIcon
                                            sx={{ color: '#fff', fontSize: '32px' }}
                                        />
                                    </Link>
                                )}
                                <Link to="/profile" className={styles.header__profile}>
                                    <img src={PROFILE} alt="profile" />
                                </Link>
                                <Link
                                    to="/cart"
                                    // className="header__cart"
                                    style={{
                                        margin: '0 10px',
                                        position: 'relative',
                                    }}>
                                    <ShoppingCartIcon sx={{ color: '#fff', fontSize: '32px' }} />
                                    {!!user.basketCount && (
                                        <span
                                            style={{
                                                position: 'absolute',
                                                border: '',
                                                background: '#000',
                                                borderRadius: '50%',
                                                height: '20px',
                                                width: '20px',
                                                textAlign: 'center',
                                                color: '#fff',
                                                right: '-5px',
                                                top: '-10px',
                                            }}>
                                            {user.basketCount}
                                        </span>
                                    )}
                                </Link>
                                <button
                                    style={{ background: 'none', border: 'none' }}
                                    onClick={logOut}>
                                    <LogoutIcon sx={{ color: '#fff', fontSize: '32px' }} />
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className={styles.header__content}>
                        <Link to="/">
                            <img src={LOGO} alt="logo" className={styles.logo} />
                        </Link>
                        <form action="" className={styles.header__search}>
                            <input type="text" />
                            <button></button>
                        </form>
                        <a href="tel:+78112568558" className={styles.header__phone}>
                            +7 (8112) 56 85 58
                        </a>
                        <div className={styles.header__buttons}>
                            <button
                                style={{
                                    border: 'none',
                                    background: 'none',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    width: 40,
                                    height: 40,
                                }}
                                onClick={() => setModalLoginActive(true)}>
                                <AccountCircleIcon sx={{ fontSize: '40px' }} />
                            </button>
                        </div>
                    </div>
                )}
            </Container>
            <LoginModal
                active={modalLoginActive}
                setActive={setModalLoginActive}
                setRegActive={setModalRegistrationActive}
            />
            <RegistrationModal
                active={modalRegistrationActive}
                setActive={setModalRegistrationActive}
                setLogActive={setModalLoginActive}
            />
        </div>
    );
});

export default HeaderTop;
