import { logLoaded } from "./helpers"

logLoaded(`config.ts`)

export interface ConfigtInterface {
  appName: string
  author: string
  year: number
  email: string
}

export const config: ConfigtInterface = {
  appName: "The Beloved's Blog",
  author: "Davina Leong",
  year: 2022,
  email: "thebelovedsblogtbb@gmail.com",
}
