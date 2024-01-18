import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

export function TierCard({ featured, name, contributionRange, perks, link }) {
  return (
    <Card
      className={`basis-full p-4 hover:border-primary ${
        featured ? "scale-[105%]" : ""
      }`}
    >
      <CardTitle className="pt-4 text-center">{name}</CardTitle>
      <CardDescription className="text-xl p-4">
        {contributionRange}
        <Button className="w-full my-4">
          <a href={link} target="_blank">
            Choose tier
          </a>
        </Button>
      </CardDescription>
      <CardContent className="text-sm text-justify items-around">
        <div>
          {perks.map((perk, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm  text-left leading-none">{perk}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
