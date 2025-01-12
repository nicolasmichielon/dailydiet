import { HomeHeader } from "@components/HomeHeader";
import { Container } from "./styles";
import { InfoBox } from "@components/InfoBox";

export function Home() {
  return (
    <Container>
      <HomeHeader />
      <InfoBox />
    </Container>
  );
}
