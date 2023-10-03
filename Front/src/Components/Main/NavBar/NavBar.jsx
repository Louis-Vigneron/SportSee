import Yoga from '../../../Assets/yoga.png';
import Swim from '../../../Assets/swim.png';
import Bike from '../../../Assets/bike.png';
import Bodybuilding from '../../../Assets/body.png';

export default function NavBar (){
    return(
        <div className="navBar">
            <div className='navBar__sport'>
                <div className="navBar__sport__cat">
                    <img
                        src={Yoga}
                        alt="Yoga"            
                        />  
                </div>
                <div className="navBar__sport__cat">
                    <img
                        src={Swim}
                        alt="Swim"                
                        />  
                </div>
                <div className="navBar__sport__cat">
                    <img
                        src={Bike}
                        alt="Bike"                
                        />  
                </div>
                <div className="navBar__sport__cat">
                    <img
                        src={Bodybuilding}
                        alt="Bodybuilding"                
                        />  
                </div>
            </div>
            <p className="navBar__copy">Copiryght, SportSee 2020</p>
        </div>
    )
}