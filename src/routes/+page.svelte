<script lang="ts">
  import Projects from '$lib/components/Projects.svelte';
  import type { ModalSettings } from '@skeletonlabs/skeleton';

  import { getModalStore } from '@skeletonlabs/skeleton';

  const modalStore = getModalStore();

  const modal: ModalSettings = {
    type: 'alert',
    title: 'Hi there! 👋',
    body: "My name is Nat. I'm a software engineer focused on improving the usability of geospatial data and building mapping applications. <br><br>FUN FACT: I custom built this website. You can find the source code linked in the bottom right.",
    buttonTextCancel: 'Close'
  };
  modalStore.trigger(modal);

</script>

<Projects />
