import axios, { AxiosResponse } from "axios";
import { UserButton, useUser, SignInButton } from "@clerk/clerk-react";
import { useEffect } from "react";
import "./LogIn.css";

interface ServerResponse {
  data: boolean;
}

export default function LogIn() {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        const existingUser: AxiosResponse<ServerResponse> = await axios.get(
          `http://localhost:3003/api/users/username/${user.username}`,
        );

        if (!existingUser.data) {
          axios.post(`http://localhost:3003/api/users`, {
            username: user.username,
            password: "no_longer_necessary",
          });
        }
      };
      fetchData();
    }
  }, [user]);

  return (
    <>
      {isSignedIn ? (
        <>
          <UserButton />
        </>
      ) : (
        <SignInButton />
      )}
    </>
  );
}
