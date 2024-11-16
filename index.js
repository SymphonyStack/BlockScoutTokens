import axios from "axios";

const args = process.argv.slice(2);
const address = [args[0]];

const run = () => {
  axios
    .get(`https://eth.blockscout.com/api/v2/addresses/${address}/tokens`)
    .then(res => {
      let tokens = [];
      for (let item of res.data.items) {
        tokens.push(item.token.address);
      }
      console.log("##", JSON.stringify({ tokens: tokens.join(", ") }), "##");
    });
};
run();
