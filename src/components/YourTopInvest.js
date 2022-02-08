import { Col, Row } from 'antd';
import React from 'react';
import './YourTopInvest.css'
import { Table, Tag, Space } from 'antd';
import { ArrowRightOutlined, CaretDownOutlined } from '@ant-design/icons';
import { TinyLine } from '@ant-design/plots';
import { useSelector } from 'react-redux';

const { Column, ColumnGroup } = Table;

const data = [
    {
      key: '1',
      firstName: 'John',
      qty: 10,
      ltp: 32,
      cur: ['₹25,15,66,035.40', '₹10,040.32 (+12.50%)'],
      pl: ['₹25,15,66,035.40', '₹10,040.32 (+12.50%)'],
    },
    {
      key: '2',
      firstName: 'Jim',
      qty: 10,
      ltp: 42,
      cur: ['₹25,15,66,035.40', '₹10,040.32 (+12.50%)'],
      pl: ['₹25,15,66,035.40', '₹10,040.32 (+12.50%)'],
    },
    {
      key: '3',
      firstName: 'Joe',
      qty: 10,
      ltp: 32,
      cur: ['₹25,15,66,035.40', '₹10,040.32 (+12.50%)'],
      pl: ['₹25,15,66,035.40', '₹10,040.32 (+12.50%)'],
    },
];

const Graph = ({data}) => {

    const config = {
    height: 40,
    width: 60,
    autoFit: false,
    data,
    smooth: true,
    };
    return <TinyLine {...config} />;

}


function YourTopInvest() {

    const investments = useSelector((state) => state.account.investments)
    return (
        <div className='top-invest'>
            <div className="top-invest-title">Your top performing investments</div>
            <Row gutter={[32, 16]}>
                <Col lg={{span: 17}}>
                    <Table dataSource={investments} pagination={false} >
                        <Column 
                            title="Name" 
                            dataIndex="image" 
                            key="image"
                            render={
                                (data, index) => (
                                    <div className='table-name'>
                                        {console.log(index)}
                                        <div className="profile">
                                            <img src={data} /> 
                                        </div>      
                                        <div className='table-name-details'>
                                            <div className='table-title'>{index._id}</div>
                                            <div className='table-cmpy'>{index.name}</div>
                                        </div>
                                        <div className="table-graph">
                                            <Graph data={index.chart_plots} />
                                        </div>
                                    </div>                                    
                                )
                            } 
                        />
                        <Column title="Qty" dataIndex="qty" key="qty" />
                        <Column title="Ltp" dataIndex="ltp" key="ltp" />
                        <Column title="Cur. Val" dataIndex="currentValue" key="currentValue"
                            render={currentValue => (
                                <>
                                <div className='cur-val'>{currentValue}</div> 
                                {/* <div className='cur-val-up'>{cur[1]}</div>  */}
                                </>
                            )}    
                        />
                        <Column title="P&L" dataIndex="profitAndLoss" key="profitAndLoss"
                            render={pl => (
                                <>
                                <div className='cur-val'>{pl}</div> 
                                {/* <div className='cur-val-up'>{pl[1]}</div>  */}
                                </>
                            )}    
                        />
                        {/* <Column title="Cur. Val" dataIndex="cur" key="cur"
                            render={cur => (
                                <>
                                <div className='cur-val'>{cur[0]}</div> 
                                <div className='cur-val-up'>{cur[1]}</div> 
                                </>
                            )}    
                        />
                        <Column title="P&L" dataIndex="pl" key="plr"
                            render={pl => (
                                <>
                                <div className='cur-val'>{pl[0]}</div> 
                                <div className='cur-val-up'>{pl[1]}</div> 
                                </>
                            )}    
                        /> */}
                    </Table>
                    <div className='tb-end'>
                        <div className='drop-down'>Last7 days <CaretDownOutlined /> </div>
                        <a className='all-investments'>All Investments <ArrowRightOutlined /> </a>
                    </div>
                </Col>
                <Col lg={{span: 7}}>
                    <div className="more-insights">
                        <img src="/assests/icons/moreinfo.png" alt="" className="more-info" />
                        <div className="more-insights-title">
                            <img src="/assests/icons/dot.png" alt="" />
                            <span>You have 25% investable cash in your bank account.</span>
                        </div> 
                        <p>You have ₹5,00,147 in your bank account which can be used to invest for your future.</p>
                        <div className='more-insights-btm'>
                            <div>
                                More Insights <ArrowRightOutlined />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default YourTopInvest;
