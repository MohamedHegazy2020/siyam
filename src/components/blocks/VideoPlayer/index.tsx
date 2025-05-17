import React, { useRef, useState, useEffect } from 'react';
import { Icon } from '@iconify-icon/react';

interface VideoPlayerProps {
  src: string;
}

type HTMLVideoElementWithPiP = HTMLVideoElement & {
  requestPictureInPicture?: () => Promise<PictureInPictureWindow>;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElementWithPiP | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        handlePlayPause();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handleBackward();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleForward();
      } else if (e.key.toLowerCase() === 'm') {
        handleMute();
      } else if (e.key.toLowerCase() === 'f') {
        handleFullscreen();
      } else if (e.key === 'Escape') {
        setShowOptions(false);
        if (isFullscreen && document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line
  }, [isPlaying, isMuted, isFullscreen]);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const value = Number(e.target.value);
    videoRef.current.currentTime = (value / 100) * videoRef.current.duration;
    setProgress(value);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (!isFullscreen) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  const handleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleForward = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 5, duration);
  };

  const handleBackward = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 5, 0);
  };

  const handleMoreOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleDownload = () => {
    if (!videoRef.current) return;
    const a = document.createElement('a');
    a.href = src;
    a.download = 'video.mp4';
    a.click();
    setShowOptions(false);
  };

  const handlePiP = () => {
    if (videoRef.current && videoRef.current.requestPictureInPicture) {
      videoRef.current.requestPictureInPicture();
    }
    setShowOptions(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div
      className="relative w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden bg-black shadow-lg"
      tabIndex={0}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onClick={handlePlayPause}
        tabIndex={0}
        autoPlay
        loop
      />
      {/* Centered Controls: Only Backward, Play/Pause, Forward (PAUSED ONLY) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
          <div className="flex items-center gap-4 bg-black/40 rounded-full px-6 py-4 pointer-events-auto">
            <button onClick={handleBackward} className="focus:outline-none" title="Back 5s">
              <Icon icon="mdi:rewind-5" width="36" height="36" color="#fff" />
            </button>
            <button onClick={handlePlayPause} className="focus:outline-none" title="Play/Pause">
              <Icon icon={isPlaying ? 'mdi:pause' : 'mdi:play'} width="48" height="48" color="#fff" />
            </button>
            <button onClick={handleForward} className="focus:outline-none" title="Forward 5s">
              <Icon icon="mdi:fast-forward-5" width="36" height="36" color="#fff" />
            </button>
          </div>
        </div>
      )}
      {/* Bottom Controls: Backward, Play/Pause, Forward, Mute, Time, Fullscreen, More, Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-2 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-2 z-10">
        <input
          type="range"
          min={0}
          max={100}
          value={progress}
          onChange={handleProgressChange}
          className="w-full accent-primary h-1 cursor-pointer"
        />
        <div className="flex items-center justify-between text-white text-sm gap-2">
          <div className="flex items-center gap-2">
            <button onClick={handleBackward} className="focus:outline-none" title="Back 5s">
              <Icon icon="mdi:rewind-5" width="24" height="24" color="#fff" />
            </button>
            <button onClick={handlePlayPause} className="focus:outline-none" title="Play/Pause">
              <Icon icon={isPlaying ? 'mdi:pause' : 'mdi:play'} width="28" height="28" color="#fff" />
            </button>
            <button onClick={handleForward} className="focus:outline-none" title="Forward 5s">
              <Icon icon="mdi:fast-forward-5" width="24" height="24" color="#fff" />
            </button>
            <button onClick={handleMute} className="focus:outline-none" title="Mute">
              <Icon icon={isMuted ? 'mdi:volume-off' : 'mdi:volume-high'} width="24" height="24" color="#fff" />
            </button>
            <span>
              {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
            </span>
          </div>
          <div className="flex items-center gap-2 relative">
            <button onClick={handleFullscreen} className="focus:outline-none" title="Fullscreen">
              <Icon
                icon={isFullscreen ? 'mdi:fullscreen-exit' : 'mdi:fullscreen'}
                width="24"
                height="24"
                color="#fff"
              />
            </button>
            <button onClick={handleMoreOptions} className="focus:outline-none" title="More options">
              <Icon icon="mdi:dots-vertical" width="24" height="24" color="#fff" />
            </button>
            {showOptions && (
              <div className="absolute right-0 top-10 bg-white text-black rounded shadow-lg py-2 w-40 z-30">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100" onClick={handleDownload}>
                  <Icon icon="mdi:download" className="inline mr-2" /> Download
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100" onClick={handlePiP}>
                  <Icon icon="mdi:picture-in-picture-bottom-right" className="inline mr-2" /> Picture in Picture
                </button>
                {/* Add more options here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
