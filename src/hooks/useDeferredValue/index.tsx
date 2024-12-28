import { ChangeEvent, useDeferredValue, useState } from "react";

const index = () => {
  const [query, setQuery] = useState("");

  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  const deferredValue = useDeferredValue(query);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredValue.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQuery(e?.target?.value)
        }
        placeholder="Search items..."
      />
      {query !== deferredValue && <p> Loading... </p>}
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
