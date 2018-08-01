import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Component/Header/Header.js';
import Nav from './Component/Nav/Nav.js';
import Content from './Component/Content/Content.js';
import Footer from './Component/Footer/Footer.js';

ReactDOM.render(
    <div>
        <Nav />
        <Header />
        <div className='container'>
        <div className='row pt-5'>
         <Content title='hello' description='test' srcImg='img/01.jpg'/>
            <Content title='hello2' description='test' srcImg='img/02.jpg'/>
            <Content title='hello2' description='test' srcImg='img/03.jpg'/>
            <Content title='hello2' description='test' srcImg='img/03.jpg'/>

            <Content title='hello2' description='test' srcImg='img/03.jpg'/>
            <Content title='hello2' description='test' srcImg='img/03.jpg'/>
            <Content title='hello2' description='test' srcImg='img/03.jpg'/>
            <Content title='hello2' description='test' srcImg='img/03.jpg'/>
            <Content title='hello2' description='test' srcImg='img/03.jpg'/>

        </div>
        </div>
        <Footer coppyRight='Hao Phan'/>

    </div>,
 document.getElementById('root'));

