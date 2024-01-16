<script>
  import Skills from "./Skills.svelte";
  import { Stepper, Step } from '@skeletonlabs/skeleton';



  const projects = [
    {
      url: 'https://wdfw.wa.gov/places-to-go/wildlife-areas',
      name: 'WDFW Database Management',
      description: 'Scoped and built SQL Server and ESRI database for DFW parcel and infrastructure data with custom functions, stored procedures, attribute rules, etc. Developed custom python library for database deployment and version control. Currently working a new website leveraging this database built using TypeScript, Svelte & SvelteKit, and Skeleton UI.',
      skills:['TypeScript', 'arcpy', 'ESRI JS Maps SDK', 'SQL', 'Python', 'SvelteKit', 'Skeleton UI', 'Azure DevOps'],
      image:"/dfw-website.jpg",
    },
    {url: "https://batcon.shinyapps.io/species_of_greatest_conservation_need/",
      name:"Bat Species of Greatest Conservation Need",
      description: "Tool to identify bat species of greatest conservation need across US states. Used by state fish and wildlife departments to coordinate collaborative efforts for landscape scale conservation.",
      skills:['R', 'R Shiny', 'Python', 'PostGIS', 'AWS'],
      image: "/sgcn.png"
    },
    {
      url: "https://batcon.shinyapps.io/pacwest_hub_regional_shiny_app/",
      name:"PacWest bat hub regional data viewer",
      description:"Visualize regional data trends for acoustic bat surveys conducted throughout California and Nevada. Tool features an automated report generator that creates aesthetic and digestible reports on request.",
      skills:['R', 'R Shiny', 'PostGIS', 'AWS'],
      image:"/data-viewer.png"
    },
    {
      url:"https://github.com/ngoodby/ndpl_reporting",
      name:"Automated reporting for the National Data Processing Lab",
      description: "Automated data processing and reporting pipeline digesting hundreds of thousands of features and producing customized reports, saving hundreds of hours annually of manual labor and improving ",
      skills:['markdown', 'PostGIS', 'AWS', 'Python'],
      image: '/report.png'
    },
    {
      url: 'https://github.com/ngoodby/regression_project',
      name: 'Classifying Habitat Types Using Image Recognition',
      description: 'Developed a linear regression model to predict the popularity of hiking trails in Washington State. Coefficients from the regression were used to better understand what characteristics of a trail tend to determine whether the trail is popular or not. The model was then used on unseen data to identify undiscovered trails by identifying trails whose actual popularity is well below predicted popularity. Data for the project was scraped using BeautifulSoup and Selenium.',
      skills: ['Tensorflow', 'Pandas', 'Numpy', 'SciKit-Learn', 'Selenium', 'BeautifulSoup'],
      image: '/features.png'
    }
  ]

</script>

<div class="flex justify-center">
  <div class="flex flex-col items-center pt-4">
    <div class="card variant-filled-primary w-3/4 mb-4 p-4 shadow-md">
      <Stepper stepTerm='Project' buttonCompleteLabel='' badge='variant-filled-tertiary' buttonBackLabel='Previous' class='h-full'>
        {#each projects as p}
          <Step class='h-full'>
            <svelte:fragment slot="header">{p.name.toUpperCase()}</svelte:fragment>
            {p.description}<br><br><a href={p.url} target='_blank'><img class='w-full h-80 object-cover mx-auto rounded-md' src={p.image}/></a><br><Skills skills={p.skills}/>
          </Step>
        {/each}
      </Stepper> 
    </div>
  </div>
</div>

