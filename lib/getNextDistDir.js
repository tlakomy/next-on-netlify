// Get the NextJS distDir specified in next.config.js
const { PHASE_PRODUCTION_BUILD }  = require('next/constants')
const { default: loadConfig }     = require('next/dist/next-server/server/config')
const { resolve, join }           = require('path')

const getNextDistDir = ({ nextConfigPath }) => {
  // Load next.config.js
  // Use same code as https://github.com/vercel/next.js/blob/25488f4a03db30cade4d086ba49cd9a50a2ac02e/packages/next/build/index.ts#L114
  const nextConfig = loadConfig(PHASE_PRODUCTION_BUILD, resolve("."))

  return join(".", nextConfig.distDir)
}


module.exports = getNextDistDir
