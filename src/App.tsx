import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggler } from "./components/ThemeToggler";
import { MainCard } from "./components/MainCard";
import { ProgressCard } from "./components/ProgressCard";
import { TierCard } from "./components/TierCard";
import { FaqSection } from "./components/FaqSection";
import { Toaster } from "./components/ui/toaster";
import {tiers, progressInfo, mainCardInfo} from "./utils/data";

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
            <MainCard {...mainCardInfo}/>
          </div>
          <div className="col-span-2 p-4">
            <ProgressCard {...progressInfo}/>
          </div>
        </div>
        <div className="relative flex py-16 items-center">
          <div className="flex-grow border-t"></div>
          <span className="flex-shrink mx-4 text-4xl font-semibold">
            Elevate Your Impact with Exclusive Tiers
          </span>
          <div className="flex-grow border-t"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-around ">
          {tiers.map((tier) => (
            <TierCard {...tier} />
          ))}
        </div>

        <div className="relative flex pt-16 pb-8 items-center">
          <div className="flex-grow border-t"></div>
          <span className="flex-shrink mx-4 text-4xl font-semibold">FAQ</span>
          <div className="flex-grow border-t"></div>
        </div>
        <div className="pb-6">
          <FaqSection />
        </div>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
