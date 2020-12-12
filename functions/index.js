const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Hd7ajIKCDeXlKXBoBXpjwMNSA3aAXQKoEyGu0QRn3QizRVIDacdGUKSeNE1OeBovSlseRSBcj7YuRjhrTyvaZIq00O2Wzbzev"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello World"));
app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received for", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
    paymentIntent
  });
});

exports.api = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
