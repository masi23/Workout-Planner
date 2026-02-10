import { useState } from "react";

const SetFieldInput = ({
  fieldValue,
  fieldName,
  exerciseIndex,
  setIndex,
  updateSet,
}) => {
  const [value, setValue] = useState(fieldValue);
  const handleChange = (e) => {
    setValue(e.target.value);
    updateSet(exerciseIndex, setIndex, fieldName, Number(e.target.value));
  };
  return (
    <input
      className="field-input"
      type="number"
      value={value}
      onChange={(e) => handleChange(e)}
      min="0"
    />
  );
};

export default SetFieldInput;
