import {
    Container,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'

type User = {
    name: string
    email: string
    password: string 
}

const users: User[] = [{
    name: "Robert",
    email: "rob23@gmail.com",
    password: "robert123",
}, {
    name: "Schwartz",
    email: "schwartz@gmail.com",
    password: "schwartz123",
}, {
    name: "Emily",
    email: "emily73@gmail.com",
    password: "emily123",
}, {
    name: "Dante",
    email: "dante08@gmail.com",
    password: "dante123",
}, {
    name: "Ellen",
    email: "ellen59@gmail.com",
    password: "ellen123",
}]

function UsersPage() {
  return (
    <Container maxW='container.sm' mt={5}>
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <Thead>
                <Tr>
                    <Th>name</Th>
                    <Th>email</Th>
                    <Th>password</Th>
                </Tr>
                </Thead>
                <Tbody>
                    {users.map((user, index) => (
                        <Tr key={index}>
                            <Td>{user.name}</Td>
                            <Td>{user.email}</Td>
                            <Td>{user.password}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            </TableContainer>
    </Container>
  )
}

export default UsersPage

