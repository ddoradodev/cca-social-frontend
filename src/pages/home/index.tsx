import { useEffect, useState } from "react"
import CustomCard from "../../components/custom-card"
import axios from "axios"
const Artists = [{id:1,name:"Travis",description:"Nació el 30 de abril de 1991 en Houston, Texas. Creció en Missouri City, una zona suburbana de clase media que limita con el suroeste de Houston. Webster vivió con su abuela, pero luego se mudó a los suburbios, donde su padre tenía su propio negocio.",url:"/fein.jpg",footer:"Fein"},
  {id:2,name:"Kendrick",description:"Criado en Compton, California, Lamar desarrolló un interés por la música y la poesía a una temprana edad. Inspirado por presenciar en vivo como Tupac y Dr. Dre grababan el video musical de California Love en su ciudad, Lamar decidió perseguir una carrera como un rapero.",url:"/kendrick.jpg",footer:"Pride"},
  {id:3,name:"Metroo",description:"Criado en St. Louis, Wayne comenzó una carrera de producción en la escuela secundaria y se hizo más conocido por sus exitosas grabaciones con artistas de rap de Atlanta como Future, 21 Savage, Gucci Mane y Migos a mediados de la década de 2010.",url:"/metro.jpg",footer:"Overdue"}]
const Home = () => {
 const [personajes, setpersonajes] = useState([]) 
  useEffect(() => {
axios.get("https://rickandmortyapi.com/api/character/?page=3").then((res)=>setpersonajes(res.data.results))
  
    
  }, [])
  // "id": 1,
  // "name": "Rick Sanchez",
  // "status": "Alive",
  // "species": "Human",
  // "type": "",
  // "gender": "Male",
  // "origin": {
  //   "name": "Earth (C-137)",
  //   "url": "https://rickandmortyapi.com/api/location/1"
  // },
  // "location": {
  //   "name": "Citadel of Ricks",
  //   "url": "https://rickandmortyapi.com/api/location/3"
  // },
  // "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  console.log(personajes)
    return (
      <div className="flex flex-col sm:flex-row gap-4 sm:flex-wrap">
        {personajes?.map((x)=>(
          <CustomCard key={x.id}data={x}/>
        ))}
        
      </div>
    )
  }
  
  export default Home