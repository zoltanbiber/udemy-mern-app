import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Zoki",
      image:
        "https://fastly.picsum.photos/id/670/600/600.jpg?hmac=dQWeZQKRwwTp_nOqIsn2CyPpq3QQw37Xqj-JDXZ0Kvo",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
