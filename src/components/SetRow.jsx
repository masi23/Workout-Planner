import SetFieldInput from "./SetFieldInput";

const SetRow = ({ set, setIndex, exerciseIndex, updateSet }) => {
  return (
    <div className="set-row">
      <p>{setIndex + 1}.</p>
      <SetFieldInput
        fieldValue={set.weight}
        fieldName="weight"
        exerciseIndex={exerciseIndex}
        setIndex={setIndex}
        updateSet={updateSet}
      />
      <SetFieldInput
        fieldValue={set.reps}
        fieldName="reps"
        exerciseIndex={exerciseIndex}
        setIndex={setIndex}
        updateSet={updateSet}
      />
    </div>
  );
};

export default SetRow;
