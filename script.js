let currentRandomNumber;
let randomNumber = document.getElementById("randomNumber");
let createRandomNumber = document.getElementById("createRandomNumber");
let intervalLength = 100;
let truthy = true;

function doRandom() {
    if (truthy) {
        let interval = setInterval(function() {
            currentRandomNumber = Math.round(Math.random()*20+1);
            intervalLength += 100;
            truthy = false;
            if (currentRandomNumber >= 20) {
                let subract = currentRandomNumber - 20;
                currentRandomNumber -= subract;
                randomNumber.innerText = currentRandomNumber;
            } else if (intervalLength >= 1200) {
                clearInterval(interval);
                intervalLength = 100;
                truthy = true;
            }
            randomNumber.innerText = currentRandomNumber;
        }, intervalLength)
    } else {

    }
}

createRandomNumber.onclick = doRandom;




// beginning of random morph generation
let randomizer = document.getElementById("randomizer");

let earType = document.getElementById("earType");
let furType = document.getElementById("furType");
let earAccessories = document.getElementById("earAccessories");
let legType = document.getElementById("legType");
let eyeType = document.getElementById("eyeType");
let headType = document.getElementById("headType");
let tailType = document.getElementById("tailType");
let torsoType = document.getElementById("torsoType");
let scarType = document.getElementById("scarType");
let neckType = document.getElementById("neckType");
let eyeColor = document.getElementById("eyeColor");
let bodyColor = document.getElementById("bodyColor");
let torsoMarking = document.getElementById("torsoMarking");
let markingColor = document.getElementById("markingColor");
let tailBow = document.getElementById("tailBow");
// remember to add another call value to each object. It allows the code to write words next to the fur, ear, etc types.
let aspects = [
    {
        name: "Ear type",
        colors: ["Normal Ears",  "Small ear", "Ear tuff", "Torn Ears"],
        array: [],
        call: earType,
        indexValues: 1
    },
    {
        name: "Fur type",
        colors: ["Arm fur", "Back fur", "Back leg fur", "Belly fur", "Chin tuft", "Downwards head fur", "Downwards neck fur", "Elegant face fur", "Fluffy belly fur", "Fluffy face fur", "Leg fur", "Long neck fur", "Neck fluff", "Neck fur", "Outwards head fur", "Throat fur", "Top head fur", "Under ear fur", "Upwards head fur", "Wrist fur"],
        array: [],
        call: furType,
        indexValues: 6
    },
    {
        name: "Ear accessories",
        colors: ["Blueberry laure", "Cicada wings", "Dual leaf", "Impatiens headpiece", "Painted ear leaves", "Petals", "Pointy leaves", "Single leaf", "Smooth flower", "Snow drop ear piece", "Spikey flower", "Two M likes starfruit ear piece", "Four hundred M visits ear piece"],
        array: [],
        call: earAccessories,
        indexValues: 1
    },
    {
        name: "Leg type",
        colors: ["Striped Cuff (left)", "Striped Cuff (right)", "Sole"],
        array: [],
        call: legType,
        indexValues: 2
    },
    {
        name: "Eye type",
        colors: ["Downwards slashes", "Half blind", "Blind eyes", "Grumpy eyes", "Heavy eyes", "Lashes", "Normal eyes", "Under eyelashes"],
        array: [],
        call: eyeType,
        indexValues: 1
    },
    {
        name: "Head type",
        colors: ["Pride glasses", "Pride flag", "Transparent pride glasses", "Brindle mask", "Cape mask", "Charcoal face stripes", "Cheeks", "Dual mask", "Extended nose bridge", "Extended whisker pads", "Eye markings", "Eye spot", "Face mask", "Face stripes", "Forehead diamond", "Freckles", "Half mask", "Half nose marking", "Head spots", "Head stripe", "Muzzle pads", "Muzzle spot", "Nostrils", "Pointed mask", "Painted nose blaze", "Protruding fangs", "Selection tears", "Square nose blade", "Striped nose blade", "Under eye markings", "Under eye round", "Van markings", "Whisper pads"],
        array: [],
        call: headType,
        indexValues: 5
    },
    {
        name: "Tail type",
        colors: ["Normal tail", "Slim plumped tail", "Stub", "Tail fluff", "Tail streak"],
        array: [],
        call: tailType,
        indexValues: 1
    },
    {
        name: "Torso type",
        colors: ["Brindle", "Cape", "Rear capes", "Single body stripe", "Wheat fur"],
        array: [],
        call: torsoType,
        indexValues: 1
    },
    {
        name: "Scar type",
        colors: ["Back leg scar", "Back thigh scar", "Cheek scar", "Eye scar", "Front leg scar", "Lips scar", "Nose scar", "Shoulder scar", "Torso scar"],
        array: [],
        call: scarType,
        indexValues: 3
    },
    {
        name: "Neck type",
        colors: ["Bandanna", "Chest diamond", "Chest heart", "Chest scruff", "Collar", "Harness", "Striped bandanna", "Striped collar", "Wreath collar", "Four-hundred M visits necklace", "Bowtie", "Pearl collar", "Rhinestone collar"],
        array: [],
        call: neckType,
        indexValues: 1
    },
    {
        name: "Eye color",
        colors: ["Light brown", "Peach brown", "Light grey-blue", "Normal brown", "Light green", "Normal blue", "Dark brown", "Dark green", "Dark blue"],
        array: [],
        call: eyeColor,
        indexValues: 1
    },
    {
        name: "Body colors",
        colors: ["White", "Grey", "Black", "Peach", "Dark peach", "Brown", "Light brown", "Dark brown", "Grey-brown", "Light grey-brown", "Super light grey-brown", "Blue", "Dark blue", "Green-grey", "Orange", "Red", "Pink"],
        array: [],
        call: bodyColor,
        indexValues: 3
    },
    {
        name: "Torso markings",
        colors: ["Single back stripe", "Rear stripes", "Caped stripes", "Leg stripes", "Striped splotches", "Splotches", "Spangles", "Saddle markings", "Swirls"],
        array: [],
        call: torsoMarking,
        indexValues: 1
    },
    {
        name: "Marking colors",
        colors: ["White", "Grey", "Black", "Peach", "Dark peach", "Brown", "Light brown", "Dark brown", "Grey-brown", "Light grey-brown", "Super light grey-brown"],
        array: [],
        call: markingColor,
        indexValues: 2
    },
    {
        name: "Tail bow",
        colors: ["Yes", "No"],
        array: [],
        call: tailBow,
        indexValues: 1
    }
]

