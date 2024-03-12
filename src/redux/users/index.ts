import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../pages/users/types";

const initialState = {
  users: [],
} as {
  users: User[]
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (
      state: { users: User[] },
      action: { payload: User[] }
    ) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
