const RPC = require("discord-rpc");
const colors = require('colors')
const client = new RPC.Client({
    transport: "ipc"
});

const activity = {
    details: "KKK ON TOP",
    assets: {
        large_image: "image_1",
        large_text: "DM ME FOR KV's",

    },
    buttons: [
        {
            "label": "KV's [XBOX]",
            "url": "https://discord.gg/DDTpgG49eB"
        },
        {
            "label": "Genisys [PS3]",
            "url": "https://www.genisys.kiwi/login"
        },
    ],
    timestamps: { start: Date.now () },
    instance: true
};

client.on("ready", () => {
    client.request("SET_ACTIVITY", {pid: process.pid, activity: activity })
    console.log(colors.bgBrightRed('hello')); // outputs green text
});

client.login({ clientId: "823060159563300884" })