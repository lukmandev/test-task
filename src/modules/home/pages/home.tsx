import { useMachine } from "@xstate/react";
import { Button, Modal, Row } from "antd";
import {
  ArrowsAltOutlined,
  ShrinkOutlined,
  PlayCircleOutlined,
  PauseOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import ReactPlayer from "react-player";
import clsx from "clsx";

import machine from "~/store";

const Home = () => {
  const [state, send] = useMachine(machine);

  const isSmallSize = state.matches("opened.size.small");
  const isStandardSize = state.matches("opened.size.standard");
  const isOpen = state.matches("opened");
  const isPlaying =
    state.matches("opened.player.playing") && state.context.isPlaying;

  const handleCancel = () => {
    send("CLOSE");
  };

  const handleOpenModal = () => {
    send("OPEN");
  };
  const handleChangeSize = () => {
    const type = isSmallSize ? "STANDARDIZE" : "REDUCE";
    send(type);
  };

  const handleToggleVideo = () => {
    const type = isPlaying ? "PAUSE" : "PLAY";
    send(type);
  };

  return (
    <Row style={{ height: "100%" }} align="middle" justify="center">
      <div className="video-player-box">
        <PlayCircleOutlined onClick={handleOpenModal} className="play-icon" />
      </div>
      <Modal
        className={clsx({
          "small-modal": isSmallSize,
          "standard-modal": isStandardSize,
        })}
        visible={isOpen}
        onCancel={handleCancel}
        footer={
          <>
            <Button
              onClick={handleChangeSize}
              icon={isStandardSize ? <ArrowsAltOutlined /> : <ShrinkOutlined />}
            ></Button>
            ,
            <Button
              onClick={handleToggleVideo}
              icon={isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
            ></Button>
          </>
        }
      >
        {isOpen && (
          <>
            {/*
          // @ts-ignore */}
            <ReactPlayer
              playing={isPlaying}
              loop={true}
              width="100%"
              height="100%"
              url="https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-4691-a73f-a4e583391b3d/playlist.m3u8"
            />
          </>
        )}
      </Modal>
    </Row>
  );
};

export default Home;
