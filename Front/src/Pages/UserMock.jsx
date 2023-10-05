import BarChart from '../Components/Main/BarChart/BarChart'
import LineChart from '../Components/Main/LineChart/LineChart'
import RadarChart from '../Components/Main/RadarChart/RadarChart'
import PieChart from '../Components/Main/PieChart/PieChart'
import Header from '../Components/Header/Header'

import flame from '../Assets/flame.png'
import chicken from '../Assets/chicken.png'
import apple from '../Assets/apple.png'
import burger from '../Assets/cheeseburger.png'

import { fetchDataMock } from '../Service/ServiceMock'

function UserMock() {
    fetchDataMock()
    let user = fetchDataMock().user[0]
    return (
        <>
            <Header />
            <div className='main'>
                <p className='testInfo'>
                    User ID: {user.userId} <br />
                    Prénom: {user.firstName}<br />
                    Nom: {user.lastName}<br />
                    Âge: {user.age}<br />
                    Score aujourd'hui: {user.todayScore[0].value}%<br />
                    Autre Score aujourd'hui: {user.todayScore[1].value}%<br />
                    kCal: {user.keyData.kCal}<br />
                    Protéines: {user.keyData.protein}<br />
                    Glucides: {user.keyData.carbohydrate}<br />
                    Lipides: {user.keyData.lipid}<br />
                    Activité: <br />{user.activity.map((el) => (
                        <span key={el.day}>
                            Jour : {el.day} <br />
                            Kg : {el.kilogram} <br />
                            kCal: {el.calories}<br />
                        </span>
                    ))}<br />
                    Sessions chronométrées: <br />{user.timesSessions.map((el) => (
                        <span key={el.day + el.sessionLength}>
                            Jour : {el.day}
                            <br />
                            Durée : {el.sessionLength}min <br />
                        </span>
                    ))}<br />
                    Performance: <br />{user.performance.map((el) => (
                        <span key={el.kind}>
                            Valeur : {el.value} <br />
                            Kind : {el.kind}<br />
                        </span>
                    ))}
                </p>
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
        </>
    );
}


export default UserMock;
