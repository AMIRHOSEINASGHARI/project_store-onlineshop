export const shorterText = (text, maxCharacter) => {
  if (String(text).length > maxCharacter) {
    return `${text.substring(0, maxCharacter)}...`;
  } else {
    return text;
  }
};

export const createSlug = (title) => {
  const slug = title.split(" ").join("-");
  return slug;
};
