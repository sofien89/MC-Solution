import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../actions";
import BlogSidebarForm from "../form/BlogSidebarForm";

const BlogSidebar = (props) => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <ol type="I">
          <li key={category.name}>
            <a href={`/${category.slug}?cid=${category._id}`}>
              {category.name}
              <span>.</span>
            </a>

            {category.children.length > 0 ? (
              <ul>{renderCategories(category.children)}</ul>
            ) : null}
          </li>
        </ol>
      );
    }
    return myCategories;
  };

  return (
    <>
      <div className="blog-sidebar-one">
        <div className="sidebar-search-form mb-85 sm-mb-60">
          <BlogSidebarForm />
        </div>
        {/* /.sidebar-search-form */}

        <div className="sidebar-categories mb-85 sm-mb-60">
          <h4 className="sidebar-title">Categories</h4>
          <ul>
            {category.categories.length > 0
              ? renderCategories(category.categories)
              : null}
          </ul>
        </div>
      </div>
      {/* /.blog-sidebar-one  */}
    </>
  );
};

export default BlogSidebar;
