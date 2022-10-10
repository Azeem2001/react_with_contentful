import React from "react";
import { marked } from "marked";
const Post = ({ article }) => {
  const { heading, prouctimage, discription } = article?.fields;
  const postDiscription = marked(discription);
  console.log(article);
  // console.log();
  return (
    <div className="post">
      <h2 className="title">{heading}</h2>
      {prouctimage?.map((item, index) => (
        <img
          key={index}
          className="prouctimage"
          src={item.fields?.file?.url}
          alt={heading}
          title={heading}
        />
      ))}
      <div>
        <section dangerouslySetInnerHTML={{ __html: postDiscription }} />
      </div>
    </div>
  );
};

export default Post;
{
  /* <section dangerouslySetInnerHTML={{ __html: postDiscription }} /> */
}
