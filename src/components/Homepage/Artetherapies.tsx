import React, { useEffect, useState } from "react";
import icon from "../../static/svg/homer.svg";
import { Thumbnail } from "../Thumbnail/Thumbnail";
import { Button } from "../Button";

interface IArticle {
  id: number;
  heading: string;
  insight: string;
}

// TODO: load image from the external resource (server)
// TODO: problem with line height
// TODO: define action for the thumbnail button
//       (add another thumbnail prop maybe with function
//       that redirect us to the article page and sends id of the article to display
//       in article page: get id and in useeffect hook fetch the entire article and display it
//       should be easy, I hope)
// TODO: when the page that shows all articles will be finished -> add action on "Všetky články"
//       button
export const Artetherapies = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // we don't need catch here... maybe throw error message?
    fetch("http://localhost/api/article/newest")
      .then(response => response.json())
      .then(response => setArticles(response));
  }, []);

  return (
    <div className="m-0 bg-white relative lg:m-12 text-center pl-32 pr-32 shadow">
      <div className="p-6">
        <h1 className="font-gilbert text-2xl">Arteterapie</h1>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row">
        {articles.length !== 0 ? (
          articles.map((article: IArticle) => (
            <div key={article.id} className="ml-2">
              <Thumbnail
                name={article.heading}
                icon={icon}
                alt="super"
                description={article.insight}
              />
            </div>
          ))
        ) : (
          <div>No articles loaded :(</div>
        )}
      </div>
      <div className="mb-6 pb-6 mt-4">
        <Button>Všetky články</Button>
      </div>
    </div>
  );
};
