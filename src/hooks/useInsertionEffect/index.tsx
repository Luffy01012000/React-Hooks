import { useInsertionEffect } from "react";

const index = () => {
  useInsertionEffect(() => {
    // Create a style tag and insert dynamic CSS
    const style = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.textContent = `
    .dynamic-class{
    color: #212121;
    background-color: lightblue;
    padding:10px;
    font-weight: 600;
    }
    `;
    document.head.appendChild(style);
    return () => {
      // Cleanup: Remove the style tag when the component unmounts
      document.head.removeChild(style);
    };
  }, []);
  return <div className="dynamic-class">Style with useInsertionEffect</div>;
};

export default index;
