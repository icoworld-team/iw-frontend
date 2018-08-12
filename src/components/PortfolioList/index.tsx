import React from 'react'
import Portfolio from '../Portfolio'
import Button from '@material-ui/core/Button'

export default function PortfolioList () {
        const sampleData = [
            {
                id: 1,
                title: 'Portfolio 1',
                chartData: [
                    {time: '01.09.2018', USD: 4000, BTH: 2400, ETH: 2400},
                    {time: '02.09.2018', USD: 3000, BTH: 1398, ETH: 2210},
                    {time: '03.09.2018', USD: 2000, BTH: 9800, ETH: 2290},
                    {time: '04.09.2018', USD: 2780, BTH: 3908, ETH: 2000},
                    {time: '05.09.2018', USD: 1890, BTH: 4800, ETH: 2181},
                    {time: '06.09.2018', USD: 2390, BTH: 3800, ETH: 2500},
                    {time: '07.09.2018', USD: 3490, BTH: 4300, ETH: 2100},
                ],
                paragraph: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis dolor libero minima quidem repellendus sapiente sequi?
                Ad cumque doloribus illum minima porro praesentium, quam. Ea magnam quibusdam quo reiciendis
                similique!`,
                tableData: {
                    ticker: 'eth',
                    price: 500,
                    amount: 123
                }
            },
            {
                id: 2,
                title: 'Portfolio 2',
                chartData: [
                    {time: '01.09.2018', USD: 4000, BTH: 2400, ETH: 2400},
                    {time: '02.09.2018', USD: 3000, BTH: 1398, ETH: 2210},
                    {time: '03.09.2018', USD: 2000, BTH: 9800, ETH: 2290},
                    {time: '04.09.2018', USD: 2780, BTH: 3908, ETH: 2000},
                    {time: '05.09.2018', USD: 1890, BTH: 4800, ETH: 2181},
                    {time: '06.09.2018', USD: 2390, BTH: 3800, ETH: 2500},
                    {time: '07.09.2018', USD: 3490, BTH: 4300, ETH: 2100},
                ],
                paragraph: `Ad cumque doloribus illum minima porro praesentium, quam. Ea magnam quibusdam quo reiciendis
                similique! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolor libero minima quidem 
                repellendus sapiente sequi?`,
                tableData: {
                    ticker: 'bth',
                    price: 654,
                    amount: 456
                }
            }
        ];

        const elements = sampleData.map(function (item) {
            return <Portfolio item={item}/>
        });
        return (
            <div>
                {elements}
                <Button variant="raised" color="primary">Add a portfolio</Button>
            </div>
        )
}