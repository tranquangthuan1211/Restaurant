import React, { useState } from 'react';
import './styles.css';
import Row from '../../component/Row';
import request from '../../component/request';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { FaFacebookMessenger } from 'react-icons/fa6';
import { IoSend } from 'react-icons/io5';
import Cookies from 'js-cookie';
import Header from '../../component/Header';

export default function Home({ cart, addToCart, moveTocart }) {
    const [displayMessage, setDisplayMessage] = useState(false);

    const handleDisplay = () => {
        setDisplayMessage(!displayMessage);
    };
    const addTocart = (product) => {
        if(Cookies.get("userId") !== undefined) {
            addToCart(product);
        }else {
            alert("please login to add food !!!")
        }
    }
    return (
        <div className="content_home">
            <Header cart={cart} moveTocart={moveTocart} />
            <div className="header">
                <h1 className='title' style={{ fontSize: '8rem', color: '#fff' }}>FRESH FOOD </h1>
                <h1 className='title' style={{ fontSize: '8rem', color: '#fff' }}>IN THE MORNING</h1>
                <p style={{ fontSize: '1.6rem', color: '#fff' }}>
                    Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Placeat Labore, Sint Cupiditate Distinctio
                    Tempora Reiciendis.
                </p>
                <button style={{ width: '160px', backgroundColor: '#ffc107', height: '40px', borderRadius: '8px' }}>
                    Get Yours Now
                </button>
            </div>
            <div className="menu">
                <h1 style={{ color: '#ffc107', textAlign: 'center', fontSize: '5rem' }}>Menu</h1>
                <Row request={request.apiSeaFood} title={'Sea Food'} addToCart={addTocart} />
                <Row request={request.apiDessert} title={'Dessert'} addToCart={addTocart} />
                <Row request={request.apiBreakfast} title={'Breakfast'} addToCart={addTocart} />
                <Row request={request.apiPasta} title={'Pasta'} addToCart={addTocart} />
                <Row request={request.apivegetable} title={'Vegetable'} addToCart={addTocart} />
            </div>
            <div className="contact">
                <h1 style={{ color: '#ffc107', textAlign: 'center', fontSize: '5rem' }}>Contact</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <FaFacebook className="icon_contact" />
                    <FaInstagramSquare className="icon_contact" />
                    <IoLogoYoutube className="icon_contact" />
                    <FaFacebookMessenger className="icon_contact" onClick={handleDisplay} />
                </div>
                {displayMessage === true ? (
                    <div className="chat">
                        <div className="message my_message" style={{ width: '100%' }}>
                            <p className="text">hello</p>
                        </div>

                        <div className="message freind_message">
                            <p className="text">hi</p>
                        </div>
                        <div className="message my_message" style={{ width: '100%' }}>
                            <p className="text">hello</p>
                        </div>

                        <div className="message freind_message">
                            <p className="text">hi</p>
                        </div>
                        <div className="message my_message" style={{ width: '100%' }}>
                            <p className="text">hello</p>
                        </div>

                        <div className="message freind_message">
                            <p className="text">hi</p>
                        </div>
                        <div className="input_message">
                            <input placeholder="messenger" className="input_message" />
                            <IoSend style={{ color: '#ffc107', width: '30px', height: '30px' }} />
                        </div>
                    </div>
                ) : null}
                <h1 style={{ textAlign: 'center' }}>Created By Coding TQT | All Rights Reserved</h1>
            </div>
        </div>
    );
}
