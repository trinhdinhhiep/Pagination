import React, { useEffect } from "react";

const RenderItem = () => {
  useEffect(() => {
    console.log("sau khi render hello");
    return () => {
      console.log("will unmount");
    };
  });
  console.log("return");
  return <div>Hello</div>;
};

export default RenderItem;
