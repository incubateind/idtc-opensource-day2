import React from "react";

const Articles = (props) => {
  let resumeData = props.resumeData;

  return (
    <section id="blogs">
      <h1 className="display-4 mt-5">Some of my articles</h1>
      <h1 className="bold-text bg-text">Articles</h1>
      <div className="row mt-5 mb-5">
        {resumeData.articles &&
          resumeData.articles.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="blog-entry">
                  <a href={item.articleUrl} target="_blank" rel="noreferrer">
                    <img
                      className="img-fluid"
                      src={`${process.env.PUBLIC_URL}/images/${item.articleImagePath}`}
                      alt={item.title}
                    />
                  </a>
                  <div className="text p-4 d-block">
                    <div className="meta mb-3">
                      <div>{item.publishedOn}</div>
                    </div>
                    <h3 className="heading">
                      <b>
                        <a
                          className="link"
                          href={item.articleUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.title}
                        </a>
                      </b>
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Articles;
