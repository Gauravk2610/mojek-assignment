import React, { useEffect } from 'react';
import './Home.css'
import { Col, Progress, Row, Typography } from 'antd';
import { DualAxes } from '@ant-design/plots';
// import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { Pie } from '@ant-design/plots';
import { NodePanelMain } from '@antv/xflow-extension/es/flowchart-node-panel';
import YourTopInvest from '../components/YourTopInvest';
import PortfolioBrkDwn from '../components/PortfolioBrkDwn';
import Advertise from '../components/Advertise';
import News from '../components/News';
import { useDispatch } from 'react-redux';
import { getInvestments, getPortfolio } from '../features/account/accountSlice';
import { instance } from '../instance';
import { getNews } from '../features/news/newsSlice';

const { TabPane } = Tabs;
const { Title } = Typography;
const data = [
    {
      year: '1991',
      value: 3,
      count: 10,
    },
    {
      year: '1992',
      value: 4,
      count: 4,
    },
    {
      year: '1993',
      value: 3.5,
      count: 5,
    },
    {
      year: '1994',
      value: 5,
      count: 5,
    },
    {
      year: '1995',
      value: 4.9,
      count: 4.9,
    },
    {
      year: '1996',
      value: 6,
      count: 35,
    },
    {
      year: '1997',
      value: 7,
      count: 7,
    },
    {
      year: '1998',
      value: 9,
      count: 1,
    },
    {
      year: '1999',
      value: 13,
      count: 20,
    },
  ];
  const config = {
    data: [data, data],
    xField: 'year',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'line',
        smooth: false,
        color: '#fff',
        lineStyle: {
          lineWidth: 3,
          lineDash: [5, 5],
          opacity: 0.5,
        },
      },
      {
        geometry: 'line',
        smooth: false,
        color: 'white',
        lineStyle: {
          lineWidth: 4,
        },
        
      },
    ],
  };

  function callback(key) {
    console.log(key);
  }

  const piedata = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
  ];

  const pieconfig = {
    appendPadding: 10,
    data: piedata,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    legend: false,
    geometryOptions: [],
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        display: 'none',
        textAlign: 'center',
        fontSize: 0,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '',
      },
    },
  };

function Home() {

  const dispatch = useDispatch()

  const loadInvestments = async() => {
    const data = await instance.get('/account/investments')
    dispatch(getInvestments(data.data.investments))
  }

  const loadPortfolio = async() => {
    const data = await instance.get('/account/portfolio')
    dispatch(getPortfolio(data.data))
  }

  const loadNews = async() => {
    const data = await instance.get('/news/get?limit=16')
    dispatch(getNews(data.data))
  }

  useEffect(() => {
    loadInvestments()
    loadPortfolio()
    loadNews()
  }, [])

    return (
        <div className='container'>
            {/* Intro */}
            <div className="intro">
                <div>
                    <div className='intro-welcome'>☀️ Good Morning, Harpreet</div>
                    <div className='intro-msg'>Welcome back! Your portfolio was last updated on <span className='date'>14th September, 12:56pm</span><img className='refresh' src="/assests/icons/refresh.png" alt="" /></div>
                </div>
                <div className='right-icons'>
                    <div className='insights'>
                        <div className="circle" />
                        <div className="badge-count">
                            <span>2</span>
                        </div>
                    </div>
                    <span>Insight</span>
                </div>
            </div>

            {/* Graph */}
            <div className="chart-graph">
              <div className='platforms'>
                <img src="/assests/platforms/1.png" alt="" />
                <img src="/assests/platforms/2.png" alt="" />
                <img src="/assests/platforms/3.png" alt="" />
                <img src="/assests/platforms/4.png" alt="" />
              </div>
              <Row gutter={[32, 16]}>
                  <Col lg={{span: 17}} >
                      <div className='graph'>
                          <div className="graph-header">
                              <div className="graph-heading">
                                  <div className='graph-text'>Current Net Worth</div>
                                  <div className='graph-count'>22,78,320.93 <sub>+3000%</sub></div>
                              </div>
                              <div className='graph-divider' /> 
                              <div className="graph-detail">
                                  <div className="graph-data-value">
                                      <div className='graph-title'>Invested</div>
                                      <div className='graph-no'>14,32,000.67</div>
                                  </div>
                                  <div className="graph-data-value">
                                      <div className='graph-title'>P&L</div>
                                      <div className='graph-no'>+8,46,320.26 <sub>+30%</sub></div>
                                  </div>
                              </div>
                          </div>
                          <DualAxes {...config} />
                          <div className="graph-btm" />
                      </div>
                  </Col>
                  <Col lg={{span: 7}}>
                      <div className='pie-chart'>
                          <div className="pie-title">
                              <div className='active'>Portfolio</div>
                              <div>Markets</div>
                          </div>
                          <div className="pie">
                              <Pie {...pieconfig} />
                          </div>
                          <div className="pie-data">
                              <div className='pie-data-title'>Banks</div> <Progress percent={30} strokeColor={'green'} />
                          </div>
                          <div className="pie-data">
                              <div className='pie-data-title'>Banks</div> <Progress percent={30} />
                          </div>
                          <div className="pie-data">
                              <div className='pie-data-title'>Banks</div> <Progress percent={30} />
                          </div>
                      </div>
                  </Col>
              </Row>            
            </div>

            {/* YourTopInvestments */}
            <YourTopInvest />

            {/* Your Portfolio breakDown */}
            <PortfolioBrkDwn />

            {/* Advertise Cards */}
            <Advertise />

            {/* News Card */}
            <News />
        </div>
    );
}

export default Home;
