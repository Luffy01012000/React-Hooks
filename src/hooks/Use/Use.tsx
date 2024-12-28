import { use } from "react";
interface Props {
  url: Promise<any>;
}
const UseHook = ({ url }: Props) => {
  /* use hook work like await
  const data = await (fetch(url).then((res) => res.json());

    */
  //Have to pass promise or context
  const data = use(url);
  console.log("data:", data);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default UseHook;
