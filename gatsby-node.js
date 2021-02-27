exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const data = await graphql(`
      {
        allEventsDataJson {
          edges {
            node {
              event
            }
          }
        }
      }
    `)

    if (data.errors) {
      console.log("Error retrieving data", data.errors)
      return
    }
  
    const eventsTemplate = require.resolve("./src/pages/events.js")

    data.data.allEventsDataJson.edges.forEach(edge => {
      createPage({
        path: `/events/${edge.node.event}/`,
        component: eventsTemplate,
        context: {
            event: edge.node.event,
        },
      })
    })
  }