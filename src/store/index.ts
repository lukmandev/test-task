import { createMachine, assign } from "xstate";

const machine = createMachine({
  id: "video-player",
  initial: "closed",
  context: {
    isPlaying: false,
  },
  states: {
    closed: {
      on: {
        OPEN: {
          target: "opened",
          actions: assign({ isPlaying: true }),
        },
      },
    },
    opened: {
      type: "parallel",
      initial: "size",
      states: {
        size: {
          initial: "standard",
          states: {
            standard: {
              on: {
                REDUCE: "small",
              },
            },
            small: {
              on: {
                STANDARDIZE: "standard",
              },
            },
          },
        },
        player: {
          initial: "playing",
          states: {
            playing: {
              on: {
                PAUSE: "paused",
              },
            },
            paused: {
              on: {
                PLAY: "playing",
              },
            },
          },
        },
      },
      on: {
        CLOSE: {
          target: [".player.paused", "closed"],
        },
      },
    },
  },
});

export default machine;
