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
        `*[_type == "post"]{
          title,
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
    <div>
      <div className={styles.container}>
        <h2 >Nieuws</h2>
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

                    <h2>
                      {post.title}
                    </h2>
              </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}