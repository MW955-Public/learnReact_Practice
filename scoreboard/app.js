/*function Header() {
    return (
        <header>
            <h1>Scoreboard</h1?
            <span className="stats"> Players:1 </span >
        </header >
            

    );
};*/
//label can be function => could be closure(varable), class component
//All React components must act like pure functions with respect to their props.
// state is chased data
const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats"> Players:{props.totalPlayers} </span >
        </header >


    );
};
//get attributes from father 
const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
                {props.name}
            </span>
            
            <Counter  />
         </div>
    );
};



// we cannot change state directly other than you use the function setState()
//arrow function is bind where this function is defined
class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            score:0,
        };
    }
    incrementScore() {
        this.setState(preState => {
            return {
                score: this.state.score + 1,
            }
            
        });
    }
    decrementScore() {
        this.setState(preState => ({
 
                score: this.state.score - 1,

            
        }));
    }
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>
            </div>
            );
    }
}


//between the {} should a expression or value
//Props pass down the data from parent component to child component
//application state -> App
//component state -> counter

class App extends React.Component {
    render() {
        state={
            players: [
                {
                    name: "Guil",
                   
                    id: 1
                },
                {
                    name: "Treasure",
                    
                    id: 2
                },
                {
                    name: "Ashley",
                   
                    id: 3
                },
                {
                    name: "James",
                 
                    id: 4
                }


            ]
        };
        handleRemovePlayer = (id) => {
            this.setState(preState =>{
                return {
                    players: this.state.players.filter(p => p.id !== id)
                }
            });
        };
        return (
            <div className="scoreboard">
            //label contains the attributes
            <Header
                    title="Scoreboard"
                    totalPlayers={props.state.length}
            />
            //This is a JS expression,should be written inside curly braces
            {props.stae.map(player =>
                <Player
                    name={players.name}
                    id={player.id}
                    key={player.id.toString()}
                    removePlayer={this.handleRemovePlayer}
                />


            )}
        </div>
    );
    }
}

//Capital letters for function  signiture
ReactDom.render(
    <App />,
    document.getElementById('root'),
);