import React, { useRef, useEffect } from "react";
import { mount } from "RemoteVueApp/VueApp";

const RemoteVueApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};

export default RemoteVueApp;