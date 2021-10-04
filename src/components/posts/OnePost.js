// src/component/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import styles from './Post.module.css'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();
  console.log('postdata', postData);
  console.log('slug', slug);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          slug,
          mainImage,
         body,
          }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div >
        <div >
          <div >
            {/* Title Section */}
            <div >
              <h2 >
                {postData.title}
              </h2>
              {/* <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(postData.authorImage).url()}
                  className="w-10 h-10 rounded-full"
                  alt="Author is Kap"
                />
                <h4 className="cursive flex items-center pl-2 text-2xl">
                  {postData.name}
                </h4>
              </div> */}
            </div>
          </div>
          <img
            
            src={urlFor(postData.mainImage).url()}
            alt=""
            
          />
        </div>
        <div >
          <BlockContent
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>
    </div>
  );
}
