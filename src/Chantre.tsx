import React, { useState, useEffect } from 'react';
import { CustomeCard } from '@/components/ui/Custome-card';
import axios from 'axios';
import { ButtonBar } from './components/ButtonBar';


// Sample Image Array with placeholder descriptions


function Chantre() {
   // Start from page 1
  const [personajes, setPersonajes] = useState([]);
  const [pages,setPages]=useState(1)
   // State to store total pages

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${pages}`)
      .then((response) => {
        setPersonajes(response.data.results);
  // Set the total pages from the API
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [pages]);

  // Handler functions for buttons
  

  return (
    <>
      <div className='flex flex-col h-full'>
       <ButtonBar totalPages={pages} setPages={setPages}/>

   

        <div className='flex flex-col flex-wrap lg:flex-row'>
          {personajes.map((x) => (
            <div key={x.id}>
              <CustomeCard data={x} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Chantre;
