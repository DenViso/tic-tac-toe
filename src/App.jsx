import { useState, useEffect } from "react";

function App() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isXNext, setIsXNext] = useState(true);
	const [winner, setWinner] = useState(null);
	

	const handleClick = (i) => {
		if (squares[i] || winner) return;
		const squaresCopy = [...squares];
		squaresCopy[i] = isXNext ? "X" : "O";
		setSquares(squaresCopy);
		setIsXNext(!isXNext);
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		lines.forEach((line) => {
			if (squaresCopy[line[0]] !== null) {
				if (
					squaresCopy[line[0]] === squaresCopy[line[1]] &&
					squaresCopy[line[1]] === squaresCopy[line[2]]
				) {
					squaresCopy[line[0]] === "X"
						? setWinner("Winner X")
						: setWinner("Winner 0");
				}
				if (winner) {
					resetGame()
				}else{
					return 
				}
			}

		});
	}
		
	
	const resetGame = () => {
			setSquares(Array(9).fill(null));
			setIsXNext(true);
			setWinner(null);
	};
		
	

	useEffect(() => {
		if (winner) {
			document.getElementById("btn").style.display = "flex";
		} else {
			document.getElementById("btn").style.display = "none";
		}
	});

	return (
		<>
			<div className="title-app">
				<h1>Tic Tac Toe</h1>
				<p>who is the winner</p>
				<p className="winner">{winner}</p>
			</div>
			<div className="board">
				<div className="board-row">
					<button className="square" onClick={() => handleClick(0)}>
						{squares[0]}
					</button>
					<button className="square" onClick={() => handleClick(1)}>
						{squares[1]}
					</button>
					<button className="square" onClick={() => handleClick(2)}>
						{squares[2]}
					</button>
				</div>
				<div className="board-row">
					<button className="square" onClick={() => handleClick(3)}>
						{squares[3]}
					</button>
					<button className="square" onClick={() => handleClick(4)}>
						{squares[4]}
					</button>
					<button className="square" onClick={() => handleClick(5)}>
						{squares[5]}
					</button>
				</div>
				<div className="board-row">
					<button className="square" onClick={() => handleClick(6)}>
						{squares[6]}
					</button>
					<button className="square" onClick={() => handleClick(7)}>
						{squares[7]}
					</button>
					<button className="square" onClick={() => handleClick(8)}>
						{squares[8]}
					</button>
				</div>
				<div className="new-game" id="btn">
					{winner && ( 
					<button className="newgame" onClick={() => resetGame() }>
						New Game
					</button>
					)}
				</div>
			</div>
		</>
	)
}

export default App;