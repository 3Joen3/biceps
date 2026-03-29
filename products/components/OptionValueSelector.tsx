import { ProductOption } from "../types";

interface Props {
  option: ProductOption;
  onSelect: (optionValueId: number) => void;
}

export default function OptionValueSelector({ option, onSelect }: Props) {
  return (
    <div>
      <label htmlFor={option.name}>Välj {option.name}:</label>
      <select id={option.name} onChange={(e) => onSelect(Number(e.target.value))}>
        {option.values.map((value) => (
          <option key={value.id} value={value.id}>
            {value.name}
          </option>
        ))}
      </select>
    </div>
  );
}
