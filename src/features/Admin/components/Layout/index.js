import React from 'react';
import Header from '../Header';
import NavBar from '../NavigationBar';

const LayoutAdmin = (props) => {
    return (
        <div className="flex h-screen bg-gray-50">
        <NavBar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="h-full pb-16 overflow-y-auto">
            <div className="container px-6 mx-auto grid">{props.children}</div>
          </main>
        </div>
      </div>
    );
};

export default LayoutAdmin;