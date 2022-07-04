import React, {useEffect, useState} from 'react';
import {MenuItem} from "./MenuItem";

import './sideMenu.css';
import logo from '../../assets/pobrane.png'
import user from '../../assets/pobrane.jpg'


const menuItems = [
    {name: 'Dashboard', to: '/', icon: `bi bi-speedometer2`},
    {
        name: 'Content',
        to: '/content',
        icon: 'bi bi-speedometer2',
        subMenus: [{name: 'Courses', to: '/content/courses'}, {name: 'Video', to: '/content/video'}],
    },
    {name: 'Design', to: '/design', icon: 'bi bi-speedometer2'},
];

export const SideMenu = (props) => {
    const [inActive, setInActive] = useState(false);

    useEffect(() => {
        if (inActive) {
            document.querySelectorAll('.sub-menu').forEach((el) => {
                el.classList.remove('active')
            })
        }
        props.onCollapse(inActive)

    }, [inActive])

    return (
        <div className={`side-menu ${inActive ? 'inActive' : ''} `}>
            <div className='top-section'>
                <div className='logo'>
                    <img src={logo} alt="barn burger"/>
                </div>
                <div onClick={() => setInActive(!inActive)} className='toggle-menu-btn'>
                    {inActive
                        ? (<i className="bi bi-arrow-right-square-fill"></i>)
                        : (<i className="bi bi-arrow-left-square-fill"></i>)
                    }
                </div>
            </div>

            <div className="search-controller">
                <button className='search-btn'>
                    <i className="bi bi-search"></i>
                </button>
                <input type="text" placeholder={'search'}/>
            </div>

            <div className="divider"></div>

            <div className="main-menu">
                <ul>
                    {menuItems.map((menuItems, index) => (
                        <MenuItem
                            key={index}
                            name={menuItems.name}
                            to={menuItems.to}
                            icon={menuItems.icon}
                            subMenus={menuItems.subMenus || []}
                            onClick={() => {
                                if (inActive) {
                                    setInActive(false);
                                }
                            }}
                        />
                    ))}
                </ul>
            </div>
            <div className="side-menu-footer">
                <div className='avatar'>
                    <img src={user} alt="user"/>
                </div>
                <div className="user-info">
                    <h5>Adrian Majcher</h5>
                    <p>majcherrr87@gmail.com</p>
                </div>

            </div>
        </div>
    );
}



