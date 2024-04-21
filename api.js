// const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2308-ac-pt-web-pt-a";



// // Get all players
// export async function getPlayers() {
//     try {
//         const response = await fetch(`${API_URL}/players`);
//         const result = await response.json();
//         return result.data.players;


//     } catch (error) {
//         console.error(error)
//     }
// }
// // Get a single player 
// export async function getPlayer(id) {
//     try {
//         const response = await fetch(`${API_URL}/players/${id}`);
//         const result = await response.json();
//         return result.data.player;


//     } catch (error) {
//         console.error(error)
//     }
// }
// // Create new player 
// export async function createPlayer(newPlayer) {

//     try {
//         const response = await fetch(`${API_URL}/players`,
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     name: 'Rufus',
//                     breed: 'Irish Setter',
//                 }),
//             }
//         );
//         const result = await response.json();
//         console.log(result);
//     } catch (err) {
//         console.error(err);
//     }

// }
// // Delete player
// export async function deletePlayer(id) {
//     try {
//         const response = await fetch(`${API_URL}/players/1`, {
//             method: "DELETE"
//         });

//         const result = await response.json();
//         return result.data.player;


//     } catch (error) {
//         console.error(error)
//     }
// }

// // Get teams
// export async function getTeams() {
//     try {
//         const response = await fetch(`${API_URL}/teams`);
//         const result = await response.json();
//         return result.data.teams;


//     } catch (error) {
//         console.error(error)
//     }
// }

const COHORT = "2308-ACC-PT-WEB-PT-A";
const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;

export async function fetchAllPlayers() {
  try {
    const response = await fetch(`${baseUrl}/players`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSinglePlayer(id) {
  try {
    const response = await fetch(`${baseUrl}/players/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function createPlayer(name, breed) {
  try {
    const response = await fetch(`${baseUrl}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        breed
      })
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function deletePlayer(id) {
  try {
    const response = await fetch(`${baseUrl}/players/${id}`, {
      method: "DELETE"
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}



















/* export async function createPlayer(newPlayer) {
    try {
        const response = await fetch(`${API_URL}/player`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPlayer)
        });
        const result = await response.json();
        return result.data.newPlayer;


    } catch (error) {
        console.error(error)
    }
}*/