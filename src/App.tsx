import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import StateExample from "./hooks/useState";
import { index as EffectExample } from "./hooks/useEffect";
import { index as ContextExample } from "./hooks/useContext";
import ReducerExample from "./hooks/useReducer";
import RefExample from "./hooks/useRef";
import RootLayout from "./shared/Layout/RootLayout";
import Counter from "./features/reduxToolkit/container/Counter";
import UseImperativeHandleExample from "./hooks/useImperativeHandle";
import UseLayoutEffectExample from "./hooks/useLayoutEffect";
import UseInsertionEffectExample from "./hooks/useInsertionEffect";
import UseIdExample from "./hooks/useId";
import UseTransitionExample from "./hooks/useTransition";
import UseSyncExternalStoreExample from "./hooks/useSyncExternalStore";
import UseMemoExample from "./hooks/useMemo";
import UseCallbackExample from "./hooks/useCallback";
import UseDebugValueExample from "./hooks/useDebugValue";
import UseDeferredValueExample from "./hooks/useDeferredValue";
import UseActionStateExample from "./hooks/useActionState";
import UseOptimisticExample from "./hooks/useOptimistic";
// import UseOptimisticExample1 from "./hooks/useOptimistic/reactExample";
import UseExample from "./hooks/Use";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/todo" element={<TodoList />} />
          <Route element={<RootLayout />}>
            <Route index element={<StateExample />} />
            <Route path="/useEffect" element={<EffectExample />} />
            <Route path="/useContext" element={<ContextExample />} />
            <Route path="/useReducer" element={<ReducerExample />} />
            <Route path="/useRef" element={<RefExample />} />
            <Route
              path="/useImperativeHandle"
              element={<UseImperativeHandleExample />}
            />
            <Route
              path="/useLayoutEffect"
              element={<UseLayoutEffectExample />}
            />
            <Route
              path="/useInsertionEffect"
              element={<UseInsertionEffectExample />}
            />
            <Route path="/useId" element={<UseIdExample />} />
            <Route path="/useTransition" element={<UseTransitionExample />} />
            <Route
              path="/useSyncExternalStore"
              element={<UseSyncExternalStoreExample />}
            />
            <Route path="/useMemo" element={<UseMemoExample />} />
            <Route path="/useCallback" element={<UseCallbackExample />} />
            <Route path="/useDebugValue" element={<UseDebugValueExample />} />
            <Route
              path="/useDeferredValue"
              element={<UseDeferredValueExample />}
            />
            <Route path="/useActionState" element={<UseActionStateExample />} />
            <Route
              path="/useOptimistic"
              element={
                <UseOptimisticExample
                  initialTodos={[{ id: "1", title: "rutvik" }]}
                />
              }
            />
            {/* <Route path="/useOptimistic1" element={<UseOptimisticExample1 />} /> */}
            <Route path="/use" element={<UseExample />} />
          </Route>
          <Route path="redux">
            <Route index element={<Counter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
