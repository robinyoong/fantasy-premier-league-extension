// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import players from './players';

// class Budweiser extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       team: {
//         player1: {
//           name: null,
//           score: null,
//         },
//         player2: null,
//         player3: null,
//         player4: null,
//         player5: null,
//         player6: null,
//         player7: null,
//         player8: null,
//         player9: null,
//         player10: null,
//         player11: null,
//         player12: null,
//         player13: null,
//         player14: null,
//         player15: null,
//       },
//       score: {
//         score1: null,
//         score2: null,
//         score3: null,
//         score4: null,
//         score5: null,
//         score6: null,
//         score7: null,
//         score8: null,
//         score9: null,
//         score10: null,
//         score11: null,
//         score12: null,
//         score13: null,
//         score14: null,
//         score15: null,
//       },
//     };
//   }

//   // Loading up players when component mounts
//   // async componentDidMount() {
//   //   try {
//   //     const response = await fetch(`https://fantasy.premierleague.com/api/bootstrap-static/`);
//   //     const data = await response.json()
//   //     console.log(Array.isArray(data.elements))
//   //     for (let elem of data.elements) {
//   //       if (elem.id === 390) {
//   //         console.log(elem.event_points)
//   //         console.log(elem.photo);
//   //       }
//   //     }

//   //   }  catch (err) {
//   //     console.log("error", err)
//   //   }

//   async componentDidMount() {
//     try {
//       // extracting elementIDs from list of players into a single array of IDs
//       const playersArr = players.players;
//       const arrayOfIds = playersArr.reduce((acc, curPlayer) => {
//         console.log(acc);
//         acc.push(curPlayer.element);
//         return acc;
//       }, []);

//       console.log(arrayOfIds);

//       // loop through array of IDs to extract information from API using the ID
//       // const response = await fetch(
//       //   `https://fantasy.premierleague.com/api/bootstrap-static/`
//       // );
//       // const data = await response.json();
//       // console.log(data);
//       // for (let id of arrayOfIds) {

//       // // }

//       const response = await fetch(
//         `https://fantasy.premierleague.com/api/bootstrap-static/`
//       );
//       const data = await response.json();
//       // console.log(Array.isArray(data.elements));
//       let stateObj = {}
//       for (let i = 0; i < arrayOfIds.length; i++) {
//         stateObj[`player${i}`] = arrayOfIds[i].event_points  
//       }
//       this.setState({ score: stateObj })
//       // for (let elem of data.elements) {
//       //   if (elem.id === 390) {
//       //     console.log(elem.event_points);
//       //     console.log(elem.photo);
//       //   }
//       }
//      catch (err) {
//       console.log('error', err);
//     }

//     // const success = await fetch(
//     //   'https://users.premierleague.com/accounts/login/',
//     //   {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-type': 'application/json',
//     //     },
//     //     body: JSON.stringify({
//     //       password: 'codesmith123',
//     //       login: 'pulpandmills@gmail.com',
//     //       redirect_uri: 'https://fantasy.premierleague.com/',
//     //       app: 'plfpl-web',
//     //     }),
//     //   }
//     // );
//     // const football = fetch('https://fantasy.premierleague.com/api/my-team/6751967/')
//     // console.log(football)
//     // // const dataQuery = await fetch('https://fantasy.premierleague.com/api/my-team/6751967/').then((data) => data.json()).then((data) => console.log('i am the 2nd console log: ', data))
//     // //   .then(() => console.log('************'))
//     // //   .then(
//     // //     fetch(`https://fantasy.premierleague.com/api/my-team/6751967/`)
//     // //       .then((response) => response.json())
//     // //       .then((data) => console.log(data))
//     // //       .catch((err) => console.log(err))
//     // //   );
//     // const token = 'qVuw722OCPOPUupAztTh7QMdVdj1uCnKRxtNudHbpQPKhWhFJZWyuEZgdcna32Uv';
//     // const secondFetch = await fetch(
//     //   'https://fantasy.premierleague.com/api/my-team/6751967/',
//     //   {
//     //     headers: {
//     //       Authorization: `token ${token}`,
//     //     },
//     //   }
//     // )
//     //   .then((data) => data.json())
//     //   .then((data) => console.log(data));
//   }

//   render() {
//     const team = [];
//     for (let i = 1; i < 16; i++) {
//       team.push(
//         <Player
//           key={`player${i}`}
//           className='players_col'
//           player={this.getPlayer}
//         />
//       );
//     }
//     return (
//       <div>
//         <h1>My Fantasy Team</h1>
//         <li>
//           <Player />
//         </li>
//         {/* <span>
//         <Score />
//       </span> */}
//       </div>
//     );
//   }
// }

// function Player(props) {
//   return <div></div>;
// }

// export default Budweiser;
