import {
  FormEvent,
  startTransition,
  useOptimistic,
  useRef,
  useState,
} from "react";

type Todo = {
  id: string;
  title: string;
  pending?: boolean;
};

type optimisticTodo = Todo & {
  pending?: boolean;
};

type TodoListProps = {
  initialTodos: Todo[];
};

function reducer(
  state: optimisticTodo[],
  action: { type: "ADD"; payload: string }
) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: crypto.randomUUID(), title: action.payload, pending: true },
      ];

    default:
      throw new Error("Not valid");
  }
}

const Index = ({ initialTodos }: TodoListProps) => {
  const [todos, setTodos] = useState(initialTodos);
  const inputRef = useRef<HTMLInputElement>(null);
  const [optimisticTodos, setOptimisticTodos] =
    useOptimistic<optimisticTodo[]>(todos);
  // const [optimisticTodos, dispatch] = useOptimistic(todos, reducer);
  const [opt, setOpt] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (inputRef.current === null) return;

    const optimisticTodo = {
      id: crypto.randomUUID(),
      title: inputRef?.current?.value,
      pending: true,
    };

    //use without reducer
    // startTransition(
    // () =>
    setOptimisticTodos((prev) => [...prev, optimisticTodo]);
    // dispatch({ type: "ADD", payload: optimisticTodo.title })
    // );

    //use with reducer
    // startTransition(() =>
    // dispatch({ type: "ADD", payload: optimisticTodo.title });
    // );

    // Simulate server response
    const newTodo = await createTodo(inputRef.current.value);

    // Replace the optimistic todo with the server-confirmed todo
    setTodos((prev) => [...prev, newTodo]);

    inputRef.current.value = "";
  }

  return (
    <>
      <h1>ToDo List...</h1>
      <label htmlFor="opt">useOptimistic:</label>
      <input
        type="checkbox"
        name="opt"
        id="opt"
        onClick={() => setOpt((prev) => !prev)}
      />
      <form onSubmit={onSubmit}>
        <title>Title</title>
        <br />
        <input type="text" ref={inputRef} required />
        <br />
        <button>Add TODO</button>
      </form>
      <ul>
        {
          // Toggle between optimisticTodos and todos based on `opt`
          opt
            ? optimisticTodos.map((todo) => (
                <li
                  key={todo.id}
                  style={{ color: todo.pending ? "white" : undefined }}
                >
                  {todo.title}
                </li>
              ))
            : todos.map((todo) => <li key={todo.id}>{todo.title}</li>)
        }
      </ul>
    </>
  );
};

export default Index;

const createTodo = (title: string) => {
  return wait({ id: crypto.randomUUID(), title: `${title}-server` }, 2000);
};

function wait<T>(value: T, duration: number) {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(value), duration);
  });
}
