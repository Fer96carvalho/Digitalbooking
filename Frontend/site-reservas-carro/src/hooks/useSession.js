import { createContext, useContext, useState } from "react";

const ContextSession = createContext({});

export function ContextSessionProvider({ children }) {
  const [session, setSession] = useState(() => {
    const session = JSON.parse(localStorage.getItem("@SESSION"));

    if (!session) {
      return {};
    }

    return session;
  });

  function createSession(data) {
    const user = {
      ...data,
      user: {
        ...data.user,
        fullName: data.user.name + " " + data.user.lastname,
        nameAcronym:
          data.user.name.substring(0, 1) + data.user.lastname.substring(0, 1),
      },
    };

    localStorage.setItem("@SESSION", JSON.stringify(user));
    setSession(user);
  }

  function deleteSession() {
    localStorage.setItem("@SESSION", JSON.stringify(null));
    setSession({});
  }

  function getSession() {
    return localStorage.getItem("@SESSION");
  }

  return (
    <ContextSession.Provider
      value={{ session, createSession, deleteSession, getSession }}
    >
      {children}
    </ContextSession.Provider>
  );
}

export function useSession() {
  return useContext(ContextSession);
}
