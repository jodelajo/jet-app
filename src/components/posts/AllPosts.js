// src/components/AllPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from '../../client';

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
    <div >
      <div className="allPosts">
        <h2 >Blog Posts</h2>
        <h3 >
          Welcome to my blog posts page!
        </h3>
        <div >
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/nieuws/" + post.slug.current} key={post.slug.current}>
                <span
                  
                  key={index}
                >
                  <img
                    
                    src={post.mainImage.asset.url}
                    alt=""
                  />
                  <span
                    
                  >
                    <h2
                     
                    >
                      {post.title}
                    </h2>
                  </span>
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}