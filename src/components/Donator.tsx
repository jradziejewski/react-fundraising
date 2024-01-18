import { HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { DonatorProps } from "@/types";

export function Donator({name, amount, howLongAgo}: DonatorProps) {
  return (
    <Card className="w-full flex items-center p-2 border-none">
      <HeartHandshake className="w-6 h-6 mx-4" />
      <div>
        <span className="text-sm">{name}</span>
        <CardContent className="flex items-center p-0">
          <span className="font-semibold">${amount}</span>
          <span className="divide-current px-2">•</span>
          <span className="text-xs">{howLongAgo}</span>
        </CardContent>
      </div>
    </Card>
  );
}
