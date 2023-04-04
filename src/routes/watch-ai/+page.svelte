<script>

	// TODO: promoted pawns keep their pawn image
	// TODO: end/restart game after game over

	import {Chessground} from 'svelte-chessground';
	import {Chess} from 'chess.js';
	import {onMount} from 'svelte';
	import {toDests,playOtherSide} from '$lib/util.js';

	const chess = new Chess();

	let chessground;

	let config = {
		animation: { duration: 500 },
		movable: { free: false }
	};

	
	onMount( () => {
		setTimeout( makeRandomMovesForever, 750 );
	});

	function makeRandomMovesForever() {
		const moves = chess.moves({ verbose: true });
		const move = moves[ Math.floor(Math.random() * moves.length) ];
		chess.move( move.san );
		chessground.move( move.from, move.to );
		setTimeout( makeRandomMovesForever, 750 );
	}

</script>

<div style="width:512px;height:512px;">
	<Chessground bind:this={chessground} {config}/>
</div>
