import React, { Component } from 'react';

import logo from './logo.png';
import './App.css';
import players from './players';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: {
        score1: null,
        score2: null,
        score3: null,
        score4: null,
        score5: null,
        score6: null,
        score7: null,
        score8: null,
        score9: null,
        score10: null,
        score11: null,
        score12: null,
        score13: null,
        score14: null,
        score15: null,
      },
    };
  }

  async componentDidMount() {
    try {
      // extracting elementIDs from list of players into a single array of IDs
      const playersArr = players.players;
      const arrayOfIds = playersArr.reduce((acc, curPlayer) => {
        // console.log(acc);
        acc.push(curPlayer.element);
        return acc;
      }, []);

      const response = await fetch(
        `https://fantasy.premierleague.com/api/bootstrap-static/`
      );
      const data = await response.json();
      // console.log(Array.isArray(data.elements));
      const stateObj = {};
      for (let j = 0; j < arrayOfIds.length; j++) {
        let matchId = arrayOfIds[j];
        console.log('matchId', matchId);
        for (let i = 0; i < data.elements.length; i++) {
          // console.log(`score${i}`)
          // console.log('data.elements', data.elements.id);
          // console.log('array of Ids', arrayOfIds[j]);
          // console.log('i data', data.elements[i]);
          if (data.elements[i].id === matchId) {
            console.log('match');
            stateObj[`score${j + 1}`] = data.elements[i].event_points;
          }
          //.id.event_points isn't how the data is structured
          //.id and .,event_points are the same level\
          // it works!!!!!!! holy fuckkkkkkkkkkkkkkkkkkkkkkkkkkkk
          // HAHAHAAHHAHAHAHAHAHAHA
          // NO FUCKING WAY!!!// AHHHHHHHHHHHHHHHHHHHHHH
          // I WONDER IF WE SHOULD BUILD THIS AND LOAD
          // maybe rename and build as a sepearte named app?
          //EXACTLY WHAT I WAS THINKING
          // stateObj[`player${i}`] = data.elements.arrayOfIds[i].event_points;
        }
      }

      console.log('result ', stateObj);
      this.setState({ score: stateObj });
    } catch (err) {
      console.log('error', err);
    }
  }

  render() {
    const imageURL =
      'https://resources.premierleague.com/premierleague/photos/players/110x140/p';
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <div className='team-title'>
            <h5>Clem Tribeca</h5>
            <h5>162</h5>
          </div>
          <div className='container'>
            <h6 className='player_head' id='player_head'>
              <u>Player</u>
            </h6>
            <h6 className='score_head' id='score_head'>
              <u>Score</u>
            </h6>
            <img src={imageURL + '98980.png'} className='image' id='image1' />
            <ul className='player' id='player1'>
              <b>Emiliano Martínez</b>
            </ul>
            <span className='score' id='score1'>
              {this.state.score.score1}
            </span>
            <img src={imageURL + '166477.png'} className='image' id='image2' />
            <ul className='player' id='player2'>
              <b>Timothy Castagne</b>
            </ul>
            <span className='score' id='score2'>
              {this.state.score.score2}
            </span>
            <img src={imageURL + '169187.png'} className='image' id='image3' />
            <ul className='player' id='player3'>
              <b>Trent Alexander-Arnold</b>
            </ul>
            <span className='score' id='score3'>
              {this.state.score.score3}
            </span>
            <img src={imageURL + '220627.png'} className='image' id='image4' />
            <ul className='player' id='player4'>
              <b>Justin James</b>
            </ul>
            <span className='score' id='score4'>
              {this.state.score.score4}
            </span>
            <img src={imageURL + '226597.png'} className='image' id='image5' />
            <ul className='player' id='player5'>
              <b>Gabriel Magalhães</b>
            </ul>
            <span className='score' id='score5'>
              {this.state.score.score5}
            </span>
            <img src={imageURL + '85971.png'} className='image' id='image6' />
            <ul className='player' id='player6'>
              <b>Heung-Min Son</b>
            </ul>
            <span className='score' id='score6'>
              {this.state.score.score6}
            </span>
            <img src={imageURL + '82403.png'} className='image' id='image7' />
            <ul className='player' id='player7'>
              <b>Wilfred Zaha</b>
            </ul>
            <span className='score' id='score7'>
              {this.state.score.score7}
            </span>
            <img src={imageURL + '165808.png'} className='image' id='image8' />
            <ul className='player' id='player8'>
              <b>Hélder Costa</b>
            </ul>
            <span className='score' id='score8'>
              {this.state.score.score8}
            </span>
            <img src={imageURL + '219847.png'} className='image' id='image9' />
            <ul className='player' id='player9'>
              <b>Kai Havertz</b>
            </ul>
            <span className='score' id='score9'>
              {this.state.score.score9}
            </span>
            <img src={imageURL + '177815.png'} className='image' id='image10' />
            <ul className='player' id='player10'>
              <b>Dominic Calvert-Lewin</b>
            </ul>
            <span className='score' id='score10'>
              {this.state.score.score10}
            </span>
            <img src={imageURL + '78830.png'} className='image' id='image11' />
            <ul className='player' id='player11'>
              <b>Harry Kane</b>
            </ul>
            <span className='score' id='score11'>
              {this.state.score.score11}
            </span>
            <img src={imageURL + '131897.png'} className='image' id='image12' />
            <ul className='player' id='player12'>
              <b>Mathew Ryan</b>
            </ul>
            <span className='score' id='score12'>
              {this.state.score.score12}
            </span>
            <img src={imageURL + '199798.png'} className='image' id='image13' />
            <ul className='player' id='player13'>
              <b>Ezri Konsa Ngoyo Konsa</b>
            </ul>
            <span className='score' id='score13'>
              {this.state.score.score13}
            </span>
            <img src={imageURL + '72222.png'} className='image' id='image14' />
            <ul className='player' id='player14'>
              <b>Mateusz Klich</b>
            </ul>
            <span className='score' id='score14'>
              {this.state.score.score14}
            </span>
            <img src={imageURL + '102057.png'} className='image' id='image15' />
            <ul className='player' id='player15'>
              <b>Raúl Jiménez</b>
            </ul>
            <span className='score' id='score15'>
              {this.state.score.score15}
            </span>
          </div>
          {/* Edit <code>src/App.js</code> and save to reload.
          </p> */}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
