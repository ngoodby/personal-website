<script lang='ts'>
  import Skills from './Skills.svelte';
  import { Stepper, Step, ProgressRadial } from '@skeletonlabs/skeleton';
  let imageLoaded: boolean[]=[];
  let image;

  const projects = [
    {
      url: '',
      name: 'WDFW Land Information System',
      description: 'Developed a website for viewing and editing real estate and facility data for the Washington Department of Fish and Wildlife',
      skills: [
        'Typescript',
        'arcpy',
        'ESRI JS Maps SDK',
        'SQL',
        'SvelteKit',
        'Azure DevOps'
      ],
      image: '/LIS_animation.gif'

    },
    {
      url: 'https://batcon.shinyapps.io/species_of_greatest_conservation_need/',
      name: 'Bat Species of Greatest Conservation Need',
      description:
      'Tool to identify bat species of greatest conservation need across US states. Used by state fish and wildlife departments to coordinate collaborative efforts for landscape scale conservation.',
      skills: ['R', 'R Shiny', 'Python', 'PostGIS', 'AWS'],
      image: '/sgcn_animation.gif'
    },
    {
      url: 'https://batcon.shinyapps.io/pacwest_hub_regional_shiny_app/',
      name: 'PacWest bat hub regional data viewer',
      description:
      'Visualize regional data trends for acoustic bat surveys conducted throughout California and Nevada. Tool features an automated report generator that creates aesthetic and digestible reports on request.',
      skills: ['R', 'R Shiny', 'PostGIS', 'AWS'],
      image: '/data_viewer_animation.gif'
    },
    {
      url: 'https://github.com/ngoodby/ndpl_reporting',
      name: 'Automated reporting for the National Data Processing Lab',
      description:
      'Automated data processing and reporting pipeline digesting hundreds of thousands of features and producing customized reports, saving hundreds of hours annually of manual labor and improving ',
      skills: ['markdown', 'PostGIS', 'AWS', 'Python'],
      image: '/reporting_animation.gif'
    },
    {
      url: 'https://wdfw.wa.gov/places-to-go/wildlife-areas',
      name: 'WDFW Database Management',
      description:
      'Scoped and built SQL Server and ESRI database for DFW parcel and infrastructure data with custom functions, stored procedures, attribute rules, etc. Developed custom python library for database deployment and version control. Currently working a new website leveraging this database built using TypeScript, Svelte & SvelteKit, and Skeleton UI.',
      skills: [
        'TypeScript',
        'arcpy',
        'ESRI JS Maps SDK',
        'SQL',
        'Python',
        'Azure DevOps'
      ],
      image: '/dfw-website.jpg'
    },
  ];

  imageLoaded = projects.map(() => false);
  imageLoaded[0]=true

  function handleImageLoad(_: Event, index: number) {
    imageLoaded=projects.map(()=> false)
    imageLoaded[index] = true;
    imageLoaded = [...imageLoaded]; // Force update
  }

  function onStep () {
    const elemPage = document.querySelector('#page');
    if (elemPage){
      elemPage.scrollTop = 0;

    }
  }
</script>

<div class="flex justify-center">
  <div class="flex flex-col items-center pt-2">
    <div class="card variant-filled-primary w-3/4 mb-2 p-2 shadow-md">
      <Stepper
        stepTerm="Project"
        buttonCompleteLabel=""
        badge="variant-filled-tertiary"
        buttonBackLabel="Previous"
        class="h-full"
        on:step={onStep}
      >
        {#each projects as p, i}
          <Step class="h-full">
            <svelte:fragment slot="header">{p.name.toUpperCase()}</svelte:fragment>
            {p.description}<br /><br /><a href={p.url} target="_blank" >
              {#if !imageLoaded[i]}
                <div class="flex items-center justify-center w-2/3 h-1/2 mx-auto rounded-md" >
                  <ProgressRadial value={undefined} stroke={100} meter="stroke-error-500" track="stroke-error-500/30" strokeLinecap="butt"/>
                </div>
              {/if}
              <img 
                bind:this={image}
                on:load={(event) => handleImageLoad(event, i)}
                class="w-2/3 h-1/2 object-cover mx-auto rounded-md" 
                src={p.image} 
                alt={p.name}
              />

            </a
            ><br /><Skills skills={p.skills} />
          </Step>
        {/each}
      </Stepper>
    </div>
  </div>
</div>

