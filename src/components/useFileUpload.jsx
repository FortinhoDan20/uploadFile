import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { onUploadFile } from "../features/upload/uploadSlice";

const useFileUpload = () => {
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    if (e.target.files) {
      const fileToUpload = e.target.files[0];
      console.log(fileToUpload);

      //fornatage fichier
      const formData = new FormData();
      formData.append("image", fileToUpload);

      //envoi upload
      dispatch(onUploadFile({ image: fileToUpload, toast }));
    }
  };

  return {
    handleFileChange,
  };
};

export default useFileUpload;
