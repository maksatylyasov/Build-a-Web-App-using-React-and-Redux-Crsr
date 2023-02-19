export const SEARCH = "SEARCH";

let stId = 0;

export function search(text) {
  return {
    type: SEARCH,
    id: stId,
    text,
  };
}
