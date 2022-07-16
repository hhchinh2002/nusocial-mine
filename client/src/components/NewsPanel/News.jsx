import React, { useEffect, useState } from 'react'
import "./news.css"
import NewsFeed from'./NewsFeed'
import { NewsData, PostList } from '../test-data/test-data'
import Posting from '../Posting/Posting'
import Post from '../Post/Post'
import axios from 'axios'

//Change props of NewsFeed to alter content of News panel
const News = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);

  useEffect(() => {
    axios.get("https://nusocial-mine.herokuapp.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const likePost = (id, key) => {
    var tempLikes = posts;
    tempLikes[key].likes = tempLikes[key].likes + 1;

    axios.post("https://nusocial-mine.herokuapp.com/likes", {
        userLiking: localStorage.getItem("username"),
        postId: id,
    }).then((response) => {
        setPosts(tempLikes);
    });
  };

  return (
    <>
      <div className = "News">
        {NewsData.map(news => (
          <NewsFeed img = {news.img} profileIcon = {news.profileIcon} title = {news.title} link = {news.link} />
        ))}
      </div>
      <div className="newsFeed">
        <Posting />
        {posts.map((val, key) => (
          <Post post = {val} likePost = {likePost} key={key}/>
        ))}
      </div>
    </>
  )
}

export default News;



