import { Speech, Coins } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { generalLink } from "../utils/links";
import { MainCardProps } from "@/types";
import { features } from "@/utils/data";

export function MainCard({title, author, howLongAgo, description}: MainCardProps) {
  return (
    <Card className="flex flex-col justify-around w-full lg:h-[640px]">
      {" "}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{author}, {howLongAgo}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-4">
            <Speech />
            <p className="font-medium leading-none">
              Join us in making difference!
            </p>
          </div>
          <p className="text-sm p-2">{description}</p>
        </div>
        <div>
          {features.map((feature, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {feature.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full hidden lg:flex">
          <Coins className="mr-2 h-6 w-6" />
          <a href={generalLink} target="_blank">
            Donate now
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
