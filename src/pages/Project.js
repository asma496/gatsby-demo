// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const Project = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allContentfulProject {
//         edges {
//           node {
//             githublink
//             title
//             thumbnail {
//               fluid {
//                 src
//               }
//             }
//           }
//         }
//       }
//     }
//   `)


// console.log(data)
//   const mywork = data.allContentfulProject.edges
//   console.log(data)
//   return (
//       <div> {
//         mywork.map((item)=>(
//             <div>
//             <h5>{item.node.title}</h5>
//             <img src={item.node.thumbnail.fluid.src} width={100} />
//             </div>
//         ))
//       }
//         </div>
//   )
// }

// export default Project
