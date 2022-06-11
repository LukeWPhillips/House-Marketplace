import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// function of this hook
// check to see if were logged in
// right after we get the response then we set chekstatus to false
// and set logged in to true

// onAuthStateChanged creates a lisstebner that listens for an event in firestore
// of auth changed(login, logout etc) the function returns another function
// that cancels/unsubscribes from that event listener
// This function should be a 'clean up' function i.e any listeners you added in your useEffect are removed when the component is not being used.

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
      setCheckingStatus(false);
    });
    return unsub();
  });

  return { loggedIn, checkingStatus };
};

// the Firebase Unsubscribe as that removes the listener while Brad's approach does not, it simply doesn't try to update state in an unmounted component, but the listener is still running and taking up memory unnecessarily.
