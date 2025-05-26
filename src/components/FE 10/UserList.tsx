import { useNavigate } from "react-router-dom";
import { users } from "../users";

const UserList: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/users/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">User List</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id}>
            <button
              onClick={() => handleClick(user.id)}
              className="text-blue-600 underline hover:text-blue-800"
            >
              {user.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
