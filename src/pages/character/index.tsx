import { getCharactersById } from "@/api/rick-and-morty";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterType } from "../home/index";
import CharacterCard from "../home/character-card";

const CharacterDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [characterData, setcharacterData] = useState<CharacterType>();
  useEffect(() => {
    getCharactersById(id).then((res) => {
      setcharacterData(res.data);
    });
  }, [id]);
  console.log(characterData);

  return (
    <div>
      <CharacterCard character={characterData} />
    </div>
  );
};

export default CharacterDetail;
