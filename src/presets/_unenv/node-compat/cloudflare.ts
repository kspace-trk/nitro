// Auto generated using gen-node-compat.ts on 2025-06-25
// Source: https://platform-node-compat.pi0.workers.dev/
// Do not edit this file manually

// prettier-ignore
export const builtnNodeModules = [
  "_stream_duplex",
  "_stream_passthrough",
  "_stream_readable",
  "_stream_transform",
  "_stream_writable",
  "_tls_common",
  "_tls_wrap", // Missing exports: Server, createServer
  "assert", // Missing exports: CallTracker, partialDeepStrictEqual
  "assert/strict", // Missing exports: CallTracker, partialDeepStrictEqual
  "async_hooks",
  "buffer",
  "diagnostics_channel",
  "dns",
  "dns/promises",
  "events", // Missing exports: captureRejections, init
  "net",
  "path",
  "path/posix",
  "path/win32",
  "querystring",
  "stream",
  "stream/consumers",
  "stream/promises",
  "stream/web",
  "string_decoder",
  "timers",
  "timers/promises",
  "url",
  "util/types",
  "zlib",
];

// prettier-ignore
export const hybridNodeModules = [
  "console",
  "crypto", // Missing exports: Cipher, Decipher
  "module", // Missing exports: Module, SourceMap, constants, enableCompileCache, findPackageJSON, findSourceMap, flushCompileCache, getCompileCacheDir, getSourceMapsSupport, globalPaths, register, runMain, setSourceMapsSupport, stripTypeScriptTypes, syncBuiltinESMExports
  "process", // Missing exports: abort, allowedNodeEnvironmentFlags, arch, argv, argv0, assert, availableMemory, binding, chdir, config, constrainedMemory, cpuUsage, cwd, debugPort, dlopen, domain, emitWarning, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getuid, hasUncaughtExceptionCaptureCallback, hrtime, initgroups, kill, loadEnvFile, memoryUsage, moduleLoadList, openStdin, pid, ppid, reallyExit, ref, release, report, resourceUsage, setSourceMapsEnabled, setUncaughtExceptionCaptureCallback, setegid, seteuid, setgid, setgroups, setuid, sourceMapsEnabled, stderr, stdin, stdout, title, umask, unref, uptime, version, versions
  "tls", // Missing exports: createSecurePair
  "util", // Missing exports: isBoolean, isBuffer, isDate, isError, isFunction, isNull, isNullOrUndefined, isNumber, isObject, isPrimitive, isRegExp, isString, isSymbol, isUndefined
];

// prettier-ignore
export const unsupportedNodeModules = [
  "_http_agent",
  "_http_client",
  "_http_common",
  "_http_incoming",
  "_http_outgoing",
  "_http_server",
  "_stream_wrap",
  "child_process",
  "cluster",
  "constants",
  "dgram",
  "domain",
  "fs",
  "fs/promises",
  "http",
  "http2",
  "https",
  "inspector",
  "inspector/promises",
  "os",
  "perf_hooks",
  "punycode",
  "readline",
  "readline/promises",
  "repl",
  "sys",
  "trace_events",
  "tty",
  "v8",
  "vm",
  "wasi",
  "worker_threads",
  "sqlite",
];
