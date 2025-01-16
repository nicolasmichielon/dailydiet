import theme from "src/theme";
import styled from "styled-components/native";

type Props = {
  modalVisible: boolean;
};

export const ModalContainer = styled.Modal.attrs((props: Props) => ({
  animationType: "fade",
  transparent: true,
  visible: props.modalVisible,
  backdropColor: "red",
}))``;

export const Background = styled.View`
  background-color: ${theme.COLORS.GRAY_700};
  opacity: 1;
  padding: 24px;

  justify-content: center;
  align-items: center;

  height: 192px;
  width: 80%;
  margin: auto;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.LG}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_200};
  font-weight: bold;

  text-align: center;
`;

export const Row = styled.View`
  margin-top: 32px;
  gap: 12px;

  flex-direction: row;
`;

export const OpacityContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  flex: 1;
  justify-content: center;
  align-items: center;
`;
