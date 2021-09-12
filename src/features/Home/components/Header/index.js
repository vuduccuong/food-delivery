import React from 'react';

const Header = () => {
    return (
        <div className="top-0 left-0 right-0 p-16 bg-custom-yellow h-screen-75 rounded-b-full">
        <div className="flex justify-center">
            <div className="font-bold uppercase mr-auto">
                <a href="/" className="text-xl"><i className="fas fa-user-ninja mr-2"></i>Food <span
                        className="text-red-700">Ninja</span></a>
            </div>
            <div className="font-bold">
                <a href="#" className="py-2 px-5">Home</a>
                <a href="#order" className="py-2 px-5">Order</a>
                <a href="#contact" className="py-2 px-5">Contact</a>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 lg:ml-48 mt-12 lg:mt-32 text-center lg:text-left">
                <span className="font-bold text-hero">
                    Ninja food
                </span>
                <span className="font-bold text-6xl block ml-48 xl:block">
                    your choice
                </span>
            </div>
            <div className="col-span-5 lg:mt-40 hidden md:block">
                <img src="images/pizza-hero.png" className="h-64 mx-auto lg:mx-0" />
            </div>
        </div>
    </div>
    );
};

export default Header;