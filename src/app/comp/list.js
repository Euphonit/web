import { names } from "./vars";

export default function List() {
  return (
    <div>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
