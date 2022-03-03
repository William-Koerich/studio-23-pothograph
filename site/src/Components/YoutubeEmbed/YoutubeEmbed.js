import React from "react";
import { YoutubeEmbedContainer } from "./styles";

const YoutubeEmbed = ({videoId}) => {
    return (
        <YoutubeEmbedContainer>
            <iframe
                title="Embedded youtube"
                allowfullscreen
                frameborder="0"
                src={`https://www.youtube.com/embed/${videoId}`}
            />
        </YoutubeEmbedContainer>
    )
}

export default YoutubeEmbed