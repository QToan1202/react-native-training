export const REGEX = {
  CARD_NUMBER: {
    INPUT: /(\d{4})(?=\d)/g,
    OUTPUT: /\s/g,
  },
  EXPIRED: {
    INPUT: /(\d{2})(\d{2})/,
    OUTPUT: /\//g,
  },
}
