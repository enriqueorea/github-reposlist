import React, { FC } from "react";
import { Repository } from "../hooks/types";
import { useFavorites } from "../store/favorites";
import { HeartIcon, Eye } from "./";

type Props = {
  repository: Repository;
  isFavorite: boolean;
};

const RepositoryCard: FC<Props> = ({ repository, isFavorite }) => {
  const [addFavorite, removeFavorite] = useFavorites((state) => [
    state.addFavorite,
    state.removeFavorite,
  ]);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(repository.id);
    } else {
      addFavorite(repository.id);
    }
  };

  return (
    <div className="flex px-5 py-2 items-center justify-between h-100% w-[350px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-600">
      <div className="">
        <h3 className="text-xl font-semibold tracking-wide text-white">
          {repository.name}
        </h3>
        <a
          className="text-mf text-blue-600"
          target="_blank"
          href={repository.html_url}
        >
          go to -&gt;
        </a>
      </div>
      <button onClick={toggleFavorite}>
        <HeartIcon favorite={isFavorite} />
      </button>
    </div>
  );
};

export default RepositoryCard;
