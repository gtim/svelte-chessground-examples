<script>
	import {Chessground} from 'svelte-chessground';
	import {Chess} from 'chess.js';
	import {onMount} from 'svelte';
	import {toDests,playOtherSide} from '$lib/util.js';

	const chess = new Chess();

	let chessground;

	let config = {
		movable: {
			color: 'white',
			free: false,
			dests: toDests(chess),
		}
	};

	
	onMount(async () => {
		chessground.set( {
			movable: { events: { after: makeRandomMove( chessground, chess ) } }
		});
	});

	function makeRandomMove( chessground, chess ) {
		return (orig,dest) => {
			chess.move({ from: orig, to: dest });
			const moves = chess.moves({ verbose: true });
			const move = moves[ Math.floor(Math.random() * moves.length) ];
			chess.move( move.san );
			chessground.move( move.from, move.to );

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

</script>

<div style="width:512px;height:512px;">
	<Chessground bind:this={chessground} {config}/>
</div>
