import React, { useEffect, useState } from "react";

import variables from "../variables/variables";

const ProjectAPI = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    if (file) {
      formData.append("file", file);

      fetch("http://localhost:3001/whatsapp", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          response.json().then((ps) => console.log(ps));
        })
        .then((data) => {})
        .catch((error) => console.error(error));
    }
  };

  return (
    <div style={{ minHeight: variables.minHomeHeight }}>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ProjectAPI;
