<script>
	import {Chessground} from 'svelte-chessground';

	import {title} from '$lib/stores.js';
	title.set('Default configuration');
</script>

<div style="width:512px;height:512px;">
	<Chessground />
</div>
