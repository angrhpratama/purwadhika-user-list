import { Badge, Box, Container, Flex, Heading, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { User } from "../pages/users/types"

function Header() {
    const usersCount = useSelector((state: { users: { users: User[] } }) => state.users.users.length)

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
                        <Flex alignItems="center">
                          <Text>
                            Users
                          </Text>
                          <Badge ml='2' paddingLeft={1.5} paddingRight={1.5} fontSize='0.75em' colorScheme='green'>
                            {usersCount}
                          </Badge>
                        </Flex>
                        
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