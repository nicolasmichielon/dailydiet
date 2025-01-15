import { useNavigation, useRoute } from "@react-navigation/native";
import { Text } from "react-native";
import {
  Container,
  Title,
  Subtitle,
  InDietImage,
  NotInDietImage,
} from "./styles";
import { Button } from "@components/Button";
import React from "react";

type RouteParams = {
  isInDiet: boolean;
};

export function Feedback() {
  const route = useRoute();
  const navigation = useNavigation();
  const { isInDiet } = route.params as RouteParams;

  return (
    <Container>
      <Title type={isInDiet ? "PRIMARY" : "SECONDARY"}>
        {isInDiet ? "Continue assim!" : "Que pena!"}
      </Title>
      <Subtitle>
        {isInDiet ? (
          <>
            Você{" "}
            <Subtitle style={{ fontWeight: "bold" }}>
              continua dentro da dieta
            </Subtitle>
            . Muito bem!
          </>
        ) : (
          <>
            Você{" "}
            <Subtitle style={{ fontWeight: "bold" }}>saiu da dieta</Subtitle>{" "}
            dessa vez, mas continue se esforçando e não desista!
          </>
        )}
      </Subtitle>
      {isInDiet ? <InDietImage /> : <NotInDietImage />}
      <Button
        title="Ir para a página inicial"
        icon="NONE"
        onPress={() => navigation.navigate("home")}
        style={{ width: 191 }}
      />
    </Container>
  );
}
