import { Card, Descriptions, DescriptionsProps, Flex } from "antd";
import { useEffect, useRef } from "react";
import { Navigate, useParams } from "react-router-dom";
import { CharacterData } from "../../components/Character";
import characters from "../../mock/characters.json";
import { CharacterTitle } from "./components/CharacterTitle";

type Keys = keyof CharacterData;
const notDescriptionKeys: Keys[] = ["name", "image"];

const toDescProps = (
  item: CharacterData | undefined,
): DescriptionsProps["items"] => {
  return Object.entries(item ?? [])
    .filter(([key]) => !notDescriptionKeys.includes(key as Keys))
    .map(([key, value]) => ({
      label: key.replace(/^./, (match) => match.toUpperCase()),
      key,
      children: value,
    }));
};

export const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();
  const data = characters.find((c) => c.id.toString() === id);
  const items = useRef(toDescProps(data));

  useEffect(() => {
    items.current = toDescProps(data);
  }, [data]);

  if (data == null) {
    return <Navigate to="/not-found" />;
  }

  return (
    <Card title={<CharacterTitle data={data} />}>
      <Flex gap="middle">
        <img
          src={data.image}
          style={{
            maxHeight: "15rem",
            width: "auto",
            borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: "1rem",
            alignSelf: "flex-start",
          }}
        />
        <Descriptions
          bordered
          column={{ xxl: 1 }}
          items={items.current}
          style={{ flexGrow: 1 }}
        />
      </Flex>
    </Card>
  );
};
