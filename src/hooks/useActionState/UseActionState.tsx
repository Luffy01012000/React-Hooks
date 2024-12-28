import { useActionState } from "react";

const ActionState = () => {
  const [data, action, isPending] = useActionState(saveUser, undefined);
  return (
    <form
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      action={action}
    >
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          defaultValue={data?.fieldData?.firstName}
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
      <button disabled={isPending} style={{ marginTop: ".5rem" }}>
        Submit
      </button>
      {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
      {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}
    </form>
  );
};

async function saveUser(prevState: unknown, formdata: FormData) {
  const firstName = formdata.get("fristName") as string;
  await wait(1000);
  if (firstName === "") {
    return { error: "Name is Required" };
  }
  return { message: "User Saved!", fieldData: { firstName } };
}

function wait(duration: number) {
  return new Promise((res) => {
    setTimeout(res, duration);
  });
}

export default ActionState;
