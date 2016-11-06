import React from 'react'

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId
  const url = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1'

  return (
    <div>
      <h4>{video.snippet.title}</h4>
      <br />
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <br />
      <p>{video.snippet.description}</p>
    </div>
  )
}

export default VideoDetail
