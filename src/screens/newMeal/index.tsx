import React, { useEffect, useState } from "react";

import { Container, Form, Row, Title } from "./styles";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { SelectableOption } from "@components/SelectableOption";
import { Button } from "@components/Button";

import { mealAddByDate } from "@storage/meal/mealAddByDate";
import { Alert } from "react-native";
import { dateCreate } from "@storage/date/dateCreate";
import { useNavigation } from "@react-navigation/native";

export function NewMeal() {
  const [isInDiet, setIsInDiet] = useState<boolean>();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const navigation = useNavigation();

  useEffect(() => {
    console.log("isInDiet updated:", isInDiet);
  }, [isInDiet]);

  return (
    <Container>
      <Header />
      <Form>
        <Input type="DEFAULT" text="Nome" onChangeText={setName} />
        <Input type="LARGE" text="Descrição" onChangeText={setDescription} />
        <Row>
          <Input type="SMALL" text="Data" onChangeText={setDate} />
          <Input type="SMALL" text="Hora" onChangeText={setTime} />
        </Row>
        <Title>Está dentro da dieta?</Title>
        <Row>
          <SelectableOption
            text="Sim"
            isSelected={isInDiet ? true : false}
            onPress={() => setIsInDiet(true)}
          />
          <SelectableOption
            text="Não"
            type="SECONDARY"
            isSelected={
              isInDiet === undefined || isInDiet === true ? false : true
            }
            onPress={() => setIsInDiet(false)}
          />
        </Row>
        <Button
          title="Cadastrar Refeição"
          style={{ position: "absolute", marginInline: 24, bottom: 40 }}
          onPress={() => {
            if (
              isInDiet != undefined &&
              name.length > 0 &&
              description.length > 0 &&
              date.length > 0 &&
              time.length > 0
            ) {
              dateCreate(date);
              mealAddByDate(
                { name: name, isInDiet: isInDiet, date: date, time: time },
                date
              );
              navigation.navigate("home");
            } else {
              Alert.alert(
                "Campo inválido",
                "Todos os campos devem ser preenchidos"
              );
            }
          }}
        />
      </Form>
    </Container>
  );
}
