import { FormEvent, useRef, useState } from "react";

const index = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<{ error?: string; message?: string }>();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (inputRef.current === null) return;
    const data = await saveUser(inputRef.current.value);
    setData(data);
    setIsLoading(false);
  }
  return (
    <form
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          ref={inputRef}
          id="firstName"
          name="firstName"
          style={{
            marginLeft: "20px",
            padding: "10px",
            width: "500px",
            fontSize: "20px",
          }}
        />
      </div>
      <button disabled={isLoading} style={{ marginTop: ".5rem" }}>
        Submit
      </button>
      {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
      {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}
    </form>
  );
};

export default index;

async function saveUser(firstName: string) {
  await wait(1000);
  if (firstName === "") {
    return { error: "Name is Required" };
  }
  return { message: "User Saved!" };
}

function wait(duration: number) {
  return new Promise((res) => {
    setTimeout(res, duration);
  });
}
