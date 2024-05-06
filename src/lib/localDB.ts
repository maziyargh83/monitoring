import localforage from "localforage";
export const localDB = localforage.createInstance({
  name: "monitoring",
  driver: localforage.LOCALSTORAGE,
});
