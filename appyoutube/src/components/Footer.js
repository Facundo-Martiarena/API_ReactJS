import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './Home.css';
import { useVideoContext } from "../context/context"
import { Link } from 'react-router-dom'

const Footer = () => {

    const { count } = useVideoContext()

    return (
        <Link to="/">
            <div className='footer'>
                <label className='text-secondary'>CANTIDAD DE REPRODUCCIONES: {count}</label>
            </div>
        </Link>
    )
}

export default Footer;
