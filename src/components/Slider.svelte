<script>
	import { fade } from 'svelte/transition';

	const next_icon = 'static/next_ico.svg';
	const svelte_icon = 'static/svelte_ico.svg';
	const vue_icon = 'static/vue_ico.svg';

	let visible = true;
	let slideNo = 0;

	const fadeInOut = () => {
		visible = !visible;
		slideNo += 1;
		setTimeout(() => {
			visible = !visible;
		}, 300);
		if (slideNo > 2) {
			slideNo = 0;
		}
	};

	setInterval(fadeInOut, 2000);
</script>

{#if visible}
	<div id="epic-slide" transition:fade={{ duration: 300 }}>
		<!-- TODO: Style experience slide -->
		{#if slideNo === 0}
			<img src={next_icon} width="60" height="60" alt="Next Icon" />
		{:else if slideNo === 1}
			<img src={svelte_icon} width="60" height="60" alt="Svelte Icon" />
		{:else if slideNo === 2}
			<img src={vue_icon} width="60" height="60" alt="Vue Icon" />
		{/if}
	</div>
{/if}
