import React from 'react'

import './MainPage.scss'

import MainSlider from '../../components/MainSlider';
import MiniCatalog from '../../components/MiniCatalog';
import MainBlog from '../../components/MainBlog';
import MainInfo from '../../components/MainInfo';
import MainContacts from '../../components/MainContacts';

const MainPage = () => {
    return (
        <>
            <MainSlider />
            <MiniCatalog />
            <MainBlog />
            <MainInfo />
            <MainContacts />
        </>
    )
}

export default MainPage
