//import any dependencies
require("dotenv").config();
const server = require("./api/server");

//set up environmental config
const port = process.env.PORT || 4000;

//define environmental variables if needed

//set up our server.listen
server.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`);
});
