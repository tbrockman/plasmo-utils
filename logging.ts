import { isVerbose } from "./flags"
import pino from "pino"
import pinoCaller from "pino-caller"

const logger = pinoCaller(pino(), { stackAdjustment: 1 })

export const cLog = (prefix = "", ...args: any[]) =>
  logger.info(args)
  // console.log(prefix.padEnd(9), "|", ...args)

/**
 * Appendix logging
 */
export const aLog = (...args: any[]) => cLog("", ...args)

/**
 * Success logging
 */
export const sLog = (...args: any[]) => cLog(`🟢 DONE`, ...args)

/**
 * Error logging
 */
export const eLog = (...args: any[]) =>
  logger.error(args)
  // console.error(`🔴 ERROR`.padEnd(9), "|", ...args)

/**
 * Info logging
 */
export const iLog = (...args: any[]) => 
  logger.info(args)
  // cLog(`🔵 INFO`, ...args)

/**
 * Warning log
 */
export const wLog = (...args: any[]) => 
  logger.warn(args)
  // cLog(`🟠 WARN`, ...args)

let verboseStep = 0

/**
 * Verbose logging
 */
export const vLog = (...args: any[]) =>
  logger.debug(args)
  // isVerbose() && cLog(`🟡 ${verboseStep++}`, ...args)

/**
 * Verbose table
 */
export const vTable = (tableData: any, props?: string[]) =>
  isVerbose() && console.table(tableData, props)
