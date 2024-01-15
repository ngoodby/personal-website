<script lang='ts'>
  export let skills: string[]
</script>


<span class="inline-flex items-center space-x-2">
  <span class="text-sm font-bold">SKILLS:</span>
  {#each skills as skill}
    <span class="chip text-black font-bold variant-filled mx-1 variant-ghost-error">{skill}</span>
  {/each}
</span>
