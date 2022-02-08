import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import moment from 'moment';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './News.css'

const NewsCard = ( {title, img, date} ) => (
    <div className='news-card'>
        <img src={img} alt="" />
        <div className="news-card-title">{title}</div>
        <div className="news-card-date">{moment(date).format("MMM Do YY") }</div>
    </div>
)

function News() {

    const slider = useRef(null)
    const [count, setCount] = useState(0)

    // load news from redux
    const news = useSelector((state) => state.news.news)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        draggable: true,
        // arrows: true,
    };

    return (
        <div className='news'>
            <div className="news-title">
                <div>In the news</div>
                <div>
                    <LeftCircleOutlined className={`${count === 0 && 'disabled' }`} onClick={() => { count !== 0 && slider?.current?.prev()}} disabled={count === 0 ? true : false} />
                    <RightCircleOutlined onClick={() => slider?.current?.next()}  />
                </div>
            </div>
            <div className="news-cards">
                <Carousel ref={slider} afterChange={idx => setCount(idx)} {...settings}>
                    {
                        news?.map(news => <NewsCard key={news._id} title={news.title} img={news.featuredImage} date={news.createdAt} /> )
                    }

                </Carousel>
            </div>
        </div>
    );
}

export default News;
