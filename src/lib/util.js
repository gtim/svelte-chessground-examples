/*
 * Helper functions for some examples
 */

import {Chess,SQUARES} from 'chess.js';


// Find all legal moves
export function toDests(chess) {
	const dests = new Map();
	SQUARES.forEach(s => {
		const ms = chess.moves({square: s, verbose: true});
		if (ms.length) dests.set(s, ms.map(m => m.to));
	});
	return dests;
}

// Play a move and toggle whose turn it is
export function playOtherSide(chessground,chess) {
	return (orig,dest) => {
		chess.move({ from: orig, to: dest });
		const color = chess.turn() == 'w' ? 'white' : 'black';
		chessground.set({
			turnColor: color,
			movable: {
				color: color,
				dests: toDests(chess)
			}
		});
	};
}
