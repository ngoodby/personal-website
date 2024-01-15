<script lang='ts'>
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
	body: "My name is Nat. I'm a software engineer focused on improving the usability of geospatial data and building mapping applications. This website gives a little info about me and some projects I've worked on. Please be in touch for more detail or to discuss how I can be of assistance.<br><br>FUN FACT: I custom built this website using SvelteKit and Skeleton UI",
  buttonTextCancel: 'Close'
};
modalStore.trigger(modal);

let tabSet: number=0;
</script>

<div >
  <TabGroup justify="justify-center" regionList="text-error-600">
    <Tab bind:group={tabSet} name="projects" value={0}>
      <span>projects</span>
    </Tab>
    <Tab bind:group={tabSet} name="resume" value={2}>resume</Tab>
    <Tab bind:group={tabSet} name="about" value={1}>about</Tab>
    <svelte:fragment slot="panel">
      {#if tabSet === 0}
        <div class="border-t border-secondary-700 h-screen" style="background-image: url('/topo.png')"> 
          <Projects />
        </div>
        {:else if tabSet === 1}

        <div style="background-image: url('/topo.png')"> 
          <About />
        </div>
        {:else if tabSet === 2}
        <Resume />
      {/if}
    </svelte:fragment>
  </TabGroup>
</div>
