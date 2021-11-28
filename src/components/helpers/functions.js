const shorten = (title) => {
  const splitTitle = title.split(" ");
  const newSplitTitle = `${splitTitle[0]} ${splitTitle[1]}`;
  return newSplitTitle;
};

export {shorten};
