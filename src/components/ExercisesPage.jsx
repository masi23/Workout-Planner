import { useState, useMemo } from "react";
import exercises from "../data/exercises";
import SearchInput from "./SearchInput";
import ExerciseListItem from "./ExerciseListItem";

const ExercisesPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const filteredExercises = useMemo(() => {
    return exercises.filter((exercise) => {
      const matchesSearch =
        searchValue.length === 0 ||
        exercise.name.toLowerCase().includes(searchValue.toLowerCase());
      return matchesSearch;
    });
  });

  return (
    <div className="exercise-list-wrapper">
      <SearchInput onChange={setSearchValue} />
      <div className="rows-wrapper">
        {filteredExercises.map((exercise) => {
          return <ExerciseListItem key={exercise.id} exercise={exercise} />;
        })}
      </div>
    </div>
  );
};

export default ExercisesPage;
