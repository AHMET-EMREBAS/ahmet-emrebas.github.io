"use strict";(self.webpackChunk_techbir_source=self.webpackChunk_techbir_source||[]).push([[5855],{"./libs/material/src/app-inventory/app-inventory.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Heading:()=>Heading,Primary:()=>Primary,default:()=>app_inventory_component_stories});var asyncToGenerator=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),dist=__webpack_require__("./node_modules/.pnpm/@storybook+angular@7.2.1_@angular-devkit+architect@0.1602.2_@angular-devkit+build-angular@16._b7qxh7v3h7xieppg2z7zehq7ye/node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),button_component=__webpack_require__("./libs/material/src/button/button/button.component.ts"),tab_module=__webpack_require__("./libs/material/src/tab/tab.module.ts"),micro_module=__webpack_require__("./libs/material/src/micro/micro.module.ts"),form_module=__webpack_require__("./libs/material/src/form/form.module.ts"),nav_list_component=__webpack_require__("./libs/material/src/nav-list/nav-list.component.ts");let AppInventoryComponent=class AppInventoryComponent{};AppInventoryComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"tb-app-inventory",standalone:!0,imports:[micro_module.d,tab_module.I,nav_list_component.t,button_component.r,form_module.e],template:'<tb-button\n  badge="100"\n  variant="raised"\n  badgePosition="top-right"\n  badgeColor="primary"\n  label="label"\n></tb-button>\n\n<tb-tab-container type="sidenav">\n  <ng-template\n    tbTab\n    label="Products"\n    icon="info"\n    color="primary"\n    badge="100"\n    badgePosition="top-right"\n  >\n    <h1>Product content</h1>\n  </ng-template>\n  <ng-template tbTab label="Stock" icon="info" color="primary">\n    <h1>Stock</h1>\n  </ng-template>\n  <ng-template tbTab label="Pricing" icon="attach_money" color="primary">\n    <h1>Pricing</h1>\n  </ng-template>\n</tb-tab-container>\n'})],AppInventoryComponent);var _ref,testing_library_dist=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.2.0/node_modules/@storybook/testing-library/dist/index.mjs"),esm=__webpack_require__("./node_modules/.pnpm/@storybook+jest@0.1.0/node_modules/@storybook/jest/dist/esm/index.js"),animations=__webpack_require__("./node_modules/.pnpm/@angular+platform-browser@16.2.0_@angular+animations@16.2.0_@angular+common@16.2.0_@angular+core@16.2.0/node_modules/@angular/platform-browser/fesm2022/animations.mjs");const app_inventory_component_stories={component:AppInventoryComponent,title:"AppInventoryComponent",decorators:[(0,dist.moduleMetadata)({imports:[animations.BrowserAnimationsModule]})]},Primary={args:{}},Heading={args:{},play:function play(_x){return(_ref=_ref||(0,asyncToGenerator.Z)((function*({canvasElement}){const canvas=(0,testing_library_dist.uh)(canvasElement);(0,esm.l)(canvas.getByText(/app-inventory works!/gi)).toBeTruthy()}))).apply(this,arguments)}}}}]);