import { useDispatch } from "react-redux";
import { onUploadFile } from "../features/upload/uploadSlice";

const useFileUpload = () => {
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    dispatch(onUploadFile(file));
  };

  return {
    handleFileChange,
  };
};

export default useFileUpload;
