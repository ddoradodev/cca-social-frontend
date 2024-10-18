import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Button } from "@/components/ui/button";

const ButtonBar = ({
  setPage,
  currentPage,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}) => {
  const handleNext = () => {
    setPage((prev) => prev + 1);
  };
  const handleBack = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };
  return (
    <div className="flex flex-row justify-center gap-4 my-1">
      <Button onClick={handleBack} variant="outline" size="icon">
        <MdArrowBackIosNew className="h-4 w-4 text-black" />
      </Button>{" "}
      <p className=" h-10 py-1 px-4 text-xl text-center font-bold text-black my-auto rounded-lg bg-white">
        {currentPage}
      </p>
      <Button variant="outline" onClick={handleNext} size="icon">
        <MdArrowForwardIos className="h-4 w-4 text-black" />
      </Button>
    </div>
  );
};

export default ButtonBar;
