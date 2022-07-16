
import './posting.css'
import React, {useState, useNavigate} from 'react'
import { Avatar } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import Picker from "emoji-picker-react"
import axios from "axios"
import { NavigateNextTwoTone } from '@mui/icons-material'
import { Image } from 'cloudinary-react'

const Posting = () => {
    const [showPicker, setShowPicker] = useState(false);
    const [text, setText] = useState("");
    const [images, setImages] = useState([]);

    const onEmojiClick = (event, emojiObj) => {
        setShowPicker(false);
    }

    const post = () => {
        const formData = new FormData();
        formData.append("file", images[0]);
        formData.append("upload_preset", "nusocial");
        formData.append("api_key", "356331469899552");
        axios.post(
          "https://api.cloudinary.com/v1_1/dgsho9kao/image/upload",
          formData
        ).then((response) => {
          const fileName = response.data.public_id;

          axios.post("https://nusocial-mine.herokuapp.com/posting", {
            text: text,
            author: localStorage.getItem("username"),
            images: fileName
          })
        });
    }

    return (
        <div className="posting">
            <div>
                <div className="avatar">
                    <Avatar src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/ec/83/3a/ec833a37-1e6f-958e-9e60-4f358795405f/source/512x512bb.jpg" />
                </div>
                <div className="postContextContainer">
                    <input 
                        className="postContext"
                        placeholder="Write something to share with your friends here"
                        onChange={
                            (event) => {setText(event.target.value);}
                        }
                    />
                </div>
            </div>
            <div className="postingBottom">
                <div className="postingAdditional">
                    <div className="postImage">
                        <input type="file" onChange={(event) => setImages(event.target.files)}/>
                        <InsertPhotoIcon sx={{ fontSize: 40 }} className ="icon" />
                    </div>
                    <div className="postEmoji">
                        <InsertEmoticonIcon sx={{ fontSize: 40 }} className="icon" onClick = {() => setShowPicker(val => !val)}/>
                        <i>
                            {showPicker && <Picker onEmojiClick={ onEmojiClick}/> }
                        </i>
                    </div>
                </div>
                <button className="postingButton" onClick={post}>
                    Post
                </button>
            </div>  
        </div>
  )
} 

export default Posting
