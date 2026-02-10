import { useNavigate } from "react-router-dom";

const TemplateButton = ({
  templateId,
  templateName,
  handleClick,
  handleDelete,
}) => {
  const navigate = useNavigate();

  return (
    <div
      role="button"
      className="template-button"
      onClick={(event) => {
        if (event.target.className === "delete-template") return;
        if (templateName) {
          handleClick(templateId);
        } else {
          handleClick();
        }
        navigate("/template");
      }}
    >
      {handleDelete && (
        <button className="delete-template" onClick={handleDelete}>
          ❌
        </button>
      )}
      {templateName ? (
        <p>{templateName}</p>
      ) : (
        <>
          <span>+</span>
          <p>Create template</p>
        </>
      )}
    </div>
  );
};

export default TemplateButton;
