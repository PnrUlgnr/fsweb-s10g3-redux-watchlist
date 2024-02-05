export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export function addFavorite() {
  return {
    type: ADD_FAVORITE,
    payload: movie,
  };
}
