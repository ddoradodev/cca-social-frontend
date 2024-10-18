import Card from "./character-card";
import { useEffect, useState } from "react";
import { getCharacters1 } from "@/api/rick-and-morty";
import ButtonBar from "./button-bar";
export type CharacterType = {
  id: number;
  name: string;
  species: string;
  image: string;
};
export const Home = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [page, setPage] = useState(1);
  console.log(page);

  useEffect(() => {
    getCharacters1(page).then((res) => {
      setCharacters(res);
    });
  }, [page]);

  // name the a functional component using pascal case
  return (
    <div className="flex flex-col  ">
      <ButtonBar setPage={setPage} currentPage={page} />
      <div className="flex flex-col sm:flex-row sm:flex-wrap ">
        {characters?.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
      <ButtonBar setPage={setPage} currentPage={page} />
    </div>
  );
};

export default Home;
