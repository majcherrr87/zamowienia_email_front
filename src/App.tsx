import React, {useState} from 'react';
import './App.css';
import {SideMenu} from "./components/SideMenu/SideMenu";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const Dashboard = () => {
    return <h1>Dashboard</h1>
};
const Content = () => {
    return <h1>Content</h1>
};
const Courses = () => {
    return <h1>Content/Courses</h1>
};
const Videos = () => {
    return <h1>Content/Videos</h1>
};
const Design = () => {
    return <h1>Design</h1>
};

export const App = () => {
    const [inActive, setInActive] = useState(false);

    return (
        <div className='App'>
            <Router>
                <SideMenu
                    onCollapse={(inActive: boolean) => {
                        console.log(inActive);
                        setInActive(inActive)
                    }}
                />

                <div className={`container ${inActive ? 'inActive' : ''} `}>
                    <Routes>
                        <Route path={'/'} element={<Dashboard/>}/>
                        <Route path={'/content'} element={<Content/>}/>
                        <Route path={'/content/courses'} element={<Courses/>}/>
                        <Route path={'/content/video'} element={<Videos/>}/>
                        <Route path={'/design'} element={<Design/>}/>
                    </Routes>

                </div>


            </Router>
        </div>
    );
}


