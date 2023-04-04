<script>
	import {Chessground} from 'svelte-chessground';
	import {Chess} from 'chess.js';
	import {onMount} from 'svelte';
	import {toDests,playOtherSide} from '$lib/util.js';

	const chess = new Chess();

	let chessground;

	let cfg = {
		movable: {
			color: 'white',
			free: false,
			dests: toDests(chess),
		}
	};

	
	onMount(async () => {
		chessground.set( {
			movable: { events: { after: playOtherSide( chessground, chess ) } }
		});
	});

</script>

<div style="width:512px;height:512px;">
	<Chessground bind:this={chessground} config={cfg}/>
</div>
