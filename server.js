// Import express
const express = require("express");

// Initialize application
const cors = require("cors");
const app = express();

app.use(cors());
const PORT = 4555;

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// @ GET /amgreatness
app.get(`/amgreatness`, async function (req, res) {
  const options = {
    method: "GET",
  };

  const url = "https://amgreatness.com/feed/";
  try {
    let response = await fetch(url, options);
    response = await response.text();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Internal Server Error.` });
  }
});

// @ GET /foxnews
app.get(`/foxnews`, async function (req, res) {
  const options = {
    method: "GET",
  };

  const url = "https://moxie.foxnews.com/google-publisher/latest.xml";
  try {
    let response = await fetch(url, options);
    response = await response.text();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Internal Server Error.` });
  }
});

// @ GET /dailysignal
app.get(`/dailysignal`, async function (req, res) {
  const options = {
    method: "GET",
  };

  const url = "https://dailysignal.com/feed/";
  try {
    let response = await fetch(url, options);
    response = await response.text();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Internal Server Error.` });
  }
});

// Set up Express Listener
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
