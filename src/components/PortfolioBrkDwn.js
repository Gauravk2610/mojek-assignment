import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import PortfolioBrkCard from './PortfolioBrkCard';
import './PortfolioBrkDwn.css'

function PortfolioBrkDwn() {

    const slider = useRef(null)
    const [count, setCount] = useState(0)

    const {assets} = useSelector((state) => state.account.portfolio)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: assets?.length >= 4 ? 4 : assets?.length,
        slidesToScroll: 2,
        draggable: true,
        // arrows: true,
    };

    return (
        <div className='yur-portfolio-brk'>
            <div className="yur-portfolio-brk-title">
                <div>Your portfolio breakdown</div>
                <div>
                    <LeftCircleOutlined className={`${count === 0 && 'disabled' }`} onClick={() => { count !== 0 && slider?.current?.prev()}} disabled={count === 0 ? true : false} />
                    <RightCircleOutlined onClick={() => slider?.current?.next()}  />
                </div>
            </div>
            <div className="yur-portfolio-brk-cards">
                <Carousel ref={slider} afterChange={idx => setCount(idx)} {...settings}>
                    
                    {
                        assets?.length > 0 && assets?.map(data => <PortfolioBrkCard key={data._id} assets={data} />)
                    }
                </Carousel>
            </div>
        </div>
    );
}

export default PortfolioBrkDwn;
