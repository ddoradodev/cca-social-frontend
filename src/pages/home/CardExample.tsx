import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type Artist = {
  name: string;
  description: string;
  url: string;
};

const CardExample = ({ artist }: { artist: Artist }) => {
  return (
    <Card className="w-6/12  mx-auto my-2">
      <CardHeader>
        <CardTitle>{artist.name}</CardTitle>
        <CardDescription>{artist.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img className="w-[200px] h-[200px]" src={artist.url} alt="img" />
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default CardExample;
