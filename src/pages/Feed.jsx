import React, { useState } from "react";
import { useAtom } from "jotai";
import { postAtom } from "../utils/globalstate";
import './Feed.css';

function Post({ text, image, audio }) {
  return (
    <div className="post">
      <p>{text}</p>
      {image && <img src={image} alt="Post" />}
      {audio && <audio controls src={audio}>
                  Your browser does not support the audio element.
                </audio>}
    </div>
  );
}

function PostForm() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [posts, setPosts] = useAtom(postAtom);

  const handlePost = () => {
    if (content.trim() || image || audio) {
      const newPost = {
        text: content,
        imageUrl: image ? URL.createObjectURL(image) : null,
        audioUrl: audio ? URL.createObjectURL(audio) : null,
      };
      setPosts(prevPosts => [...prevPosts, newPost]);
      setContent('');
      setImage(null);
      setAudio(null);
    }
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleAudioChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setAudio(event.target.files[0]);
    }
  };

  return (
    <div className="post-form">
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />Image
      <input
        type="file"
        accept="audio/*"
        onChange={handleAudioChange}
      />Audio
      <button onClick={handlePost}>Post</button>
    </div>
  );
}

function Feed() {
  const [posts] = useAtom(postAtom);

  return (
    <div className="feed">
      <h1>Posts</h1>
      <PostForm />
      {posts.map((post, index) => (
        <Post key={index} text={post.text} image={post.imageUrl} audio={post.audioUrl} />
      ))}
    </div>
  );
}

export default Feed;
