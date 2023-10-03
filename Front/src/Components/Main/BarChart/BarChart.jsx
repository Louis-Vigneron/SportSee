import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts'
const data = [
    {
        day: '2020-07-01',
        kilogram: 80,
        calories: 240
    },
    {
        day: '2020-07-02',
        kilogram: 80,
        calories: 220
    },
    {
        day: '2020-07-03',
        kilogram: 81,
        calories: 280
    },
    {
        day: '2020-07-04',
        kilogram: 81,
        calories: 290
    },
    {
        day: '2020-07-05',
        kilogram: 80,
        calories: 160
    },
    {
        day: '2020-07-06',
        kilogram: 78,
        calories: 162
    },
    {
        day: '2020-07-07',
        kilogram: 76,
        calories: 390
    }
]

export default function barChart() {

    const maxKg = Math.max(...data.map(item => item.kilogram));
    const minKg = Math.min(...data.map(item => item.kilogram));
    const maxKcal = Math.max(...data.map(item => item.calories));

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="barChart__label">
                    <p className="barChart__label__cat">{`${payload[0].value}kg`}</p>
                    <p className="barChart__label__cat">{`${payload[1].value}Kcal`}</p>
                </div>
            );
        }

        return null;
    };
    return (
        <div className='barChart'>
            <div className='barChart__info'>
                <h3 className='barChart__info__title'>Activité quotidienne</h3>
                <div className='nextTo'>
                    <div className='barChart__info__color barChart__info__color--kg'></div>
                    <p className='barChart__info__legend'> Poids(kg)</p>

                    <div className='barChart__info__color barChart__info__color--kcal'></div>
                    <p className='barChart__info__legend'> Calories brûlées (kCal)</p>
                </div>

            </div>
            <ResponsiveContainer width="100%" height="85%">
                <BarChart width={500} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" tickLine={false} axisLine={{ stroke: '#DEDEDE' }} tick={{ fill: '#9B9EAC' }} />
                    <YAxis
                        yAxisId="kg"
                        orientation='right'
                        domain={[minKg - 1, maxKg + 1]}
                        ticks={[minKg - 1, (maxKg + minKg) / 2, maxKg + 1]}
                        allowDataOverflow={true}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        yAxisId="kcal"
                        hide
                        allowDataOverflow={true}
                        domain={[0, maxKcal + 100]}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="kilogram" fill="#282D30" yAxisId="kg" barSize={10} radius={[20, 20, 0, 0]} />
                    <Bar dataKey="calories" fill='#E60000' yAxisId="kcal" barSize={10} radius={[20, 20, 0, 0]} />
                </BarChart>
                </ResponsiveContainer>
        </div>
    )
}