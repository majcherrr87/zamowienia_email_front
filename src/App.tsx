import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {SideMenu} from "./components/SideMenu/SideMenu";
import {Dashboard} from './components/Dashboard/Dashboard';
import {SearchContext} from './contexts/search.context';
import './App.css';
import {Contractors} from "./components/contractors/Contractors";

export const App = () => {
    const [search, setSearch] = useState('');
    const [inActive, setInActive] = useState(false);

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            <div className='App'>
                <Router>
                    <SideMenu
                        onCollapse={(inActive: boolean) => {
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
                </Router>
            </div>
        </SearchContext.Provider>
    );
}


