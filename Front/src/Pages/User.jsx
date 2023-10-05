import Header from '../Components/Header/Header'
import Main from '../Components/Main/Main';
import { useParams } from 'react-router-dom';
import { fetchUserData } from '../Service/Service';
import { useEffect, useState } from 'react';

function User() {
  const userId = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchUserData(userId.id);
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [userId.id]);

  return (
    <>
      <Header />
      <Main userData={userData} />
    </>
  );
}


export default User;
