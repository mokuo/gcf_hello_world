/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloGET = (req, res) => {
  res.send('Hello World!');
};

/**
 * Background Cloud Function to be triggered by Pub/Sub.
 *
 * @param {object} event The Cloud Functions event.
 * @param {function} callback The callback function.
 */
exports.helloPubSub = (event, callback) => {
  const pubsubData = event.data;
  console.log(pubsubData.message);

  callback();
};
