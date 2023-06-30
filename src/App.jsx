import { useState } from "react";
import Square from "./components/squares";

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
						? setWinner("Winner is X")
						: setWinner("Winner is 0");
				} 
				// else if (
				// 	squaresCopy[line[0]] !== squaresCopy[line[1]] ||
				// 	squaresCopy[line[1]] !== squaresCopy[line[2]]
				// ) {
				// 	setWinner("No winner");
				// }
			}
		});
	};

	
	const resetGame = () => {
		setSquares(Array(9).fill(null));
		setIsXNext(true);
		setWinner(null);
	};

	console.log(winner);
	return (
		<>
			{winner && (
				<div className="winner-box">
					<p className="winner">{winner}</p>
				</div>
			)}
			<div className="title-app">
				<h1>Tic Tac Toe</h1>
			</div>
			<div className="board">
				<div className="board-row">
					<Square value={squares[0]} onClick={() => handleClick(0)} />
					<Square value={squares[1]} onClick={() => handleClick(1)} />
					<Square value={squares[2]} onClick={() => handleClick(2)} />
				</div>
				<div className="board-row">
					<Square value={squares[3]} onClick={() => handleClick(3)} />
					<Square value={squares[4]} onClick={() => handleClick(4)} />
					<Square value={squares[5]} onClick={() => handleClick(5)} />
				</div>
				<div className="board-row">
					<Square value={squares[6]} onClick={() => handleClick(6)} />
					<Square value={squares[7]} onClick={() => handleClick(7)} />
					<Square value={squares[8]} onClick={() => handleClick(8)} />
				</div>

				{winner && (
					<div className="new-game" id="btn">
						<button className="newgame" onClick={() => resetGame()}>
							New Game
						</button>
					</div>
				)}
			</div>
		</>
	);
}

export default App;
