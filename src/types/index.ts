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

