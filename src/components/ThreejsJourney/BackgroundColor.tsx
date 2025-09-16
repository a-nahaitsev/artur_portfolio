import React from "react";

const BackgroundColor = ({ color }: { color: string }) => {
  return <color attach="background" args={[color]} />;
};

export default BackgroundColor;
