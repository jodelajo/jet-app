// src/component/OnePost.js

import React, { useEffect, useState } from "react";
import { Link, useParams, } from "react-router-dom";
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./Post.module.css";
// import PostNav from "../postNav/PostNav";
import { PostContext } from '../../context/PostContext';
import { useContext } from 'react';


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { contextData} = useContext(PostContext)
  // const [currentPost, setCurrentPost] = useState()
  const [nextSlug, setNextSlug] = useState([])
  const [prevSlug, setPrevSlug] = useState([])
  const [localData, setLocalData] = useState([])
  const { slug } = useParams();
  
  useEffect(() => {
    return () => {};
  }, []);
  
  

  console.log("postdata", postData);
  console.log('local data', localData);

useEffect(()=> {
  setLocalData(contextData)
},[slug, contextData])



// eslint-disable-next-line
const currentId = localData && localData.find((post)=>
{if(post.slug.current === slug)
return post}
)
 
console.log('bla', currentId);



useEffect(()=>{
  // eslint-disable-next-line
  const nextPost =  localData && localData.find(post => {
    if(post.id === (currentId.id + 1)){
      return post
    }
  })
  setNextSlug(nextPost)
  // eslint-disable-next-line
  const prevPost =  localData && localData.find(post => {
    if(post.id === (currentId.id - 1)){
      return post
    }
  })
  setPrevSlug(prevPost)
  
},[currentId, localData])



console.log('next slug', nextSlug);



  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          _id,
          slug,
          publishedAt,
          nextPost,
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
          alt="Main"
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
        <div>{postData.publishedAt}</div>
    
      <div id="row" className={styles.content}>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
       
      </div >
      <div className={styles.postNavigation}>
      <div className={styles.prevPost}>
        {prevSlug &&  <Link to={`${prevSlug.slug.current}`}>
       Vorig bericht
       </Link>}
      
      </div >
      <div className={styles.nextPost}>
        {nextSlug &&  <Link to={`${nextSlug.slug.current}`}>
       Volgend bericht
       </Link>}
      
      </div>
      </div>
    </div>
  );
}
