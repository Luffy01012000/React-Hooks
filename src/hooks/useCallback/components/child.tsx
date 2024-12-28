import { memo, useEffect, useState } from "react";
interface Props {
  getItems: (n: number) => number[];
  //   getItems: number[];

  //   getItems: (n: number)=>() => number[]; // doesn't work
}
const child = memo(({ getItems }: Props) => {
  const [items, setItems] = useState<number[]>([]);
  useEffect(() => {
    setItems(getItems(5));
    // setItems(getItems);
    console.log("Updating Items");
  }, [getItems]);

  return items.map((item, i) => <div key={i}>{item}</div>);
});

export default child;
