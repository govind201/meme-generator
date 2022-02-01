import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import "./share.css";


export const Share = ({url, shareText,})=>{
    return (
        <div>
             <FacebookShareButton
                url={url}
                quote={shareText}
                
            >
            <FacebookIcon size={32} round /> 
                Facebook Share
            </FacebookShareButton>
            <TwitterShareButton
            title={shareText}
            url={url}
            >
            <TwitterIcon size={32} round />
                Twitter Share
            </TwitterShareButton> 
        </div>
    )
}