import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function MyFiles({ data }) {
    console.log(data)
    return ( 
        <Layout>
            <div>Check out my files!</div>
            <table>
                <thead>
                    <tr>
                        <th>relativePath</th>
                        <th>prettySize</th>
                        <th>extension</th>
                        <th>birthTime</th>
                    </tr>
                </thead>
                <tbody>
                    {data.allFile.edges.map(({ node }, index) => (
                        <tr key={index}>
                            <td>{node.relativePath}</td>
                            <td>{node.prettySize}</td>
                            <td>{node.extension}</td>
                            <td>{node.birthTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}

export const query = graphql`
query MyQuery {
    allFile {
      edges {
        node {
          name
          birthTime(fromNow: true)
          prettySize
          relativePath
          extension
        }
      }
    }
  }
`