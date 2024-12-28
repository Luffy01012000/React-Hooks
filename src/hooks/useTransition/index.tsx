import { ChangeEvent, useState, useTransition } from "react";

const index = () => {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");

  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
  console.log("items:", items);
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  //     setFilteredItems(items);
  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value;
    setQuery(value);
    startTransition(() => {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
    });
  };
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleFilter}
        placeholder="Search items..."
      />
      {isPending && <p> Loading... </p>}
      <ul>
        {filteredItems.map((item, index) => (
          <li style={{ color: "#fff" }} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default index;
