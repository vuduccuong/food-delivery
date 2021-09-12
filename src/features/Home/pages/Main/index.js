import React from 'react';
import MainBody from '../../components/Body';
import Contact from '../../components/Contact';
import Header from '../../components/Header';

const MainPage = () => {
    return (
        <div className="text-gray-900 bg-gray-100 font-body">
            <Header />
            <MainBody />
            <Contact />
        </div>
    );
};

export default MainPage;