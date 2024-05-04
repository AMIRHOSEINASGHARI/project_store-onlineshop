// bcriptjs
import { compare, hash } from "bcryptjs";

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

export const reducePrice = (discount, price) => {
  const discountValue = (price * discount) / 100;
  const finalValue = price - discountValue;
  return finalValue;
};

export const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

export const isInCart = (productId, selectedItems) => {
  if (selectedItems) {
    const existingIndex = selectedItems.findIndex((item) => item === productId);
    return existingIndex;
  } else {
    return -1;
  }
};

export const calculateTotalPrice = (items) => {
  return items.reduce(
    (prev, current) => prev + current.productId.price * current.quantity,
    0
  );
};

export const calculateTotalDiscount = (items) => {
  return items.reduce(
    (prev, current) =>
      prev +
      (current.quantity *
        (current.productId.price * current.productId.discount)) /
        100,
    0
  );
};

export const isLikedByUser = (likes, userId) => {
  // the type of likes is array
  const result = likes.find((item) => item.user.equals(userId));

  //   return value is boolean
  return !!result;
};
