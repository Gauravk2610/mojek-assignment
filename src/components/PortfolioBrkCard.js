import { Progress } from 'antd';
import React from 'react';
import './PortfolioBrkCard.css'

function PortfolioBrkCard({assets: {_id, total, assets}}) {
    console.log(assets)
    return (
        <div className='portfolio-card'>
            <div className="portfolio-card-header">
                <img src="/assests/icons/bank.png" alt="" />
                <div className='portfolio-card-title'>
                    <div>
                        <div className='portfolio-assests-name'>{_id}</div>
                        <div className='portfolio-assests-value'>₹{total}</div>
                    </div>
                    <div>
                        <Progress strokeWidth={10}  type="circle" percent={30} success={{ percent: 30 }} width={40} />
                    </div>
                </div>
            </div>
            <div className="portfolio-card-data">
                {
                    assets.map(data => (
                        <div className='portfolio-card-assests-detail'>
                            <span>{data.asset}</span>
                            <Progress percent={data.percentageConsumption === "NaN" ? 0 : data.percentageConsumption} strokeWidth={5} success={{ percent: data.percentageConsumption === "NaN" ? 0 : data.percentageConsumption }} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default PortfolioBrkCard;
