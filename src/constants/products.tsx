import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://uni-metrix.vercel.app/",
    title: "Uni Metrix",
    description:
      "A ultimate destination for startups and businesses, delivering an all-encompassing arsenal of cutting-edge marketing tools.",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Nextjs", "Tailwindcss", "TypeScript"],
    slug: "aceternity",
    content: (
      <div>
        <p>
        Maximize Your Reach. Amplify Your Impact.<br/><br/>
At Uni Metrix, we help you:

Track and analyze customer behavior
Optimize campaigns for peak performance
Personalize experiences across channels
Measure ROI with precision
Transform Your Marketing Strategy with Uni Metrix' Solutions:
Performance Marketing
Analytics and Reporting
Content Optimization
Lead Generation and Nurturing
Elevate Your Brand. Elevate Your Business.
        </p>
       
      </div>
    ),
  },
  {
    href: "https://github.com/vijayindalkar/LogEx",
    title: "LogEx",
    description:
      "Helps you to monitor and manage your expenses effectively, providing insights into your spending patterns, enabling better financial planning, and promoting smarter budgeting decisions.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["Nextjs", "Tailwindcss", "TypeScript"],
    slug: "algochurn",
    content: (
      <div>
        <p>
        Track your expenses effortlessly and gain insights into your spending habits. Our tool helps you stay on top of your finances, budget smarter, and make informed financial decisions to reach your goals
        </p>
      </div>
    ),
  },
  {
    href: "https://car-rental-phi-eight.vercel.app/",
    title: "RentKarr",
    description:
      "Website for renting cars",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "moonbeam",
    content: (
      <div>
        <p>
        A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an easy-to-use interface for searching, comparing, and reserving cars from a wide selection of vehicles that vary in make, model, size, and price.
        </p>
      </div>
    ),
  },
  {
    href: "https://tailwindmasterkit.com",
    title: "Tailwind Master Kit",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Reactjs", "Nodejs", "Expressjs"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
];
