import React, { FC } from "react";
import { Repository } from "../hooks/types";
import RepositoryCard from "./RepositoryCard";
import { useFavorites } from "../store/favorites";
import { useFetchRepositories } from "../hooks/useRepos";
import { useGithubUserStore } from "../store/githubuser";
import Loading from "./Loading";

type Props = {};

const RepositoriesList: FC<Props> = () => {
  const { user } = useGithubUserStore();
  const { data, isLoading } = useFetchRepositories(user);
  const { favorites } = useFavorites();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col px-[8%] mt-10">
          <div className="">
            <h2 className="mb-3 text-3xl tracking-wider font-bold text-white">
              Repositories list of: {user}
            </h2>
            <p className="mb-3 text-2xl tracking-wider font-semibold text-white">
              total of repos:{" "}
              <span className="text-blue-500">{data?.length || 0}</span>
            </p>
            <p className="mb-5 text-2xl tracking-wider font-semibold text-white">
              total of favorites repos:{" "}
              <span className="text-blue-500">{favorites.length || 0}</span>
            </p>
          </div>
          <div className="mx-auto flex flex-wrap  gap-3">
            {data?.map((repository) => (
              <RepositoryCard
                key={repository.id}
                repository={repository}
                isFavorite={favorites.includes(repository.id)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RepositoriesList;
