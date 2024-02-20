<script lang="ts">
  import '../app.postcss';
  import { AppShell, AppBar } from '@skeletonlabs/skeleton';

  // Floating UI for Popups
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
  import { storePopup } from '@skeletonlabs/skeleton';
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  import { Modal, initializeStores } from '@skeletonlabs/skeleton';
  initializeStores();
</script>

<Modal />
<!-- App Shell -->
<AppShell>
  <svelte:fragment slot="header">
    <!-- App Bar -->
    <AppBar regionRowHeadline="text-error-600" spacing="space-y-1">
      <svelte:fragment slot="lead">
        <strong class="text-2xl">nathaniel goodby</strong>
      </svelte:fragment>
      <svelte:fragment slot="headline">geospatial software engineer</svelte:fragment>
      <svelte:fragment slot="trail">
        <a 
          class='text-error-600 hover:text-error-800'
          href='/'>
          projects
        </a>
        <a 
          class='text-error-600 hover:text-error-800'
          href='/resume'>
          resume
        </a>
        <a 
          class='text-error-600 hover:text-error-800'
          href='/about'>
          about 
        </a>
        <a
          class="btn btn-sm h-9"
          href="https://github.com/ngoodby"
          target="_blank"
          rel="noreferrer"
        >
          <img class="h-9" src="/github-mark-white.svg" alt="Github logo" />
        </a>
        <a
          class="btn btn-sm h-9"
          href="https://www.linkedin.com/in/natgoodby"
          target="_blank"
          rel="noreferrer"
        >
          <img class="h-9 text-white" src="/linkedin.svg" alt="LinkedIn logo" />
        </a>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

  <div
    class="border-t border-secondary-700 h-screen"
    style="background-image: url('/topo.png')"
  >
    <slot />
    <a
      href="https://github.com/ngoodby/personal-website"
      target="_blank"
      class="hidden sm:inline absolute bottom-4 font-bold right-4 text-white px-4 py-2 rounded-md max-w-xs h-auto"
      >
      <svg height="40" viewBox="0 0 1792 1792" width="40" xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"
      /></svg
      >
    </a>
  </div>
</AppShell>
