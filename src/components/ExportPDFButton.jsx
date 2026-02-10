import generateTemplatePDF from "../utils/exportPDF";

const ExportPDFButton = ({ template }) => {
  const handleDownload = () => {
    const doc = generateTemplatePDF(template);
    doc.save(`${template.name}.pdf`);
  };
  return <button onClick={handleDownload}>⬇️ Download</button>;
};

export default ExportPDFButton;
