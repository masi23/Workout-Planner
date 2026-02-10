import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const generateTemplatePDF = (template) => {
  const doc = new jsPDF();

  doc.setProperties({
    title: template.name,
    subject: "Workout plan",
    author: "Workout App",
  });

  doc.setFontSize(18);
  doc.text(template.name, 14, 20);

  let finalY = 30;

  template.exercises.forEach((exercise) => {
    doc.setFontSize(12);
    doc.text(exercise.name, 14, finalY + 10);

    const rows = exercise.sets.map((set, index) => [
      index + 1,
      `${set.weight} kg`,
      set.reps,
    ]);

    autoTable(doc, {
      startY: finalY + 15,
      head: [["Set", "Weight", "Reps"]],
      body: rows,
    });

    finalY = doc.lastAutoTable.finalY + 10;
  });

  return doc;
};

export default generateTemplatePDF;
