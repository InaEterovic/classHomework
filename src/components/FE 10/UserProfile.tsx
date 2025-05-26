import { useParams } from "react-router-dom";
import { ProfileCard } from "../FE 7/ProfileCard";
import { useEffect, useState } from "react";
import { users, type User } from "../users";

const UserProfile: React.FC = () => {
  const { id } = useParams();
  const [activeUser, setActiveUser] = useState<User | null>(null);

  useEffect(() => {
    const selectedUser = users.find((user) => id === String(user.id));
    if (selectedUser) setActiveUser(selectedUser);
  }, [users]);
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <p className="mt-4 text-lg">
        User ID: <span className="font-mono">{id}</span>
      </p>
      {activeUser ? (
        <ProfileCard
          name={activeUser?.name}
          role={activeUser?.role}
          avatar={activeUser?.avatar}
          location={activeUser?.location}
          isFavorite={activeUser?.isFavorite}
        />
      ) : (
        <h1>User Not found</h1>
      )}
    </div>
  );
};

export default UserProfile;
