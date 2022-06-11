import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
// import Spinner from "./Spinner"; - this messed up my private route for some reason so removed it

// this makes sure the person is logged in before viewing profile,
// or sends them to sign-in page (privateroute)

// outlet allows us to render child routes
// wrap the route in app.js to make ita private route

function PrivateRoute() {
  // destrucutre from the hook the values that it returns...
  const { loggedIn, checkingStatus } = useAuthStatus();
  console.log(loggedIn, checkingStatus);

  // if checking status is true return h3
  if (checkingStatus) {
    return <h2>loading . . </h2>;
  }

  // else
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivateRoute;
