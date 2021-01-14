const contentful = require("contentful");

const client = contentful.createClient({
  space: "pyt8t28zyl2v",
  accessToken: "FvEK9Z8tlrHzGtG0Zzuk3r9yUp0-mnv6sp3SQFDd58I",
})

const getContent = (contentType, set) => {
  client.getEntries({ content_type: `${contentType}` }).then((response) => {
    const res = response.items;
    set(res);
  });
};

export {getContent};