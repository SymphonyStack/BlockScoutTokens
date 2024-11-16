import axios from "axios";

const args = process.argv.slice(2);
const address = [args[0]];

const run = () => {
  axios
    .get(`https://eth.blockscout.com/api/v2/addresses/${address}/nft`)
    .then(res => {
      console.log("##", res.data, "##");
    });
};
run();
