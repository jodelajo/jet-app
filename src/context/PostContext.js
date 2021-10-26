import React, { createContext, useEffect, useState } from "react";
import sanityClient from "../client";

export const PostContext = createContext({});

function PostContextProvider({ children }) {
  const [allPostsData, setAllPosts] = useState(null);
  // const [currentId, setCurrentId] =useState(0)
  // const [allPostsslug, setAllPostsSlug] = useState('');
 

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]|order(_createdAt asc) {
            title,
            
            id,
            slug,
            category,
            body,
            publishedAt,
            _createdAt,
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

  
console.log("Context All Posts Data", allPostsData);

let currentId = 0

const contextData = allPostsData && allPostsData.map((post) => 

({...post, id: currentId++}))

console.log('context data', contextData);



  const data = {
    allPostsData: allPostsData,
    contextData: contextData
    // postDataContext: postDataContext,

   
  };

  return <PostContext.Provider value={data}>{children}</PostContext.Provider>;
}
export default PostContextProvider;
