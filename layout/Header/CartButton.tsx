import { ShoppingCart } from "react-feather";

export default function CartButton() {
  return (
    <button className="btn p-2 -mr-2">
      <ShoppingCart size={28} />
    </button>
  );
}
