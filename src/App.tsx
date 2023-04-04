import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  return (
    <div className="App">
      <button onClick={getUsers}>fetch data</button>
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
