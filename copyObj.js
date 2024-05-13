const tweet = {
    "created_at": "Wed Oct 10 20:19:24 +0000 2018",
    "id": 1350118423113925729,
    "id_str": "1350118423113925729",
    "text": "To make room for more expression, we will now count all emojis as equal—including those with gender‍‍‍ ‍‍and skin t… https://t.co/MkGjXf9aXm",
}

const user = {
    "id": 6462791,
    "id_str": "6462791",
    "name": "Isaac Leon",
    "screen_name": "IsaacLeon",
    "location": "Quito, Ec",
    "url": "https://developer.twitter.com"
}

const allInformation = {...tweet,...user}
console.log(allInformation)