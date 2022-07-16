import React from 'react'
import {Avatar} from "@mui/material"
import { Link } from "@mui/material"
import './leftBarRow.css'

//src is the url of the link to go to on clicking row in Left Bar
// imgSrc is url of image shown beside text 
// Icon is alternative to imgSrc
// title is text that appears in row
const LeftBarRow = ({src, imgSrc, title}) => {
  return (
    <Link href={src} style={{ textDecoration: 'none'}} >
    <div className = 'LeftBarRow'>

    {imgSrc && <Avatar src = {imgSrc} />}
    <h4>{title}</h4>
    
    </div>
    </Link>
  )
}

export default LeftBarRow
