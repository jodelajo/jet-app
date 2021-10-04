// src/component/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./Post.module.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();
  console.log("postdata", postData);
  console.log("slug", slug);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          _id,
          slug,
          mainImage,
         body,
         "name": author->name,
         "authorImage": author->image,
          }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className={styles.onePostContainer}>
      <div className={styles.imageBox}>
        <img
          className={styles.onePostImage}
          src={urlFor(postData.mainImage).url()}
          alt=""
        />
        <div>
        <h2>{postData.title}</h2>
        </div>
  
        </div>
      
        <div className={styles.meta}>
          <span>Geschreven door: </span>
          <img
            src={urlFor(postData.authorImage).url()}
            className={styles.authorImage}
            alt=""
          />
          <h4>{postData.name}</h4>
        </div>
    
      <div id="row" className={styles.content}>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>
    </div>
  );
}
