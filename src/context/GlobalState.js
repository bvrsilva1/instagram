import React, { useState } from 'react'
import PostContext from "./PostContext"

const image = require('../assets/lpbb.png')

const InstagramProvider = props => {
  
  const [posts, setPosts] = useState(
    [
      {id: '123', avatar: image, image, comments: [
        {id: '1', author: '@bruno_sabbath', message: 'what a nice guitar'},
        {id: '2', author: '@faulkner', message: 'Yes indeed!'}
      ], counter: 0, saved: false},
      {id: '124', avatar: image, image, comments: [], counter: 0, saved: false},
      {id: '125', avatar: image, image, comments: [], counter: 0, saved: false},
      {id: '126', avatar: image, image, comments: [], counter: 0, saved: false},
    ]
  )
  
  const addLike = id => {
    console.log(posts)
    
    //copy state
    const updatedPosts = [...posts]
    console.log(updatedPosts)
    //get post
    const postIndex = updatedPosts.findIndex(post => id === post.id)

    if(postIndex >= 0){
      const post = {...updatedPosts[postIndex]}
      post.counter++
      updatedPosts[postIndex] = post
      setPosts(updatedPosts)
    }
  }

  const savePost = id => {
    console.log('savePost')
    const updatedPosts = [...posts]
    //get post
    const postIndex = updatedPosts.findIndex(post => id === post.id)

    if(postIndex >= 0){
      const post = {...updatedPosts[postIndex]}
      post.saved = !post.saved
      updatedPosts[postIndex] = post
      setPosts(updatedPosts)
    }
  }

  const addComment = (message, author, postId) => {
    const updatedPosts = [...posts]
    
    const postIndex = updatedPosts.findIndex(post => postId === post.id)

    if(postIndex >= 0){
      const post = {...updatedPosts[postIndex]}
      post.saved = !post.saved
      post.comments = [...post.comments, {id: '01', author, message}]
      console.log(post)
      updatedPosts[postIndex] = post
      setPosts(updatedPosts)
    }
  }

  return(
    <PostContext.Provider
      value={{
        posts,
        addLike,
        savePost,
        addComment,
      }}
    >
      {props.children}
    </PostContext.Provider>
  )

}

export default InstagramProvider