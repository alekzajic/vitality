export const getAppMessages = async (locale: string) => {
  // get generic messages
  const messages = (await import(`../locale/${locale}/messages.json`)) || {};

  return new Promise((resolve) => {
    resolve({ ...messages.default });
  });
};
