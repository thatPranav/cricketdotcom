import { createContext, useState } from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloClient/client";

import Home from "./components/Home.component";

export const StatusContext = createContext();

function App() {
  const [status, setStatus] = useState("upcoming");
  return (
    <ApolloProvider client={client}>
      <StatusContext.Provider value={{ status, setStatus }}>
        <div>
          <Home />
        </div>
      </StatusContext.Provider>
    </ApolloProvider>
  );
}

export default App;
