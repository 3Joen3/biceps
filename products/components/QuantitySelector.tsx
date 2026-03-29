import { Minus, Plus } from "react-feather";

interface Props {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export default function QuantitySelector({ quantity, onDecrease, onIncrease }: Props) {
  return (
    <div className="flex items-center">
      <button onClick={onDecrease}>
        <Minus />
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>
        <Plus />
      </button>
    </div>
  );
}
