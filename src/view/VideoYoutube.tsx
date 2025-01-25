import { useEffect, useRef } from "react";
import YouTube from "react-youtube";

interface YouTubePlayer {
  playerInfo: {
    currentTime: number;
    // Add other properties if needed
  };
  seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
}

const VideoYouTube = () => {
  const playerRef = useRef<YouTubePlayer | null>(null);

  useEffect(() => {
    // Lắng nghe sự kiện beforeunload để lưu thời gian phát video
    window.addEventListener("beforeunload", savePlaybackTime);

    // Dọn dẹp sự kiện khi component unmount
    return () => {
      window.removeEventListener("beforeunload", savePlaybackTime);
    };
  }, []);

  // Lưu thời gian phát video vào localStorage
  const savePlaybackTime = () => {
    if (playerRef.current) {
      console.log(
        "playerRef.current: ",
        playerRef?.current?.playerInfo?.currentTime
      );
      const _currentTime = playerRef?.current?.playerInfo?.currentTime;
      if (_currentTime) {
        localStorage.setItem("youtubePlaybackTime", _currentTime.toString());
      }
    }
  };

  // Khôi phục thời gian phát video từ localStorage
  const restorePlaybackTime = (player: YouTubePlayer) => {
    const savedTime = localStorage.getItem("youtubePlaybackTime");
    if (savedTime) {
      player.seekTo(parseFloat(savedTime));
    }
  };

  const onReady = (event: { target: YouTubePlayer }) => {
    playerRef.current = event.target;
    restorePlaybackTime(event.target); // Khôi phục thời gian phát
  };

  const onStateChange = (event: { data: number }) => {
    // Nếu video tạm dừng thì lưu thời gian
    console.log("event.data: ", event.data);
    if (event.data === 2) {
      savePlaybackTime(); // Lưu thời gian khi video tạm dừng
    }
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1, // Tự động phát video
    },
  };

  return (
    <>
      <div>Đây là video của mũi to</div>
      <div>Video này có lưu lại thời điểm xem dở để khi vào lại có thể xem tiếp</div>
      <YouTube
        videoId={"4heFy1DNGfc"}
        opts={opts}
        onReady={onReady}
        onStateChange={onStateChange}
      />
    </>
  );
};

export default VideoYouTube;
