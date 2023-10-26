export const dateGenerator = (date, lang) => {
  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  if (lang == "en") {
    return date.toLocaleDateString("en-US", dateOptions);
  }
  if (lang == "ar") {
    return date.toLocaleDateString("ar-EG", dateOptions);
  }
};
export const timeGenerator = (date, lang) => {
  const timeOptions = { hour: "2-digit", minute: "2-digit" };

  if (lang == "en") {
    return new Intl.DateTimeFormat("en-US", timeOptions).format(date);
  }
  if (lang == "ar") {
    return new Intl.DateTimeFormat("ar-EG", timeOptions).format(date);
  }
};

// var localizedDate = date.toLocaleDateString(navigator.language, options); // "ar-EG" | "en-US"
