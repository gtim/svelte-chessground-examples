<script>
	import {Chessground, ChessgroundUnstyled} from 'svelte-chessground';

	import '$lib/style-paper.css';

	import {title} from '$lib/stores.js';
	title.set('Custom styles');

	let style_i = 0;
	function nextStyle() {
		style_i = ( style_i+1 ) % 3;
	}
</script>

{#if style_i == 0}
	<div class="override_background">
		<Chessground coordinates={false} />
	</div>
{:else if style_i == 1}
	<ChessgroundUnstyled class="cg-paper" coordinates={false}/>
{:else if style_i == 2}
	<Chessground coordinates={false} />
{/if}

<div style="text-align:center;">
	<button on:click={nextStyle}>Change style</button>
</div>

<style>
	div.override_background :global(cg-board) {
		background-image:url("/blue-marble.jpg") !important;
	}
		
	button {
		padding:6px 12px;
		margin:16px;
	}
</style>
