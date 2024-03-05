import { Box, Container, Flex, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <Box bg='teal' w='100%' p={4} color='white'>
            <Container maxW='container.sm'>
                <Flex alignItems='center' gap='25px'>
                    <Link to="/">
                        <Heading as='h4' size='md'>
                            Network Call Practice
                        </Heading>
                    </Link>
                    <Link to="/">
                        Users
                    </Link>
                    <Link to="/register">
                        Register
                    </Link>
                </Flex>
            </Container>
        </Box>
    )
}

export default Header