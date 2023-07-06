import React, { useEffect, useState } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBFile, MDBInput, MDBSpinner, MDBValidation } from 'mdb-react-ui-kit'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../features/product/productSlice';
//import {  useNavigate } from 'react-router-dom';


const initialState = {
    name: "",
    prix: 0,
    image: ""
  }


const Product = () => {
    const [formValue, setFormValue] = useState(initialState);
    const { loading, error } = useSelector((state) => ({ ...state.product }));
    const { name, prix, image } = formValue;
    const dispatch = useDispatch();
   // const navigate = useNavigate();


    useEffect(() => {
        error && toast.error(error);
        }, [error])

        const handleSubmit = (e) => {
            e.preventDefault();
            dispatch(createProduct({ formValue, toast }));
        }


        const onInputChange = (e) => {
            let { name, value } = e.target;
            setFormValue({ ...formValue, [name]: value });
        }

  return (
    <MDBCard className='container'  style={{width:"30%", overflow: "hidden", padding: "12px", marginTop: "100px" }} >
        <MDBCardTitle style={{ fontWeight: 700, textAlign: 'center', padding: "12px", marginTop: "10px"}}  >ENREGISTRER UN PRODUIT </MDBCardTitle>
        <MDBCardBody style={{marginLeft: '20px' }}>
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
                 <MDBFile 
                 label='Entre le fichiers' 
                 id='customFile' 
                 type="file"
                  value={image}
                  name="image"
                  onChange={onInputChange}
                  required
                  invalid
                  validation="Please provide your image"
  
                 />
                 
              </div>            
  
              <div className="col-md-12">
                <MDBBtn style={{ width: "100%" }} className="mt-2">
                  {loading && (
                    <MDBSpinner
                      size="sm"
                      role="status"
                      tag="span"
                      className="me-2"
                    />
                  )}
                  CRÉER UN PRODUIT
                </MDBBtn>
              </div>
        </MDBValidation>
        </MDBCardBody>
      </MDBCard>
  )
}

export default Product
