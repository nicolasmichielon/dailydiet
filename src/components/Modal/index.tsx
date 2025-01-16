import { SafeAreaView } from "react-native";
import {
  Background,
  ModalContainer,
  Row,
  Title,
  OpacityContainer,
} from "./styles";
import { Button } from "@components/Button";

type Props = {
  modalVisible: boolean;
  changeVisibilityFunction: () => void;
  onPressConfirm: () => void;
};

export function Modal({
  modalVisible = false,
  onPressConfirm,
  changeVisibilityFunction,
}: Props) {
  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ModalContainer modalVisible={modalVisible}>
        <OpacityContainer>
          <Background>
            <Title>Deseja realmente excluir o registro da refeição?</Title>
            <Row>
              <Button
                icon="NONE"
                type="SECONDARY"
                title="Cancelar"
                onPress={changeVisibilityFunction}
                style={{ width: "50%" }}
              />
              <Button
                icon="NONE"
                title="Sim, excluir"
                onPress={onPressConfirm}
                style={{ width: "50%" }}
              />
            </Row>
          </Background>
        </OpacityContainer>
      </ModalContainer>
    </SafeAreaView>
  );
}
