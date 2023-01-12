import { RepositoriesList, SetUser } from "./components";
import { useGithubUserStore } from "./store/githubuser";

const App = () => {
  const { user } = useGithubUserStore();

  return (
    <div className="w-full h-full min-h-[100vh] bg-black flex justify-center items-center">
      {user ? <RepositoriesList /> : <SetUser />}
      {}
    </div>
  );
};

export default App;
