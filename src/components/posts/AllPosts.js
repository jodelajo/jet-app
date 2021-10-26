// src/components/AllPosts.js

import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./Post.module.css";
import { PostContext } from "../../context/PostContext";

export default function AllPosts() {
  const { contextData } = useContext(PostContext);

  return (
    <div id="row">
      <div className={styles.container}>
        <div className={styles.allPosts}>
          {contextData &&
            contextData.map((post, index) => (
              <div className={styles.post} key={index}>
                <Link
                  to={"/nieuws/" + post.slug.current}
                  key={post.slug.current}
                >
                  <img
                    className={styles.mainImage}
                    src={post.mainImage.asset.url}
                    alt=""
                  />
                  <div className={styles.titleBlock}>
                    <h2>{post.title}</h2>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
