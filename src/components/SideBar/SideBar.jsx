import React, { useState , useEffect } from 'react';
import style from './Sidebar.module.scss'
import {IconDashHead, IconDashMain, Product, Customer, Promote, Help, Income, Arrow, ArrowWhite , Burger } from "../Assets/Icon";
import UserPhoto from "../Assets/Image/UserPhoto.png";



const SideBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth >= 1200);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) {
                setIsMenuOpen(true);
            } else {
                if (isMenuOpen) {
                    setIsMenuOpen(true);
                }
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className={`${style.sideBar} ${isMenuOpen ? style.open : ''}`}>
            <button className={style.burgerButton} onClick={handleToggleMenu}>
                <Burger/>
                <p className={style.sideBarBurgerText}>Dashboard Menu</p>
            </button>
            { isMenuOpen && (
                <div className={style.sideBarMenu}>
                    <div className={style.sideBarHeader}>
                        <IconDashHead/>
                        <h2 className={style.sideBarHeaderTitle}>Dashboard</h2>
                        <p className={style.navbarHeaderVersion}>v.01</p>
                    </div>
                    <div className={style.sideBarItem}>
                        <div className={style.sideBarItemWrapper}>
                            <IconDashMain/>
                            <p className={style.sideBarItemText}>Dashboard</p>
                        </div>
                    </div>
                    <div className={style.sideBarItem}>
                        <div className={style.sideBarItemWrapper}>
                            <Product/>
                            <p className={style.sideBarItemText}>Product</p>
                        </div>

                        <Arrow/>
                    </div>
                    <div className={style.sideBarItemActive}>
                        <div className={style.sideBarItemWrapper}>
                            <Customer/>
                            <p className={style.sideBarItemTextActive}>Customer</p>
                        </div>

                        <ArrowWhite/>
                    </div>
                    <div className={style.sideBarItem}>
                        <div className={style.sideBarItemWrapper}>
                            <Income/>
                            <p className={style.sideBarItemText}>Income</p>
                        </div>

                        <Arrow/>
                    </div>
                    <div className={style.sideBarItem}>
                        <div className={style.sideBarItemWrapper}>
                            <Promote/>
                            <p className={style.sideBarItemText}>Promote</p>
                        </div>

                        <Arrow/>
                    </div>
                    <div className={style.sideBarItem}>
                        <div className={style.sideBarItemWrapper}>
                            <Help/>
                            <p className={style.sideBarItemText}>Help</p>
                        </div>

                        <Arrow/>
                    </div>

                    <div className={style.sideBarUser}>
                        <img className={style.sideBarUserPhoto} src={UserPhoto} alt="user"/>
                        <div>
                            <p className={style.sideBarUserName}>Evano</p>
                            <p className={style.sideBarUserJob}>Project Manager</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SideBar;
