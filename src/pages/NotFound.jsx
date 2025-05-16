import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import { Link } from 'react-router'


const NotFound = () => {
    return (
        <>
            <Header />
            <h1>Error 404</h1>

            <button><Link to='/' >Volver al inicio</Link></button>
            <Footer />
        </>
    )
}

export default NotFound
