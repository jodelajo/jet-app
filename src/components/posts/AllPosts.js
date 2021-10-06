// src/components/AllPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from '../../client';
import styles from './Post.module.css';

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);
  console.log('All Posts Data', allPostsData);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]|order(_createdAt asc) {
          title,
          
          id,
          slug,
          category,
          mainImage{
            asset->{
            _id,
            url
          }
        }
      }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div id="row" >
      <div className={styles.container}>
       
        <div className={styles.allPosts}>
          {allPostsData &&
            allPostsData.map((post, index) => (
              <div className={styles.post}  key={index}>
              <Link to={"/nieuws/" + post.slug.current} key={post.slug.current}>
                  <img
                    className={styles.mainImage} 
                    src={post.mainImage.asset.url}
                    alt=""
                  />
                    <div className={styles.titleBlock}>
                    <h2>
                      {post.title}
                    </h2>
                    </div>
              </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}