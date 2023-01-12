import React, { useState } from "react";
import { useGithubUserStore } from "../store/githubuser";

type Props = {};

const SetUser = (props: Props) => {
  const { setUser } = useGithubUserStore();
  const [userName, setUserName] = useState("");
  const handleClick = () => {
    if (!userName) return;
    setUser(userName);
  };
  return (
    <div>
      <h1 className="text-4xl text-white mb-5">Enter your github username: </h1>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        className="h-12 w-[250px] text-white text-lg mr-5 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-600"
      />
      <button
        onClick={handleClick}
        type="submit"
        className="text-white text-xl capitalize px-4 py-2 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-600"
      >
        submit user
      </button>
    </div>
  );
};

export default SetUser;
