import React, { useState } from "react";

export default function FileUpload() {
  const [files, setFiles] = useState([]);

  const handleFiles = (e) => {
    const selected = Array.from(e.target.files).map((file) => {
      const preview = URL.createObjectURL(file);
      return { file, preview };
    });
    setFiles((prev) => [...prev, ...selected]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="file-upload">
      <input
        type="file"
        multiple
        onChange={handleFiles}
        id="fileInput"
        className="file-input"
      />
      <label htmlFor="fileInput" className="upload-btn">
        Choose Files
      </label>
      <div className="preview-list">
        {files.map(({ file, preview }, idx) => (
          <div key={idx} className="preview-item">
            {file.type.startsWith("image/") ? (
              <img src={preview} alt={file.name} className="preview-img" />
            ) : (
              <div className="file-icon">
                <span>📄</span>
              </div>
            )}
            <div className="file-info">
              <p className="file-name">{file.name}</p>
              <button onClick={() => removeFile(idx)} className="remove-btn">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
