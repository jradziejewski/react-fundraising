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
import { DonatorProps } from "@/types";

const donators: Array<DonatorProps> = [
  { name: "Emily Thompson", amount: 50.0, howLongAgo: "1 minute ago" },
  { name: "Alex Rodriguez", amount: 100.0, howLongAgo: "3 minutes ago" },
  { name: "Sarah Johnson", amount: 25.0, howLongAgo: "5 minutes ago" },
  { name: "Michael Chen", amount: 75.0, howLongAgo: "34 minutes ago" },
  { name: "Emma Davis", amount: 200.0, howLongAgo: "1 hour ago" },
];

export function ProgressCard() {
  return (
    <Card className="flex flex-col justify-around w-full lg:h-[640px]">
      <CardHeader>
        <CardTitle>$131,22</CardTitle>
        <Progress value={65} className="h-2" />
        <CardDescription>raised out of $200</CardDescription>
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
