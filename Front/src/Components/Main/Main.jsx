import BarChart from './BarChart/BarChart'
import LineChart from './LineChart/LineChart'
import RadarChart from './RadarChart/RadarChart'
import PieChart from './PieChart/PieChart'






export default function Main() {


    return (
        <div className="main">
            <h2>Bonjour <span>Gné</span></h2>
            <p>Félicitation ! Vous avez explosé vos objectif hier 👏</p>
            <BarChart />
            <LineChart />
            <RadarChart />
            <PieChart />
        </div>
    )
}