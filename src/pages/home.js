import { users } from "../data/users";
import { useState } from "react";
import Card from "../components/card";

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleLike = () => {
    setIndex(index + 1);
  };

  const handleDislike = () => {
    setIndex(index + 1);
  };

  return (
    <div>
      <Card user={users[index]} />
      <button onClick={handleDislike}>❌</button>
      <button onClick={handleLike}>❤️</button>
    </div>
  );
}