function getRandomAspects(aspect, loopAmount) {
    // let whichArray = aspect.array;

    if (aspect.indexValues == aspect.array.length) {
        aspect.array = [];
        aspect.call.innerText = "";
        for (let i = 0; i < loopAmount; i++) {
            let IndexValue = (Math.floor(Math.random() * aspect.colors.length));
            aspect.array.push(aspect.colors[IndexValue]);
        }
        
        for (let i = 0; i < aspect.indexValues; i++) {
            aspect.call.innerText += aspect.array[i] + ", ";
        }
    } else {
        for (let i = 0; i < loopAmount; i++) {
            let IndexValue = (Math.floor(Math.random() * aspect.colors.length));
            aspect.array.push(aspect.colors[IndexValue]);
        }
        
        for (let i = 0; i < aspect.indexValues; i++) {
            aspect.call.innerText += aspect.array[i] + ", ";
        }
    }
}
// This is what I like to call the master function. When the button with randomizer id is clicked, all the function in the startAll() function executes.
function startAll() {
    randomEarType();
    randomFurType();
    randomEarAccessories();
    randomLegType()
    randomEyeType();
    randomHeadType();
    randomTailType();
    randomTorsoType();
    randomScarType();
    randomNeckType();
    randomEyeColor();
    randomBodyColors();
    randomMarkings();
    randomMarkingColor();
    randomTailBow();
}


function randomEarType() {
    getRandomAspects(aspects[0], aspects[0].indexValues);
}

function randomFurType() {
    getRandomAspects(aspects[1], aspects[1].indexValues);
}

function randomEarAccessories() {
    getRandomAspects(aspects[2], aspects[2].indexValues)
}

function randomLegType() {
    getRandomAspects(aspects[3], aspects[3].indexValues);
}

function randomEyeType() {
    getRandomAspects(aspects[4], aspects[4].indexValues);
}

function randomHeadType() {
    getRandomAspects(aspects[5], aspects[5].indexValues)
}

function randomTailType() {
    getRandomAspects(aspects[6], aspects[6].indexValues)
}

function randomTorsoType() {
    getRandomAspects(aspects[7], aspects[7].indexValues)
}

function randomScarType() {
    getRandomAspects(aspects[8], aspects[8].indexValues)
}

function randomNeckType() {
    getRandomAspects(aspects[9], aspects[9].indexValues)
}

function randomEyeColor() {
    getRandomAspects(aspects[10], aspects[10].indexValues)
}

function randomBodyColors() {
    getRandomAspects(aspects[11], aspects[11].indexValues)
}

function randomMarkings() {
    getRandomAspects(aspects[12], aspects[12].indexValues)
}

function randomMarkingColor() {
    getRandomAspects(aspects[13], aspects[13].indexValues)
}

function randomTailBow() {
    getRandomAspects(aspects[14], aspects[14].indexValues)
}
randomizer.onclick = startAll;