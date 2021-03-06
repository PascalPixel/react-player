import React from 'react'

import VideoListItem from './video-list-item'

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        video={video}
        key={video.etag}
        onVideoSelect={props.onVideoSelect}
      />
    )
  })

  return (
    <div>
      <ul className='list-group'>
        {videoItems}
      </ul>
    </div>
  )
}

export default VideoList
