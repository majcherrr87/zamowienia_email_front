import React, {useContext, useEffect, useState} from 'react';
import {MenuItem} from "./MenuItem";
import {EmployeeContext} from '../../contexts/EmployeeContext';

import logo from '../../assets/pobrane.png';
import user from '../../assets/pobrane.jpg';
import './sideMenu.css';


export const SideMenu = (props) => {
    const [inActive, setInActive] = useState(false);
    const {employees} = useContext(EmployeeContext);


    const subMenus = employees.map(employee => ({
        key: employee.id_contractor,
        name: employee.name_contractor,
        to: `/dostawca/${encodeURIComponent(employee.name_contractor)}`
    }));


    const menuItems = [
        {name: 'Pulpit', to: '/', icon: `bi bi-speedometer2`},
        {
            name: 'Zamówienia',
            to: ' ',
            icon: 'bi bi-cart3',
            subMenus
        },
        {name: 'Dostawcy', to: '/dostawcy', icon: 'bi bi-truck'},
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



