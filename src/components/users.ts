export type User = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  location: string;
  isFavorite: boolean;
};

export const users: User[] = [
  {
    id: 1,
    name: "Luna Vega",
    role: "Frontend Developer",
    avatar: "https://i.pravatar.cc/150?img=32",
    location: "New York, USA",
    isFavorite: true,
  },
  {
    id: 2,
    name: "Kai Chen",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=12",
    location: "Toronto, Canada",
    isFavorite: false,
  },
  {
    id: 3,
    name: "Sofia Ramos",
    role: "Full Stack Developer",
    avatar: "https://i.pravatar.cc/150?img=45",
    location: "Barcelona, Spain",
    isFavorite: true,
  },
  {
    id: 4,
    name: "Ethan Wright",
    role: "Backend Engineer",
    avatar: "https://i.pravatar.cc/150?img=58",
    location: "Austin, USA",
    isFavorite: false,
  },
  {
    id: 5,
    name: "Maya Patel",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=25",
    location: "London, UK",
    isFavorite: true,
  },
];

{
  /* {users.map((user) => (
        <ProfileCard
          key={user.id}
          name={user.name}
          role={user.role}
          avatar={user.avatar}
          location={user.location}
          isFavorite={user.isFavorite}
        />
      ))} */
}
