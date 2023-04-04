import React from "react";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "John Doe",
  email: "example@gmail.com",
  address: "123 Main St, Anytown, USA",
};

function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}

export default App;
