const { join: resolvePath } = require('path');
const { fileLoader, mergeTypes } = require('merge-graphql-schemas');

const typesArray = fileLoader(resolvePath(__dirname, './*.graphql'));
const typesMerged = mergeTypes(typesArray);

module.exports = typesMerged;
