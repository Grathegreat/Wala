const moment = require("moment-timezone");
const hours = moment.tz("Asia/Manila").format("HH");
module.exports = {
  config: {
    name: "hi",
    author: "Deku",
    description: "hi",
    cooldown: 0,
    prefix: false,
    accessableby: 0,
  },
  auto: async function ({ api, event, User }) {
    let inp = ["Hi", "hi", "Hello", "hello", "yo", "Yo"];
    let data = [
      "526214684778630",
      "526220108111421",
      "526220308111401",
      "526220484778050",
      "526220691444696",
      "526220814778017",
      "526220978111334",
      "526221104777988",
      "526221318111300",
      "526221564777942",
      "526221711444594",
      "526221971444568",
      "526214684778630",
      "526220108111421",
      "526220308111401",
      "526220484778050",
      "526220691444696",
      "526220814778017",
      "526220978111334",
      "526221104777988",
      "526221318111300",
      "526221564777942",
      "526221711444594",
      "526221971444568",
      "2041011389459668",
      "2041011569459650",
      "2041011726126301",
      "2041011836126290",
      "2041011952792945",
      "2041012109459596",
      "2041012262792914",
      "2041012406126233",
      "2041012539459553",
      "2041012692792871",
      "2041014432792697",
      "2041014739459333",
      "2041015016125972",
      "2041015182792622",
      "2041015329459274",
      "2041015422792598",
      "2041015576125916",
      "2041017422792398",
      "2041020049458802",
      "2041020599458747",
      "2041021119458695",
      "2041021609458646",
      "2041022029458604",
      "2041022286125245",
    ];
    let sticker = data[Math.floor(Math.random() * data.length)];
    const user = await User(event.senderID);
    const name = user.name;
    const ok =
      hours > 0001 && hours <= 400
        ? "morning"
        : hours > 401 && hours <= 700
          ? "morning"
          : hours > 701 && hours <= 1000
            ? "morning"
            : hours > 1001 && hours <= 1200
              ? "afternoon"
              : hours > 1201 && hours <= 1700
                ? "afternoon"
                : hours > 1701 && hours <= 1800
                  ? "evening"
                  : hours > 1801 && hours <= 2100
                    ? "evening"
                    : hours > 2101 && hours <= 2400
                      ? "late night"
                      : "error";
    for (const input of inp) {
      if (event.body.toLowerCase() == input) {
        let msg = {
          body: "Hello " + name + "! " + "Have a good" + ok + " !",
          mentions: [
            {
              tag: name,
              id: event.senderID,
            },
          ],
        };
        return api.sendMessage(
          msg,
          event.threadID,
          async (e, info) => {
            if (e) return;
            setTimeout(() => {
              api.sendMessage({ sticker: sticker }, event.threadID);
            }, 2000);
          },
          event.messageID,
        );
      }
    }
  },
};
