import React from 'react';
import style from '../Main/Product.module.scss'

export const ButtonActive = () => {
    return (
        <div className={style.mainTitleButtonActive}>
            <p className={style.mainTitleButtonActiveText}>Active</p>
        </div>
    );
};

export const ButtonInActive = () => {
    return (
        <div className={style.mainTitleButtonInactive}>
            <p className={style.mainTitleButtonInactiveText}>Inactive</p>
        </div>
    );
};


