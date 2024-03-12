import { Box, Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react"
import { FormikProps, Form } from "formik";
import { FormValues } from "../types";

function InnerForm(props: FormikProps<FormValues>) {
  const { values, errors, touched, handleChange, handleSubmit, isSubmitting } =
    props;

  return (
    <Form onSubmit={handleSubmit}>
      <Heading as='h4' size='md'>
          Page Register
      </Heading>
      <FormControl mt={5}>
          <FormLabel>Name</FormLabel>
          <Input 
            name="name"
            type='text' 
            bg="white" 
            onChange={handleChange}
            value={values.name}
          />
          {touched.name && errors.name && <Box as="span">{errors.name}</Box>}
      </FormControl>
      <FormControl mt={5}>
          <FormLabel>Email</FormLabel>
          <Input 
            name="email"
            type='email' 
            bg="white" 
            onChange={handleChange}
            value={values.email}
          />
          {touched.email && errors.email && <Box as="span">{errors.email}</Box>}
      </FormControl>
      <FormControl mt={5}>
          <FormLabel>Password</FormLabel>
          <Input 
            name="password"
            type='password' 
            bg="white" 
            onChange={handleChange}
            value={values.password}
          />
          {touched.password && errors.password && <Box as="span">{errors.password}</Box>}
      </FormControl>
      <Button
        type="submit" 
        bg="white" 
        variant='solid' 
        mt={5}
        isDisabled={isSubmitting}
      >
          Submit
      </Button>
    </Form>
  )
}

export default InnerForm