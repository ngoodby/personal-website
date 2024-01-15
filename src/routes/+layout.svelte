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
    <AppBar regionRowHeadline="text-error-600" spacing='space-y-1'>
      <svelte:fragment slot="lead">
        <strong class="text-2xl">nathaniel goodby</strong>
      </svelte:fragment>
      <svelte:fragment slot='headline'>
        geospatial software engineer
        </svelte:fragment>
      <svelte:fragment slot="trail">
        <a
          class="btn btn-sm h-9"
          href="https://github.com/ngoodby"
          target="_blank"
          rel="noreferrer"
        >
          <img class="h-9" src="/github-mark-white.svg" alt="Github logo"/>
        </a>
        <a
          class="btn btn-sm h-9"
          href="https://www.linkedin.com/in/natgoodby"
          target="_blank"
          rel="noreferrer"
        >
          <img class="h-9 text-white" src="/linkedin.svg" alt="LinkedIn logo"/>
        </a>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <slot />
</AppShell>
