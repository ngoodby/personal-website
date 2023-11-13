<script lang='ts'>
import { TabGroup, Tab } from '@skeletonlabs/skeleton';
import Projects from '$lib/components/Projects.svelte';
import About from '$lib/components/About.svelte';

let tabSet: number=0;
</script>

<div >
  <TabGroup justify="justify-center" regionList="text-error-600">
    <Tab bind:group={tabSet} name="projects" value={0}>
      <span>projects</span>
    </Tab>
    <Tab bind:group={tabSet} name="about" value={1}>about</Tab>
    <svelte:fragment slot="panel">
      {#if tabSet === 0}
        <div class="border-t border-secondary-700" style="background-image: url('/topo.png')"> 
          <Projects />
        </div>
        {:else if tabSet === 1}

        <div style="background-image: url('/topo.png')"> 
          <About />
        </div>
      {/if}
    </svelte:fragment>
  </TabGroup>
</div>
