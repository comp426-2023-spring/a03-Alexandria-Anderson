#!/usr/bin/env node

import { rpsls } from "/root/lib/rpsls.js"
import minimist from 'minimist'
//help message
var args = minimist(process.argv.slice(2));

function help(){
    console.log(
        "Usage: node-rpsls [SHOT]\n" +
        "Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n" + 
        "\n" + 
        "  -h, --help       display this help message and exit\n"+
        "  -r, --rules      display the rule and exit\n" + 
        "\n" + 
        "Examples:\n" +
        "  node-rps         Return JSON with single player RPSLS result.\n" +
        "                   e.g. {\"player\":\"rock\"}\n" + 
        "  node-rps rock    Return JSON with results for RPSLS played against a simulated opponent.\n"+
        "                   e.g. {\"player\":\"rock\",\"opponent\":\"Spock\",\"result\":\"lose\"}\n" 
        )
}
if (args.h || process.argv[process.argv.indexOf('--help')]){
    help();
    process.exit(1);
}


//rule message
function rules(){
    console.log(
        "Rules for Rock Paper Scissors\n" +
        "\n" + 
        "  - Scissors CUTS Paper\n"+
        "  - Paper COVERS Rock\n" + 
        "  - Rock SMOOSHES Lizard\n" + 
        "  - Lizard POISONS Spock\n" + 
        "  - Spock SMASHES Scissors\n" + 
        "  - Scissors DECAPITATES Lizard\n"+ 
        "  - Lizard EATS Paper\n"+ 
        "  - Paper DISPROVES Spock\n" + 
        "  - Spock VAPORIZES Rock\n" + 
        "  - Rock CRUSHES Scissors\n"
        )
}
if (args.r || process.argv[process.argv.indexOf('--rules')]){
    rules();
    process.exit(1);
}


if (process.argv[2] !== undefined && process.argv[2].toUpperCase() !== 'ROCK' && process.argv[2].toUpperCase() !== 'PAPER' && process.argv[2].toUpperCase() !== 'SCISSORS' && process.argv[2].toUpperCase() !== 'LIZARD'&&process.argv[2].toUpperCase() !== 'SPOCK'){
   
    console.error (`${process.argv[2]} is out of range.`)
    help();
    rules()
    process.exit(1);
   
}

console.log(JSON.stringify(rpsls(process.argv[2])));
