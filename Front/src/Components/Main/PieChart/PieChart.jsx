import { PieChart, Pie, Cell } from 'recharts'

export default function pieChart(props) {
    const color = [
        "#E60000", "#ffffff"

    ]
    const data = props.todayScore
    return (
        <div className='pieChart'>
            <h3 className='pieChart__title'>Score</h3>
            <PieChart width={300} height={300}>
                <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={80} outerRadius={90} fill="#E60000" startAngle={180} endAngle={-180} cornerRadius={50}>
                    {
                        data.map((entry, index) => (

                            <Cell key={`cell-${index}`} fill={color[index]} />
                        ))
                    }
                </Pie>
            </PieChart>
            <p className='pieChart__text'> <span className='pieChart__text__big'>{data[0].value}%</span> <br /> de votre objectif</p>
        </div>
    )
}