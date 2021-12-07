import { createContext, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const UserContext = createContext();

function UserProviderWrapper(props) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProviderWrapper };
