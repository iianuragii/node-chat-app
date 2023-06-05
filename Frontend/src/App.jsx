import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import chatPage from "./chatPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <chatPage user={user} />;
  }
}

export default App;