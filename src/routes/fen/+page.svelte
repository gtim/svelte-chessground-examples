<script>
	import {Chessground} from 'svelte-chessground';

	let cfg = {
		fen: 'rnb1k1nr/p2p1ppp/3B4/1pbN1N1P/4P1P1/3P1Q2/PqP5/R4KR1 b kq - 1 18',
		orientation: 'black'
	};
</script>

<div style="width:512px;height:512px;">
	<Chessground config={cfg}/>
</div>

