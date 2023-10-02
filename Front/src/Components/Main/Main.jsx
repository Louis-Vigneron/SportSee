import { PieChart, Pie, Cell, Label } from 'recharts'
import BarChart from './BarChart/BarChart'
import LineChart from './LineChart/LineChart'
import RadarChart from './RadarChart/RadarChart'





const data4 = [
    { todayScore: 12 },
    { todayScore: 88 }
]

const color = [
    "#E60000", "#ffffff"

]
export default function Main() {


    return (
        <div className="main">
            <h2>Bonjour <span>Gné</span></h2>
            <p>Félicitation ! Vous avez explosé vos objectif hier 👏</p>


            <BarChart />
            <LineChart />
            <RadarChart />

            <div>
                <PieChart width={730} height={250}>
                    <Pie data={data4} dataKey="todayScore" cx="50%" cy="50%" innerRadius={75} outerRadius={90} fill="#E60000" startAngle={180} endAngle={-180} cornerRadius={50}>
                        {
                            data4.map((entry, index) => (

                                <Cell key={`cell-${index}`} fill={color[index]} />
                            ))
                        } <Label value={`${data4[0].todayScore}% de votre objectif`}
                            position="center" />
                    </Pie>

                </PieChart>

            </div>
        </div>
    )
}