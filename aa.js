const fetch = require("node-fetch");

const myAsync = async x => {
  return x + 5;
};

const main = async () => {
  const p1 = fetch("https://randomuser.me/api/");
  const p2 = fetch("https://randomuser.me/api/");
  const [response1, response2] = await Promise.all([p1, p2]);
  const p3 = response1.json();
  const p4 = response2.json();
  const [json1, json2] = await Promise.all([p3, p4]);
  return `${json1.results[0].gender}-${json2.results[0].gender}`;
};

const results = main();
results;
