import * as React from "react"
import { Helmet } from "react-helmet"
import logo from "../images/greenland-logo.png"
import loadBalancerIcon from "../images/load-balancer-icon.jpg"
import optimizationIcon from "../images/optimization-icon.png"
import applicationIcon from "../images/application-icon.jpg"
import threatsAirQualityAlberta from "../images/threats-air-quality-alberta.png"

// styles
const pageStyles = {
  backgroundColor: "#FFFFFF",
  color: "#232129",
  paddingBottom: 50,
  paddingTop: 50,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  fontSize: "28px",
  marginTop: 0,
  marginBottom: 32,
  textAlign: "center",
}

const h2Styles = {
  fontSize: "18px",
}

const imgWrapperStyles = {
  marginBottom: 25,
  textAlign: "center",
}

const logoStyles = {
  width: "50%",
}

const goalImgContainerStyles = {
  paddingRight: "15px",
}

const goalImgStyles = {
  maxHeight: "100px",
  maxWidth: "100px",
}

const goalStyles = {
  display: "flex",
}

const threatsFigCaption = {
  marginTop: 10,
  textAlign: "center",
};

const threatsImgStyles = {
  display: "block",
  margin: "auto",
  maxWidth: "75%",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Greenland Co-op Summer 2022 Work Term Report</title>
      </Helmet>
      <div id="content">
        <title>Greenland Co-op Summer 2022 Work Term Report</title>

        <div style={imgWrapperStyles}>
          <img src={logo} style={logoStyles} alt="Greenland Logo" />
        </div>
        
        <h1 style={headingStyles}>Greenland Co-op Summer 2022 Work Term Report</h1>

        <h2 style={h2Styles}>Introduction</h2>

        <p>Hi, I'm Greg. I'm a Bachelor of Computing co-op student at the University of Guelph currently studying computer science. Over the past Summer of 2022, I've been working as a co-op student at Greenland International, an engineering consulting firm based in Collingwood Ontario. The following contains a brief overview of my experience.</p>

        <h2 style={h2Styles}>About Greenland</h2>

        <p>Greenland has several offices located in Southern Ontario, with its main office located in Collingwood. The company works on many different engineering projects in collaboration with individuals across governments, industry, and academia. The organization is split into several different divisions and teams. I was a member of the software team, working remotely from home. The software team at Greenland originally worked out of both the Collingwood office and the Communitech Hub in Waterloo but has since transitioned to working entirely remotely since the start of the Covid-19 pandemic. The team primarily communicates over Microsoft Teams and occasionally meets over voice chat to discuss feature updates as well as to discuss the product roadmap. The team also has bi-weekly meetings with the CEO to give status updates on everything that was worked on and completed in the past two weeks, as well as give product demonstrations for any recently completed and polished features.</p>

        <h2 style={h2Styles}>Job Description</h2>

        <p>As a software developer, I had many different responsibilities. For the first month of the work term, I was tasked with working with the Robotics Institute at the University of Guelph on an accessibility project that had been in the works for many years. I had initially assisted with this project back in 2018/2019, but the project was ultimately put on hold due to Covid and other financial reasons. With the project being recently revived, I was asked by Dr. Hussein Abdullah if I could start working on the project again. The fact that Greenland was involved in the development of the project, and the fact that I was now working for Greenland meant that I was able to continue working on the project for the first month of my work term. This work involved getting the core mobile application to work with all the latest library updates of the libraries that the application depended on, transitioning the React Native mobile application to use functional components, rather than class-based components, getting the frontend analytics dashboard and Node backend to work with the latest versions of Node.js, adding migrations to the Postgresql database, and porting the software over to the cloud to enable it to be used as a public-facing application.</p>

        <p>
          <figure>
            <img src={threatsAirQualityAlberta} style={threatsImgStyles} alt="THREATS - Air Quality Alberta" />
            <figcaption style={threatsFigCaption}><em>THREATS: Air Quality - Alberta Tool</em></figcaption>
          </figure>
        </p>

        <p>After I was finished with my work at the University, I started working directly with the software team at Greenland on the THREATS platform. THREATS is an online visualization tool used to visualize environmental data over time. This ranges anywhere from the monitoring of air/water quality and the effects of different chemicals in the air/water, to monitoring oil pipeline spills and their effect on wildlife. My first major task was to go through THREATS and find potential ways of optimizing the platform. This was due to the fact some of the aspects of the application had gotten quite slow due to adding on more and more features over time, as well as the sheer amount of data that needed to be processed and displayed to the user. Some of the improvements I was able to implement included adding in Redis caching of database calls and API endpoints to drastically reduce the time it took to fetch results that had been previously computed, freeing up resources used by tools that the user was not currently using, and removing unnecessary and expensive endpoint calls that were being called regardless of whether a user was using that specific feature or not. The second major task was to run distributed load tests on the application. This involved recording actions taken in the app, converting them into JMeter scripts, and then using distributed load testing software from AWS to simulate many concurrent users using the app, going through the actions recorded in the script. The servers were then monitored to see just how many users the servers could handle before the CPU usage started peaking at close to 100% capacity. The third and final major task was to set up load balancers for the application. This involved setting up load balancers for the two main application instances as well as the database instance. This involved quite the learning curve as I had never done anything like this before. This resulted in successfully setting up a load balancer for the frontend instance while giving an easy pathway to setting up load balancers for the backend instances when the time comes. The database instances were a lot more challenging though simply due to the fact of requiring data replication of close to a terabyte worth of data. Add on to the fact of needing data synchronization across the database instances, meaning that when you write to one database, the other database(s) need to receive that write also. It was ultimately decided that it would be better to optimize the database and the SQL queries on the database rather than add load balancing to the database instances themselves. This is work that is still ongoing to this day.</p>

        <h2 style={h2Styles}>Goals</h2>

        <p>At the start of my tenure at Greenland, I developed 3 main learning goals. These goals would help guide my work term in terms of what the major focus of my work would be on, and how to make myself a better overall developer. Here is a brief overview of those goals along with my progress in achieving them.</p>

        <div style={goalStyles}>
          <div style={goalImgContainerStyles}>
           <p><img src={loadBalancerIcon} style={goalImgStyles} alt="Load Balancing Icon" /></p>
          </div>
          <div>
            <p><strong>Improve my system design skills -</strong> the purpose of this goal was to improve my overall system design skills. These skills are needed when transitioning from a junior developer into the role of a senior developer. Throughout the term, I was able to greatly improve my caching skills, caching API requests and database calls to achieve orders of magnitude in terms of overall speed increase. For example, some of the database calls were taking 2+ minutes to complete on average. Utilizing Redis caching, I was able to bring these requests down to 0.5 seconds once the request is fully cached. On top of this, I was also allowed to dive deep into load balancing. Load balancing is an extremely important part of system design, especially as an application starts scaling up to more and more users. Using tools that come with AWS, I was able to successfully integrate load balancing on top of their existing EC2 instances as well as add CodeDeploy to seamlessly deploy code to multiple load-balanced instances without having to manually deploy code to each one.</p>
          </div>
        </div>

        <div style={goalStyles}>
          <div style={goalImgContainerStyles}>
            <p><img src={optimizationIcon} style={goalImgStyles} alt="Optimization Icon" /></p>
          </div>
          <div>
          <p><strong>Improve application optimization skills -</strong> This goal was to improve my ability to make software go faster. I was able to achieve this through Redis caching of API endpoints and database calls, learning more about SQL query optimization through using things like using b-trees to create database indexes to speed up popular queries by enabling them to run in logarithmic time instead of linear time.</p>
          </div>
        </div>

        <div style={goalStyles}>
          <div style={goalImgContainerStyles}>
            <p><img src={applicationIcon} style={goalImgStyles} alt="Application Icon" /></p>
          </div>
          <div>
          <p><strong>Improve overall application development skills -</strong> The purpose of this goal was to improve my overall software development skills, especially as it pertains to application development. During the first month of the work term, I did a lot of programming. This was needed to get code that was written several years ago in tip-top shape to be used in a modern production environment. This meant transforming the core of the mobile application and rewriting/refactoring a lot of the core functionality. When my work transitioned over to working full-time with the software team at Greenland, my work was more focused on the system design side of things, rather than strictly programming. Having said that, I still managed to get my hands dirty and dig into the code base, fixing bugs and refactoring the software for the sake of performance.</p>
          </div>
        </div>

        <h2 style={h2Styles}>Conclusions</h2>

        <p>Working at Greenland was an excellent opportunity to work with great technology and even better people. Throughout the co-op term, I’ve been able to grow tremendously, both as a person and as a software developer. I look forward to joining them again for my winter 2023 co-op.</p>

        <h2 style={h2Styles}>Acknowledgments</h2>

        <p>I would like to thank Mark Palmer and Trevor Boston for originally hiring me onto the team. I’d also like to thank the rest of the software development team for being great coworkers to work with.</p>
      </div>
    </main>
  )
}

export default IndexPage
