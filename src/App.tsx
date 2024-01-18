import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggler } from "./components/ThemeToggler";
import { MainCard } from "./components/MainCard";
import { ProgressCard } from "./components/ProgressCard";
import { TierCard } from "./components/TierCard";
import { tierOneLink, tierThreeLink, tierTwoLink } from "./utils/links";
import { TierProps } from "./types";

const tiers: Array<TierProps> = [
  {
    name: "Change Enthusiast",
    contributionRange: "$25.00 - $49.99",
    description:
      "Embrace the role of a Change Enthusiast! Your support fuels the momentum for positive initiatives. As a token of our gratitude, you'll receive:",
    perks: ["Exclusive project updates", "Personalized thank-you email"],
    link: tierOneLink,
  },
  {
    featured: true,
    name: "Impact Insider",
    contributionRange: "$50.00 - $99.99",
    description:
      "Step into the inner circle as an Impact Insider! Your generosity amplifies our ability to make a real impact. Enjoy all the perks of Tier 1, plus:",
    perks: [
      "Early access to project milestones",
      "Digital certificate of appreciation",
      "Name featured on our website's donor wall",
    ],
    link: tierTwoLink,
  },
  {
    name: "Visionary Catalyst",
    contributionRange: "$100.00 and above",
    description:
      "Become a Visionary Catalyst, steering change with a powerful impact! In addition to Tier 1 and Tier 2 rewards, you'll receive:",
    perks: [
      "Exclusive ChangeMakers Fund merchandise pack",
      "Priority access to beta releases",
      "Invitation to a virtual meet-and-greet with our team",
    ],
    link: tierThreeLink,
  },
];

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="content-grid">
        <div className="breakout text-center flex flex-col items-center py-2">
          <ThemeToggler />
          <h1 className="font-semibold text-3xl py-6">
            Transforming Visions into Reality with ChangeMakers Fund!
          </h1>
        </div>
        <div className="lg:grid grid-cols-5 divide-y-2 lg:divide-none">
          <div className="col-span-3 p-4">
            <MainCard />
          </div>
          <div className="col-span-2 p-4">
            <ProgressCard />
          </div>
        </div>
        <div className="relative flex py-16 items-center">
          <div className="flex-grow border-t"></div>
          <span className="flex-shrink mx-4 text-4xl font-semibold">
            Elevate Your Impact with Exclusive Tiers
          </span>
          <div className="flex-grow border-t"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-around pb-8">
          {tiers.map((tier) => (
            <TierCard {...tier} />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
