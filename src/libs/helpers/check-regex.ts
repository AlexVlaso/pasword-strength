const checkRegex = (value: string, regex: RegExp) => {
  return value.search(regex) > -1;
};

export { checkRegex };
