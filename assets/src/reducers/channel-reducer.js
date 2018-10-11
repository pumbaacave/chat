import { PUSH_HISTORY, ACTION_SHOUT } from "../actions";

const initialState = {
  chatHistories: []
};

export default function channelReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_SHOUT:
      let Value = {
        ...state,
        chatHistories: [...state.chatHistories, action.payload]
      };
      console.log(Value);
      return Value;

    default:
      return state;
  }
}
