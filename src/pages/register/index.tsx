import { Box, Container } from "@chakra-ui/react"
import { withFormik } from "formik";
import * as Yup from "yup";
import { FormValues, FormProps } from "./types";
import InnerForm from "./components/InnerForm";
import instance from "../../api/axios-instance";
import { useNavigate } from "react-router-dom";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Password is required"),
});

function RegisterPage() {
  let navigate = useNavigate();

  const register = async (props: FormValues) => {
    const { name, email, password } = props;
    await instance.post("users", {
      name,
      email,
      password,
    });
  };

  const MyForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: (props) => ({
      name: props.initialName || "",
      email: props.initialEmail || "",
      password: props.initialPassword || ""
    }),
    validationSchema: RegisterSchema,
    enableReinitialize: true,
    handleSubmit({ name, email, password }: FormValues, { resetForm }) {
      register({ name, email, password });
      resetForm();
      navigate('/');
    },
  })(InnerForm);

  return (
    <Container maxW='container.sm' mt={5} textAlign='center'>
        <Box bg='lightskyblue' w='100%' p={4}>
          <MyForm />
        </Box>
    </Container>
  )
}

export default RegisterPage