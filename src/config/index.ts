import path from 'path'
import { mergeConfig, loadUserConfig } from '@architecturex/utils.config'

import defaultConfig, { Configuration } from './defaultConfig'

const configPath = process.cwd() + '/.architecturexrc.json'
const userConfigPath = path.resolve(configPath)
const userConfig = loadUserConfig(userConfigPath)
const finalConfig = mergeConfig(defaultConfig, userConfig)

export default finalConfig as Configuration
