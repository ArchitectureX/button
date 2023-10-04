import fs from 'fs'
import path from 'path'

import defaultConfig, { Configuration } from './defaultConfig'

function loadUserConfig(configPath: string): object {
  if (!fs.existsSync(configPath)) {
    return {}
  }

  return require(configPath)
}

function mergeConfig(defaults: object, userConfig: object): any {
  return { ...defaults, ...userConfig }
}

const userConfigPath = path.resolve(process.cwd(), 'architecturex.config.js')
const userConfig = loadUserConfig(userConfigPath)
const finalConfig = mergeConfig(defaultConfig, userConfig)

export default finalConfig as Configuration
