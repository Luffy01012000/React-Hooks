import { NavLink } from "react-router";
export default function Header() {
  return (
    <div style={{ top: "0px" }}>
      <ul
        style={{
          display: "flex",
          outline: "none",
          listStyle: "none",
          gap: "20px",
        }}
      >
        <li>
          <NavLink to="/redux">ReduxToolkit</NavLink>
        </li>
        <li>
          <NavLink to="/">State</NavLink>
        </li>
        <li>
          <NavLink to="/useEffect">Effect</NavLink>
        </li>
        <li>
          <NavLink to="/useContext">Context</NavLink>
        </li>
        <li>
          <NavLink to="/useReducer">Reducer</NavLink>
        </li>
        <li>
          <NavLink to="/useRef">Ref</NavLink>
        </li>
        <li>
          <NavLink to="/useImperativeHandle">ImperativeHandle</NavLink>
        </li>
        <li>
          <NavLink to="/useLayoutEffect">LayoutEffect</NavLink>
        </li>
        <li>
          <NavLink to="/useInsertionEffect">InsertionEffect</NavLink>
        </li>
        <li>
          <NavLink to="/useId">UseId</NavLink>
        </li>
        <li>
          <NavLink to="/useTransition">Transition</NavLink>
        </li>
        <li>
          <NavLink to="/useSyncExternalStore">SyncExternalStore</NavLink>
        </li>
        <li>
          <NavLink to="/useMemo">Memo</NavLink>
        </li>
        <li>
          <NavLink to="/useCallback">Callback</NavLink>
        </li>
        <li>
          <NavLink to="/useDebugValue">DebugValue</NavLink>
        </li>
        <li>
          <NavLink to="/useDeferredValue">DeferredValue</NavLink>
        </li>
        <li>
          <NavLink to="/useActionState">ActionState</NavLink>
        </li>
        <li>
          <NavLink to="/useOptimistic">Optimistic</NavLink>
        </li>
        <li>
          <NavLink to="/useOptimistic1">Optimistic1</NavLink>
        </li>
      </ul>
    </div>
  );
}
