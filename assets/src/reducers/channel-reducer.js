import { NOTIFY_SHOUTED } from "../actions";

const initialState = {
  chatHistories: []
};

export default function channelReducer(state = initialState, action) {
  switch (action.type) {
    case NOTIFY_SHOUTED:
      let newState = {
        ...state,
        chatHistories: [...state.chatHistories, action.payload]
      };
      console.log(newState);
      return newState;

    default:
      return state;
  }
}
