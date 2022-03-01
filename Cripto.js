const hash1 = require("./cripter/table1.js");
const hash2 = require("./cripter/table2.js");
const hash3 = require("./cripter/table3.js");
const hash4 = require("./cripter/table4.js");
const hash5 = require("./cripter/table5.js");
const hash6 = require("./cripter/table6.js");

class Selenium{
    constructor(data){
        this.origens = data;
        this.hash = this.choiceTable(this.origens);
    }

    table1(dataf){
        return hash1(dataf);
    };

    table2(dataf){
        return hash2(dataf);
    };

    table3(dataf){
        return hash3(dataf);
    };

    table4(dataf){
        return hash4(dataf);
    };

    table5(dataf){
        return hash5(dataf);
    };

    table6(dataf){
        return hash6(dataf);
    };

    async choiceTable(dataf){
        const choices = [
            await this.table1(dataf), 
            await this.table2(dataf),
            await this.table3(dataf),
            await this.table4(dataf), 
            await this.table5(dataf),
            await this.table6(dataf)
        ];
        return  choices[Math.floor(Math.random()*choices.length)];
    };

};

module.exports = Selenium;