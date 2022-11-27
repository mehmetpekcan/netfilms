import { notFound } from "next/navigation";
import React from "react";
import { MovieContainer } from "@/containers/movie";

import { fetchSingleMovie } from "@/services/movie";

async function MoviePage({ params, searchParams }) {
  const movieDetail = await fetchSingleMovie(params.id);

  if (movieDetail.success === false) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Something went wrong!");
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
