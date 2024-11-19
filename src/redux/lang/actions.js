export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

// Action creator untuk mengubah bahasa
export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  payload: language,
});
