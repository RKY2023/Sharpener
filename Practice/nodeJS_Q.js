// setImmediate (()=>{
//   console.log("first")  
// })
// setTimeout (()=>{
//   console.log("second")
// })
// console.log("third");
// // third second first




// Hello => number 1
// process {
//   version: 'v20.10.0',
//   versions: {
//     node: '20.10.0',
//     acorn: '8.10.0',
//     ada: '2.7.2',
//     ares: '1.20.1',
//     base64: '0.5.0',
//     brotli: '1.0.9',
//     cjs_module_lexer: '1.2.2',
//     cldr: '43.1',
//     icu: '73.2',
//     llhttp: '8.1.1',
//     modules: '115',
//     napi: '9',
//     nghttp2: '1.57.0',
//     nghttp3: '0.7.0',
//     ngtcp2: '0.8.1',
//     openssl: '3.0.12+quic',
//     simdutf: '3.2.18',
//     tz: '2023c',
//     undici: '5.26.4',
//     unicode: '15.0',
//     uv: '1.46.0',
//     uvwasi: '0.0.19',
//     v8: '11.3.244.8-node.25',
//     zlib: '1.2.13.1-motley'
//   },
//   arch: 'x64',
//   platform: 'win32',
//   release: {
//     name: 'node',
//     lts: 'Iron',
//     sourceUrl: 'https://nodejs.org/download/release/v20.10.0/node-v20.10.0.tar.gz',
//     headersUrl: 'https://nodejs.org/download/release/v20.10.0/node-v20.10.0-headers.tar.gz',
//     libUrl: 'https://nodejs.org/download/release/v20.10.0/win-x64/node.lib'
//   },
//   _rawDebug: [Function: _rawDebug],
//   moduleLoadList: [
//     'Internal Binding builtins',
//     'Internal Binding errors',
//     'NativeModule internal/assert',
//     'Internal Binding util',
//     'NativeModule internal/errors',
//     'Internal Binding config',
//     'Internal Binding timers',
//     'Internal Binding async_wrap',
//     'Internal Binding task_queue',
//     'Internal Binding symbols',
//     'NativeModule internal/async_hooks',
//     'Internal Binding constants',
//     'Internal Binding types',
//     'Internal Binding options',
//     'NativeModule internal/options',
//     'NativeModule internal/util',
//     'NativeModule internal/util/types',
//     'NativeModule internal/validators',
//     'NativeModule internal/linkedlist',
//     'NativeModule internal/priority_queue',
//     'Internal Binding icu',
//     'NativeModule internal/util/inspect',
//     'NativeModule internal/util/debuglog',
//     'NativeModule internal/timers',
//     'NativeModule events',
//     'Internal Binding buffer',
//     'Internal Binding string_decoder',
//     'NativeModule internal/buffer',
//     'NativeModule buffer',
//     'Internal Binding messaging',
//     'NativeModule internal/worker/js_transferable',     
//     'Internal Binding process_methods',
//     'NativeModule internal/process/per_thread',
//     'Internal Binding credentials',
//     'NativeModule internal/process/promises',
//     'NativeModule internal/fixed_queue',
//     'NativeModule async_hooks',
//     'NativeModule internal/process/task_queues',        
//     'NativeModule timers',
//     'Internal Binding trace_events',
//     'NativeModule internal/constants',
//     'NativeModule path',
//     'Internal Binding contextify',
//     'NativeModule internal/vm',
//     'NativeModule internal/process/execution',
//     'NativeModule internal/process/warning',
//     'NativeModule internal/querystring',
//     'NativeModule querystring',
//     'Internal Binding url',
//     'NativeModule internal/url',
//     'NativeModule internal/source_map/source_map_cache',    'NativeModule internal/console/constructor',        
//     'NativeModule internal/console/global',
//     'Internal Binding permission',
//     'NativeModule internal/process/permission',
//     'NativeModule internal/util/inspector',
//     'Internal Binding inspector',
//     'NativeModule util',
//     'NativeModule internal/webidl',
//     'Internal Binding performance',
//     'NativeModule internal/perf/utils',
//     'NativeModule internal/event_target',
//     'Internal Binding blob',
//     'Internal Binding mksnapshot',
//     'NativeModule internal/v8/startup_snapshot',        
//     'NativeModule internal/process/signal',
//     'Internal Binding fs',
//     'Internal Binding encoding_binding',
//     'NativeModule internal/encoding',
//     'NativeModule internal/webstreams/util',
//     'NativeModule internal/webstreams/queuingstrategies',
//     'NativeModule internal/blob',
//     'NativeModule internal/fs/utils',
//     'NativeModule fs',
//     'NativeModule internal/idna',
//     'NativeModule url',
//     'NativeModule internal/modules/helpers',
//     'NativeModule internal/modules/package_json_reader',    'Internal Binding module_wrap',
//     'NativeModule internal/modules/cjs/loader',
//     'NativeModule internal/process/pre_execution',      
//     'NativeModule internal/modules/esm/utils',
//     'NativeModule internal/vm/module',
//     'NativeModule internal/inspector_async_hook',       
//     'Internal Binding wasm_web_api',
//     'Internal Binding worker',
//     'NativeModule internal/modules/run_main',
//     'NativeModule internal/net',
//     'NativeModule internal/dns/utils',
//     'NativeModule vm',
//     'NativeModule internal/abort_controller',
//     'NativeModule internal/streams/utils',
//     'NativeModule internal/streams/end-of-stream',      
//     'NativeModule internal/streams/destroy',
//     'NativeModule internal/streams/legacy',
//     'NativeModule internal/streams/add-abort-signal',   
//     'NativeModule internal/streams/buffer_list',        
//     'NativeModule internal/streams/state',
//     'NativeModule string_decoder',
//     'NativeModule internal/streams/from',
//     ... 26 more items
//   ],
//   binding: [Function: binding],
//   _linkedBinding: [Function: _linkedBinding],
//   _events: [Object: null prototype] {
//     newListener: [Function: startListeningIfSignal],    
//     removeListener: [Function: stopListeningIfSignal],  
//     warning: [Function: onWarning],
//     SIGWINCH: [
//       [Function: refreshStdoutOnSigWinch],
//       [Function: refreshStderrOnSigWinch]
//     ]
//   },
//   _eventsCount: 4,
//   _maxListeners: undefined,
//   domain: null,
//   _exiting: [Getter/Setter],
//   exitCode: [Getter/Setter],
//   config: {
//     target_defaults: {
//       cflags: [],
//       default_configuration: 'Release',
//       defines: [Array],
//       include_dirs: [],
//       libraries: []
//     },
//     variables: {
//       asan: 0,
//       coverage: false,
//       dcheck_always_on: 0,
//       debug_nghttp2: false,
//       debug_node: false,
//       enable_lto: false,
//       enable_pgo_generate: false,
//       enable_pgo_use: false,
//       error_on_warn: false,
//       force_dynamic_crt: 0,
//       host_arch: 'x64',
//       icu_data_in: '..\\..\\deps\\icu-tmp\\icudt73l.dat',
//       icu_endianness: 'l',
//       icu_gyp_path: 'tools/icu/icu-generic.gyp',        
//       icu_path: 'deps/icu-small',
//       icu_small: false,
//       icu_ver_major: '73',
//       is_debug: 0,
//       libdir: 'lib',
//       llvm_version: '0.0',
//       napi_build_version: '9',
//       nasm_version: '2.16',
//       node_builtin_shareable_builtins: [Array],
//       node_byteorder: 'little',
//       node_debug_lib: false,
//       node_enable_d8: false,
//       node_enable_v8_vtunejit: false,
//       node_fipsinstall: false,
//       node_install_corepack: true,
//       node_install_npm: true,
//       node_library_files: [Array],
//       node_module_version: 115,
//       node_no_browser_globals: false,
//       node_prefix: '\\usr\\local',
//       node_release_urlbase: 'https://nodejs.org/download/release/',
//       node_shared: false,
//       node_shared_brotli: false,
//       node_shared_cares: false,
//       node_shared_http_parser: false,
//       node_shared_libuv: false,
//       node_shared_nghttp2: false,
//       node_shared_nghttp3: false,
//       node_shared_ngtcp2: false,
//       node_shared_openssl: false,
//       node_shared_zlib: false,
//       node_tag: '',
//       node_target_type: 'executable',
//       node_use_bundled_v8: true,
//       node_use_node_code_cache: true,
//       node_use_node_snapshot: true,
//       node_use_openssl: true,
//       node_use_v8_platform: true,
//       node_with_ltcg: true,
//       node_without_node_options: false,
//       node_write_snapshot_as_array_literals: true,      
//       openssl_is_fips: false,
//       openssl_quic: true,
//       ossfuzz: false,
//       shlib_suffix: 'so.115',
//       single_executable_application: true,
//       target_arch: 'x64',
//       v8_enable_31bit_smis_on_64bit_arch: 0,
//       v8_enable_gdbjit: 0,
//       v8_enable_hugepage: 0,
//       v8_enable_i18n_support: 1,
//       v8_enable_inspector: 1,
//       v8_enable_javascript_promise_hooks: 1,
//       v8_enable_lite_mode: 0,
//       v8_enable_object_print: 1,
//       v8_enable_pointer_compression: 0,
//       v8_enable_shared_ro_heap: 1,
//       v8_enable_short_builtin_calls: 1,
//       v8_enable_webassembly: 1,
//       v8_no_strict_aliasing: 1,
//       v8_optimized_debug: 1,
//       v8_promise_internal_field_count: 1,
//       v8_random_seed: 0,
//       v8_trace_maps: 0,
//       v8_use_siphash: 1,
//       want_separate_host_toolset: 0
//     }
//   },
//   dlopen: [Function: dlopen],
//   uptime: [Function: uptime],
//   _getActiveRequests: [Function: _getActiveRequests],   
//   _getActiveHandles: [Function: _getActiveHandles],     
//   getActiveResourcesInfo: [Function: getActiveResourcesInfo],
//   reallyExit: [Function: reallyExit],
//   _kill: [Function: _kill],
//   cpuUsage: [Function: cpuUsage],
//   resourceUsage: [Function: resourceUsage],
//   memoryUsage: [Function: memoryUsage] { rss: [Function: rss] },
//   constrainedMemory: [Function: constrainedMemory],     
//   kill: [Function: kill],
//   exit: [Function: exit],
//   hrtime: [Function: hrtime] { bigint: [Function: hrtimeBigInt] },
//   openStdin: [Function (anonymous)],
//   allowedNodeEnvironmentFlags: [Getter/Setter],
//   assert: [Function: deprecated],
//   features: {
//     inspector: true,
//     debug: false,
//     uv: true,
//     ipv6: true,
//     tls_alpn: true,
//     tls_sni: true,
//     tls_ocsp: true,
//     tls: true,
//     cached_builtins: [Getter]
//   },
//   _fatalException: [Function (anonymous)],
//   setUncaughtExceptionCaptureCallback: [Function: setUncaughtExceptionCaptureCallback],
//   hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCallback],
//   emitWarning: [Function: emitWarning],
//   nextTick: [Function: nextTick],
//   _tickCallback: [Function: runNextTicks],
//   sourceMapsEnabled: [Getter],
//   setSourceMapsEnabled: [Function: setSourceMapsEnabled],
//   _debugProcess: [Function: _debugProcess],
//   _debugEnd: [Function: _debugEnd],
//   _startProfilerIdleNotifier: [Function (anonymous)],   
//   _stopProfilerIdleNotifier: [Function (anonymous)],    
//   stdout: [Getter],
//   stdin: [Getter],
//   stderr: [Getter],
//   abort: [Function: abort],
//   umask: [Function: wrappedUmask],
//   chdir: [Function: wrappedChdir],
//   cwd: [Function: wrappedCwd],
//   env: {
//     ALLUSERSPROFILE: 'C:\\ProgramData',
//     APPDATA: 'C:\\Users\\XRAJ2\\AppData\\Roaming',      
//     ChocolateyInstall: 'C:\\ProgramData\\chocolatey',   
//     ChocolateyLastPathUpdate: '133484879607611345',     
//     CHROME_CRASHPAD_PIPE_NAME: '\\\\.\\pipe\\crashpad_8400_LGRVFGCVIWECYEPA',
//     CommonProgramFiles: 'C:\\Program Files\\Common Files',
//     'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
//     CommonProgramW6432: 'C:\\Program Files\\Common Files',
//     COMPUTERNAME: 'DESKTOP-VLPTTNE',
//     ComSpec: 'C:\\Windows\\system32\\cmd.exe',
//     DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
//     HOMEDRIVE: 'C:',
//     HOMEPATH: '\\Users\\XRAJ2',
//     JAVA_HOME: 'C:\\Users\\XRAJ2\\AppData\\Local\\Programs\\Eclipse Adoptium\\jdk-17.0.10.7-hotspot\\',
//     LOCALAPPDATA: 'C:\\Users\\XRAJ2\\AppData\\Local',   
//     LOGONSERVER: '\\\\DESKTOP-VLPTTNE',
//     NUMBER_OF_PROCESSORS: '4',
//     OneDrive: 'C:\\Users\\XRAJ2\\OneDrive',
//     OneDriveConsumer: 'C:\\Users\\XRAJ2\\OneDrive',     
//     ORIGINAL_XDG_CURRENT_DESKTOP: 'undefined',
//     OS: 'Windows_NT',
//     Path: 'C:\\Python312\\Scripts\\;C:\\Python312\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Tailscale\\;C:\\Ruby33-x64\\bin;C:\\Users\\XRAJ2\\AppData\\Local\\pnpm;C:\\Users\\XRAJ2\\AppData\\Local\\Programs\\Eclipse Adoptium\\jdk-17.0.10.7-hotspot\\bin;C:\\Users\\XRAJ2\\AppData\\Local\\Microsoft\\WindowsApps;;C:\\Users\\XRAJ2\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\XRAJ2\\AppData\\Roaming\\npm;C:\\Users\\XRAJ2\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-7.0.1-full_build\\bin;C:\\Users\\XRAJ2\\AppData\\Local\\Microsoft\\WinGet\\Packages\\yt-dlp.yt-dlp_Microsoft.Winget.Source_8wekyb3d8bbwe;',       
//     PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.RB;.RBW;.CPL',
//     PNPM_HOME: 'C:\\Users\\XRAJ2\\AppData\\Local\\pnpm',    PROCESSOR_ARCHITECTURE: 'AMD64',
//     PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 78 Stepping 3, GenuineIntel',
//     PROCESSOR_LEVEL: '6',
//     PROCESSOR_REVISION: '4e03',
//     ProgramData: 'C:\\ProgramData',
//     ProgramFiles: 'C:\\Program Files',
//     'ProgramFiles(x86)': 'C:\\Program Files (x86)',     
//     ProgramW6432: 'C:\\Program Files',
//     PSModulePath: 'C:\\Users\\XRAJ2\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules',
//     PUBLIC: 'C:\\Users\\Public',
//     SESSIONNAME: 'Console',
//     SystemDrive: 'C:',
//     SystemRoot: 'C:\\Windows',
//     TEMP: 'C:\\Users\\XRAJ2\\AppData\\Local\\Temp',     
//     TMP: 'C:\\Users\\XRAJ2\\AppData\\Local\\Temp',      
//     USERDOMAIN: 'DESKTOP-VLPTTNE',
//     USERDOMAIN_ROAMINGPROFILE: 'DESKTOP-VLPTTNE',       
//     USERNAME: 'XRAJ2',
//     USERPROFILE: 'C:\\Users\\XRAJ2',
//     VBOX_MSI_INSTALL_PATH: 'C:\\Program Files\\Oracle\\VirtualBox\\',
//     windir: 'C:\\Windows',
//     ZES_ENABLE_SYSMAN: '1',
//     TERM_PROGRAM: 'vscode',
//     TERM_PROGRAM_VERSION: '1.90.0',
//     LANG: 'en_US.UTF-8',
//     COLORTERM: 'truecolor',
//     GIT_ASKPASS: 'c:\\Users\\XRAJ2\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh',
//     VSCODE_GIT_ASKPASS_NODE: 'C:\\Users\\XRAJ2\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe',
//     VSCODE_GIT_ASKPASS_EXTRA_ARGS: '',
//     VSCODE_GIT_ASKPASS_MAIN: 'c:\\Users\\XRAJ2\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js',
//     VSCODE_GIT_IPC_HANDLE: '\\\\.\\pipe\\vscode-git-1eb04a515a-sock',
//     VSCODE_INJECTION: '1'
//   },
//   title: 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe',
//   argv: [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'D:\\Work\\SharpenerWork\\Practice\\nodeJS_Q.js'    
//   ],
//   execArgv: [],
//   pid: 12596,
//   ppid: 6844,
//   execPath: 'C:\\Program Files\\nodejs\\node.exe',      
//   debugPort: 9229,
//   argv0: 'C:\\Program Files\\nodejs\\node.exe',
//   _preload_modules: [],
//   report: [Getter],
//   mainModule: {
//     path: 'D:\\Work\\SharpenerWork\\Practice',
//     exports: {},
//     filename: 'D:\\Work\\SharpenerWork\\Practice\\nodeJS_Q.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'D:\\Work\\SharpenerWork\\Practice\\node_modules',      'D:\\Work\\SharpenerWork\\node_modules',
//       'D:\\Work\\node_modules',
//       'D:\\node_modules'
//     ]
//   },
//   [Symbol(kCapture)]: false
// }



