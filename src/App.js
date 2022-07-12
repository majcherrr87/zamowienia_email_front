import React, {useContext, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {SideMenu} from "./components/SideMenu/SideMenu";
import {Dashboard} from './components/Dashboard/Dashboard';
import {Contractors} from "./components/Contractors/Contractors";
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {EmployeeContext} from "./contexts/EmployeeContext";
import {Orders} from "./components/Orders/Orders";


export const App = () => {
    const [inActive, setInActive] = useState(false);
    const {employees} = useContext(EmployeeContext);

    return (

        <div className='App'>

            <SideMenu
                onCollapse={(inActive) => {
                    setInActive(inActive);
                }}
            />

            <div className={`container ${inActive ? 'inActive' : ''} `}>
                <Routes>
                    <Route path={'/'} element={<Dashboard/>}/>
                    <Route path={'/dostawcy'} element={<Contractors/>}/>

                    {
                        employees.map((e, index) =>
                            <Route key={index}
                                   path={`/dostawca/${e.name_contractor}`}
                                   element={<Orders name={e.name_contractor}/>}
                            />)
                    }

                </Routes>
            </div>


        </div>
    );
}


