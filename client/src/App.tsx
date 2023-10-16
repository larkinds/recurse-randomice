import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import HallOfFame from "./pages/hallOfFame/HallOfFame";
import ErrorPage from "./pages/error/Error";
import FlavorPage from "./pages/flavor_page/FlavorPage";
import useSetLocalStorage from "./hooks/UseLocalStorage";
import { LocalStorageContext } from "./context/DataContext";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
  useUser,
  SignInButton,
} from "@clerk/clerk-react";
import axios from "axios";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function SignInComponent() {
  const { isLoaded, isSignedIn, user } = useUser();

  //add new users to mongoDB
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

//todo: replace temp with homepage

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();
  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SignInComponent />
              <div>Temp</div>
            </>
          }
        />
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route path="/hall-of-fame" element={<HallOfFame />} />
        <Route path="flavor/:flavor" element={<FlavorPage />} />
        <Route
          path="/create"
          element={
            <>
              <SignedIn>
                <div>Create a Flavor Page </div>
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ClerkProvider>
  );
}
export default function App() {
  const [storage, setStorage] = useSetLocalStorage(null, "Test");

  return (
    <LocalStorageContext.Provider value={storage}>
      <BrowserRouter>
        <ClerkProviderWithRoutes />
      </BrowserRouter>
    </LocalStorageContext.Provider>
  );
}
