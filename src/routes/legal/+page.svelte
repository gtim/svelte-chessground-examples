<script>
	import {Chessground} from 'svelte-chessground';
	import {Chess} from 'chess.js';
	import {onMount} from 'svelte';
	import {toDests,playOtherSide} from '$lib/util.js';

	import {title} from '$lib/stores.js';
	title.set('Only legal moves');

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
			movable: { events: { after: playOtherSide( chessground, chess ) } }
		});
	});

</script>

<div style="width:100%;aspect-ratio:1;">
	<Chessground bind:this={chessground} {config}/>
</div>
