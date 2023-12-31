import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBInput,
  MDBSpinner,
  MDBValidation,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InputFile from "../components/InputFile";
import { createProduct } from "../features/product/productSlice";

const initialState = {
  name: "",
  prix: 0,
  image: "",
};

const Product = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.product }));
  const { name, prix, image } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct({ formValue, navigate, toast }));
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  <MDBCard
    className="container"
    style={{
      width: "30%",
      overflow: "hidden",
      padding: "12px",
      marginTop: "100px",
    }}
  >
    <MDBCardTitle
      style={{
        fontWeight: 700,
        textAlign: "center",
        padding: "12px",
        marginTop: "10px",
      }}
    >
      ENREGISTRER UN PRODUIT{" "}
    </MDBCardTitle>
    <MDBCardBody style={{ marginLeft: "20px" }}>
      <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
        <div className="col-md-12">
          <MDBInput
            label="Entrez le nom du produit"
            type="text"
            value={name}
            name="name"
            onChange={onInputChange}
            required
            invalid
            validation="Please provide your name"
          />
        </div>
        <div className="col-md-12">
          <MDBInput
            label="Entrez le prix du produit"
            type="Number"
            value={prix}
            name="prix"
            onChange={onInputChange}
            required
            invalid
            validation="Please provide your price"
          />
        </div>

        <div className="col-md-12">
          <InputFile />
        </div>

        <div className="col-md-12">
          <MDBBtn style={{ width: "100%" }} className="mt-2">
            {loading && (
              <MDBSpinner size="sm" role="status" tag="span" className="me-2" />
            )}
            CRÉER UN PRODUIT
          </MDBBtn>
        </div>
      </MDBValidation>
    </MDBCardBody>
  </MDBCard>;
  return <div></div>;
};

export default Product;
