"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[3480],{8535:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var i=n(1527),a=n(5696),s=n(7123),l=n(9988),t=n(2264);const c={},o="Javascript Api",d={id:"api/javascript-api",title:"Javascript Api",description:"Farm provides a comprehensive set of APIs for development servers, compilers, watchers, etc. Developers can use these APIs by importing the @farmfe/core package.",source:"@site/docs/api/javascript-api.mdx",sourceDirName:"api",slug:"/api/javascript-api",permalink:"/docs/api/javascript-api",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/api/javascript-api.mdx",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Runtime Plugin API",permalink:"/docs/api/runtime-plugin-api"},next:{title:"Rust Api",permalink:"/docs/api/rust-api"}},p={},h=[{value:"Start",id:"start",level:2},{value:"Build",id:"build",level:2},{value:"Watch",id:"watch",level:2},{value:"Preview",id:"preview",level:2},{value:"Clean",id:"clean",level:2},{value:"loadEnv",id:"loadenv",level:2},{value:"createDevServer",id:"createdevserver",level:2},{value:"createPreviewServer",id:"createpreviewserver",level:2},{value:"getCompiler",id:"getcompiler",level:2},{value:"close",id:"close",level:2},{value:"Compiler",id:"compiler",level:2},{value:"compile",id:"compile",level:3},{value:"compileSync",id:"compilesync",level:3},{value:"traceDependencies",id:"tracedependencies",level:3},{value:"update",id:"update",level:3},{value:"hasModule",id:"hasmodule",level:3},{value:"getParentFiles",id:"getparentfiles",level:3},{value:"resources",id:"resources",level:3},{value:"Resource",id:"resource",level:3},{value:"writeResourcesToDisk",id:"writeresourcestodisk",level:3},{value:"removeOutputPathDir",id:"removeoutputpathdir",level:3},{value:"resolvedWatchPaths",id:"resolvedwatchpaths",level:3},{value:"resolvedModulePaths",id:"resolvedmodulepaths",level:3},{value:"onUpdateFinish",id:"onupdatefinish",level:3},{value:"outputPath",id:"outputpath",level:3},{value:"addExtraWatchFile",id:"addextrawatchfile",level:3},{value:"modules",id:"modules",level:3}];function u(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"javascript-api",children:"Javascript Api"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Farm"})," provides a comprehensive set of APIs for development servers, compilers, watchers, etc. Developers can use these APIs by importing the ",(0,i.jsx)(r.code,{children:"@farmfe/core"})," package."]}),"\n",(0,i.jsxs)(r.p,{children:["Install the ",(0,i.jsx)(r.code,{children:"@farmfe/core"})," package:"]}),"\n",(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(l.Z,{value:"npm",label:"npm",children:(0,i.jsx)(t.Z,{children:"npm create @farmfe/core@latest"})}),(0,i.jsx)(l.Z,{value:"yarn",label:"yarn",children:(0,i.jsx)(t.Z,{children:"yarn create @farmfe/core@latest"})}),(0,i.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(t.Z,{children:"pnpm create @farmfe/core@latest"})})]})}),"\n",(0,i.jsx)(r.h2,{id:"start",children:"Start"}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"start"})," method is used to quickly launch the development server."]}),"\n",(0,i.jsxs)(r.p,{children:["After calling the ",(0,i.jsx)(r.code,{children:"start"})," method, you can see the log information of the available ",(0,i.jsx)(r.code,{children:"ip"})," address in the current console. By default, it compiles the ",(0,i.jsx)(r.code,{children:"index.html"})," file in the current directory."]}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"start(options: InlineConfig): Promise<void>\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { start, logger } from "@farmfe/core";\ntry {\n  await start(options);\n} catch (error) {\n  logger.error(`Failed to start server:\\n ${error.stack}`);\n  process.exit(1);\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"build",children:"Build"}),"\n",(0,i.jsx)(r.p,{children:"The build method is used to build for the production environment."}),"\n",(0,i.jsx)(r.p,{children:"After calling the build method, it defaults to building browser artifacts and generates a dist folder in the current directory. If you need to build artifacts for different environments and versions, such as node, node-next, browser, browser-es2017, etc., you can configure it by checking output targetEnv."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"build(options: InlineConfig): Promise<void>\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { build, logger } from "@farmfe/core";\ntry {\n  await build(options);\n} catch (error) {\n  logger.error(`error during build:\\n ${error.stack}`);\n  process.exit(1);\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"watch",children:"Watch"}),"\n",(0,i.jsx)(r.p,{children:"The watch method provides real-time updates for the compilation of the current project, equivalent to npx farm build --watch. Generally used in the node environment."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"watch(options: InlineConfig): Promise<void>\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { watch, logger } from "@farmfe/core";\ntry {\n  await watch(defaultOptions);\n} catch (error) {\n  logger.error(`error during watch project:\\n ${error.stack}`);\n  process.exit(1);\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"preview",children:"Preview"}),"\n",(0,i.jsx)(r.p,{children:"The preview method starts a preview server for previewing production artifacts. Make sure to have built the artifacts using the build method and have the correct production artifacts."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"preview(options: InlineConfig): Promise<void>\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { preview, logger } from "@farmfe/core";\ntry {\n  await preview(defaultOptions);\n} catch (error) {\n  logger.error(`Failed to start preview server:\\n ${error.stack}`);\n  process.exit(1);\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"clean",children:"Clean"}),"\n",(0,i.jsx)(r.p,{children:"The clean method clears the cache generated by the farm incremental build. If you have issues with the incremental build causing crashes due to unforeseen or undiscovered problems, clearing the cache might help."}),"\n",(0,i.jsx)(r.admonition,{type:"warning",children:(0,i.jsx)(r.p,{children:"If there are problems with the incremental build causing crashes that are not resolved by clearing the cache, please submit an issue on GitHub."})}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"clean(options: InlineConfig): Promise<void>\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { clean, logger } from "@farmfe/core";\ntry {\n  await clean(defaultOptions);\n} catch (error) {\n  logger.error(`Failed to clean cache:\\n ${error.stack}`);\n  process.exit(1);\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"loadenv",children:"loadEnv"}),"\n",(0,i.jsx)(r.p,{children:"Load environment variables from the .env file."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"type LoadEnvFunc = (\n  mode: string,\n  envDir: string,\n  prefixes: string | string[] = ['FARM_', 'VITE_']\n) => [env: Record<string, string>, existsEnvFiles: string[]];\n"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"mode"})," is ",(0,i.jsx)(r.code,{children:"development"}),", ",(0,i.jsx)(r.code,{children:"production"})," or any string. ",(0,i.jsx)(r.code,{children:"loadEnv"})," will try load ",(0,i.jsx)(r.code,{children:"[``.env``, ``.env.local``, ``.env.${mode}``, ``.env.${mode}.local``]"})," for ",(0,i.jsx)(r.code,{children:"envDir"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"envDir"})," is the directory where the ",(0,i.jsx)(r.code,{children:".env"})," file is located."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"prefixes"})," is the prefix of the environment variable. The default value is ",(0,i.jsx)(r.code,{children:"['FARM_', 'VITE_']"}),". Env variables with these prefixes will be injected into ",(0,i.jsx)(r.code,{children:"define"})," automatically."]}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"const [env, files] = loadEnv('development', '/path/to/project/env');\n// use env\n"})}),"\n",(0,i.jsx)(r.h2,{id:"createdevserver",children:"createDevServer"}),"\n",(0,i.jsx)(r.p,{children:"The createDevServer method is used to start a local development server. You need to instantiate the Server object first and pass the compiler as a parameter."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"createDevServer(options: DevServerOptions): Promise<void>\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Server } from "@farmfe/core";\nconst server = new Server();\nawait server.createDevServer(options);\nserver.listen()\n'})}),"\n",(0,i.jsx)(r.h2,{id:"createpreviewserver",children:"createPreviewServer"}),"\n",(0,i.jsx)(r.p,{children:"Create a preview server for previewing production artifacts."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"createPreviewServer(options: DevServerOptions): Promise<void>\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Server } from "@farmfe/core";\nconst server = new Server();\nawait server.createPreviewServer(options);\n'})}),"\n",(0,i.jsx)(r.h2,{id:"getcompiler",children:"getCompiler"}),"\n",(0,i.jsx)(r.p,{children:"Get the current development server's compiler instance. Pass the compiler as a parameter when instantiating the Server."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"\ngetCompiler(): Compiler\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Server, Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nconst server = new Server({\n  compiler\n});\nconst compilerInstance = server.getCompiler();\n'})}),"\n",(0,i.jsx)(r.h2,{id:"close",children:"close"}),"\n",(0,i.jsx)(r.p,{children:"Close all servers and WebSocket services opened by createDevServer."}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Server } from "@farmfe/core";\nconst server = new Server();\nawait server.createDevServer(options);\nserver.listen()\nawait server.close();\n'})}),"\n",(0,i.jsx)(r.h2,{id:"compiler",children:"Compiler"}),"\n",(0,i.jsx)(r.p,{children:"The Compiler provides a set of compiler APIs. You can create a compiler instance by instantiating Compiler."}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nawait compiler.compile();\n'})}),"\n",(0,i.jsx)(r.h3,{id:"compile",children:"compile"}),"\n",(0,i.jsx)(r.p,{children:"Asynchronously start the compilation process. Returns a Promise."}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsx)(r.p,{children:"If specific environment variables are set (process.env.FARM_PROFILE), it performs a synchronous compilation."})}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"\ncompile(): Promise<void>\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nawait compiler.compile();\n'})}),"\n",(0,i.jsx)(r.h3,{id:"compilesync",children:"compileSync"}),"\n",(0,i.jsx)(r.p,{children:"Synchronously start the compilation process."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"\ncompileSync(): void\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\ncompiler.compileSync();\n'})}),"\n",(0,i.jsx)(r.h3,{id:"tracedependencies",children:"traceDependencies"}),"\n",(0,i.jsx)(r.p,{children:"Trace dependencies between files. Returns an array of all dependencies for the provided input in the compiler configuration. Useful for restarting compilation based on file dependencies."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"\ntraceDependencies(): Array<string>\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Compiler } from "@farmfe/core";\n\nconst config = {\n  input: "./farm.config.js"\n}\nconst compiler = new Compiler(config);\nconst dependencies = compiler.traceDependencies();\n'})}),"\n",(0,i.jsx)(r.p,{children:"Returns an array of paths representing all dependencies."}),"\n",(0,i.jsx)(r.h3,{id:"update",children:"update"}),"\n",(0,i.jsx)(r.p,{children:"Update compilation based on the provided paths. Returns a Promise resolving to a JsUpdateResult. If compilation is already in progress, it waits for completion and updates. If ignoreCompilingCheck is set to true, it won't check the compilation status."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"\ntype JsUpdateResult = {\n  success: boolean\n  errors: Array<Error>\n  warnings: Array<Error>\n}\n\nupdate(paths: Array<string>, sync: boolean, ignoreCompilingCheck: boolean): JsUpdateResult\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nconst result = await compiler.update(paths, true, true);\n'})}),"\n",(0,i.jsx)(r.h3,{id:"hasmodule",children:"hasModule"}),"\n",(0,i.jsx)(r.p,{children:"Pass a path to determine if the current path is within the modules compiled by the compiler."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"\nhasModule(path: string): boolean\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nconst result = compiler.hasModule(path);\n'})}),"\n",(0,i.jsx)(r.h3,{id:"getparentfiles",children:"getParentFiles"}),"\n",(0,i.jsx)(r.p,{children:"Retrieve the current file that a module import with the module import name (id) or resolved path identifier (resolvedPath) imports."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"\ngetParentFiles(resolvedPath: string): Array<string>\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nconst result = compiler.getParentFiles(resolvedPath);\n'})}),"\n",(0,i.jsx)(r.h3,{id:"resources",children:"resources"}),"\n",(0,i.jsx)(r.p,{children:"Return all resources compiled by the compiler."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"\ntype Resource = {\n  path: string\n  buffer: Buffer\n}\nresources(): Array<Resource>\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nawait compiler.compile()\nconst result = compiler.resources();\n'})}),"\n",(0,i.jsx)(r.h3,{id:"resource",children:"Resource"}),"\n",(0,i.jsx)(r.p,{children:"Return the buffer of the current artifact based on the given file."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"\nresource(path: string): Buffer | null\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nawait compiler.compile()\nconst result = compiler.resource(path);\n'})}),"\n",(0,i.jsx)(r.h3,{id:"writeresourcestodisk",children:"writeResourcesToDisk"}),"\n",(0,i.jsx)(r.p,{children:"Write resources to disk based on the configured output path."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"\nwriteResourcesToDisk(): void\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nawait compiler.compile()\ncompiler.writeResourcesToDisk();\n'})}),"\n",(0,i.jsx)(r.h3,{id:"removeoutputpathdir",children:"removeOutputPathDir"}),"\n",(0,i.jsx)(r.p,{children:"Remove the output path directory."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"\nremoveOutputPathDir(): void\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nawait compiler.compile()\ncompiler.removeOutputPathDir();\n'})}),"\n",(0,i.jsx)(r.h3,{id:"resolvedwatchpaths",children:"resolvedWatchPaths"}),"\n",(0,i.jsx)(r.p,{children:"Return resolved watch paths."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"\nresolvedWatchPaths(): Array<string>\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nawait compiler.compile()\nconst result = compiler.resolvedWatchPaths();\n'})}),"\n",(0,i.jsx)(r.h3,{id:"resolvedmodulepaths",children:"resolvedModulePaths"}),"\n",(0,i.jsx)(r.p,{children:"Return resolved module paths relative to the provided root path."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"\nresolvedModulePaths(rootPath: string): Array<string>\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nawait compiler.compile()\nconst result = compiler.resolvedModulePaths(rootPath);\n'})}),"\n",(0,i.jsx)(r.h3,{id:"onupdatefinish",children:"onUpdateFinish"}),"\n",(0,i.jsx)(r.p,{children:"Add a callback to be executed after the update process is complete."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"\nonUpdateFinish(callback: (...args: any[]) => any): void\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\ncompiler.onUpdateFinish(callback);\n'})}),"\n",(0,i.jsx)(r.h3,{id:"outputpath",children:"outputPath"}),"\n",(0,i.jsx)(r.p,{children:"Return the resolved output path."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"\noutputPath(): string\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nconst result = compiler.outputPath();\n'})}),"\n",(0,i.jsx)(r.h3,{id:"addextrawatchfile",children:"addExtraWatchFile"}),"\n",(0,i.jsx)(r.p,{children:"Add extra watch files for the compiler."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"\naddExtraWatchFile(rootPath: string, filePath: string[]): void\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\ncompiler.addExtraWatchFile(rootPath, filePath);\n'})}),"\n",(0,i.jsx)(r.h3,{id:"modules",children:"modules"}),"\n",(0,i.jsx)(r.p,{children:"Return an array of objects representing file module resolutions."}),"\n",(0,i.jsx)(r.p,{children:"Type:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"\nexport interface Module {\n  id: string\n  moduleType: string\n  moduleGroups: Array<string>\n  resourcePot?: string\n  sideEffects: boolean\n  sourceMapChain: Array<string>\n  external: boolean\n  immutable: boolean\n}\nmodules(): Array<Module>\n"})}),"\n",(0,i.jsx)(r.p,{children:"Basic example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'\nimport { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nconst result = compiler.modules();\n'})})]})}function m(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9988:(e,r,n)=>{n.d(r,{Z:()=>l});n(959);var i=n(5341);const a={tabItem:"tabItem_MFY6"};var s=n(1527);function l(e){let{children:r,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,l),hidden:n,children:r})}},7123:(e,r,n)=>{n.d(r,{Z:()=>w});var i=n(959),a=n(5341),s=n(5739),l=n(8903),t=n(6206),c=n(6404),o=n(2108),d=n(2685);function p(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,i.useMemo)((()=>{const e=r??function(e){return p(e).map((e=>{let{props:{value:r,label:n,attributes:i,default:a}}=e;return{value:r,label:n,attributes:i,default:a}}))}(n);return function(e){const r=(0,o.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function u(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,c._X)(s),(0,i.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function v(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,s=h(e),[l,c]=(0,i.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:r,tabValues:s}))),[o,p]=m({queryString:n,groupId:a}),[v,x]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,d.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),j=(()=>{const e=o??v;return u({value:e,tabValues:s})?e:null})();(0,t.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),x(e)}),[p,x,s]),tabValues:s}}var x=n(8302);const j={tabList:"tabList_d80c",tabItem:"tabItem_jy3j"};var f=n(1527);function g(e){let{className:r,block:n,selectedValue:i,selectValue:l,tabValues:t}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),d=e=>{const r=e.currentTarget,n=c.indexOf(r),a=t[n].value;a!==i&&(o(r),l(a))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;r=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;r=c[n]??c[c.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:t.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,ref:e=>c.push(e),onKeyDown:p,onClick:d,...s,className:(0,a.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":i===r}),children:n??r},r)}))})}function y(e){let{lazy:r,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function b(e){const r=v(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(g,{...e,...r}),(0,f.jsx)(y,{...e,...r})]})}function w(e){const r=(0,x.Z)();return(0,f.jsx)(b,{...e,children:p(e.children)},String(r))}}}]);