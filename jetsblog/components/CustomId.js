import React, { useEffect, useState, useLayoutEffect }  from 'react';
import { FormField } from '@sanity/base/components'
import { TextInput } from '@sanity/ui'
import sanityClient from '../../src/client'




const CustomId = React.forwardRef((props, ref) => {

    const [allPostsData, setAllPosts] = useState();
    const [postID, setPostId] =useState()
 
   
  
    useEffect(() => {
      sanityClient
        .fetch(
          `*[_type == "post"]{
            title,
            id,
        }`
        )
        .then((data) => setAllPosts(data))
        .catch(console.error)
        
    }, []);


    const { 
        type,         // Schema information
        value,        // Current field value
        // readOnly,     // Boolean if field is not editable
        placeholder,  // Placeholder text from the schema
        markers,      // Markers including validation rules
        presence,     // Presence information for collaborative avatars
        compareValue, // Value to check for "edited" functionality
        onFocus,      // Method to handle focus state
        onBlur,       // Method to handle blur state  
      } = props

      console.log(props);
      console.log('All Posts Id', allPostsData);
      console.log(postID);
    //   console.log(allPostsData.length);
      
     

      

    return (
        <FormField
        description={type.description}  // Creates description from schema
        title={type.title}              // Creates label from schema title
        __unstable_markers={markers}    // Handles all markers including validation
        __unstable_presence={presence}  // Handles presence avatars
        compareValue={compareValue}     // Handles "edited" status
        // inputId={inputId}
      >
        <TextInput
        // id={inputId}
          value={value}                 // Current field value
        //   readOnly={readOnly}           // If "readOnly" is defined make this field read only
          placeholder={placeholder}     // If placeholder is defined, display placeholder text
          onFocus={onFocus}             // Handles focus events
          onBlur={onBlur}               // Handles blur events
          ref={ref}
        />
      </FormField>
    )
})
export default CustomId