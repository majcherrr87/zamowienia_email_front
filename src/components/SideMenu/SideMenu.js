import React, {useEffect, useState} from 'react';
import {MenuItem} from "./MenuItem";

import logo from '../../assets/pobrane.png';
import user from '../../assets/pobrane.jpg';
import './sideMenu.css';


export const SideMenu = (props) => {
    const [inActive, setInActive] = useState(false);
    const [contractors, setContractors] = useState([]);

    const subMenus = contractors.map(contractor => ({
        name: contractor.name_contractor,
        to: `/dostawca/${contractor.name_contractor}`
    }))

    const menuItems = [
        {name: 'Pulpit', to: '/', icon: `bi bi-speedometer2`},
        {
            name: 'Dostawcy',
            to: '/dostawcy',
            icon: 'bi bi-truck',
            subMenus
        },
        {name: 'Ustawienia', to: '/ustawienia', icon: 'bi bi-gear'},
    ];


    useEffect(() => {
        if (inActive) {
            document.querySelectorAll('.sub-menu').forEach((el) => {
                el.classList.remove('active')
            });
        }
        props.onCollapse(inActive);

    }, [inActive]);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/ad/all');
            const data = await res.json();
            setContractors(data);
            console.log(data)
        })();
    }, []);

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



