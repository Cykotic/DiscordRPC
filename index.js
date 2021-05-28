/* simple discord RPC */

const RPC = require("discord-rpc");
const client = new RPC.Client({
    transport: "ipc"
});

const activity = {
    details: "description",
    assets: {
        large_image: "image from discord", /* image  should look something like this: https://prnt.sc/13j34qe */
        large_text: "text", /* text when the big picture it's hover over */

    },
    buttons: [
        {
            "label": "Text Here", /* image_1 */
            "url": "custom URL HERE" /* URL of whatever you want to dir to go like: advertising a discord etc */
        },
        {
            "label": "Text Here", /* image_2 */
            "url": "custom URL HERE" /* URL of whatever you want to dir to go like: advertising a discord etc */
        },
    ],
    timestamps: { start: Date.now() }, /* starts a new timestamp */
    instance: true
};

/* when the client is started up! it should say "RPC IS NOW READY!" */
client.on("ready", () => {
    client.request("SET_ACTIVITY", { pid: process.pid, activity: activity })
    console.log("RPC IS NOW READY!")
});

client.login({ clientId: "CLIENT ID HERE" })// create client from https://discord.com/developers/applications then go to General Information and copy the APPLICATION ID! NOTE: Don't add bot to the application! 


/*

credit The Lazy Guy | Cykotic ✘
it's a simple discord RPC


*/
