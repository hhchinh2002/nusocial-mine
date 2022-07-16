import React, {useState} from 'react';
import './post.css'
import { Avatar } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { ChatBubbleOutline } from '@mui/icons-material';
import Picker from "emoji-picker-react"
import { Image, Transformation } from "cloudinary-react";

const Post = ({post, likePost, key}) => {
    const [comments, setComments] = useState(post.comment);
    const [comment, setComment] = useState("");
    const [commentsList, setCommentsList] = useState([]);
    const [showPicker, setShowPicker] = useState(false);
    const onEmojiClick = (event, emojiObj) => {
        setComment(prevInput => prevInput + emojiObj.emoji);
        setShowPicker(false);
      }
      const sendMessage = async() => {
        if (comment !== "") {
          const messageData = {
          comment: comment
          };

          setCommentsList((list) => [...list, messageData]);
          setComment("");
          setComments(comments + 1);
        }
    }  

  return (
    <div className="postContainer">
        <div className="postTop">
            <div className="avatarContainer"> 
                <Avatar src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/ec/83/3a/ec833a37-1e6f-958e-9e60-4f358795405f/source/512x512bb.jpg" /> 
            </div>
            <div className="posterInfo">
                <div className="postOwner">
                    @{post.author}
                </div>
                <div className="postTime">
                    14 Jan 2022
                </div>
            </div>
        </div>
        <div className="postDetail">
            <div className="postText"> {post.text} </div>
            <div className="postImages">
                <Image cloudName="dgsho9kao" publicId={post.images}>
                    <Transformation crop="scale" width="400" />
                </Image>
            </div>
        </div>
        <div className="postInteraction">
            <div>
                <FavoriteBorderIcon className="interactIcon" onClick = {() => {likePost(post.id, key)} }/>
                {post.likes}
            </div>
            <div>
                <ChatBubbleOutline className="interactIcon" onClick = {() => setComments(comments + 1)} />
                {comments}
            </div>
        </div>
        <div className="commentSection">
            {commentsList.map((comment) => {
                return (
                    <div className = "comment" >
                        <div className="postBottomAvatar">
                            <Avatar src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/ec/83/3a/ec833a37-1e6f-958e-9e60-4f358795405f/source/512x512bb.jpg" />
                        </div>
                        <div className="commentBubble">
                            <div className="commentName">Samoyed Hoang</div>
                            <p>{comment.comment}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="postBottom">
            <div className="postBottomAvatar">
                <Avatar src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/ec/83/3a/ec833a37-1e6f-958e-9e60-4f358795405f/source/512x512bb.jpg" />
            </div>
            <div className="postBottomCommentBox">
                <input 
                    className="reply"
                    type = "text"
                    placeholder = "Add comment" 
                    value = {comment}
                    onChange={(event) => { setComment(event.target.value); }}
                    onKeyPress = { (event) => {
                    event.key === 'Enter' && sendMessage();  
                }}></input> 
                <div className="additionStuff">
                    <InsertEmoticonIcon className="emoji" onClick = {() => setShowPicker(val => !val)}/>
                        {showPicker && <Picker onEmojiClick={ onEmojiClick} /> }
                    <InsertPhotoIcon  />
                </div>
            </div>
            <button className="postBottomSendButton" onClick = {sendMessage} >Send</button>
        </div>
    </div>
  )
}

export default Post
