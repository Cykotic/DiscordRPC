const RPC = require("discord-rpc");
const colors = require('colors')
const client = new RPC.Client({
    transport: "ipc"
});

const activity = {
    details: "description,
    assets: {
        large_image: "image from discord",
        large_text: "text",

    },
    buttons: [
        {
            "label": "Text Here",
            "url": "custom URL HERE"
        },
        {
            "label": "Text Here",
            "url": "custom URL HERE"
        },
    ],
    timestamps: { start: Date.now () },
    instance: true
};

client.on("ready", () => {
    client.request("SET_ACTIVITY", {pid: process.pid, activity: activity })
    console.log(colors.bgBrightRed('hello')); // outputs green text
});

client.login({ clientId: "CLIENT ID HERE" })
