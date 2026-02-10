import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import HelpTooltip from "./HelpTooltip";
import WorkoutContext from "../context/WorkoutContext";

const ExerciseListItem = ({ exercise }) => {
  const navigate = useNavigate();

  const { templates, setTemplates, currentTemplateIdx } =
    useContext(WorkoutContext);
  const handleClick = (e) => {
    if (e.target.className !== "help-tooltip-btn") {
      console.log("exercise clicked: ", exercise.name);
      const updatedTemplates = templates;
      updatedTemplates[currentTemplateIdx].exercises.push({
        id: updatedTemplates[currentTemplateIdx].exercises.length,
        name: exercise.name,
        sets: [{ reps: 0, weight: 0 }],
      });
      console.log("updated.", updatedTemplates);

      setTemplates(updatedTemplates);
      navigate("/template");
    }
  };

  const tooltipText = `${exercise.desc}
    [${exercise.muscles}]`;
  return (
    <div
      onClick={(e) => handleClick(e)}
      className="exercise-row"
      title="Click an item to add it to your plan"
    >
      <span>{exercise.name}</span>
      <HelpTooltip text={tooltipText} />
    </div>
  );
};

export default ExerciseListItem;
