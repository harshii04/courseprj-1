export default function TabButton({ btnlabel, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {btnlabel}
      </button>
    </li>
  );
}
