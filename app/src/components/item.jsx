function Item({ text, onDelete }) {
  return (
    <li>
      <button onClick={onDelete}>
        Delete
      </button>
      <span>
        {text}
      </span>
    </li>
  );
}

export default Item;