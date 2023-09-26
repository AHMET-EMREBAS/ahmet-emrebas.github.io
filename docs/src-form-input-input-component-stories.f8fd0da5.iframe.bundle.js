(self.webpackChunk_techbir_source=self.webpackChunk_techbir_source||[]).push([[7061],{"./libs/material/src/form/input/input.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>InputComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs");var _class,core=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs"),text_input_component=__webpack_require__("./libs/material/src/form/text-input/text-input.component.ts");let InputComponent=((_class=class InputComponent{constructor(){this.id="",this.name="",this.value="",this.type="text",this.autocomplete="on",this.color="primary",this.label="Input Label",this.variant="basic",this.icon="info"}handleInput(event){this.formValue&&(this.formValue[this.name]=event)}}).propDecorators={__ngContext__:[{type:core.Input}],id:[{type:core.Input}],name:[{type:core.Input}],value:[{type:core.Input}],type:[{type:core.Input}],autocomplete:[{type:core.Input}],color:[{type:core.Input}],label:[{type:core.Input}],variant:[{type:core.Input}],icon:[{type:core.Input}],formValue:[{type:core.Input}]},_class);InputComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"tb-input",standalone:!0,imports:[common.CommonModule,text_input_component.t],template:'<tb-text-input\n  [autocomplete]="autocomplete"\n  [value]="value"\n  [name]="name"\n  [id]="id"\n  [color]="color"\n  [type]="type"\n  [label]="label"\n  [icon]="icon"\n  [variant]="variant"\n  (inputEvent)="handleInput($event)"\n></tb-text-input>\n'})],InputComponent)},"./libs/material/src/form/text-input/text-input.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>TextInputComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs");var _class,core=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs");let HasValueDirective=((_class=class HasValueDirective{constructor(elementRef){this.elementRef=elementRef}ngAfterViewInit(){this.elementRef.nativeElement.addEventListener("input",(event=>{const data=event.data;data?.length>0?this.markAsHasValue():this.markAsHasNovalue()}))}markAsHasValue(){this.elementRef.nativeElement.setAttribute("has-value","true")}markAsHasNovalue(){this.elementRef.nativeElement.setAttribute("has-value","false")}}).ctorParameters=()=>[{type:core.ElementRef}],_class);HasValueDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbHasValue]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],HasValueDirective);var text_input_component_class,focus_directive=__webpack_require__("./libs/material/src/micro/focus/focus.directive.ts"),fesm2022_forms=__webpack_require__("./node_modules/.pnpm/@angular+forms@16.2.0_@angular+common@16.2.0_@angular+core@16.2.0_@angular+platform-browser@16.2.0_rxjs@7.8.1/node_modules/@angular/forms/fesm2022/forms.mjs");let TextInputComponent=((text_input_component_class=class TextInputComponent{constructor(){this.inputEvent=new core.EventEmitter,this.value="",this.id="",this.name="",this.type="text",this.autocomplete="off",this.color="primary",this.label="Input Label",this.variant="basic",this.icon="info"}emitEvent(){this.inputEvent.emit(this.value)}}).propDecorators={inputEvent:[{type:core.Output}],value:[{type:core.Input}],id:[{type:core.Input}],name:[{type:core.Input}],type:[{type:core.Input}],autocomplete:[{type:core.Input}],color:[{type:core.Input}],label:[{type:core.Input}],variant:[{type:core.Input}],icon:[{type:core.Input}]},text_input_component_class);TextInputComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"tb-text-input",standalone:!0,imports:[common.CommonModule,fesm2022_forms.u5,fesm2022_forms.UX,HasValueDirective,focus_directive.R],template:'<div class="input-container {{ color }} {{ variant }}">\n  <span class="icon"> {{ icon }}</span>\n  <label [for]="label">{{ label }} </label>\n  <input\n    [(ngModel)]="value"\n    [id]="label"\n    [type]="type"\n    [name]="name"\n    [autocomplete]="autocomplete"\n    (input)="emitEvent()"\n    tbHasValue\n  />\n</div>\n'})],TextInputComponent)},"./libs/material/src/micro/focus/focus.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>FocusDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs");let FocusDirective=((_class=class FocusDirective{constructor(elementRef){this.elementRef=elementRef}ngAfterViewInit(){this.elementRef.nativeElement.focus()}}).ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef}],_class);FocusDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[tbFocus]",standalone:!0}),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef])],FocusDirective)},"./libs/material/src/form/input/input.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Heading:()=>Heading,Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ref,C_Users_development_Projects_ahmet_emrebas_github_io_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_input_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/material/src/form/input/input.component.ts"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.2.0/node_modules/@storybook/testing-library/dist/index.mjs"),_storybook_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@storybook+jest@0.1.0/node_modules/@storybook/jest/dist/esm/index.js");const __WEBPACK_DEFAULT_EXPORT__={component:_input_component__WEBPACK_IMPORTED_MODULE_2__.a,title:"InputComponent"},Primary={args:{id:"",name:"",value:"",type:"text",autocomplete:"on",color:"primary",label:"Input Label",variant:"basic",icon:"info"}},Heading={args:{id:"",name:"",value:"",type:"text",autocomplete:"on",color:"primary",label:"Input Label",variant:"basic",icon:"info"},play:function play(_x){return(_ref=_ref||(0,C_Users_development_Projects_ahmet_emrebas_github_io_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__.Z)((function*({canvasElement}){const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByText(/input works!/gi)).toBeTruthy()}))).apply(this,arguments)}}},"?1f41":()=>{}}]);