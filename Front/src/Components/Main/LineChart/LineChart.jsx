import { XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts'
const data2 = [
    {
        day: 1,
        sessionLength: 30
    },
    {
        day: 2,
        sessionLength: 23
    },
    {
        day: 3,
        sessionLength: 45
    },
    {
        day: 4,
        sessionLength: 50
    },
    {
        day: 5,
        sessionLength: 0
    },
    {
        day: 6,
        sessionLength: 0
    },
    {
        day: 7,
        sessionLength: 60
    }
]
const extendedData = [
    {
        day: 0,
        sessionLength: data2[0].sessionLength
    },
    ...data2,
    {
        day: 8,
        sessionLength: data2[6].sessionLength + 10
    },
];

export default function lineChart() {
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="lineChart__label">
                    <p className="lineChart__label__time">{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='lineChart'>
            <h3 className='lineChart__title'>Durée moyenne des sessions</h3>
            <div className='lineChart__chart'> 
                <LineChart width={354} height={175} data={extendedData} >
                    <XAxis dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#ffffff' }}
                        opacity={0.5}
                    />
                    <YAxis domain={[-10]} hide />
                    <Tooltip content={<CustomTooltip />} cursor={false}/>
                    <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" strokeWidth={2} dot={false} activeDot={{ r: 7, stroke: "rgba(255,255,255,0.2)", strokeWidth: 16 }} />
                </LineChart>
            </div>

            <div className='lineChart__opacity'></div>
        </div>

    )
}