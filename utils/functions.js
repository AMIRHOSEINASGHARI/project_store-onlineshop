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

export const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => {
    return total + item.quantity * item.productId.price;
  }, 0);
};

export const calculateTotalDiscountPrice = (items) => {
  return items.reduce((total, item) => {
    return total + item.quantity * item.productId.discount;
  }, 0);
};
