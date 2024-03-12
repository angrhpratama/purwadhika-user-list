import { Container } from '@chakra-ui/react'
import UsersTable from './components/UsersTable'

function UsersPage() {
  return (
    <Container maxW='container.sm' mt={5}>
      <UsersTable />
    </Container>
  )
}

export default UsersPage

