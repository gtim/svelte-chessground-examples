<script>
	import {Chessground} from 'svelte-chessground';

	import {title} from '$lib/stores.js';
	title.set('Default configuration');
</script>

<div style="width:100%;aspect-ratio:1;">
	<Chessground />
</div>
