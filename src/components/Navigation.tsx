// ./src/components/Navigation.tsx

import { Client, Content, isFilled } from "@prismicio/client";
import { PrismicLink } from "@prismicio/react";

export const Navigation = async ({
  client,
}: {
  client: Client<Content.AllDocumentTypes>;
}): Promise<JSX.Element> => {
  const navigation = await client.getSingle("navigation");

  return (
    <>
    <nav className="font-bold text-sm self-center">
    <ul className="flex flex-wrap">
      {isFilled.group(navigation.data.menu_items) &&
        navigation.data.menu_items.map((item) => {
          return (
            <li key={item.label} className="mx-2 my-1">
              <PrismicLink field={item.link}>{item.label}</PrismicLink>
            </li>
          );
        })}
    </ul>
  </nav>
  </>
  );
};