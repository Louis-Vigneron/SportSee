import {ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar} from 'recharts'

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
            <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={80} width={300} height={300} data={data3}>                    
                    <PolarGrid radialLines={false} stroke="#ffffff" />
                    <PolarAngleAxis dataKey="kind" stroke="#ffffff" tickLine={false} />
                    <Radar dataKey="value" fill="#E60000" fillOpacity={0.6} />
                </RadarChart></ResponsiveContainer>
        </div>
    )
}