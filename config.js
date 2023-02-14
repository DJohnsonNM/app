
module.exports = {
  saveLocation: './dataFiles',
  unpackLocation: './unpackedFiles', // if not defined, defaults to 'unpackedFiles'
  apiUrl: 'https://api.inshosteddata.com/api',
  key: process.env.CD_API_KEY, // don't hardcode creds, keep them in environment variables ideally!
  secret: process.env.CD_API_SECRET,
  maxConnections: 200, // The maximum number of files allowed to be downloading simultaneously
}
https_proxy_stuff.com:433
