import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Donator } from "./Donator";
import { ShareDialog } from "./Share";
import { generalLink } from "../utils/links";
import { ProgressProps } from "@/types";
import { donators } from "@/utils/data";

export function ProgressCard({goalAmount, currentAmount}: ProgressProps) {
  const progressPercent = (currentAmount / goalAmount) * 100
  return (
    <Card className="flex flex-col justify-around w-full lg:h-[640px]">
      <CardHeader>
        <CardTitle>${currentAmount}</CardTitle>
        <Progress value={progressPercent} className="h-2" />
        <CardDescription>raised out of ${goalAmount} ({progressPercent}%)</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button className="w-full">
          <a href={generalLink} target="_blank">
            Donate now
          </a>
        </Button>
        <ShareDialog />
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <span className="font-semibold text-lg">Recent donations</span>
        {donators.map((donator) => (
          <Donator {...donator} />
        ))}
      </CardFooter>
    </Card>
  );
}
