interface Props {
  onClick: () => void;
}

export default function AddToCartButton({ onClick }: Props) {
  return (
    <button className="btn" onClick={onClick}>
      Lägg i varukorgen
    </button>
  );
}
