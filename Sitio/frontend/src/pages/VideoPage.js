import React from "react";

const VideoPage = (props) => {
    return (
        <main className="holder">
            <div align="center">
                <h2>Videos</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tHDUCfC90fM"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>&nbsp;<iframe width="560" height="315" src="https://www.youtube.com/embed/qjjfj4Yo4fA"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
            </div>
            <br></br>
            <div align="center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/QMBeSTu87X4"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>&nbsp;<iframe width="560" height="315" src="https://www.youtube.com/embed/_cDaIwcSLDQ"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
            </div>
            <br></br>
        </main >
    );
}

export default VideoPage;