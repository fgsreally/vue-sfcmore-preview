import { PluginOption, Logger, normalizePath, ServerOptions, ViteDevServer } from 'vite'
import fs from 'fs'
import { relative } from 'path'
import pc from "picocolors"
let logger: Logger
let root: string
let server: ViteDevServer
let ServerOpt: ServerOptions

const virtualFileId='virtual:sfcmore-preview'
export default function Preview(): PluginOption {
    return {
        name: 'vue-sfcmore-preview',
        enforce: 'pre',
        apply: 'serve',
        resolveId(source) {
     
            if(source===virtualFileId){
                return virtualFileId
            }
        },
        load(id, options) {
            if(id===virtualFileId){
                return virtualFileId
            } 
        },
        configResolved(config) {
            logger = config.logger
            root = config.root
            ServerOpt = config.server
        },
        configureServer(_server) {
            server = _server
        },
        handleHotUpdate(ctx) {
            if (ctx.file.endsWith('.vue') && fs.existsSync(ctx.file)) {
                logger.info(pc.cyan(`${ServerOpt.https ? 'https' : 'http'}//localhost:${ServerOpt.port || '80'}` + normalizePath(relative(root, ctx.file))))

            }
        }
    }
}