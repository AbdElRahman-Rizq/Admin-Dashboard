import { Box, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import "./style.css";
const Form=()=>{
    const handleFormSubmit=(values)=>{
        console.log(values);
    }
    return(        
      <Box m="10px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
        <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={checkoutSchema}
        >{
            ({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                 
                  /* and other goodies */
               }) => (
            <form onSubmit={handleFormSubmit}>
                <Box>
                <TextField
                sx={{
                  pb:0
                }}
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.firstName && errors.firstName}              
              />
                 <TextField
                 sx={{
                  pb:0
                 }}
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
              
              />
              <TextField
              sx={{
                pb:0
              }}
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}                
              />
              <TextField
              sx={{
                pb:0
              }}
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}                
              />
              <TextField
              sx={{
                pb:0
              }}
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}                
              />
              <TextField
              sx={{
                pb:0
              }}
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}                
              />
                </Box>

                <Box sx={{
                    "& Button":{
                        backgroundColor : "#4cceac;",
                    }
                }}>
                <button type="submit" id="submit-button">
                Create New User
              </button>
                </Box>
            </form>)}
        </Formik>
      </Box>
        )
    }
    
const phoneRegExp =
/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
})
        const initialValues={
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            address1: "",
            address2: "",
        }
export default Form;