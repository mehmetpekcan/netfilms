import React from "react";

import { FeatureMovieLoading } from "@/components/featured-movie";
import { CategoriesLoading } from "@/components/categories";
import { MoviesSectionLoading } from "@/components/movies-section";

function HomeLoading() {
  return (
    <>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </>
  );
}

export default HomeLoading;
