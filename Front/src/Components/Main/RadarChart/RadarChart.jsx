import {RadarChart, PolarGrid, PolarAngleAxis, Radar} from 'recharts'

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

export default function radarChart(){
    return(
        <div className='radarChart'>
            <RadarChart outerRadius={130} width={400} height={380} data={data3}>                    
                    <PolarGrid radialLines={false} stroke="#ffffff" />
                    <PolarAngleAxis dataKey="kind" stroke="#ffffff" tickLine={false} />
                    <Radar dataKey="value" fill="#E60000" fillOpacity={0.6} />
                </RadarChart>
        </div>
    )
}