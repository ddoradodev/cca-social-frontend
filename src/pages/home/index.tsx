import CardExample from "./CardExample";
import drake from "@/assets/drake.jpeg";
import kanye from "../../assets/kanye.jpeg";

const artists = [
  {
    id: 1,
    name: "travis",
    description: "loremipsun",
    url: "public/travis.jpg",
  },
  {
    id: 2,
    name: "kanye",
    description: "loremipsun",
    url: kanye,
  },
  {
    id: 3,
    name: "drake",
    description: "loremipsun",
    url: drake,
  },
];
const Home = () => {
  // name the a functional component using pascal case
  return (
    <div className="flex flex-row gap-2">
      {artists.map((artist) => (
        <CardExample key={artist.id} artist={artist} />
      ))}
    </div>
  );
};

export default Home;
