<script>
	import {Chessground} from 'svelte-chessground';

	import {title} from '$lib/stores.js';
	title.set('Reactive position');

	const fens = [
		'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
		'r3k1nr/p2p1ppp/3B4/1pbN1N1P/4P1P1/3P1Q2/PqP5/R4KR1 b kq - 1 18',
		'r1b1kbnr/pppp1Npp/8/8/2Bnq3/8/PPPP1P1P/RNBQKR2 w Qkq - 0 7',
		'r1b1kbnr/pppp1ppp/8/4p1B1/3nP3/2N3P1/PPP1NP1P/R2QKB1R b KQkq - 0 6',
		'5K2/k7/4P1p1/8/8/8/4b3/8 w - - 0 1',
		'7k/5K2/7P/6pP/8/8/8/8 w - - 0 1'
	];
	let fen_i = 0;

	let orientation = 'black';

	function flipBoard() {
		orientation = orientation == 'white' ? 'black' : 'white';
	}
	function nextPosition() {
		fen_i = ( fen_i + 1 ) % fens.length;
	}
</script>

<Chessground {orientation} fen={fens[fen_i]} />

<div>
	<button on:click={flipBoard}>Flip board</button>
	<button on:click={nextPosition}>Next position</button>
</div>

<style>
	div {
		text-align: center;
	}
	button {
		padding:6px 12px;
		margin:16px;
	}
</style>
