#!/usr/bin/env node
import { rps } from "/root/lib/rpsls.js"
import minimist from 'minimist'

var args = minimist(process.argv.slice(2));

//help message
function help(){
    console.log(
        "Usage: node-rps [SHOT]\n" +
        "Play Rock Paper Scissors (RPS)\n" + 
        " \n" + 
        "  -h, --help       display this help message and exit\n"+
        "  -r, --rules      display the rule and exit\n" + 
        " \n" + 
        "Examples:\n" +
        "  node-rps         Return JSON with single player RPS result.\n" +
        "                   e.g. {\"player\":\"rock\"}\n" + 
        "  node-rps rock    Return JSON with results for RPS played against a simulated opponent.\n"+
        "                   e.g. {\"player\":\"rock\",\"opponent\":\"scissors\",\"result\":\"win\"}\n" 
        )
}
if (args.h || process.argv[process.argv.indexOf('--help')]){
    help();
}

//rule message
function rules(){
    console.log(
        "Rules for Rock Paper Scissors\n" +
        "\n" + 
        "  - Scissors CUTS Paper\n"+
        "  - Paper COVERS Rock\n" + 
        "  - Rock CRUSHES Scissors\n"
        )
}
if (args.r || process.argv[process.argv.indexOf('--rules')]){
  rules();
}


if (process.argv[2].toUpperCase() !== 'ROCK' && process.argv[2].toUpperCase() !== 'PAPER' && process.argv[2].toUpperCase() !== 'SCISSORS'){

    console.error (`${process.argv[2]} is out of range.`);
    help();
    rules();
    process.exit(1);
    
}

console.log(rps(process.argv[2]));

//if no argument is given, return the JSON for the players move
//the unlabed argument is the players move. If supplied, return the object from the importable rps fucntion

//if the argument is not rock, paper, or scissors then return an out of range error and the error 
//handler should return the help and rule dialogue

//