import React, { useState, useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { Container } from '@mui/material';

import { Context } from '../..';
import styles from './CatalogPage.module.scss';

import { fetchBrands, fetchProducts, fetchTypes } from '../../axios/productAPI';
import CatalogSidebar from '../../components/CatalogSidebar';
import CatalogSort from '../../components/CatalogSort';
import CatalogList from '../../components/CatalogList';

const CatalogPage = observer(() => {
    const { product } = useContext(Context);
    const [fetching, setFetching] = useState(true);
    const [pageNum, setPageNum] = useState(false);

    const [ordering, setOrdering] = useState('name_az');

    useEffect(() => {
        if (fetching) {
            product.setProducts([]);
            product.setSelectedProducts([]);
            product.setTotalCount(0);
            product.setPage(1);
            let brands = product.selectedBrand.join('__');
            if (product.selectedBrand.length <= 0) {
                brands = null;
            }
            fetchTypes().then((data) => product.setTypes(data));
            fetchBrands().then((data) => product.setBrands(data));
            fetchProducts(
                product.selectedType,
                brands,
                ordering,
                product.searchInput,
                product.page,
                12,
            )
                .then((data) => {
                    console.log(data);
                    product.setProducts([...product.products, ...data.rows]);
                    product.setSelectedProducts([...product.selectedProducts, ...data.rows]);
                    product.setTotalCount(data.count);
                    const newPage = product.page + 1;
                    product.setPage(newPage);
                })
                .finally(() => setFetching(false));
        }
        if (pageNum) {
            let brands = product.selectedBrand.join('__');
            if (product.selectedBrand.length <= 0) {
                brands = null;
            }
            fetchProducts(product.selectedType, brands, ordering, product.page, 12)
                .then((data) => {
                    const test = [...product.products, ...data.rows];
                    console.log(test);
                    product.setProducts([...product.products, ...data.rows]);
                    product.setSelectedProducts([...product.selectedProducts, ...data.rows]);
                    const newPage = product.page + 1;
                    product.setPage(newPage);
                })
                .finally(() => setPageNum(false));
        }
        return () => {
            // setSelectedBrand(null)
            // setSelectedType(null)
        };
    }, [fetching, pageNum, product.searchInput]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        };
    });

    // Функция подгрузки товаров при скролле
    const scrollHandler = async (e) => {
        if (
            e.target.documentElement.scrollHeight -
                300 -
                (e.target.documentElement.scrollTop + window.innerHeight) <
                100 &&
            product.products.length < product.totalCount
        ) {
            setPageNum(true);
        }
    };

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

    // Функция для сортировки товаров по цене и названию
    const onSelectedSort = (e) => {
        product.setProducts([]);
        product.setSelectedProducts([]);
        product.setTotalCount(0);
        product.setPage(1);
        setFetching(true);
        if (e.target.value === 'По цене (возрастание)') setOrdering('cost_increase');
        if (e.target.value === 'По цене (убывание)') setOrdering('cost_reduction');
        if (e.target.value === 'По названию (а-я)') setOrdering('name_az');
        if (e.target.value === 'По названию (я-а)') setOrdering('name_za');
    };

    // Функция для сортировки товаров по производителям
    const handleChange = async (e) => {
        product.setProducts([]);
        product.setSelectedProducts([]);
        product.setTotalCount(0);
        product.setPage(1);
        if (!e.target.checked) {
            let idx = product.selectedBrand.indexOf(e.target.value);
            let prevArr = product.selectedBrand.slice(0, idx);
            let nextArr = product.selectedBrand.slice(idx + 1);
            product.setSelectedBrand([...prevArr, ...nextArr]);
            setFetching(true);
            return;
        }
        product.setSelectedBrand([...product.selectedBrand, e.target.value]);
        setFetching(true);
    };

    return (
        <div className={styles.catalog}>
            <Container>
                <div className={styles.catalog__inner}>
                    {/* Sidebar */}
                    <CatalogSidebar setFetching={setFetching} handleChange={handleChange} />
                    <div>
                        <CatalogSort onSelectedSort={onSelectedSort} />
                        <CatalogList />
                    </div>
                </div>
            </Container>
        </div>
    );
});

export default CatalogPage;
