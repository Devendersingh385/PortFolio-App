import React, { useState } from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import { contactUsSchema } from "/schemas";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import { Stack } from "@mui/material";
const initialValues = {
  fullname: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const [isFormSubmiited, setIsFormSubmitted] = useState(false);

  const { values, errors, handleblur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: contactUsSchema,
      onSubmit: (values, action) => {
        console.log(errors);
        alert(JSON.stringify(values, null, 2));
        action.resetForm();
        setIsFormSubmitted(true);
        setTimeout(() => {
          setIsFormSubmitted(false);
        }, 5000);
      },
    });
  return (
    <>
      <Card
        className="h-full"
        sx={{
          boxShadow: "0px 8px 24px #F2F0FF",
          borderRadius: "10px",
          height: "100%",
          padding: "32px",
          transition: "all .3s cubic-bezier(0,0,.5,1)",
          background: "#fff",
          "&:hover": {
            boxShadow: "2px 4px 16px rgba(0,0,0,.16)",
            transform: "scale3d(1.01,1.01,1.01)",
          },
        }}
      >
        <CardContent>
          {isFormSubmiited ? (
            <Stack>
              <p>Thank you for submitting the form!</p>
              {/* You can also display additional success content here */}
            </Stack>
          
          ) : (
            <form onSubmit={handleSubmit}>
              <TextField
                type="text"
                label="Full Name"
                variant="filled"
                name="fullname"
                className="w-full mb-4"
                onChange={handleChange}
                handleBlur={handleblur}
                value={values.fullname}
              />
              {errors.fullname && touched.fullname ? (
                <p>{errors.fullname}</p>
              ) : null}
              <TextField
                type="email"
                id="email"
                label="Email"
                variant="filled"
                name="email"
                className="w-full mb-4"
                onChange={handleChange}
                handleBlur={handleblur}
                value={values.email}
              />
              {errors.email && touched.email ? <p>{errors.email}</p> : null}
              <TextField
                type="text"
                id="filled-basic"
                label="Phone Number"
                variant="filled"
                name="phone"
                className="w-full mb-4"
                value={values.phone}
                onChange={handleChange}
                handleBlur={handleblur}
              />
              {errors.phone && touched.phone ? <p>{errors.phone}</p> : null}
              <TextField
                id="message"
                label="Message"
                placeholder="Message"
                multiline
                name="message"
                variant="filled"
                rows={4}
                className="w-full mb-4"
                value={values.message}
                onChange={handleChange}
                handleBlur={handleblur}
              />
              {errors.message && touched.message ? (
                <p>{errors.message}</p>
              ) : null}
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#1877f2 !important",
                  borderRadius: "50px",
                  padding: "12px 30px",
                  textTransform: "capitalize",
                  fontWeight: 400,
                }}
              >
                Submit
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default ContactForm;
