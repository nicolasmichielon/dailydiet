import { Title } from "./styles";

type Props = {
  text: string;
};

export function ListHeader({ text }: Props) {
  return <Title>{text}</Title>;
}
