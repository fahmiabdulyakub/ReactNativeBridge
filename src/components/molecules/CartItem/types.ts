export interface PropsType {
  image: string;
  title: string;
  price: number;
  quantity: number;
  onPressPlus: () => void;
  onPressMinus: () => void;
}
