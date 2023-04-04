<script>
	import '../app.css';
	import {title} from '$lib/stores.js';
	import { base } from '$app/paths';
</script>


<h1>svelte-chessground example: <span style="display:inline-block;">{$title}</span></h1>
<div class="container">
	<div class="sidebar">
		<ul>
			<li><a href="{base}/">Default configuration</a></li>
			<li><a href="{base}/fen">Custom FEN</a></li>
			<li><a href="{base}/legal">Only legal moves</a></li>
			<li><a href="{base}/vs-ai">Play vs. random AI</a></li>
			<li><a href="{base}/watch-ai">Watch random AIs play</a></li>
		</ul>
	</div>
	<div class="example">
		<div>
			<slot/>
		</div>
	</div>
</div>
