import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <Link className='home__link' to={"user/18"}>User 18 Cecilia</Link>
      <Link className='home__link' to={"user/12"}>User 12 Karl</Link>
      <Link className='home__link' to={"user/test"}>User Test</Link>
    </div>
  );
}

export default Home;
