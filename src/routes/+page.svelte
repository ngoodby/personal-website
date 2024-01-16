<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import Projects from '$lib/components/Projects.svelte';
	import About from '$lib/components/About.svelte';
	import Resume from '$lib/components/Resume.svelte';

	import type { ModalSettings } from '@skeletonlabs/skeleton';

	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	const modal: ModalSettings = {
		type: 'alert',
		title: 'Hi there! 👋',
		body: "My name is Nat. I'm a software engineer focused on improving the usability of geospatial data and building mapping applications.<br><br>FUN FACT: I custom built this website using SvelteKit and Skeleton UI. You can find the source code linked in the bottom right.",
		buttonTextCancel: 'Close'
	};
	modalStore.trigger(modal);

	let tabSet: number = 0;
</script>

<div>
	<TabGroup justify="justify-center" regionList="text-error-600">
		<Tab bind:group={tabSet} name="projects" value={0}>
			<span>projects</span>
		</Tab>
		<Tab bind:group={tabSet} name="resume" value={2}>resume</Tab>
		<Tab bind:group={tabSet} name="about" value={1}>about</Tab>
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				<div
					class="border-t border-secondary-700 h-screen"
					style="background-image: url('/topo.png')"
				>
					<Projects />
				</div>
			{:else if tabSet === 1}
				<div
					class="border-t border-secondary-700 h-screen"
					style="background-image: url('/topo.png')"
				>
					<About />
				</div>
			{:else if tabSet === 2}
				<Resume />
			{/if}
		</svelte:fragment>
	</TabGroup>
	<a
		href="https://github.com/ngoodby/personal-website"
		target="_blank"
		class="absolute bottom-4 font-bold right-4 text-white px-4 py-2 rounded-md max-w-xs h-auto"
	>
		<svg height="40" viewBox="0 0 1792 1792" width="40" xmlns="http://www.w3.org/2000/svg"
			><path
				d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"
			/></svg
		>
	</a>
</div>
