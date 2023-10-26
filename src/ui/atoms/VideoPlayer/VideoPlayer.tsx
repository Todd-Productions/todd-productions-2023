import React from "react"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

export interface VideoPlayerProps {
  videoId: string
  title?: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const { videoId, title } = props

  return (
    <LiteYouTubeEmbed
      aspectHeight={9}
      aspectWidth={16}
      id={videoId}
      title={title ?? "YouTube video player"}
    />
  )
}

export default VideoPlayer
