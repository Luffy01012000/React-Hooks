import { Suspense, useState } from "react";
import ErrorBoundary from "../../shared/UI/ErrorBoundary";
import WithoutUseHook from "./WithoutUseHook";
import WithUseHook from "./Use";

const URL = {
  USERS: "https://jsonplaceholder.typicode.com/users",
  COMMENTS: "https://jsonplaceholder.typicode.com/comments",
  POSTS: "https://jsonplaceholder.typicode.com/posts",
};

const index = () => {
  const [url, setUrl] = useState(URL.USERS);
  const [useHooks, setUseHooks] = useState(false);
  return (
    <>
      <form>
        <label htmlFor="users">USERS:</label>
        <input
          name="use"
          type="radio"
          id="users"
          onClick={() => setUrl(URL.USERS)}
        />
        <label htmlFor="posts">POSTS:</label>
        <input
          name="use"
          type="radio"
          id="posts"
          onClick={() => setUrl(URL.POSTS)}
        />
        <label htmlFor="comments">COMMENTS:</label>
        <input
          name="use"
          type="radio"
          id="comments"
          onClick={() => setUrl(URL.COMMENTS)}
        />
        <label htmlFor="">USE Hooks:</label>
        <input type="checkbox" onClick={() => setUseHooks((prev) => !prev)} />
      </form>
      {useHooks ? (
        <ErrorBoundary fallback={<div>Error</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <WithUseHook url={fetch(url).then((res) => res.json())} />
          </Suspense>
        </ErrorBoundary>
      ) : (
        <WithoutUseHook url={url} />
      )}
    </>
  );
};

export default index;
