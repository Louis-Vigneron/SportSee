import {CartesianGrid, XAxis, YAxis, Tooltip, Bar, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, Radar, PieChart, Pie, Cell, Label } from 'recharts'
import BarChart from './BarChart/BarChart'


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

  
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            if (payload.length > 1) {
                return (
                    <div className="custom-tooltip">
                        <p className="label">{`${payload[0].value}kg`}</p>
                        <p className="label">{`${payload[1].value}Kcal`}</p>
                    </div>
                );
            } else {
                return (
                    <div className="custom-tooltip">
                        <p className="label">{`${payload[0].value} min`}</p>
                    </div>
                );
            }

        }

        return null;
    };



    return (
        <div className="main">
            <h2>Bonjour <span>Gné</span></h2>
            <p>Félicitation ! Vous avez explosé vos objectif hier 👏</p>
            <div>
                
                <BarChart/>
            </div>

            <div>
                <LineChart width={730} height={250} data={data2} >
                    <CartesianGrid vertical={false} horizontal={false} fill="#E60000" />
                    <XAxis dataKey="day" />
                    <YAxis domain={[-25]} hide />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="natural" dataKey="sessionLength" stroke="#ffffff" strokeWidth={2} dot={false} />
                </LineChart>

            </div>

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