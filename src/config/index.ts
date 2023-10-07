import fs from 'fs'
import path from 'path'
import { mergeConfig } from '@architecturex/utils.config'

import defaultConfig, { Configuration } from './defaultConfig'

function loadUserConfig(configPath: string): object {
  if (!fs.existsSync(configPath)) {
    return {}
  }

  const fileContents = fs.readFileSync(configPath, 'utf8')
  console.log('FILE CONTENTS', fileContents)
  return JSON.parse(fileContents)
}

const configPath = process.cwd() + '/.architecturexrc.json'
const userConfigPath = path.resolve(configPath)
const userConfig = loadUserConfig(userConfigPath)
const finalConfig = mergeConfig(defaultConfig, userConfig)

export default finalConfig as Configuration
