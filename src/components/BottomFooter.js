import { DownOutlined } from '@ant-design/icons';
import React from 'react';
import { useSelector } from 'react-redux';
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

    const theme = useSelector(state => state.theme.mode)

    return (
        <div className={`footer ${theme === 'dark' && 'dark-footer-bg'}`}>
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
