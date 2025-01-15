import React, { useEffect, useState, useRef } from "react";

import { Container, Form, Row, Title } from "./styles";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { SelectableOption } from "@components/SelectableOption";
import { Button } from "@components/Button";

import { mealAddByDate } from "@storage/meal/mealAddByDate";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, ScrollView, Keyboard } from "react-native";

export function NewMeal() {
  const [isInDiet, setIsInDiet] = useState<boolean>();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);

  const navigation = useNavigation();
  const descriptionInputRef = useRef<any>(null);

  const validateDate = (date: string) => {
    const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    return dateRegex.test(date);
  };

  const validateTime = (time: string) => {
    const timeRegex = /^\d{2}:\d{2}$/;
    return timeRegex.test(time);
  };

  useEffect(() => {
    console.log("isInDiet updated:", isInDiet);
  }, [isInDiet]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <Header
            text="Nova Refeição"
            icon="GoBack"
            onPress={() => navigation.navigate("home")}
          />

          <Form>
            <Input
              type="DEFAULT"
              text="Nome"
              onChangeText={setName}
              onSubmitEditing={() => descriptionInputRef.current?.focus()}
              placeholder="Ex: Café da manhã"
            />
            <Input
              type="LARGE"
              text="Descrição"
              onChangeText={setDescription}
              inputRef={descriptionInputRef}
              placeholder="Ex: Pão com manteiga e café"
            />
            <Row>
              <Input
                type="SMALL"
                text="Data"
                onChangeText={setDate}
                placeholder="15.01.2025"
              />
              <Input
                type="SMALL"
                text="Hora"
                onChangeText={setTime}
                placeholder="14:00"
              />
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
              style={{ marginTop: isKeyboardVisible ? 30 : 150 }}
              onPress={async () => {
                if (
                  isInDiet != undefined &&
                  name.length > 0 &&
                  description.length > 0 &&
                  validateDate(date) &&
                  validateTime(time)
                ) {
                  await mealAddByDate(
                    { name: name, isInDiet: isInDiet, date: date, time: time },
                    date
                  );
                  navigation.navigate("home");
                } else {
                  Alert.alert(
                    "Campo inválido",
                    "Todos os campos devem ser preenchidos corretamente"
                  );
                }
              }}
            />
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
