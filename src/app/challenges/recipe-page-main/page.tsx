import Image from "next/image";
import omeletteImage from "../../../../public/recipe-page-main/image-omelette.jpeg";
import { PropsWithChildren, ReactNode } from "react";

const typography = {
  bodyRegular: "text-base leading-6 font-normal",
  bodyBold: "text-base leading-6 font-bold",
  headingL: "text-[40px] leading-10 font-normal",
  headingS: "text-[20px] leading-5 font-semibold",
  headingM: "text-[28px] leading-[100%] font-normal",
};

const textColor = {
  "Dark Raspberry": "text-[#7A284E]",
  "Wenge Brown": "text-[#5F564D]",
  "Dark Charcoal": "text-[#312E2C]",
  "Brandy Red": "text-[#854632]",
};

const Banner = () => {
  return (
    <Image
      className="md:rounded-xl w-full h-auto"
      src={omeletteImage}
      alt="omelette"
      width={656}
      height={300}
      priority
    />
  );
};

const Title = () => {
  return (
    <div>
      <h1
        className={`${textColor["Dark Charcoal"]} mb-6 ${typography.headingL}`}
      >
        Simple Omelette Recipe
      </h1>
      <p className={`${typography.bodyRegular}`}>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </div>
  );
};

const SectionHeader = ({
  children,
  flat = false,
}: PropsWithChildren<{ flat?: boolean }>) => {
  const margin = flat ? "" : "mb-6";
  return (
    <h2
      className={`${typography.headingM} ${margin} ${textColor["Brandy Red"]}`}
    >
      {children}
    </h2>
  );
};

const List = <T,>({
  marker = "disc",
  color = "BrandyRed",
  items = [],
  renderItem = () => null,
}: {
  marker?: "disc" | "decimal";
  color?: "BrandyRed" | "DarkRaspberry";
  items: T[];
  renderItem: (item: T) => ReactNode;
}) => {
  const listStyle = {
    disc: "list-disc",
    decimal: "list-decimal",
  };
  const markerColor = {
    BrandyRed: "marker:text-[#854632]",
    DarkRaspberry: "marker:text-[#7A284E]",
  };
  return (
    <ul
      className={`${markerColor[color]} ${listStyle[marker]} pl-5 flex flex-col gap-2`}
    >
      {items.map((item, index) => (
        <li key={index} className="pl-4">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

const TextWithHeading = ({
  heading = "",
  text = "",
}: {
  heading: string;
  text: string;
}) => {
  return (
    <p>
      <span className={`${typography.bodyBold}`}>{heading}</span>
      &nbsp;
      {text}
    </p>
  );
};

const PreparationTime = () => {
  const list = [
    { heading: "Total:", text: "Approximately 10 minutes" },
    { heading: "Preparation:", text: "5 minutes" },
    { heading: "Cooking:", text: "5 minutes" },
  ];

  return (
    <section className="bg-[#FFF7FB] rounded-xl p-7">
      <h2
        className={`${typography.headingS} mb-4 ${textColor["Dark Raspberry"]}`}
      >
        Preparation time
      </h2>
      <List
        items={list}
        color="DarkRaspberry"
        renderItem={({ heading, text }) => (
          <TextWithHeading heading={heading} text={text} />
        )}
      />
    </section>
  );
};

const Ingredients = () => {
  const list = [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ];

  return (
    <section>
      <SectionHeader>Ingredients</SectionHeader>
      <List items={list} renderItem={(ingredient) => <p>{ingredient}</p>} />
    </section>
  );
};

const Instructions = () => {
  const list = [
    {
      heading: "Beat the eggs:",
      text: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      heading: "Heat the pan:",
      text: "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      heading: "Cook the omelette:",
      text: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      heading: "Add fillings (optional):",
      text: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      heading: "Fold and serve:",
      text: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      heading: "Enjoy:",
      text: "Serve hot, with additional salt and pepper if needed.",
    },
  ];
  return (
    <section>
      <SectionHeader>Instructions</SectionHeader>
      <List
        marker="decimal"
        items={list}
        renderItem={({ heading, text }) => (
          <TextWithHeading heading={heading} text={text} />
        )}
      />
    </section>
  );
};

const Nutrition = () => {
  const list = [
    { dt: "Calories", dd: "277kcal" },
    { dt: "Carbs", dd: "0g" },
    { dt: "Protein", dd: "20g" },
    { dt: "Fat", dd: "22g" },
  ];
  return (
    <section className="flex flex-col gap-6">
      <SectionHeader flat>Nutrition</SectionHeader>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <dl className="flex flex-col">
        {list.map(({ dt, dd }, index) => {
          const isLast = index === list.length - 1;
          return (
            <div className="px-8 py-3 flex flex-row gap-4 border-b border-solid last:border-0">
              <dt className="w-full">{dt}</dt>
              <dd
                className={`w-full ${typography.bodyBold} ${textColor["Brandy Red"]}`}
              >
                {dd}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
};

export default function Page() {
  return (
    <body
      className={`bg-[#F3E5D7] ${textColor["Wenge Brown"]} ${typography.bodyRegular} h-auto md:pt-[127px] md:pb-[127px]`}
    >
      <main className="flex flex-col md:gap-10 md:p-10 md:rounded-3xl bg-white md:max-w-[736px] md:mx-auto">
        <Banner />
        <div className="flex flex-col gap-8 px-8 py-10 md:p-0">
          <Title />
          <PreparationTime />
          <Ingredients />
          <hr />
          <Instructions />
          <hr />
          <Nutrition />
        </div>
      </main>
    </body>
  );
}
