import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TemplatesDashboard from "./components/TemplatesDashboard.jsx";
import TemplatePage from "./components/TemplatePage.jsx";
import ExercisesPage from "./components/ExercisesPage.jsx";
import WorkoutContext from "./context/WorkoutContext.jsx";

const App = () => {
  const loadedTemplates = JSON.parse(localStorage.getItem("templates"));
  const [templates, setTemplates] = useState(loadedTemplates || []);
  const [currentTemplateIdx, setCurrentTemplateIdx] = useState(0);
  return (
    <WorkoutContext.Provider
      value={{
        templates,
        setTemplates,
        currentTemplateIdx,
        setCurrentTemplateIdx,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TemplatesDashboard />} />
          <Route path="/template" element={<TemplatePage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
        </Routes>
      </BrowserRouter>
    </WorkoutContext.Provider>
  );
};

export default App;
