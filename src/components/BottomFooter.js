import { DownOutlined } from '@ant-design/icons';
import React from 'react';
import './BottomFooter.css'

const footerItems = [
    {
        title: 'Terms'
    },
    {
        title: 'Privacy'
    },
    {
        title: 'Help'
    },
    {
        title: 'Cookie Preference'
    },
]

function BottomFooter() {
    return (
        <div className='footer'>
            <div className='footer-items'>
                <div className="more-mojek">
                    More Mojek
                    <DownOutlined />
                </div>
                <div className='divider' />
                <div className="footer-menu-items">
                    {
                        footerItems.map((item, index) => (
                            <div key={index} className='footer-item'>{item.title}</div> 
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default BottomFooter;
