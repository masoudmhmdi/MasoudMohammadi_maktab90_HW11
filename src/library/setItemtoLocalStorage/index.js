export const SetItem = (arr) => {
  localStorage.setItem("db", JSON.stringify(arr));
};
