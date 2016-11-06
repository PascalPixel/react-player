import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
  const url = video.snippet.thumbnails.medium.url
  const title = video.snippet.title
  const channelTitle = video.snippet.channelTitle

  return (
    <li onClick={() => onVideoSelect(video)} className='list-group-item'>
      <div className='row'>
        <div className='col-xs-5'>
          <img className='img-fluid' src={url} />
        </div>
        <div className='col-xs-7'>
          <h6>{title}</h6>
          <p>by {channelTitle}</p>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem
