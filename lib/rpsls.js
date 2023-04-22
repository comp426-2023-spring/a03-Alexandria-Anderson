
export { rps, rpsls};
function rps(shot){


   
let opp = Math.random();
let moveOpp = null;
let result = null;

if (opp < .34){
    moveOpp = 'rock'
} else if (opp < .67){
    moveOpp = 'paper'
} else {
    moveOpp = 'scissors'
}

 if (shot === undefined){
        let outcome = {player: moveOpp}
        return outcome;
    }

if (shot.toUpperCase() === 'ROCK'){
    switch (moveOpp){
        case 'rock':
            result = 'tie'
            break;
        case 'paper':
            result = 'lose'
            break;
        case 'scissors':
            result = 'win'
            break;
    }
}


if (shot.toUpperCase() === 'PAPER'){
    switch (moveOpp){
        case 'rock':
            result = 'win'
            break;
        case 'paper':
            result = 'tie'
            break;
        case 'scissors':
            result = 'lose'
            break;
    }
}


if (shot.toUpperCase() === 'SCISSORS'){
    switch (moveOpp){
        case 'rock':
            result = 'lose'
            break;
        case 'paper':
            result = 'win'
            break;
        case 'scissors':
            result = 'tie'
            break;
    }
}
if (result === null){
    throw new RangeError;
}
let outcome = {player: shot, opponent: moveOpp, result: result}
return outcome;
}

function rpsls(shot){
    
    let opp = Math.random();
    let moveOpp = null;
    let result = null;
    if (opp < .2){
        moveOpp = 'rock'
    } else if (opp < .4){
        moveOpp = 'paper'
    } else if (opp < .6){
        moveOpp = 'scissors'
    } else if (opp < .8){
        moveOpp = 'Lizard'
    } else{
        moveOpp = 'Spock'
    }

    if (shot === undefined){
        let outcome = {player: moveOpp}
        return outcome;
    }
    if (shot.toUpperCase() === 'ROCK'){
        switch (moveOpp){
            case 'rock':
                result = 'tie'
                break;
            case 'paper':
                result = 'lose'
                break;
            case 'scissors':
                result = 'win'
                break;
            case 'Lizard':
                result = 'win'
                break;
            case 'Spock':
                result = 'lose'
                break;
        }
    }
    
    
    if (shot.toUpperCase() === 'PAPER'){
        switch (moveOpp){
            case 'rock':
                result = 'win'
                break;
            case 'paper':
                result = 'tie'
                break;
            case 'scissors':
                result = 'lose'
                break;
            case 'Lizard':
                result = 'lose'
                break;
            case 'Spock':
                result = 'win'
                break;
    }
    }
    
    
    if (shot.toUpperCase() === 'SCISSORS'){
        switch (moveOpp){
            case 'rock':
                result = 'lose'
                break;
            case 'paper':
                result = 'win'
                break;
            case 'scissors':
                result = 'tie'
                break;
            case 'Lizard':
                result = 'win'
                break;
            case 'Spock':
                result = 'lose'
                break;
        }
    }

    if (shot.toUpperCase() === 'LIZARD'){
        switch (moveOpp){
            case 'rock':
                result = 'lose'
                break;
            case 'paper':
                result = 'win'
                break;
            case 'scissors':
                result = 'lose'
                break;
            case 'Lizard':
                result = 'tie'
                break;
            case 'Spock':
                result = 'win'
                break;
        }
    }

    if (shot.toUpperCase() === 'SPOCK'){
        switch (moveOpp){
            case 'rock':
                result = 'win'
                break;
            case 'paper':
                result = 'lose'
                break;
            case 'scissors':
                result = 'win'
                break;
            case 'Lizard':
                result = 'lose'
                break;
            case 'Spock':
                result = 'tie'
                break;
        }
    }
    if (result === null){
        throw new RangeError;
    }
    let outcome = {player: shot, opponent: moveOpp, result: result}
    return outcome;
}