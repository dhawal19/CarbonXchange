import { Sidebar } from './Sidebar';
import { Marketplace } from './Marketplace';
import { useState , useEffect} from 'react';
import NGOCard from './NGOCard';
const Home = () => {
  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/ngo");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setNgos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className='flex justify-items'>
        <div className='flex-start w-4/12'>
            <Sidebar />
        </div>

        <div className='mt-10 w-4/12 flex flex-col text-white'>
          <h1 className='text-3xl text-center'>Our Ngo Partners</h1>
          {ngos.map((ngo, index) => (
          <NGOCard key={index} props={ngo} />
          ))}
        </div>

        <div className='flex-end  w-4/12'>
            <Marketplace />
        </div>

    </div>
  )
}

export default Home;