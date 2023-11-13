<script lang='ts'>
  export let skills: string[]
</script>

<div>
  {#each skills as skill}
    <span class="chip variant-filled mx-1 variant-filled-tertiary">{skill}</span>
  {/each}
</div>
