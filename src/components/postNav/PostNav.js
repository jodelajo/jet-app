import React, { useEffect, useState} from 'react'
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom'
import sanityClient from "../../client";
import { PostContext } from '../../context/PostContext';

export default function PostNav({id}){
    const [postData, setPostData] = useState(null);
    // const [postId, setPostId ] = useState(0);
    // const [post, setPost] = useState()
    const [postSlug, setPostSlug] = useState('');
  const { slug } = useParams();
  const { allPostsData} = useContext(PostContext)

  // console.log('data from context', allPostsData);
  // console.log('postDataContext from context', postDataContext);



  const slugs = allPostsData && allPostsData.map((post)=>{
   
    return {
      postSlug: post.slug.current,
      postID: post.id
    }
  })




  function onClickHandler() {
      if (slugs.postID === allPostsData.id) {
          setPostSlug(slugs.postSlug)
      }

  }

    useEffect(() => {
        slugs && sanityClient
          .fetch(
            `*[id == ${slugs.postID}]{
              
              id,
                slug,
              }`
          )
          .then((data) => setPostData(data[0]))
          .catch(console.error);
          
    
      }, [slugs]);

      // useEffect(()=>{
      //   setPostId(postId + 1)
      // },[])

      // console.log('id', postId);

      // console.log("postdataNAV", postData && postData.slug.current)
      
      console.log('current slug', slug);
      console.log('postslug', postSlug);


return <Link to={postSlug} onClick={onClickHandler}>volgend bericht</Link>
}