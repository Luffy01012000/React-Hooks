import { useId } from "react";

const index = () => {
  const unid = useId();

  return <div>{unid}</div>;
};

export default index;
