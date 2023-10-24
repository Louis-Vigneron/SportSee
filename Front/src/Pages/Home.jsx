import { Link } from 'react-router-dom';

import Logo from '../Assets/logo.png';
import Header from '../Components/Header/Header';

function Home() {
  return (

    <div className="home">
      <div className='home__logo'>
                        <img className='home__logo__img'
                            src={Logo}
                            alt="Logo"
                        />
                    </div>
        <div className='home__box'>
          <h2 className='home__box__title'>Select user to begin</h2>
          <Link className='home__box__link' to={"user/18"}>User 18 Cecilia</Link>
          <Link className='home__box__link' to={"user/12"}>User 12 Karl</Link>
        </div>
      </div>

  );
}

export default Home;
