import React from "react";
import { Link } from "react-router-dom";

const BlogContent = [
  {
    img: "media_16",
    tag: "Technology",
    title: `Découvrir nos services.`,
    desc: `Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..`,
    routePath: "/blog-details",
  },
];

const BlogStyle2 = () => {
  return (
    <>
      {BlogContent.map((item, i) => (
        <div className="post-meta" key={i}>
          <img
            src={`images/blog/${item.img}.png`}
            alt="media"
            className="image-meta"
          />
          <div className="tag">{item.tag}</div>
          <h3>
            <Link to="/service" className="title">
              {item.title}
            </Link>
          </h3>
          <p>{item.desc}</p>
        </div>
        // /.post-meta
      ))}
    </>
  );
};

export default BlogStyle2;
