import React from "react";
import useFileUpload from "./useFileUpload";

export default function InputFile() {
  const { handleFileChange } = useFileUpload();
  const { loading } = useSelector((state) => ({ ...state.upload }));

  return (
    <MDBFile
      label="Entre le fichiers"
      id="customFile"
      type="file"
      value={image}
      name="image"
      //   onChange={onInputChange}
      onChange={handleFileChange}
      required
      invalid
      validation="Please provide your image"
      disabled={loading}
    />
  );
}
