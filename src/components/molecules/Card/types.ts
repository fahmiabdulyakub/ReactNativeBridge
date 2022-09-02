export interface PropsType {
  image: string;
  title: string;
  price: string;
  quantity?: number;
  onPressPlus?: () => void;
  onPressMinus?: () => void;
}
