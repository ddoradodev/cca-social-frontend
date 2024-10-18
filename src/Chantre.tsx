import React, { useState } from 'react';
import { CustomeCard } from '@/components/ui/Custome-card';
import chantreImage from '../public/assets/chantre.jpeg'; // Import the image directly
import { useEffect } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
const ImageArray = [
  { id: 1, url: chantreImage, des: 'chantrees una putica' },
  { id: 2, url: chantreImage, des: 'chantrees una putica' },
  { id: 3, url: chantreImage, des: 'chantrees una putica' }
];

function Chantre() {
  const [personajes, setpersonajes] = useState([])
  useEffect(() => {
  axios.get("https://rickandmortyapi.com/api/character").then((chantre)=>setpersonajes(chantre.data.results))
  }, [])
  console.log(personajes)
  return (
<>
<div>

<Button variant="outline" size="icon">
    <ChevronRight className="h-4 w-4" />
  </Button>
  <Button variant="outline" size="icon">
    <ChevronRight className="h-4 w-4" />
  </Button>
</div>
  

    <div className='flex flex-col flex-wrap lg:flex-row'>
      {personajes.map((x) => (
        <div key={x.id}>
<CustomeCard data={x}  />
        </div>
        
      ))}
    </div>
    </>
  );
}

export default Chantre;
