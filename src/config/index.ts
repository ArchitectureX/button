import fs from 'fs'
import path from 'path'

import defaultConfig, { Configuration } from './defaultConfig'

function loadUserConfig(configPath: string): object {
  if (!fs.existsSync(configPath)) {
    return {};
  }

  const fileContents = fs.readFileSync(configPath, 'utf8');
  console.log('FILE CONTENTS', fileContents)
  return JSON.parse(fileContents);
}

function deepMerge(target: any, source: any): object {
  for (const key in source) {
    if (source[key] instanceof Object && target[key]) {
      target[key] = deepMerge(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  }

  return target
}

function mergeConfig(defaults: object, userConfig: object): object {
  console.log('DEFAULT CONFIG', defaults)
  console.log('USER CONFIG', userConfig)
  return deepMerge({ ...defaults }, userConfig)
}

const configPath = '../../packages/frontend/architecturex.config.json'
console.log('PATH', configPath)
const userConfigPath = path.resolve(configPath)
const userConfig = loadUserConfig(userConfigPath)
const finalConfig = mergeConfig(defaultConfig, userConfig)

export default finalConfig as Configuration
