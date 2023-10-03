import { PieChart, Pie, Cell } from 'recharts'
const data4 = [
    { todayScore: 12 },
    { todayScore: 88 }
]

const color = [
    "#E60000", "#ffffff"

]

export default function pieChart() {
    return (
        <div className='pieChart'>
            <h3 className='pieChart__title'>Score</h3>
            <PieChart width={300} height={300}>
                <Pie data={data4} dataKey="todayScore" cx="50%" cy="50%" innerRadius={80} outerRadius={90} fill="#E60000" startAngle={180} endAngle={-180} cornerRadius={50}>
                    {
                        data4.map((entry, index) => (

                            <Cell key={`cell-${index}`} fill={color[index]} />
                        ))
                    } 
                </Pie>
            </PieChart>
            <p className='pieChart__text'> <span className='pieChart__text__big'>{data4[0].todayScore}%</span> <br/> de votre objectif</p>
        </div>
    )
}