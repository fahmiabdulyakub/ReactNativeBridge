export interface PropsType {
  image: string;
  title: string;
  price: string;
  numberItem: number;
  onPressPlus: () => void;
  onPressMinus: () => void;
}
