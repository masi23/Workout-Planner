import { useContext } from "react";
import WorkoutContext from "../context/WorkoutContext";
import TemplateButton from "./TemplateButton";

const TemplatesDashboard = () => {
  const { templates, setTemplates, currentTemplateIdx, setCurrentTemplateIdx } =
    useContext(WorkoutContext);
  let newTemplateIndex = templates.length > 0 ? templates.length : 0;

  const addTemplate = () => {
    setTemplates([
      ...templates,
      {
        id: templates.length,
        name: `Template ${newTemplateIndex + 1}`,
        exercises: [],
      },
    ]);
    setCurrentTemplateIdx(newTemplateIndex);
  };

  const deleteTemplate = (templateIndex) => {
    setTemplates(
      templates.filter((template, index) => index !== templateIndex),
    );
  };

  return (
    <div className="dashboard-wrapper">
      <h1>Your workout templates</h1>
      <div className="templates-wrapper">
        <TemplateButton
          templateId={newTemplateIndex}
          handleClick={addTemplate}
        />
        {templates.map((template, templateIndex) => (
          <TemplateButton
            key={template.id}
            templateId={template.id}
            templateName={template.name}
            handleClick={setCurrentTemplateIdx}
            handleDelete={() => deleteTemplate(templateIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default TemplatesDashboard;
