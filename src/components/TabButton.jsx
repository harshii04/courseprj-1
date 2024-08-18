export default function TabButton({ btnlabel, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{btnlabel}</button>
    </li>
  );
}
