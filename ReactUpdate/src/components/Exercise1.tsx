import { useState } from "react";

//We need a button when the user clicks a button it will update hte name: 'Zac' to name: 'Patrick'

const Exercise1 = () => {
    const [game, setGame] = useState({
        id:1,
        player: {
            name: "David",
        },
    });

    const handleClick = () => {
      console.log(game.player.name)
      setGame({...game, player:{...game.player,name:"Aaron"}});
      console.log(game.player.name)
       
    }
  return (
    <div>
      <h1>{game.player.name}</h1>
      <button onClick={handleClick}>Name Change!</button>
    </div>
  )
}

export default Exercise1
