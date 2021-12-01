import React from 'react'
import {Routes,Route} from 'react-router-dom';
import AddMovie from '../AddMovie/AddMovie';
import Home from '../Home/Home';

function ComponentRoutes({search}) {
    return (
        <div>
            <Routes>

                <Route path="/addMovie" element={<AddMovie/>}/>
                <Route path="/" element={<Home search={search}/>}/>
            </Routes>
        </div>
    )
}

export default ComponentRoutes
