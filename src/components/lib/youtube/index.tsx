/**
 * Responsive Youtube Embed
 * Source: https://medium.com/@kevinsimper/full-width-youtube-embed-with-react-js-responsive-embed-509de7e7c3bf
 */
import React from "react";

export default ({ youtubeId }) => {
    return (
        <iframe
            title={youtubeId}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }}
            src={`https://www.youtube.com/embed/${youtubeId}`}
            frameBorder="0"
            allowFullScreen
        />
    );
};
