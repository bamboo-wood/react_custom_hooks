import { useState } from "react";
import { UserCard } from "./components/UserCard";
import axios from "axios";
import { User } from "./types/api/user";
import { UserProfile } from "./types/userProfile";

function App() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const onClickFetchUser = () => {
    setLoading(true);
    setError(false);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => {
          return {
            id: user.id,
            name: `${user.name} (${user.username})`,
            email: user.email,
            address: `${user.address.city}, ${user.address.street}, ${user.address.suite}`,
          };
        });
        setUserProfiles(data);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>fetch data</button>
      <br />

      {error ? (
        <p>データの取得に失敗しました</p>
      ) : loading ? (
        <p>loading...</p>
      ) : (
        userProfiles.map((user) => <UserCard key={user.id} user={user} />)
      )}
    </div>
  );
}

export default App;
