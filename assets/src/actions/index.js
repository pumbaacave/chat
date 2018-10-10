export const PUSH_HISTORY = "PUSH_HISTORY";

export function pushHistory(payload) {
  if (!payload) {
    return {
      type: PUSH_HISTORY,
      payload: payload
    };
  }
}
