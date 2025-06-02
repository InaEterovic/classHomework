import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUsers } from "./userSlice";
import type { RootState } from "../app/store";
import { useAppDispatch } from "./useAppDispatch";

export default function Users() {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
