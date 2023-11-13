<script>
  import Skills from "./Skills.svelte";

  const projects = [
    {url: "https://batcon.shinyapps.io/species_of_greatest_conservation_need/",
      name:"Bat species of greatest conservation need",
      description: "Tool to identify bat species of greatest conservation need across US states. Used by state fish and wildlife departments to coordinate collaborative efforts for landscape scale conservation.",
      skills:['python'],
      image: "/sgcn.png"
    },
    {
      url: "https://batcon.shinyapps.io/pacwest_hub_regional_shiny_app/",
      name:"PacWest bat hub regional data viewer",
      description:"Visualize regional data trends for acoustic bat surveys conducted throughout California and Nevada. Tool features an automated report generator that creates aesthetic and digestible reports on request.",
      skills:['R', 'Shiny'],
      image:"/data-viewer.png"
    },
    {
      url:"https://github.com/ngoodby/ndpl_reporting",
      name:"Automated reporting for the National Data Processing Lab",
      description: "",
      skills:['markdown']
    }
  ]
</script>

<div class="flex justify-center">
  <div class="flex flex-col items-center pt-4">
    {#each projects as p} 
      <div class="card variant-ghost-success w-1/2 mb-4 p-4">
        <a href={p.url} target="_blank">
          <header class="card-header text-center">{p.name.toUpperCase()}</header>
          <section class="p-4">
            <img class="rounded-lg h-auto w-auto mx-auto" src={p.image} alt={p.name}/>
          </section>
        </a>
        <section>

          <p class='py-2 text-left'>{p.description}</p>
        </section>
        <footer class="card-footer text-center">
          <Skills skills={p.skills}/>
        </footer>
      </div>
    {/each}
  </div>
</div>
