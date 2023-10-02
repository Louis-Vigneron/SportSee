import {CartesianGrid, RadarChart, PolarGrid, PolarAngleAxis, Radar, PieChart, Pie, Cell, Label } from 'recharts'
import BarChart from './BarChart/BarChart'
import LineChart from './LineChart/LineChart'




const data3 = [


    {
        value: 80,
        kind: 'cardio'
    },
    {
        value: 120,
        kind: 'energy'
    },
    {
        value: 140,
        kind: 'endurance'
    },
    {
        value: 50,
        kind: 'strength'
    },
    {
        value: 200,
        kind: 'speed'
    },
    {
        value: 90,
        kind: 'intensity'
    }
]

const data4 = [
    { todayScore: 12 },
    { todayScore: 88 }
]

const color = [
    "#E60000","#ffffff"

]
export default function Main() {


    return (
        <div className="main">
            <h2>Bonjour <span>Gné</span></h2>
            <p>Félicitation ! Vous avez explosé vos objectif hier 👏</p>
          
                
                <BarChart/>         
                <LineChart/>
           
                

          

            <div>
                <RadarChart outerRadius={90} width={730} height={250} data={data3}>
                    <CartesianGrid fill="#282D30" />
                    <PolarGrid radialLines={false} stroke="#ffffff" />
                    <PolarAngleAxis dataKey="kind" />
                    <Radar dataKey="value" fill="#E60000" fillOpacity={0.6} />

                </RadarChart>

            </div>

            <div>
                <PieChart width={730} height={250}>
                    <Pie data={data4} dataKey="todayScore"  cx="50%" cy="50%" innerRadius={75} outerRadius={90} fill="#E60000" startAngle={180} endAngle={-180} cornerRadius={50}>
                    {
      data4.map((entry, index) => (
        
        <Cell key={`cell-${index}`} fill={color[index]}/>
      ))
    } <Label value= {`${data4[0].todayScore}% de votre objectif`}
        position="center"/>
                    </Pie>                  
                
                </PieChart>

            </div>
        </div>
    )
}