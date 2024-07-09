export const REGEX = {
  MOBILE_NUMBER: /^[6-9][0-9]*$/,
  NUMBER: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
  ONLY_NUMBER: /^\d+$/,
  NUMBER_WITH_DECIMAL: /^\d+(\.\d{1,2})?$/,
  ONLY_ALPHABET: /^[a-zA-Z]*$/,
  NAME: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
  START_WITH_ALPHABET_ENDS_WITH_DIGITS: /^[a-zA-Z]{4}[0-9]{4}$/,
  ALPHABET_WITH_DIGITS: /^[a-zA-Z0-9]+$/,
  AMOUNT: /(^[0][1-9]+)|([1-9]\d*)+$/,
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  EMAIL:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PASSWORD:
    /(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=.*[@#$%^&+=])(?=[^0-9]*[0-9]).{8,16}/,
  URL: /^(http|https):\/\/(([a-zA-Z0-9$\-_.+!*'(),;:&=]|%[0-9a-fA-F]{2})+@)?(((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])){3})|localhost|([a-zA-Z0-9\-\u00C0-\u017F]+\.)+([a-zA-Z]{2,}))(:[0-9]+)?(\/(([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*(\/([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*)*)?(\?([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?(\#([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?)?$/,
  VALID_URL:
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
};

export const LIMIT = {
  MAX_PASSWORD_LENGTH: 16,
  MAX_EMAIL_LENGTH: 250,
  MAX_MOBILE_LENGTH: 15,
  MIN_MOBILE_LENGTH: 7,
  MAX_NAME_LENGTH: 50,
  MIN_NAME_LENGTH: 3,
  MAX_TITLE_LENGTH: 100,
  MAX_FOCUS_BODY_PART_LENGTH: 20,
  MAX_DES_LENGTH: 500,
  MAX_CAL_BURN_LENGTH: 10,
  MAX_QUESTION_LENGTH: 250,
  MIN_QUESTION_LENGTH: 3,
  MIN_ANSWER_LENGTH: 3,
  MAX_ANSWER_LENGTH: 1500,
  MAX_DISPLAY_ORDER_LENGTH: 3,
  MIN_AGE: 1,
  MAX_AGE: 100,
  MIN_ADDRESS_LENGTH: 3,
  MAX_ADDRESS_LENGTH: 100,
  MAX_DESCRIPTION_LENGTH: 1000,
};
