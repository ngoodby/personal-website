<script lang='ts'>
  export let skills: string[]
</script>


<span  class="flex flex-wrap justify-center items-center space-x-2 space-y-2">
  <span class="text-sm font-bold">SKILLS:</span>
  {#each skills as skill}
    <span class="flex flex-wrap chip text-black font-bold variant-filled mx-1 variant-ghost-error">{skill}</span>
  {/each}
</span>
