<script>
	import {Chessground} from 'svelte-chessground';

	import {title} from '$lib/stores.js';
	title.set('Default configuration');
</script>

<Chessground />
