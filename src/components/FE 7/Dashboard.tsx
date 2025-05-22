type UserProps = {
  isLoggedIn: boolean;
  isAdmin: boolean;
  hasUnreadMessages: boolean;
  isBanned: boolean;
};

export const Dashboard = ({
  isLoggedIn,
  isAdmin,
  hasUnreadMessages,
  isBanned,
}: UserProps) => {
  if (!isLoggedIn) {
    return <p>Please log in to continue.</p>;
  }

  if (isBanned) {
    return <p>Your account has been banned.</p>;
  }

  if (isAdmin) {
    return (
      <p>
        Welcome, Admin.{" "}
        {hasUnreadMessages ? "You have unread messages." : "No new messages."}
      </p>
    );
  }

  return (
    <p>
      Welcome back!{" "}
      {hasUnreadMessages ? "You have unread messages." : "No new messages."}
    </p>
  );
};
