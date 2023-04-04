<script>
	import {Chessground} from 'svelte-chessground';
	import {Chess,SQUARES} from 'chess.js';
	import {onMount} from 'svelte';

	const chess = new Chess();

	let chessground;

	let cfg = {
		movable: {
			color: 'white',
			free: 'false',
			dests: toDests(chess),
			//events: { after: playOtherSide }
		}
	};

	
	onMount(async () => {
		chessground.set( {
			movable: { events: { after: playOtherSide } }
		});
	});

	function toDests(chess) {
		const dests = new Map();
		SQUARES.forEach(s => {
			const ms = chess.moves({square: s, verbose: true});
			if (ms.length) dests.set(s, ms.map(m => m.to));
		});
		return dests;
	}

	function playOtherSide(orig,dest) {
		try {
			chess.move({ from: orig, to: dest });
		} catch(e) {
			// invalid move
			chessground.set({ fen: chess.fen() });
		}
		const color = chess.turn() == 'w' ? 'white' : 'black';
		chessground.set({
			turnColor: color,
			movable: {
				color: color,
				dests: toDests(chess)
			}
		});
	}
</script>

<div style="width:512px;height:512px;">
	<Chessground bind:this={chessground} config={cfg}/>
</div>
