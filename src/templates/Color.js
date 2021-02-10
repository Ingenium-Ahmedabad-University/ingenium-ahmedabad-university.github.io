import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            name
            weights
          }
        }
      }
    }
  }
`;

export default ({ data }) => {
  let color = data.allSitePage.edges[0].node.context;
  return (
    <Layout>
      <h2>{color.name}</h2>
    </Layout>
  );
};
