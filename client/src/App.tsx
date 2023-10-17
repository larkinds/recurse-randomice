import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import HallOfFame from "./pages/hallOfFame/HallOfFame";
import ErrorPage from "./pages/error/Error";
import HomePage from "./pages/home/HomePage";
import useSetLocalStorage from "./hooks/UseLocalStorage";
import { LocalStorageContext } from "./context/DataContext";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();
  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
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
      </Layout>
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
