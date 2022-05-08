import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("Getting from", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function updateDate(e) {
    const data = {
      userId: "23421",
      id: "23421",
      title: "new",
      body: "dfsafdwjdjsfsfjknfsv",
    };
    e.preventDefault();
    Axios.put("https://jsonplaceholder.typicode.com/posts/1", data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function updateDatePatch(e) {
    const data = {
      userId: "23421",
      id: "23421",
      title: "new",
      body: "dfsafdwjdjsfsfjknfsv",
    };
    e.preventDefault();
    Axios.patch("https://jsonplaceholder.typicode.com/posts/1", data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const postData = (e) => {
    e.preventDefault();
    Axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
    })
      .then((res) => console.log("posting data", res))
      .catch((err) => console.log(err));
  };

  const deleteData = (id, e) => {
    e.preventDefault();
    Axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => console.log("deleted data", res))
      .catch((err) => console.log(err));
  };

  const arr = data.map((data, index) => {
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
        <td>
          <button onClick={(e) => deleteData(data.id, e)}>Delete</button>
        </td>
      </tr>
    );
  });
  return (
    <div className="App">
      <h1>Lets use axios here</h1>
      <form>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body</label>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={postData}>Post</button>
        <button onClick={updateDate}>update</button>
        <button onClick={updateDatePatch}>update with Patch</button>
      </form>

      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
          <th>Delete</th>
        </tr>
        {arr}
      </table>
    </div>
  );
}

export default App;
