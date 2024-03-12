import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import instance from "../../../api/axios-instance";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setUsers } from '../../../redux/users';
import { User } from './../types';

function UsersTable() {
  const dispatch = useDispatch()
  const users = useSelector((state: { users: { users: User[] } }) => state.users.users)

  const fetchUsers = async () => {
    const { data } = await instance.get("users");
    dispatch(setUsers(data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
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
  )
}

export default UsersTable