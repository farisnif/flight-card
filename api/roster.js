export default async function handler(request, res) {
    const roster = [
        {
            "planePhoto": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Delta_Air_Lines_Boeing_737-832%3B_N3747D%40LAX%3B10.10.2011_622in_%286482376485%29.jpg",
            "name": "Boeing 737",
            "location": "Montreal",
            "maxSpeed": "652mph",
            "maxAltitude": "41,763ft",
            "memeTop": "Lehappy",
            "planeStatement": "This is a photo of a Boeing 737 taking off in Montreal. This plane has a maximum speed of 652mph, and maximum altitude of 41,763ft."
        },
        {
            "planePhoto": "https://ik.imgkit.net/3vlqs5axxjf/TW/uploadedImages/Art/2022/1226/T1226BOEING737MAX-10_C.jpg?tr=w-1200%2Cfo-auto",
            "name": "Boeing 737 Max",
            "location": "Philly",
            "maxSpeed": "900mph",
            "maxAltitude": "42,973ft",
            "memeTop": "Lehappy",
            "planeStatement": "This is a photo of a Boeing 737 Max taking off in Philly. This plane has a maximum speed of 900mph, and maximum altitude of 42,973ft."

        },
        {
            "planePhoto": "https://www.corporatejetinvestor.com/wp-content/uploads/2019/03/Boeing-747-8-Intercontinental.jpg",
            "name": "Boeing 747-8",
            "location": "Orlando",
            "maxSpeed": "619mph",
            "maxAltitude": "43,853ft",
            "memeTop": "Lehappy",
            "planeStatement": "This is a photo of a Boeing 747 taking off in Orlando. This plane has a maximum speed of 619mph, and maximum altitude of 43,853ft."
        },
        {
            "planePhoto": "https://d3lcr32v2pp4l1.cloudfront.net/Pictures/1024x536/6/7/4/80674_boeing78710.boeing_837065.jpg",
            "name": "Boeing 787",
            "location": "Compton",
            "maxSpeed": "612mph",
            "maxAltitude": "45,853ft",
            "memeTop": "Lehappy",
            "planeStatement": "This is a photo of a Boeing 787 taking off in Compton. This plane has a maximum speed of 612mph, and maximum altitude of 45,853ft."
        }
    ];
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  res.json(roster);
}