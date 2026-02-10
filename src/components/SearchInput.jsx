import { useState } from "react";

const SearchInput = ({ onChange }) => {
  const [text, setText] = useState("");
  const onChangeHandler = (event) => {
    const value = event.target.value;
    setText(value);
    onChange(value);
  };

  return (
    <div className="exercise-search-wrapper">
      <label htmlFor="name-input">Type to search</label>
      <input
        className="search-input"
        id="name-input"
        onChange={(event) => onChangeHandler(event)}
        type="text"
        placeholder="Bench press"
        value={text}
      />
    </div>
  );
};

export default SearchInput;
