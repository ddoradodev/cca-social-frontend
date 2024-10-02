import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const CardExample = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Project Name/Titles</CardTitle>
          <CardDescription>Project Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardExample;
