function GameEnd(props) {
	return (
		<div className="end-screen">
			<h1>{props.winner} has won</h1>
			<button type="button" onClick={props.onPlayAgain}>
				Play Again
			</button>
		</div>
	);
}

export default GameEnd;
