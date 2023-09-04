import { useState } from "react";

import Sqaure from "./Square";
import GameEnd from "./GameEnd";

function Board() {
	const [state, setState] = useState(Array(9).fill(null));
	const [isXTurn, setIsXTurn] = useState(true);

	function onClickHandler(index) {
		if (state[index] !== null) {
			return;
		}

		const copyState = [...state];

		copyState[index] = isXTurn ? "X" : "0";
		setState(copyState);
		setIsXTurn(!isXTurn);
	}

	function checkWinner() {
		const winnerLogic = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let logic of winnerLogic) {
			const [a, b, c] = logic;
			if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
				return state[a];
			}
		}
		return false;
	}

	function checkDraw() {
		let count = 0;
		//draw condition
		for (let s in state) {
			if (state[s] === null) {
				break;
			} else {
				count++;
			}
		}
		if (count >= 8) {
			return true;
		}
		return false;
	}

	function playAgainHandler() {
		const temp = Array(9).fill(null);

		setState(temp);
	}
	const isWinner = checkWinner();
	const isDraw = checkDraw();

	return (
		<div className="board-container">
			{isWinner ? (
				<GameEnd winner={isWinner} onPlayAgain={playAgainHandler} />
			) : (
				<main>
					{isDraw ? <h1>DRAWW</h1> : <h1>Turn: {isXTurn ? "X" : "0"}</h1>}

					<div className="board-row">
						<Sqaure value={state[0]} onClick={() => onClickHandler(0)} />
						<Sqaure value={state[1]} onClick={() => onClickHandler(1)} />
						<Sqaure value={state[2]} onClick={() => onClickHandler(2)} />
					</div>
					<div className="board-row">
						<Sqaure value={state[3]} onClick={() => onClickHandler(3)} />
						<Sqaure value={state[4]} onClick={() => onClickHandler(4)} />
						<Sqaure value={state[5]} onClick={() => onClickHandler(5)} />
					</div>
					<div className="board-row">
						<Sqaure value={state[6]} onClick={() => onClickHandler(6)} />
						<Sqaure value={state[7]} onClick={() => onClickHandler(7)} />
						<Sqaure value={state[8]} onClick={() => onClickHandler(8)} />
					</div>
					<button className="reset-button" onClick={playAgainHandler}>
						Reset
					</button>
				</main>
			)}
		</div>
	);
}
export default Board;
