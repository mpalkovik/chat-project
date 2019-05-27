import React, { useEffect, useState } from "react";
import icon from "../../static/svg/homer.svg";
import { Thumbnail } from "../Thumbnail/Thumbnail";
import { Button } from "../Button";

interface IArticle {
  id: number;
  heading: string;
  insight: string;
  title_photo: string;
}

export const NewestArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loadingError, setLoadingError] = useState(false);
  useEffect(() => {
    fetch("http://localhost/api/article/newest")
      .then(response => response.json())
      .then(response => setArticles(response))
      .catch(error => setLoadingError(true));
  }, []);
  return (
    <div className="m-0 bg-white relative lg:m-12 text-center pl-8 pr-8 lg:pl-32 lg:pr-32 shadow">
      <h1 className="font-gilbert text-2xl m-6">Najnovšie články</h1>
      <div className="flex flex-col items-center justify-center lg:flex-row">
        {articles.length === 0 ? (
          loadingError ? (
            <div>Server error</div>
          ) : (
            <div>Loading articles...</div>
          )
        ) : (
          articles.map((article: IArticle) => (
            <div
              style={{ width: "230px", height: "304px" }}
              key={article.id}
              className="ml-0 mt-2 lg:mt-0 lg:ml-2"
            >
              <Thumbnail
                name={article.heading}
                icon={
                  "http://localhost/api/image/214/160/" + article.title_photo
                }
                alt="super"
                description={article.insight}
              />
            </div>
          ))
        )}
      </div>
      <div className="mb-6 pb-6 mt-4">
        <Button>Všetky články</Button>
      </div>
    </div>
  );
};
