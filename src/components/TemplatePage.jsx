import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WorkoutContext from "../context/WorkoutContext";
import SetRow from "./SetRow";
import ExportPDFButton from "./exportPDFButton";
import PDFPreview from "./PDFPreview";

const TemplatePage = () => {
  const { templates, setTemplates, currentTemplateIdx } =
    useContext(WorkoutContext);

  const navigate = useNavigate();

  const saveTemplate = () => {
    const updatedTemplates = [...templates];
    updatedTemplates[currentTemplateIdx] = templateCopy;
    setTemplates(updatedTemplates);
    localStorage.setItem("templates", JSON.stringify(templates));
  };

  const saveAndExit = () => {
    saveTemplate();
    navigate("/");
  };

  const goToExercises = () => {
    saveTemplate();
    navigate("/exercises");
  };

  const [templateCopy, setTemplateCopy] = useState(null);
  useEffect(() => {
    setTemplateCopy(templates[currentTemplateIdx]);
  }, [currentTemplateIdx, templates]);

  const updateSet = (exerciseIndex, setIndex, field, value) => {
    const updatedExercises = [...templateCopy.exercises];
    updatedExercises[exerciseIndex].sets[setIndex][field] = value;

    setTemplateCopy({
      ...templateCopy,
      exercises: updatedExercises,
    });
  };

  const deleteExercise = (exerciseIndex) => {
    const updatedExercises = templateCopy.exercises.filter(
      (_, index) => index !== exerciseIndex,
    );
    setTemplateCopy({ ...templateCopy, exercises: updatedExercises });
  };

  const addSet = (exerciseIndex) => {
    const updatedTemplate = { ...templateCopy };
    const sets = updatedTemplate.exercises[exerciseIndex].sets;
    sets.push({
      reps: sets[sets.length - 1].reps,
      weight: sets[sets.length - 1].weight,
    });
    setTemplateCopy(updatedTemplate);
  };

  if (!templateCopy) return <p>Loading...</p>;

  return (
    <div className="template-page">
      <div className="buttons-row">
        <button className="save-button" onClick={saveAndExit}>
          ✅Save
        </button>
        <ExportPDFButton template={templateCopy} />
        <PDFPreview template={templateCopy} />
      </div>

      <div className="row-wrapper">
        <label htmlFor="name-input">Template name:</label>
        <input
          id="name-input"
          type="text"
          value={templateCopy.name}
          onChange={(e) =>
            setTemplateCopy({ ...templateCopy, name: e.target.value })
          }
        />
      </div>
      {templateCopy.exercises.map((exercise, exerciseIndex) => (
        <div key={exerciseIndex} className="exercise-wrapper">
          <div className="exercise-header">
            <p>
              <strong>{exercise.name}</strong>
            </p>
            <button
              className="delete-exercise-button"
              onClick={() => deleteExercise(exerciseIndex)}
            >
              ❌
            </button>
          </div>
          <div className="exercise-header">
            <p>Set</p>
            <p>kg</p>
            <p>Reps</p>
          </div>
          {exercise.sets.map((set, setIndex) => (
            <SetRow
              exerciseIndex={exerciseIndex}
              key={setIndex}
              set={set}
              setIndex={setIndex}
              updateSet={updateSet}
            />
          ))}
          <button onClick={() => addSet(exerciseIndex)}>Add set</button>
        </div>
      ))}
      <div className="exercise-wrapper">
        <button onClick={goToExercises}>➕ Add exercise</button>
      </div>
    </div>
  );
};

export default TemplatePage;
