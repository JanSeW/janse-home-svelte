<script>
	import { slide } from 'svelte/transition';
	import { scale } from 'svelte/transition';

	const next_icon = 'static/next_ico.svg';
	const svelte_icon = 'static/svelte_ico.svg';
	const vue_icon = 'static/vue_ico.svg';

	let visible = true;
	let slideNo = 0;
	let slideText = ["NextJS", "Svelte", "Vue"]

	const fadeInOut = () => {
		visible = !visible;
		slideNo += 1;
		setTimeout(() => {
			visible = !visible;
		}, 300);
		if (slideNo > 2) {
			slideNo = 0
		}
	};

	setInterval(fadeInOut, 2000);
</script>

<!-- TODO: Resize SVGs -->
<main>
	<div class="flex items-center space-x-4 space-x-6">
		<p class="text-2xl text-gray-300">I speak️</p>
		{#if visible}
			<div id="epic-slide" transition:scale={{ start: 1.2, duration: 300 }}>
				{#if slideNo === 0}
					<img src={next_icon} width="60" height="60" alt="Next Icon" />
				{:else if slideNo === 1}
					<img src={svelte_icon} width="60" height="60" alt="Svelte Icon" class="object-cover"/>
				{:else if slideNo === 2}
					<img src={vue_icon} width="60" height="60" alt="Vue Icon" />
				{/if}
			</div>
			<p class="text-2xl text-gray-300" transition:slide={{duration: 300}}>{slideText[slideNo]}</p>
		{/if}
	</div>
</main>
