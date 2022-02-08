import { BellOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Badge, Menu } from 'antd';
import React, { useState } from 'react';
import './NavMenu.css'

const MenuItems = [
    {
        title: 'Overview'
    },
    {
        title: 'Investments'
    },
    {
        title: 'Expenses'
    },
    {
        title: 'Discover'
    },
]

function NavMenu() {
    const [active, setActive] = useState('Overview')

    return (
        <div className='menu'>
            <div className="menu-wrapper">
                <div className="logo">
                    <img src="/assests/Logo.png" alt="" />
                </div>
                <div className="divider" />
                <div className="menu-items">
                    {
                        MenuItems.map((item, index) => (
                            <li key={index}>
                                <a className={`${active === item.title && 'active'}`} href="#">{item.title}</a>
                            </li>
                        ))
                    }

                    <div className="search">
                        <SearchOutlined />
                        <input size={10} type="text" placeholder='Search for Investments, Assets...' />
                    </div>
                    <div className='badge'>
                        <img className='dark' src="/assests/icons/dark.png" alt="" />
                        <div className="badge-count">
                            <span>2</span>
                        </div>
                    </div>
                    <div className='badge'>
                        <BellOutlined />
                        <div className="badge-count">
                            <span>2</span>
                        </div>
                    </div>
                    <div className="profile-wrap">
                        <div className="profile">
                            <span>HS</span>
                        </div>
                        <DownOutlined />
                    </div>
                </div>

            </div>
        </div> 
        );
}

export default NavMenu;
