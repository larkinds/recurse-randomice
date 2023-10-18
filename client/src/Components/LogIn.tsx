import axios from "axios";
import { UserButton, useUser, SignInButton } from "@clerk/clerk-react";
import { useEffect } from "react";
import "./LogIn.css";

export default function LogIn() {
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (user) {
      console.log("Occured");
      const fetchData = async () => {
        const exists = await axios.get(
          `http://localhost:3003/api/users/username/${user.username}`,
        );

        if (!exists.data) {
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
