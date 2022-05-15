import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "../../styles/space-redefined.module.scss";
const Video = ({ thumbnail, src }) => {
  const ref = useRef(null);
  const [controlsShow, setControlsShow] = useState(false);

  const onPlayVideo = () => {
    setControlsShow(true);
    ref.current.play();
  };
  return (
    <>
      <iframe
        width="1060"
        height="560"
        src="https://www.youtube.com/embed/EJkJfXstY0o"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {controlsShow ? (
        ""
      ) : (
        <div className={styles.play_btn_container}>
          <Image
            src="//images/kitchen_remodel_lp/play_btn.svg"
            width={160}
            height={160}
            objectFit="contain"
            onClick={onPlayVideo}
          />
        </div>
      )}
    </>
  );
};

export default Video;
