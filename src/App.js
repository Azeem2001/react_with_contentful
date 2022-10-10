import React, { useEffect, useState } from "react";
import "./App.css";
import { client } from "./client";
import Posts from "./Components/Posts";

function App() {
  const [article, setArticle] = useState([]);

  const fetchData = async () => {
    try {
      const { items } = await client.getEntries();
      setArticle(items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="wrapper">
            <span className="logo">React and ContentFul</span>
          </div>
        </header>
        <main>
          <div className="wrapper">
            <Posts posts={article} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
