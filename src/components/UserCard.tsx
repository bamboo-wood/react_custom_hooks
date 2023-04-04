import React, { FC } from "react";
import { UserProfile } from "../types/userProfile";

type Props = {
  user: UserProfile;
};

export const UserCard: FC<Props> = (props) => {
  const { user } = props;

  const style = {
    border: "1px solid #ccc",
    padding: "1rem",
    margin: "1rem",
    width: "300px",
    display: "inline-block",
    verticalAlign: "top",
  };

  return (
    <div style={style}>
      <dl>
        <dt>Name</dt>
        <dd>{user.name}</dd>
        <dt>Email</dt>
        <dd>{user.email}</dd>
        <dt>Address</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
};
