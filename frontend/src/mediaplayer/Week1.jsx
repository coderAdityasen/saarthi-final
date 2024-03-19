import React from 'react';
import ReactPlayer from 'react-player';
import video from '../assets/week1.mp4';

function Week1() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}></h1>
      <div style={styles.videoWrapper}>
        <ReactPlayer
          url={video}
          controls={true}
          width="100%"
          height="auto"
          playing={false}
          volume={0.8}
          playbackRate={1}
          loop={false}
          pip={true}
          style={{ margin: '0 auto' }}
        />
      </div>
    </div>
  );
}

export default Week1;

const styles = {
  container: {
    backgroundColor: 'black', // Darker shade of blue for background color
    color: 'white', // Text color
    padding: '20px', // Padding around content
  },
  title: {
    fontSize: '24px', // Title font size
    marginBottom: '20px', // Bottom margin for title
  },
  videoWrapper: {
    position: 'relative',
    overflow: 'hidden'
  },
};
