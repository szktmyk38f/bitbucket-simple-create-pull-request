import fetch from "node-fetch";
import { HttpsProxyAgent } from "https-proxy-agent";
import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const username = 'username'
const password = 'password'
const base64 = addAndConvertToBase64(username, password)
// Uncomment if through a proxy
// const proxy = "http://xxxxx:yyyyy@proxy.xxxx.xx.xx:xxxx"

const proxyAgent = new HttpsProxyAgent(proxy);
let title
let fromBranch;
let toBranch;

const rl = readline.createInterface({ input, output });

const titleans = await rl.question("Set Title: ");
title = titleans;

const from = await rl.question("Set Source Branch: ");
fromBranch = from.replace(/\s+/g, '');

const to = await rl.question("Set Destination Branch: ");
toBranch = to.replace(/\s+/g, '');

rl.close();

const bodyData = `{
    "title": "${title}",
    "source": {
      "branch": {
        "name": "${fromBranch}"
      }
    },
    "destination": {
      "branch": {
        "name": "${toBranch}"
      }
    }
  }`;

await fetch("https://api.bitbucket.org/2.0/repositories/estaffing-qlc/estaffing/pullrequests", {
  method: 'POST',
  headers: {
    Authorization: `Basic ${base64}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: bodyData,
  agent: proxy !== "undefined" ? proxyAgent : "",
});

function addAndConvertToBase64(value1, value2) {
  var sum = value1 + ':' + value2;
  var buffer = Buffer.from(sum.toString());
  return buffer.toString('base64');
}