import React from 'react';
import {Outlet} from 'react-router-dom';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout (){
    return (
        <div id= "wrapper">
            <div id= "main">
            <div id= "inner">
            <NavBar/>
            <Outlet/>
            <Footer/>
            </div>
            </div>
        </div>
    )
}