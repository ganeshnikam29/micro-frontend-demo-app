import React, { useEffect, useRef } from "react";
import { mount } from "ReactMFERemoteApp/ReactMFEApp";

export const RemoteReactApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};
