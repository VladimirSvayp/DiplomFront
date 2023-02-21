import { Collapse, ListItemButton, ListItemText } from '@mui/material';
import React, { useContext, useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import styles from './CatalogSidebar.module.scss';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const CatalogSidebar = observer(({ setFetching, handleChange }) => {
    const { product } = useContext(Context);

    const [openCategories, setOpenCategories] = useState(true);
    const [openBrands, setOpenBrands] = useState(false);
    const [openFilters, setOpenFilters] = useState(false);

    // Функция для сортировки товаров по категориям
    const onSelectedType = async (name) => {
        product.setProducts([]);
        product.setSelectedProducts([]);
        product.setTotalCount(0);
        product.setPage(1);
        if (name === 'null') {
            product.setSelectedType(null);
            setFetching(true);
            return;
        }
        product.setSelectedType(name);
        setFetching(true);
    };

    return (
        <>
            {/* Sidebar (normal screen) */}
            <div className={styles.sidebar}>
                <nav>
                    <ListItemButton
                        onClick={() => setOpenCategories(!openCategories)}
                        sx={{
                            borderBottom: '2px solid rgba(42, 42, 42, 0.12)',
                            borderRadius: '9px',
                        }}>
                        <ListItemText primary="Все категории" sx={{ fontWeight: 700 }} />
                        {openCategories ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItemButton>
                    <Collapse in={openCategories} unmountOnExit>
                        {product.types.map((elem) => (
                            <ListItemButton
                                key={elem.name}
                                sx={{ pl: 4 }}
                                onClick={() => onSelectedType(elem.id)}>
                                <ListItemText>{elem.name}</ListItemText>
                            </ListItemButton>
                        ))}
                    </Collapse>
                    <ListItemButton
                        onClick={() => setOpenBrands(!openBrands)}
                        sx={{
                            borderBottom: '2px solid rgba(42, 42, 42, 0.12)',
                            borderRadius: '9px',
                        }}>
                        <ListItemText primary="Производитель" />
                        {openBrands ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItemButton>
                    <Collapse in={openBrands} unmountOnExit>
                        <fieldset style={{ paddingLeft: '28px', border: 'none' }}>
                            {product.brands.map((elem) => (
                                <div key={elem.id}>
                                    <input
                                        type="checkbox"
                                        id={elem.name}
                                        value={elem.id}
                                        style={{ marginRight: '20px' }}
                                        onClick={handleChange}
                                    />
                                    <label htmlFor={elem.name}>{elem.name}</label>
                                </div>
                            ))}
                        </fieldset>
                    </Collapse>
                </nav>
            </div>

            {/* Burger activated button */}
            <button className={styles.filters__btn} onClick={() => setOpenFilters(!openFilters)}>
                <FilterAltIcon />
                <span>Фильтры</span>
            </button>

            {/* Sidebar (small screen) */}
            <div
                className={
                    openFilters
                        ? `${styles.filters__menu} ${styles.active}`
                        : `${styles.filters__menu}`
                }>
                <button
                    className={styles.filters__arrow}
                    onClick={() => setOpenFilters(!openFilters)}>
                    <ArrowBackIcon />
                </button>
                <div>
                    <nav>
                        <ListItemButton
                            onClick={() => setOpenCategories(!openCategories)}
                            sx={{
                                borderBottom: '2px solid rgba(42, 42, 42, 0.12)',
                                borderRadius: '9px',
                            }}>
                            <ListItemText primary="Все категории" sx={{ fontWeight: 700 }} />
                            {openCategories ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </ListItemButton>
                        <Collapse in={openCategories} unmountOnExit>
                            {product.types.map((elem) => (
                                <ListItemButton
                                    key={elem.name}
                                    sx={{ pl: 4 }}
                                    onClick={() => onSelectedType(elem.id)}>
                                    <ListItemText>{elem.name}</ListItemText>
                                </ListItemButton>
                            ))}
                        </Collapse>
                        <ListItemButton
                            onClick={() => setOpenBrands(!openBrands)}
                            sx={{
                                borderBottom: '2px solid rgba(42, 42, 42, 0.12)',
                                borderRadius: '9px',
                            }}>
                            <ListItemText primary="Производитель" />
                            {openBrands ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </ListItemButton>
                        <Collapse in={openBrands} unmountOnExit>
                            <fieldset style={{ paddingLeft: '28px', border: 'none' }}>
                                {product.brands.map((elem) => (
                                    <div key={elem.id}>
                                        <input
                                            type="checkbox"
                                            id={elem.name}
                                            value={elem.id}
                                            style={{ marginRight: '20px' }}
                                            onClick={handleChange}
                                        />
                                        <label htmlFor={elem.name}>{elem.name}</label>
                                    </div>
                                ))}
                            </fieldset>
                        </Collapse>
                    </nav>
                </div>
            </div>
        </>
    );
});

export default CatalogSidebar;
