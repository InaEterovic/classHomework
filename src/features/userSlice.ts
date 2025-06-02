import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersAPI";

type User = { id: number; name: string };
type UsersState = {
  loading: boolean;
  error: string | null;
  users: User[];
};

const initialState: UsersState = {
  loading: false,
  error: null,
  users: [],
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await fetchUsers();
  return response;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default usersSlice.reducer;
