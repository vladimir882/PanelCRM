import React from 'react';
import style from './Product.module.scss'
import {Search} from "../Assets/Icon";
import {ButtonActive , ButtonInActive} from "../Assets/Button";

const Product = () => {

    const users = [
        {
            customerName: "Jane Cooper",
            company: "Microsoft",
            phoneNumber: "(225) 555-0118",
            email: "jane@microsoft.com",
            country: "United States",
            status: <ButtonActive />
        },
        {
            customerName: "Floyd Miles",
            company: "Yahoo",
            phoneNumber: "(205) 555-0100",
            email: "floyd@yahoo.com",
            country: "Kiribati",
            status: <ButtonInActive />
        },
        {
            customerName: "Ronald Richards",
            company: "Adobe",
            phoneNumber: "(302) 555-0107",
            email: "ronald@adobe.com",
            country: "Israel",
            status: <ButtonInActive />
        },
        {
            customerName: "Marvin McKinney",
            company: "Tesla",
            phoneNumber: "(252) 555-0126",
            email: "marvin@tesla.com",
            country: "Iran",
            status: <ButtonActive />
        },
        {
            customerName: "Jerome Bell",
            company: "Google",
            phoneNumber: "(629) 555-0129",
            email: "jerome@google.com",
            country: "Réunion",
            status: <ButtonActive />
        },

        {
            customerName: "Kathryn Murphy",
            company: "Microsoft",
            phoneNumber: "(406) 555-0120",
            email: "kathryn@microsoft.com",
            country: "Curaçao",
            status: <ButtonActive />
        },

        {
            customerName: "Jacob Jones",
            company: "Yahoo",
            phoneNumber: "(208) 555-0112",
            email: "jacob@yahoo.com",
            country: "Brazil",
            status: <ButtonActive />
        },
        {
            customerName: "Kristin Watson",
            company: "Facebook",
            phoneNumber: "(704) 555-0127",
            email: "kristin@facebook.com",
            country: "Åland Islands",
            status: <ButtonInActive />
        }
    ];

    return (
        <div className={style.product}>
            <div className={style.productWrapper}>
                <h2 className={style.productHeaderText}>Hello Evano 👋🏼,</h2>
                <div className={style.productCustomers}>
                    <div className={style.productCostumersWrapper}>
                        <div className={style.productCustomersTextWrapper}>
                            <p className={style.productCustomersTitle}>All Customers</p>
                            <p className={style.productCustomersSubTitle}>Active Members</p>
                        </div>
                        <div className={style.productCustomersSearch}>
                            <Search/>
                            <p className={style.productCustomersSearchText}>Search</p>
                        </div>
                    </div>
                    <div className={style.productTitleTextWrapper}>
                        <p className={style.productTitleText}>Customer Name</p>
                        <p className={style.productTitleText}>Company</p>
                        <p className={style.productTitleText}>Phone Number</p>
                        <p className={style.productTitleText}>Email</p>
                        <p className={style.productTitleText}>Country</p>
                        <p className={style.productTitleText}>Status</p>
                    </div>
                    <div className={style.productLine}></div>
                    <div className={style.productTitleTextUserWrapper}>
                        {users.map((user, index) => (
                            <div key={index}>
                                <div className={style.productTitleTextUser} key={index}>
                                    <span className={style.productAdaptive}>Customer Name:</span>
                                    <p className={style.productTitleUserText}>{user.customerName}</p>
                                    <span
                                        className={style.productAdaptive}>Company:</span>
                                    <p className={style.productTitleUserText}>{user.company}</p>
                                    <span className={style.productAdaptive}>Phone Number:</span>
                                    <p className={style.productTitleUserText}>{user.phoneNumber}
                                    </p>
                                    <span
                                        className={style.productAdaptive}>Email:</span>
                                    <p className={style.productTitleUserText}>{user.email}</p>
                                    <span
                                        className={style.productAdaptive}>Country:</span>
                                    <p className={style.productTitleUserText}>{user.country}</p>
                                    <span
                                        className={style.productAdaptive}>Status:</span>
                                    <span className={style.productTitleUserText}>{user.status}</span>
                                </div>
                                <div className={style.productLineUser}></div>
                            </div>
                        ))}
                    </div>


                    <div className={style.productFooterWrapper}>
                        <div>
                            <p className={style.productViewsBlock}>Showing data 1 to 8 of 256K entries</p>
                        </div>
                        <div className={style.productNumberBlock}>
                            <p className={style.numberBlock}>&#60;</p>
                            <p className={style.numberBlockActive}>1</p>
                            <p className={style.numberBlock}>2</p>
                            <p className={style.numberBlock}>3</p>
                            <p className={style.numberBlock}>4</p>
                            <p className={style.numberBlockEmpty}>...</p>
                            <p className={style.numberBlock}>40</p>
                            <p className={style.numberBlock}>&#62;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
