import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
    Home, About, Events, Products, Contact, History, Services, Location
} from './Page'
import { Page404 } from './Page404'


export default function App() {
    return (
        <div>


            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                    <Route path='/history' element={<History />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/location' element={<Location />} />
                <Route path='/event' element={<Events />} />
                <Route path='/product' element={<Products />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </div>
    )
}