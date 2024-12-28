import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import CounterComponent from "../components/Counter.Component";
import { decrement, increment, selectCount } from "../store/reducer";

export default function Counter() {
  const count = useAppSelector(selectCount);

  const dispatch = useAppDispatch();

  return (
    <>
      <CounterComponent
        count={count}
        increment={() => dispatch(increment())}
        decrement={() => dispatch(decrement())}
      />
    </>
  );
}