// console.log('Hello => number 1');

// setImmediate(() => {
//   console.log('Running before the timeout => number 3');
// });

// setTimeout(() => {
//   console.log('The timeout running last => number 4');
// }, 0);

// process.nextTick(() => {
//   console.log('Running at next tick => number 2');
// });
// console.log(process)




// const func = () => {
//   return Math.random().toFixed(2)*100
// }
// console.log(func());

// let str = 'java=sdf=fdsf'
// str = str.split('')
// str = str.reverse()
// console.log(str.join(""));

// const [a,...b] = [1,2,3,4,5,6]
// console.log(a+'aa'+b);

// const a = [1,3,4,5,8]
// const v =4;
// const func = (a, v) => {
//   if(a.indexOf(v) >= 0) {
//     return 'Element found';
//   } else {
//     return 'Element not found';
//   }
// }
// console.log(func(a,v));


// async function fun1(){
//   console.log('a');  
//   console.log('b');  
//   await new Promise((rs,rj) => {setTimeout(() =>{ console.log('c');rs();}, 1000);})  
//   await new Promise((rs,rj) => {setTimeout(() =>{ console.log('d');rs();}, 0);})  
//   console.log('e'); 
//   }  
//   fun1()

//   create1stBlog().then( () => {
//     create2ndBlog().then( () => {
//         deleteBlog().then( (deletedBlog) => {
//             console.log(deletedBlog.title);
//         }).catch(err => console.log(err));
//     }).catch(err => console.log(err));
// }).catch(err => console.log(err));


// console.log(0.1 +0.2) 
// console.log((0.2+ 0.3) === 0.5)