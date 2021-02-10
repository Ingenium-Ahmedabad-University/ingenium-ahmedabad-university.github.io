const path = require(`path`);
const data = require('./src/data/rnd.json');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const template = path.resolve('./src', 'templates', 'Color.js');

  data.forEach((o) => {
    let path = o.name;
    createPage({
      path,
      component: template,
      context: o,
    });
  });
};
