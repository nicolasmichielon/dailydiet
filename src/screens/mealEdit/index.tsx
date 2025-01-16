import React, { useEffect, useState, useRef } from "react";

import { Container, Form, Row, Title } from "./styles";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { SelectableOption } from "@components/SelectableOption";
import { Button } from "@components/Button";

import { mealAddByDate } from "@storage/meal/mealAddByDate";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { KeyboardAvoidingView, ScrollView, Keyboard } from "react-native";
import { MealStorageDTO } from "@storage/meal/mealStorageDTO";
import { mealRemoveByDate } from "@storage/meal/mealRemoveByDate";

type RouteParams = {
  meal: MealStorageDTO;
};

export function MealEdit() {
  const route = useRoute();
  const navigation = useNavigation();
  const descriptionInputRef = useRef<any>(null);

  const { meal } = route.params as RouteParams;

  const [isInDiet, setIsInDiet] = useState<boolean>(meal.isInDiet);
  const [name, setName] = useState<string>(meal.name);
  const [description, setDescription] = useState<string>(meal.description);
  const [time, setTime] = useState<string>(meal.time);
  const [date, setDate] = useState<string>(meal.date);
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);

  const validateDate = (date: string) => {
    const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    return dateRegex.test(date);
  };

  const validateTime = (time: string) => {
    const timeRegex = /^\d{2}:\d{2}$/;
    return timeRegex.test(time);
  };

  async function handleSaveChanges() {
    if (
      isInDiet != undefined &&
      name.length > 0 &&
      description.length > 0 &&
      validateDate(date) &&
      validateTime(time)
    ) {
      await mealRemoveByDate(meal.name, meal.date);
      await mealAddByDate(
        {
          name: name,
          isInDiet: isInDiet,
          date: date,
          time: time,
          description: description,
        },
        date
      );
      navigation.navigate("home");
    } else {
      Alert.alert(
        "Campo inválido",
        "Todos os campos devem ser preenchidos corretamente"
      );
    }
  }

  useEffect(() => {}, [isInDiet]);

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
            text="Editar Refeição"
            icon="GoBack"
            onPress={() => navigation.navigate("home")}
          />

          <Form>
            <Input
              type="DEFAULT"
              text="Nome"
              onChangeText={setName}
              onSubmitEditing={() => descriptionInputRef.current?.focus()}
              placeholder={`${meal.name}`}
              value={name}
            />
            <Input
              type="LARGE"
              text="Descrição"
              onChangeText={setDescription}
              inputRef={descriptionInputRef}
              placeholder={`${meal.description}`}
              value={description}
            />
            <Row>
              <Input
                type="SMALL"
                text="Data"
                onChangeText={setDate}
                placeholder={`${meal.date}`}
                value={date}
              />
              <Input
                type="SMALL"
                text="Hora"
                onChangeText={setTime}
                placeholder={`${meal.time}`}
                value={time}
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
              title="Salvar Alterações"
              icon="NONE"
              style={{ marginTop: isKeyboardVisible ? 30 : 150 }}
              onPress={handleSaveChanges}
            />
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
