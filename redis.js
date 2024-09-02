import { createClient } from "redis";

async function startRedis() {
    const client = await createClient().on("error", (err) => {
        console.log(err);
    });
    client.connect();
    return client;
}

async function getData(client) {
    const val = await client.get("name");
    return val;
}

async function setData(client) {
    client.set("name", "Rohit");
}

const client = await startRedis();
setData(client);
const val = await getData(client);
console.log(val);
console.log(client);
