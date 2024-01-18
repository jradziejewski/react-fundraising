import type { FeatureProps, MainCardProps, TierProps, FaqProps, DonatorProps, ProgressProps } from "@/types/index.ts";
import { tierOneLink, tierTwoLink, tierThreeLink } from "./links.ts";

/* Cards data */

export const progressInfo: ProgressProps = {
  goalAmount: 1000,
  currentAmount: 521
}

export const donators: Array<DonatorProps> = [
  { name: "Emily Thompson", amount: 50.0, howLongAgo: "1 minute ago" },
  { name: "Alex Rodriguez", amount: 100.0, howLongAgo: "3 minutes ago" },
  { name: "Sarah Johnson", amount: 25.0, howLongAgo: "5 minutes ago" },
  { name: "Michael Chen", amount: 75.0, howLongAgo: "34 minutes ago" },
  { name: "Emma Davis", amount: 200.0, howLongAgo: "1 hour ago" },
];

export const mainCardInfo: MainCardProps = {
  title: "ChangeMakers Fund",
  author: "@JohnDoe",
  howLongAgo: "2 days ago",
  description:
    "ChangeMakers Fund is a dynamic initiative where your support fuels impactful projects, ranging from hiring talented personnel to launching compelling ad campaigns and implementing innovative features. Every donation brings us closer to creating positive change. Be a part of the change, be a ChangeMaker!",
};

export const tiers: Array<TierProps> = [
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

export const features: Array<FeatureProps> = [
  {
    title: "Fuel Positive Change",
    description:
      "Join a community dedicated to making a difference. Your support amplifies our ability to create positive impacts that resonate beyond boundaries.",
  },
  {
    title: "Interactive Q&A Experience",
    description:
      "Engage with our initiatives through interactive Q&A dropdowns. Learn more about the goals, challenges, and the impact your donation can make.",
  },
  {
    title: "Exclusive Rewards",
    description:
      "Unlock exciting rewards based on donation tiers. Your generosity deserves recognition, and we're excited to offer special incentives as a token of our gratitude.",
  },
];

export const faqs: Array<FaqProps> = [
  {
    question: "How can I donate to the ChangeMakers Fund?",
    answer:
      "Donating is easy! Simply visit our donation section, enter your desired amount, and complete the secure transaction using Stripe checkout.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes, all donations made to the ChangeMakers Fund are tax-deductible. You will receive a confirmation email with the necessary details for tax purposes.",
  },
  {
    question: "Can I choose which project my donation goes to?",
    answer:
      "Absolutely! During the donation process, you can specify if you have a preference for a particular project. Your contribution will be allocated accordingly.",
  },
  {
    question: "How often are project updates provided?",
    answer:
      "We strive to keep our supporters informed. Project updates are typically shared monthly, providing insights into milestones achieved, challenges faced, and the impact of your donations.",
  },
  {
    question: "Are there any additional fees for online transactions?",
    answer:
      "No, we cover all transaction fees associated with online donations. 100% of your intended contribution goes directly to supporting the ChangeMakers Fund initiatives.",
  },
];

