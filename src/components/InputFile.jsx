import { MDBFile, MDBSpinner } from "mdb-react-ui-kit";
import React from "react";
import { useSelector } from "react-redux";
import useFileUpload from "./useFileUpload";

export default function InputFile() {
  const { handleFileChange } = useFileUpload();
  const { loading } = useSelector((state) => ({ ...state.upload }));

  return (
    <>
      <MDBFile
        label="Entre le fichiers"
        id="customFile"
        type="file"
        // value={file}
        name="image"
        //   onChange={onInputChange}
        onChange={handleFileChange}
        required
        invalid
        validation="Please provide your image"
        disabled={loading}
      />
      {loading ? (
        <MDBSpinner role="status">
          <span className="visually-hidden">loading...</span>
        </MDBSpinner>
      ) : null}
    </>
  );
}
