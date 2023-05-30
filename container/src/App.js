import React from "react";
import { RemoteReactApp } from "./components/RemoteReactApp";
import RemoteVueApp from "./components/RemoteVueApp";

export const App = () => {
  return (
    <div style={{ border: '1px solid black' , padding: '10px'}}>
      <h1>This is React app. It is continer App.</h1>
        <div  style={{ border: '1px solid blue' , padding: '10px', margin: '10px'}}>
              <h2>MFE -One</h2>
             <RemoteReactApp />
        </div>
        <div  style={{ border: '1px solid red' , padding: '10px', margin: '10px'}}>
              <h2>MFE -two</h2>
             <RemoteVueApp />
        </div>
    </div>
  );
};
