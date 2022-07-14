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
import {OrderContextProvider} from "./contexts/OrderContext";
import {SendEmail} from "./components/SendEmail/SendEmail";


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
                <OrderContextProvider>
                    <Routes>
                        <Route path={'/'} element={<Dashboard/>}/>
                        <Route path={'/dostawcy'} element={<Contractors/>}/>
                        <Route path={'/wysylanie'} element={<SendEmail/>}/>


                        {
                            employees.map((e, index) =>
                                <Route key={index}
                                       path={`/dostawca/${encodeURIComponent(e.name_contractor)}`}
                                       element={<Orders
                                           id_contractor={e.id_contractor}
                                           name={e.name_contractor}
                                           email={e.email_contractor}
                                       />}
                                />)
                        }


                    </Routes>
                </OrderContextProvider>
            </div>


        </div>
    );
}


