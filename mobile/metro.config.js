// Metro config for Expo in a monorepo (mobile + convex + shared packages)
// Allows importing sibling workspace code like ../convex/_generated/api on web.
const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '..');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(projectRoot);

// Watch the entire monorepo so Metro can resolve imports outside mobile/
config.watchFolders = [workspaceRoot];

// Prefer the workspace root node_modules first (monorepo), then local
config.resolver.nodeModulesPaths = [
  path.resolve(workspaceRoot, 'node_modules'),
  path.resolve(projectRoot, 'node_modules'),
];

// Avoid walking up directory tree (helps monorepos + performance)
config.resolver.disableHierarchicalLookup = true;

module.exports = config;

