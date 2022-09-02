export interface PropsType {
  image: string;
  title: string;
  price: string;
  quantity?: number;
  onPressAdd?: () => void;
  onPressPlus?: () => void;
  onPressMinus?: () => void;
}
