import React, {
  useEffect,
  useRef,
  useContext,
  useReducer,
  useCallback,
} from "react";
import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Footer from "./components/Footer";
import ThemeContext from "./context";

function init(state) {
  return { ...state };
}

function reducer(state, action) {
  switch (action.type) {
    case "fetch":
      return {
        ...state,
        posts: action.payload,
      };
    case "posts":
      return {
        ...state,
        type: action.type,
      };
    case "users":
      return {
        ...state,
        type: action.type,
      };
    case "check":
      return {
        ...state,
        check: !state.check,
      };
    case "reset":
      return init(action.payload);

    default:
      return state;
  }
}

function App() {
  const ref = useRef(null);
  const [data, dispatch] = useReducer(
    reducer,
    {
      posts: [],
      check: false,
      type: "posts",
    },
    init
  );
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    // dispatch({
    //   type: "reset",
    //   payload: { posts: [], check: true, type: "posts" },
    // });
    document.title = `Page ${data.type}`;
    fetch(`https://jsonplaceholder.typicode.com/${data.type}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "fetch", payload: json });
      });

    return () => {
      document.title = "Page";
    };
  }, [data.type]);

  const change = () => {
    setTheme(theme === "light" ? "dark" : "light");
    dispatch({ type: "check" });
  };

  const handleFocus = () => {
    ref.current.style.color = "red";
  };

  const setType = useCallback(
    (type) => {
      dispatch({ type });
    },
    [data.type]
  );

  return (
    <div className={`app ${theme}`}>
      <Header changeType={setType} check={data.check} changeTheme={change} />
      <div className="form">
        <input ref={ref} />
        <button onClick={handleFocus}>focus</button>
      </div>
      <PostList posts={data.posts} />
      <Footer />
    </div>
  );
}

export default App;
