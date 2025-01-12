import { HomeHeader } from "@components/HomeHeader";
import { Container } from "./styles";
import { InfoBox } from "@components/InfoBox";
import { Button } from "@components/Button/Index";

export function Home() {
  return (
    <Container>
      <HomeHeader />
      <InfoBox />

      <Button
        title="Nova refeição"
        textAbove="Refeições"
        icon="ADD"
        type="PRIMARY"
      />
    </Container>
  );
}
