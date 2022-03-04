import React from "react";
import { YoutubeEmbedContainer } from "./styles";

const YoutubeEmbed = ({videoId}) => {
    return (
        <YoutubeEmbedContainer>
            <iframe
                title="Embedded youtube"
                allowFullScreen
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            />
        </YoutubeEmbedContainer>
    )
}

export default YoutubeEmbed