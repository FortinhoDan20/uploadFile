import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

export const onUploadFile = createAsyncThunk(
  "upload/onUploadFile",
  async ({ file, toast }, { rejectWithValue }) => {
    try {
      const response = await api.uploadFile(file);
      toast.success("Successfull created Product");
      //   useNavigate("/");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const uploadSlice = createSlice({
  name: "upload",
  initialState: {
    fileLink: null,
    error: "",
    loadings: false,
  },
  extraReducers: {
    [onUploadFile.pending]: (state, action) => {
      state.loading = true;
    },
    [onUploadFile.fulfilled]: (state, action) => {
      state.loading = false;
      state.fileLink = action.payload.data?.url;
    },
    [onUploadFile.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default uploadSlice.reducer;
