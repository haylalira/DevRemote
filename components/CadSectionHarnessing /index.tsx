import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import WebIcon from "@mui/icons-material/Web";
import LockIcon from "@mui/icons-material/Lock";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

export function CardSectionHarnessing() {
  return (
    <div className="flex justify-center gap-12 mt-32 mx-6">
      <Card className="w-96 rounded-t-[30px]  rounded-b-[30px] h-96 flex-col">
        <CardContent className="font-extrabold text-2xl mt-24 flex flex-col items-center">
          <WebIcon sx={{ fontSize: "50px", mb: 1 }} /> 
          <h1>Usability</h1>
        </CardContent>
        <CardFooter className="text-center mt-2">
          <p>Easy to understand and use interfaces</p>
        </CardFooter>
      </Card>

      <Card className="w-96 rounded-t-[30px]  rounded-b-[30px] h-96">
        <CardContent className=" font-extrabold text-2xl mt-24 flex flex-col items-center">
          {" "}
          <LockIcon sx={{ fontSize: "50px", mb: 1 }} /> <h1>Security</h1>
        </CardContent>
        <CardFooter>
          <p>Concern about your data from its origin.</p>
        </CardFooter>
      </Card>

      <Card className="w-96 rounded-t-[30px]  rounded-b-[30px] h-96">
        <CardContent className=" font-extrabold text-2xl mt-24 flex flex-col items-center">
          <AllInclusiveIcon sx={{ fontSize: "50px", mb: 1 }} />{" "}
          <h1>Longevity</h1>
        </CardContent>
        <CardFooter>
          <p>Solid practices ensure lasting sustainability.</p>
        </CardFooter>
      </Card>
    </div>
  );
}
