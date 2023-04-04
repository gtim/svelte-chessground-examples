<script>
	import '../app.css';
	import {title} from '$lib/stores.js';
</script>


<h1>svelte-chessground example: <span style="display:inline-block;">{$title}</span></h1>
<div class="container">
	<div class="sidebar">
		<ul>
			<li><a href="/">Default configuration</a></li>
			<li><a href="/fen">Custom FEN</a></li>
			<li><a href="/legal">Only legal moves</a></li>
			<li><a href="/vs-ai">Play vs. random AI</a></li>
			<li><a href="/watch-ai">Watch random AIs play</a></li>
		</ul>
	</div>
	<div class="example">
		<div>
			<slot/>
		</div>
	</div>
</div>
