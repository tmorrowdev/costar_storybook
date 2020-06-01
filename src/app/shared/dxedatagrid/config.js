// In real applications, you should not transpile code in the browser. You can see how to create your own application with Angular and DevExtreme here:
// https://js.devexpress.com/Documentation/Guide/Angular_Components/Getting_Started/Create_a_DevExtreme_Application/
System.config({
  transpiler: 'ts',
  typescriptOptions: {
      module: "system",
      emitDecoratorMetadata: true,
      experimentalDecorators: true
  },
  meta: {
      'typescript': {
          "exports": "ts"
      },
  },
  paths: {
      'npm:': 'https://unpkg.com/'
  },
  map: {
      'ts': 'npm:plugin-typescript@8.0.0/lib/plugin.js',
      'typescript': 'npm:typescript@3.4.5/lib/typescript.js',
      '@angular': 'npm:@angular',
      'tslib': 'npm:tslib/tslib.js',
      'rxjs': 'npm:rxjs',
      'devextreme': 'npm:devextreme@20.1',
      'jszip': 'npm:jszip@3.1.3/dist/jszip.min.js',
      'quill': 'npm:quill@1.3.7/dist/quill.js',
      'devexpress-diagram': 'npm:devexpress-diagram@1.0.0',
      'devexpress-gantt': 'npm:devexpress-gantt@1.0.0',
      'devextreme-angular': 'npm:devextreme-angular@20.1'
  },
  packages: {
      'app': {
          main: './app.component.ts',
          defaultExtension: 'ts'
      },
      'devextreme': {
          defaultExtension: 'js'
      },
      'devextreme/events/utils': {
          main: 'index'
      },
      'devextreme/events': {
          main: 'index'
      },
  },
  packageConfigPaths: [
      "npm:*/package.json",
      "npm:@angular/*/package.json",
      "npm:@angular/common/*/package.json",
      "npm:rxjs/operators/package.json",
      "npm:devextreme-angular@20.1/*/package.json",
      "npm:devextreme-angular@20.1/ui/*/package.json",
  ]
});
