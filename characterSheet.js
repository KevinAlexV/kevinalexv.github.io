// THOMAS' TYPESCRIPT LINK:
//http://www.typescriptlang.org/play/?target=0#code/C4TwDgpgBAyg1gSwDZKgXigbwFBT1AOwEMBbCALlmACcECBzAbl3wGcBjAe2osIFcSAIwjVmAX2yhIUAILAaCQX2DQM8ZEmaTw0AMKcCwIu2DosLPMTKUYChs3xQuBAhBMIDlAgOGiLUJE4QIiRQLx8RcWxsdiQiVlYoXQALImpjFWoYZIgIU0w8AHpCqABJAgRgBBCEAC9oYE4oABEIADMiPlCqIhV-K1UoACIhh3wyIylBkbG8InpBgAZZqFYIAA8zGf9Y+MSMbccchHpk0wPR-wB3CBOzrcvHEgMIEDNlnYMjE1ZKGWp0iAADz6QwZAB8ZgA2gBdFa9BRKFS-WQAojAuSI5QQSEYWErViIFAo-6AoHqFC4qD46KOZysGh8EzcAAUdEqAFk3KkKqwSAB+Gx2egASnMjkc7OAXPYPIQfLMUplcoVAB9VcMAHIAUQA6o8JXhWFdKrKoGyKtLuUReSQAHSNACqYEg1F08QgLJFYpwhsN7A9Wr1Q0oAbWWpD-j9EsEPCIcBW0bD0CGABkAPIyZohpyBtOR6PR2MQeOJ-ASRwSfxEAAmNdB32ALIGQtoDAANE4DK53J5+EIRJ3AsFQiBwgPqD6o-gkHkoAh3mW8G1uOaFxhlvOoECoMBkvK7YSNKw7bOGHvGPOANRXqeF-AINrmvcH5yN1hQhAwu0DdBoDADHe94Si+J5vhkH5fnazg9lUBhmDBbhwQQS6FqB0FfBBn7fsOISgGYuGjqh0Y8MAfDUAQu77mBmE-NhxHltOeAVn66HgXRbG0cAJ5nvQe4wmYvrAS2hCkBA7ZMRKiG9gQobdkhHgEBJwEBEEeFjqpI6gJJYioaR5GUZxYIcdRGHGdxp4QOeyRQAAtFAACMcL+FWji1jWFJIM2YmtnQ9Cdhw3C8N4E5AYas6mOuUAfNGK7UGui5bju6FHsSlnWZeCA3mFhaPs+pmpUgkHfr+-4AWJOUqSlRJFdhh5cDwZiBTwDGGvpFFUQehXFa1UAsYa-UgQVNUftVx7pXxyQCRgQn3iJAzKcBzW8MtOl6XkBmdSe3VQmNaW8XudmOc5lb+P4PDPAAbhAnnedYVBtqK4p+hFW4bqhcUJe9SVbYeI0TRe163s9955Sye21VBpX-qJZCVcBEPbWASAIOwnoIJ2Dkir1jjtShkmndGg0SBIQA

"use strict";
var CharacterSheet = /** @class */ (function () {
    function CharacterSheet(initMechanism) {
        this.name = "";
        this.metatype = "";
        this.age = 0;
        this.sex = "";
        this["class"] = "";
        this.height = "";
        this.weight = "";
        this.money = 0;
        this.contacts = [];
        this.attributes = [];
        this.skills = [];
        initMechanism = initMechanism || "NEW";
        switch (initMechanism.toUpperCase()) {
            case "NEW":
            case "N":
                break;
            case "LOAD":
            case "L":
                break;
        }
    }
    CharacterSheet.prototype.addContact = function (name, connection, loyalty) {
        var i = 0;
        for (i = 0; i < this.skills.length; i++) {
            if (this.contacts[i].name === name) {
                this.contacts[i].connection = connection;
                this.contacts[i].loyalty = loyalty;
                return this.contacts[i];
            }
        }
        this.contacts[this.contacts.length] = {
            name: name,
            connection: connection,
            loyalty: loyalty
        };
        return this.contacts[this.contacts.length - 1];
    };
    CharacterSheet.prototype.addSkill = function (name, score) {
        var i = 0;
        for (i = 0; i < this.skills.length; i++) {
            if (this.skills[i].name === name) {
                this.skills[i].score = score;
                return this.skills[i];
            }
        }
        this.skills[this.skills.length] = {
            name: name,
            score: score
        };
        return this.skills[this.skills.length - 1];
    };
    CharacterSheet.prototype.removeSkill = function (name) {
        var i = 0;
        for (i = 0; i < this.skills.length; i++) {
            if (this.skills[i].name === name) {
                this.skills.splice(i, 1);
                return;
            }
        }
    };
    return CharacterSheet;
}());
