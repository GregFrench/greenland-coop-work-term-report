import * as React from "react"
import { Helmet } from "react-helmet"
import logo from "../images/cast-logo.jpg"
import jestIcon from "../images/jest-icon.png"
import reactIcon from "../images/react-icon.png"
import communicationIcon from "../images/communication-icon.png"
import postgresIcon from "../images/postgres-icon.png"
import dsaIcon from "../images/dsa-icon.png"
import cleanCodeIcon from "../images/clean-code-icon.png"

// styles
const pageStyles = {
  backgroundColor: "#eee",
  color: "#232129",
  paddingBottom: 50,
  paddingTop: 50,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  fontSize: "56px",
  marginTop: 0,
  marginBottom: 64,
  textAlign: "center",
}

const h2Styles = {
  fontSize: "36px",
}

const imgWrapperStyles = {
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

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cast Co-op 2021 Work Term Report</title>
      </Helmet>
      <div id="content">
        <title>Cast Co-op 2021 Work Term Report</title>
        
        <h1 style={headingStyles}>Cast Co-op 2021 Work Term Report</h1>

        <div style={imgWrapperStyles}>
          <img src={logo} style={logoStyles} alt="Cast Logo" />
        </div>

        <h2 style={h2Styles}>Introduction</h2>

        <p>Hi, I'm Greg. I'm a Bachelor of Computing co-op student at the University of Guelph currently studying computer science. Over the past Summer and Fall of 2021, I've been working as a co-op student at a social media startup called Cast. The following contains a brief overview of my experience.</p>

        <h2 style={h2Styles}>About Cast</h2>

        <p>Cast was a social media company founded in 2020 located in the heart of downtown Toronto. It was primarily a mobile application that ran on both Android and iOS. The app's main core concept was built around social voting that allowed people to share their opinions on various topics and have people vote on those topics anonymously. These topics could range anywhere from social issues to politics to sports and even dating. Whatever was on someone's mind, they could ask it and people around the world could vote on it. Since Cast was founded during the Covid-19 pandemic, the company was remote-first by default but had an office downtown Toronto where employees could meet, hang out, and discuss strategy. I ended up visiting the office twice. Once to meet with the engineering team to discuss preliminary plans for the development of Cast V2, a newer and sleeker version of the app, and another to meet with the entire team right before the official launch of V2 at the end of the summer. The company also held two early morning daily standups over Google Meet, one for the engineering team, and one for the marketing team. On top of that, there were also weekly one-on-one meetings with each member of the team, meaning that each person would meet with every other person on the team virtually at least one time per week. This allowed each team member to discuss in-depth details of what they were working on to keep everyone in the loop. Unfortunately, the company folded in November of 2021 due to budgetary reasons and concerns that the app was not growing as fast enough as the founders had hoped.</p>

        <h2 style={h2Styles}>Job Description</h2>

        <p>I was originally hired on with the company to do software QA. This would entail both manually testing the app as well as writing automated unit tests. The job quickly transitioned into more of a software engineering role as I took on more and more software-related tasks on top of the testing work I was doing at the time. This entailed working on the frontend mobile application using React Native and working on the backend using Node.js in conjunction with both a Postgresql database as well as Google Firestore. Some of the projects I worked on at Cast include, but are not limited to, revamping user profiles for Cast V2, building out the re-cast feature for users to re-cast other peoples casts, building the expiring cast feature that enabled users to set a time on their casts when people are no longer allowed to vote, and building out admin dashboard tools for better reporting and analysis to improve user experience.</p>

        <h2 style={h2Styles}>Goals</h2>

        <p>During my time at Cast, I developed 6 learning goals. Goals that I could strive for to help make me a better developer, and a better professional in the software industry. Here is a brief overview of those goals along with my progress in achieving them.</p>

        <div style={goalStyles}>
          <div style={goalImgContainerStyles}>
           <p><img src={jestIcon} style={goalImgStyles} alt="Jest Icon" /></p>
          </div>
          <div>
            <p><strong>Write automated unit tests that cover the entire Cast mobile application -</strong> the purpose of this goal was to improve my ability to write automated unit tests and gain more experience using frontend unit testing tools such as Jest and React Testing Library. While I wasn’t able to test the entire system due to my role switching more to a software engineering role, I was able to write automated tests for large parts of the application which helped to keep those components of the application consistent and bug-free.</p>
          </div>
        </div>

        <div style={goalStyles}>
          <div style={goalImgContainerStyles}>
            <p><img src={reactIcon} style={goalImgStyles} alt="React Icon" /></p>
          </div>
          <div>
          <p><strong>Achieve expertise in React -</strong> React is an incredibly valuable skill to know and since one of the core technologies used at Cast was React Native, I thought it would be worth my time to spend time digging deep into the core features of React to learn as much as possible about the technology. This would not only make me a valuable contributor to the engineering team at Cast but also any future company that I work with that uses React. Overall, I ended up seeing my React skills grow tremendously and was able to obtain a solid grasp of the core concepts. I now feel a lot more comfortable building out apps and features with it.</p>
          </div>
        </div>

        <div style={goalStyles}>
          <div style={goalImgContainerStyles}>
            <p><img src={communicationIcon} style={goalImgStyles} alt="Communication Icon" /></p>
          </div>
          <div>
          <p><strong>Improve my communication skills -</strong> The purpose of this goal was to improve the way I communicate technical information to other people. When communicating technical concepts it’s very important to explain them in a way that the other person can understand based on their background and level of understanding. If the other person comes from a non-technical background, it’s important not to use too much unnecessary technical jargon that just ends up confusing them. It’s better to break something down into simpler terms that they can understand. This is certainly a skill that needs to be developed and one that I have felt develop throughout my time at Cast, both through the daily standups every morning, and my one-on-one meetings with coworkers.</p>
          </div>
        </div>

        <div style={goalStyles}>
          <div style={goalImgContainerStyles}>
            <p><img src={postgresIcon} style={goalImgStyles} alt="Postgres Icon" /></p>
          </div>
          <div>
          <p><strong>Improve my SQL query skills -</strong> This goal was intended to improve my ability to write SQL queries, both in terms of my ability to write high-quality queries in one-shot, but also make them very performant in how they execute when interacting with the database. For example, I went from having limited knowledge of how “join” queries work, to being able to write pretty advanced join queries by the end of my term. This allowed me to take queries that were being split up into chunks, combine them into a single query using joins, thus reducing the latency of the HTTP requests utilizing those requests, sometimes by an order of magnitude. I also learned a lot about how databases work under the hood to get a better understanding of what is going on when SQL queries are executed on a system.</p>
          </div>
        </div>

        <div style={goalStyles}>
          <div style={goalImgContainerStyles}>
            <p><img src={dsaIcon} style={goalImgStyles} alt="Data Structures and Algorithms Icon" /></p>
          </div>
          <div>
          <p><strong>Continue to hone my data structures and algorithms skills -</strong> This was one of my favourites. One of my favourite aspects of programming is getting to work with algorithms and data structures. Throughout my term, I was able to work with many algorithms and data structures including but not limited to binary search, depth-first search, heaps, and hash tables. Being able to take theoretical concepts that I’ve learned in school and independently, and be able to apply those concepts to a real-world system to increase efficiency and make the overall system a lot faster was a great feeling and one that excites me going into the future.</p>
          </div>
        </div>

        <div style={goalStyles}>
          <div style={goalImgContainerStyles}>
            <p><img src={cleanCodeIcon} style={goalImgStyles} alt="Clean COde Icon" /></p>
          </div>
          <div>
          <p><strong>Improve my ability to write clean code -</strong> This goal was important as well. Being able to write clean, well-written code that is easy to understand is very important to me. This is also something that will be more and more important as I progress throughout my career. This includes being able to write code for other people and not just yourself so that other people can take your code, build upon it and refactor it. This is an invaluable skill to have and a skill I was able to improve upon during my term. Some examples include writing expressive variable names, writing concise functions that emphasized code-reuse throughout the application and using just the right amount of abstraction when writing components so that these same components could be used elsewhere in the application when the time arose. I look forward to continuing to improve this ability in the future.</p>
          </div>
        </div>

        <h2 style={h2Styles}>Conclusions</h2>

        <p>Working at Cast was a wonderful opportunity to work with great people and great technology. Throughout my co-op term, I’ve been able to grow tremendously, both as a person and as a software developer. This is one co-op term that I will remember for a long time.</p>

        <h2 style={h2Styles}>Acknowledgments</h2>

        <p>I would like to thank George Boutsalis, David Banwat, and Graydyn Young for originally hiring me on to the team and giving me the opportunity to work at Cast. I would also like to thank Chance Squires for helping to make me a better front-end developer, especially when it comes to React and React Native.</p>
      </div>
    </main>
  )
}

export default IndexPage
