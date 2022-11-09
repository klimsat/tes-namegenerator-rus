var data = {};
$.getJSON("assets/src/data.json", function(retrievedData) {
    data = retrievedData;
});

var Gender = {
    "MALE": "male",
    "FEMALE": "female"
};

var Generator = (function(){
    var instance = {};

    function randInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function randChunk (arr) {
        return arr[randInt(0, arr.length-1)];
    };

    function randChunks (arr, count=1) {
        var result = [];
        for (var i = 0; i < count; i++) {
            result.push(randChunk(arr));
        };
        return result;
    };

    instance.getAltmer = function(gender) {
        return randChunk(data.altmer[gender].name) + " " + randChunk(data.altmer.neutral.surname);
    };

    instance.getArgonian = function(gender) {
        return randChunk(data.argonian[gender].name);
    };

    instance.getBosmer = function(gender) {
        return randChunk(data.bosmer[gender].name) + " " + randChunk(data.bosmer.neutral.surname);
    };

    instance.getBreton = function(gender) {
        return randChunk(data.breton[gender].name) + " " + randChunk(data.breton.neutral.surname);
    };

    instance.getDunmer = function(gender) {
        return randChunk(data.dunmer[gender].name) + " " + randChunk(data.dunmer.neutral.surname);
    };

    instance.getDunmerAshlander = function(gender) {
        return randChunk(data.dunmerAshlander[gender].name) + " " + randChunk(data.dunmerAshlander.neutral.surname);
    };

    instance.getImperial = function(gender) {
        return randChunk(data.imperial[gender].name) + " " + randChunk(data.imperial.neutral.surname);
    };

    instance.getKhajiit = function(gender) {
        var result = "";
        var type = randChunk(["prefix", "suffix", "none"]);
        var long = randInt(0, 100) % 2 == 0;

        if (type == "prefix")
            result += randChunk(data.khajiit[gender].prefix);
        result += randChunk(data.khajiit[gender].begin);

        if (long)
            result += randChunk(data.khajiit[gender].middle);
        result += randChunk(data.khajiit[gender].end);

        if (type == "suffix")
            result += randChunk(data.khajiit[gender].suffix);

        return result;
    };

    instance.getNord = function(gender) {
        return randChunk(data.nord[gender].name) + " " + randChunk(data.nord.neutral.surname);
    };

    instance.getOrsimer = function(gender) {
        var result = randChunk(data.orsimer[gender].name) + (gender == Gender.MALE ? " гро-" : " гра-");

        // Concat the surname:
        switch (randChunk(["father", "mother", "surname"])) {
            case "father":
                result += randChunk(data.orsimer.male.name);
                break;
            case "mother":
                result += randChunk(data.orsimer.female.name);
                break;
            case "surname":
                result += randChunk(data.orsimer.neutral.surname);
                break;
        };

        return result;
    };

    instance.getRedguard = function(gender) {
        return randChunk(data.redguard[gender].name) + " " + randChunk(data.redguard.neutral.surname);
    };

    return instance;
})();