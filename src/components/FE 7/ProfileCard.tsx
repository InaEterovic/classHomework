import { FaStar } from "react-icons/fa";
import "./ProfileCard.css";
import type { FC } from "react";

type ProfileCardProps = {
  name: string;
  role: string;
  avatar: string;
  location: string;
  isFavorite: boolean;
};

export const ProfileCard = ({
  name,
  role,
  avatar,
  location,
  isFavorite,
}: ProfileCardProps) => {
  return (
    <div className="card">
      {isFavorite && <FaStar className="star-icon" />}
      <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
      <h2 className="name">{name}</h2>
      <p className="role">{role}</p>
      <p className="location">{location}</p>
    </div>
  );
};
