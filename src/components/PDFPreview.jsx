import generateTemplatePDF from "../utils/exportPDF";

const PDFPreview = ({ template }) => {
  const handlePreview = () => {
    const doc = generateTemplatePDF(template);
    const blob = doc.output("blob");
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  return (
    <div>
      <button onClick={handlePreview}>Preview</button>
    </div>
  );
};

export default PDFPreview;
