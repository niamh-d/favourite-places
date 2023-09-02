import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Julie Andrews",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Woman_1.jpg/800px-Woman_1.jpg",
      places: 3,
    },
    {
      id: "u2",
      name: "Patrick Murphy",
      image:
        "https://therapyforblackmen.org/wp-content/uploads/2020/09/nova-kei-400-300x300-1.jpg",
      places: 7,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
