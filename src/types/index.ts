export type DonatorProps = {
  name: string;
  amount: number;
  howLongAgo: string;
};

export type FeatureProps = {
    title: string;
    description: string;
}

export type TierProps = {
    featured?: boolean;
    name: string;
    contributionRange: string;
    description: string;
    perks: Array<string>;
    link: string;
}

export type MainCardProps = {
    title: string;
    author: string;
    howLongAgo: string;
    description: string;
}

export type FaqProps = {
    question: string;
    answer: string;
}

export type ProgressProps = {
  goalAmount: number;
  currentAmount: number;
}
