/**
 * The `corsOptions` object is a configuration object that tells the server which origins are
allowed to make requests to this server. 
 * 
 * The `origin` property is an array of allowed origins. 
 * 
 * The `optionsSuccessStatus` property is a number that tells the browser how to respond to a CORS
OPTIONS request. 
 * 
 * The `credentials` property is a boolean that tells the browser whether to send credentials
(cookies, for example) with the request. 
 * 
 * The `exposedHeaders` property is an array of headers
 */
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://merndairy-frontend.vercel.app",
    "https://merndairy-backend-production.up.railway.app/",
  ],
  optionsSuccessStatus: 200,
  credentials: true,
  exposedHeaders: ["set-cookie"],
};

module.exports = corsOptions;
