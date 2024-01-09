import { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("blockchain");

  const fetchNews = () => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.hits);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchNews();
  }, [searchQuery]);

  const handleChange = (e) => setSearchQuery(e.target.value);

  return (
    <>
      <h3>News App</h3>
      <form>
        <input type="text" value={searchQuery} onChange={handleChange}></input>
        <button>Search</button>
      </form>
      {news.map((n, index) => (
        <p key={index}>{n.title}</p>
      ))}
    </>
  );
}

export default App;
