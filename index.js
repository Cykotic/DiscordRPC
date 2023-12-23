const {
    Client
} = require("discord-rpc");

const clientId = ""; // Replace with your Discord application's client ID
const rpc = new Client({
    transport: "ipc"
});

async function setActivity() {
    if (!rpc) return;

    const activity = {
        details: 'Description', // The main description or title of your activity
        state: 'RPC STATE', // The state or additional information about the activity
        largeImageKey: 'large_image', // The key of the large image asset, replace with the YouTube video ID
        largeImageText: 'Text when hovering over the image', // The text that appears when hovering over the large image
        smallImageKey: 'small_image', // The key of the small image asset (if used)
        smallImageText: 'eh', // The text that appears when hovering over the small image (if used)
        instance: false, // Whether the activity is an instance (usually set to false)
        startTimestamp: Date.now(), // The start timestamp of the activity
        //endTimestamp: Date.now(), // The end timestamp of the activity
        buttons: [{
                label: 'Button 1',
                url: 'https://www.example.com'
            }, // The first button with its label and URL
            {
                label: 'Button 2',
                url: 'https://www.example.com'
            } // The second button with its label and URL
        ]
    };

    rpc.setActivity(activity); // Setting the defined activity using the setActivity method

}

rpc.on('ready', async () => {
    console.log("RPC presence is UP");
    setActivity();

    setInterval(() => {
        setActivity(); // Update the presence every 18 seconds
    }, 18000);
});

rpc.login({
    clientId
}).then(() => {
    console.log("Logged in as " + rpc.user.username);
}).catch((error) => {
    console.error("Error logging in:", error.message);
});


// should look like this when your finish
// https://makima.thicc-thighs.com/8hafs52r.png


// example for "largeImageKey", "smallImageKey" should look something like this https://prnt.sc/13j34qe