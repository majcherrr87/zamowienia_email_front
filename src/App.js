import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {SideMenu} from "./components/SideMenu/SideMenu";
import {Dashboard} from './components/Dashboard/Dashboard';
import {Contractors} from "./components/Contractors/Contractors";
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const App = () => {
    const [inActive, setInActive] = useState(false);

    return (

        <div className='App'>

        <SideMenu
                    onCollapse={(inActive) => {
                        console.log(inActive);
                        setInActive(inActive);
                    }}
                    />
                    <div className={`container ${inActive ? 'inActive' : ''} `}>
                        <Routes>
                            <Route path={'/'} element={<Dashboard/>}/>
                            <Route path={'/dostawcy'} element={<Contractors/>}/>
                        </Routes>
                    </div>

        </div>
    );
}


