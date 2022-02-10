import React from "react";
import ReactRouter from "./Config/reactRouter";
import GlobalRedux from "./Redux/redux-store";

function App() {
  return (
    <>
      <GlobalRedux>
        <ReactRouter />
      </GlobalRedux>
    </>
  );
}

export default App;
