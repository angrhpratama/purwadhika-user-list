import { Box, Button, Container, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react"

function RegisterPage() {
  return (
    <Container maxW='container.sm' mt={5} textAlign='center'>
        <Box bg='lightskyblue' w='100%' p={4}>
            <Heading as='h4' size='md'>
                Page Register
            </Heading>
            <FormControl mt={5}>
                <FormLabel>Name</FormLabel>
                <Input type='text' bg="white" />
            </FormControl>
            <FormControl mt={5}>
                <FormLabel>Email</FormLabel>
                <Input type='email' bg="white" />
            </FormControl>
            <FormControl mt={5}>
                <FormLabel>Password</FormLabel>
                <Input type='password' bg="white" />
            </FormControl>
            <Button bg="white" variant='solid' mt={5}>
                Submit
            </Button>
        </Box>
    </Container>
  )
}

export default RegisterPage