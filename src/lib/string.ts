export const getNames = (name: string, space = " ") => {
  const data = name.split(space);
  return `${data[0]} ${data[1]}`;
};
