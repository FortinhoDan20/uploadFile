import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { onUploadFile } from "../features/upload/uploadSlice";

const useFileUpload = () => {
  const [file, setfile] = useState("");
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    if (e.target.files) {
      // setFile(e.target.files[0]);
      setfile(e.target.files[0]);
      // console.log(e.target.files[0]);
      dispatch(onUploadFile({ image: file, toast }));
    }
  };

  return {
    handleFileChange,
    file,
  };
};

export default useFileUpload;
