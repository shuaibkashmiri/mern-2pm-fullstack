import React, { useEffect, useState } from "react";
import axios from "axios";
const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines/sources?apiKey=40dd280d53a149f48c7c4f88adaf28ec`,
      );
      setNews(res.data.sources);
      console.log(news);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      {loading ? (
        <div className="main">
          <h1>Loading ....</h1>
        </div>
      ) : (
        <div className="main">
          {news.map((news) => (
            <div className="container">
              <h2>{news.name}</h2>
              <p>{news.description}</p>
              <a href={news.url} target="_blank">
                Read Full News ....
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default News;
