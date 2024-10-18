import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CharacterType } from ".";

const CharacterCard = ({ character }: { character: CharacterType }) => {
  return (
    <Card className="w-[320px] mx-auto my-2 sm:w-[420px] text-center">
      <CardHeader>
        <CardTitle className="mx-auto">{character.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          className="w-[200px] h-[200px] mx-auto"
          src={character.image}
          alt="img"
        />
      </CardContent>
      <CardFooter className="flex flex-row justify-center ">
        <p>{character.species}</p>
      </CardFooter>
    </Card>
  );
};

export default CharacterCard;
