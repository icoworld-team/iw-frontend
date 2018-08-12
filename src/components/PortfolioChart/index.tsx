import React from 'react'
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';


export default function PortfolioChart ({data, currency}:any) {
    return (
        <div>
            <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={data}
                           margin={{top: 10, right: 10, left: 0, bottom: 0}}>
                    <XAxis dataKey="time" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type='monotone' dataKey={currency} stroke='#3367d6' fill='#3367d6' />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}