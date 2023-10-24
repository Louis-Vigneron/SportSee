import { useState } from 'react';

import NavBar from './NavBar/NavBar';
import BarChart from './BarChart/BarChart'
import LineChart from './LineChart/LineChart'
import RadarChart from './RadarChart/RadarChart'
import PieChart from './PieChart/PieChart'
import Error from '../Error/Error'

import flame from '../../Assets/flame.png'
import chicken from '../../Assets/chicken.png'
import apple from '../../Assets/apple.png'
import burger from '../../Assets/cheeseburger.png'

export default function Main(props) {

    const [dataMock, setDataMock] = useState(false);

    const buttonMock = () => {
      setDataMock(true); 
    }

    if (props.userData !== null) {
        if (!props.userData.dataMock || dataMock) {
            const user = props.userData.user[0]
            return (
                <div className="main">
                    <div className='main__navBar'>
                        <NavBar />
                    </div>
                    <div className='main__page'>
                        <div className='main__page__welcome'>
                            <h2 className="main__page__welcome__title">Bonjour <span className="main__page__welcome__title__red">{user.firstName}</span></h2>
                            <p className="main__page__welcome__msg">Félicitation ! Vous avez explosé vos objectif hier 👏</p>
                        </div>
                        <div className='NextToMain'>
                            <div className='main__page__charts'>
                                <BarChart activity={user.activity} />
                                <LineChart timesSessions={user.timesSessions} />
                                <RadarChart performance={user.performance} />
                                <PieChart todayScore={user.todayScore} />
                            </div>
                            <div className='main__info'>
                                <div className='main__info__cat'>
                                    <img className='main__info__cat__figure main__info__cat__figure--kCal' src={flame} alt="logo Calories" />
                                    <div className='main__info__cat__box'>
                                        <p className='main__info__cat__box__value'>{user.keyData.kCal}kCal</p>
                                        <p className='main__info__cat__box__type'>Calories</p>
                                    </div>
                                </div>
                                <div className='main__info__cat'>
                                    <img className='main__info__cat__figure main__info__cat__figure--prot' src={chicken} alt="logo Protéines" />
                                    <div className='main__info__cat__box'>
                                        <p className='main__info__cat__box__value'>{user.keyData.protein}g</p>
                                        <p className='main__info__cat__box__type'>Protéines</p>
                                    </div>
                                </div>
                                <div className='main__info__cat'>
                                    <img className='main__info__cat__figure main__info__cat__figure--glu' src={apple} alt="logo Glucides" />
                                    <div className='main__info__cat__box'>
                                        <p className='main__info__cat__box__value'>{user.keyData.carbohydrate}g</p>
                                        <p className='main__info__cat__box__type'>Glucides</p>
                                    </div>
                                </div>
                                <div className='main__info__cat'>
                                    <img className='main__info__cat__figure main__info__cat__figure--lip' src={burger} alt="logo Lipides" />
                                    <div className='main__info__cat__box'>
                                        <p className='main__info__cat__box__value'>{user.keyData.lipid}g</p>
                                        <p className='main__info__cat__box__type'>Lipides</p>
                                    </div>
                                </div>

                            </div></div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="main">
                    <div className='main__navBar'>
                        <NavBar />
                    </div>
                    <Error buttonMock = {buttonMock}/>
                </div>
            )
        }
    }
}