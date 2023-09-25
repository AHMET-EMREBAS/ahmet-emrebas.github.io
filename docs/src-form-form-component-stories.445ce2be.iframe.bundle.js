(self.webpackChunk_techbir_source=self.webpackChunk_techbir_source||[]).push([[8599],{"./libs/material/src/form/focus/focus.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>FocusDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs");let FocusDirective=((_class=class FocusDirective{constructor(elementRef){this.elementRef=elementRef}ngAfterViewInit(){this.elementRef.nativeElement.focus()}}).ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef}],_class);FocusDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[tbFocus]",standalone:!0}),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef])],FocusDirective)},"./libs/material/src/form/form.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>FormComponent,e:()=>FormModule});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs");var _class,core=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs"),input_component=__webpack_require__("./libs/material/src/form/input/input.component.ts");let FormActionsDirective=((_class=class FormActionsDirective{constructor(templateRef){this.templateRef=templateRef}}).ctorParameters=()=>[{type:core.TemplateRef}],_class);FormActionsDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbFormActions]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.TemplateRef])],FormActionsDirective);var form_component_class,fesm2022_forms=__webpack_require__("./node_modules/.pnpm/@angular+forms@16.2.0_@angular+common@16.2.0_@angular+core@16.2.0_@angular+platform-browser@16.2.0_rxjs@7.8.1/node_modules/@angular/forms/fesm2022/forms.mjs");let FormComponent=((form_component_class=class FormComponent{constructor(){this.componentType=input_component.a,this.submitEvent=new core.EventEmitter,this.formValue={}}preventDefault(event){event.preventDefault()}childValue(value){return{...value,formValue:this.formValue}}submit(){this.submitEvent.emit(this.formValue)}reset(){Object.keys(this.formValue).forEach((e=>delete this.formValue[e]))}}).propDecorators={tbFormActions:[{type:core.ContentChildren,args:[FormActionsDirective]}],children:[{type:core.ContentChildren,args:[input_component.a]}],submitEvent:[{type:core.Output}]},form_component_class);FormComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"tb-form",standalone:!0,imports:[common.CommonModule,fesm2022_forms.u5,fesm2022_forms.UX,input_component.a],template:'<form\n  #form="ngForm"\n  ngForm\n  class="form-container primary"\n  autocomplete="on"\n  (ngSubmit)="submit(form)"\n  (submit)="preventDefault($event)"\n  (reset)="reset()"\n  novalidate\n>\n  <ng-container *ngFor="let child of children">\n    <ng-container\n      *ngComponentOutlet="componentType; inputs: childValue(child)"\n    ></ng-container>\n  </ng-container>\n\n  <div class="form-actions">\n    <ng-container\n      *ngTemplateOutlet="tbFormActions?.first?.templateRef"\n    ></ng-container>\n  </div>\n</form>\n'})],FormComponent);let FormModule=class FormModule{};FormModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[FormComponent,input_component.a,FormActionsDirective],exports:[FormComponent,input_component.a,FormActionsDirective]})],FormModule)},"./libs/material/src/form/has-value/has-value.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>HasValueDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs");let HasValueDirective=((_class=class HasValueDirective{constructor(elementRef){this.elementRef=elementRef}ngAfterViewInit(){this.elementRef.nativeElement.addEventListener("input",(event=>{const data=event.data;data?.length>0?this.markAsHasValue():this.markAsHasNovalue()}))}markAsHasValue(){this.elementRef.nativeElement.setAttribute("has-value","true")}markAsHasNovalue(){this.elementRef.nativeElement.setAttribute("has-value","false")}}).ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef}],_class);HasValueDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[tbHasValue]",standalone:!0}),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef])],HasValueDirective)},"./libs/material/src/form/input/input.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>InputComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs");var _class,core=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs"),text_input_component=__webpack_require__("./libs/material/src/form/text-input/text-input.component.ts");let InputComponent=((_class=class InputComponent{constructor(){this.id="",this.name="",this.value="",this.type="text",this.autocomplete="on",this.color="primary",this.label="Input Label",this.variant="basic",this.icon="info"}handleInput(event){this.formValue&&(this.formValue[this.name]=event)}}).propDecorators={__ngContext__:[{type:core.Input}],id:[{type:core.Input}],name:[{type:core.Input}],value:[{type:core.Input}],type:[{type:core.Input}],autocomplete:[{type:core.Input}],color:[{type:core.Input}],label:[{type:core.Input}],variant:[{type:core.Input}],icon:[{type:core.Input}],formValue:[{type:core.Input}]},_class);InputComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"tb-input",standalone:!0,imports:[common.CommonModule,text_input_component.t],template:'<tb-text-input\n  [autocomplete]="autocomplete"\n  [value]="value"\n  [name]="name"\n  [id]="id"\n  [color]="color"\n  [type]="type"\n  [label]="label"\n  [icon]="icon"\n  [variant]="variant"\n  (inputEvent)="handleInput($event)"\n></tb-text-input>\n'})],InputComponent)},"./libs/material/src/form/text-input/text-input.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>TextInputComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs");var _class,core=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs"),has_value_directive=__webpack_require__("./libs/material/src/form/has-value/has-value.directive.ts"),focus_directive=__webpack_require__("./libs/material/src/form/focus/focus.directive.ts"),fesm2022_forms=__webpack_require__("./node_modules/.pnpm/@angular+forms@16.2.0_@angular+common@16.2.0_@angular+core@16.2.0_@angular+platform-browser@16.2.0_rxjs@7.8.1/node_modules/@angular/forms/fesm2022/forms.mjs");let TextInputComponent=((_class=class TextInputComponent{constructor(){this.inputEvent=new core.EventEmitter,this.value="",this.id="",this.name="",this.type="text",this.autocomplete="off",this.color="primary",this.label="Input Label",this.variant="basic",this.icon="info"}emitEvent(){this.inputEvent.emit(this.value)}}).propDecorators={inputEvent:[{type:core.Output}],value:[{type:core.Input}],id:[{type:core.Input}],name:[{type:core.Input}],type:[{type:core.Input}],autocomplete:[{type:core.Input}],color:[{type:core.Input}],label:[{type:core.Input}],variant:[{type:core.Input}],icon:[{type:core.Input}]},_class);TextInputComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"tb-text-input",standalone:!0,imports:[common.CommonModule,fesm2022_forms.u5,fesm2022_forms.UX,has_value_directive.V,focus_directive.R],template:'<div class="input-container {{ color }} {{ variant }}">\n  <span class="icon"> {{ icon }}</span>\n  <label [for]="label">{{ label }} </label>\n  <input\n    [(ngModel)]="value"\n    [id]="label"\n    [type]="type"\n    [name]="name"\n    [autocomplete]="autocomplete"\n    (input)="emitEvent()"\n    tbHasValue\n  />\n</div>\n'})],TextInputComponent)},"./libs/material/src/form/form.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Heading:()=>Heading,LoginForm:()=>LoginForm,Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ref,C_Users_development_Projects_ahmet_emrebas_github_io_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_form_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/material/src/form/form.component.ts"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.2.0/node_modules/@storybook/testing-library/dist/index.mjs"),_storybook_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@storybook+jest@0.1.0/node_modules/@storybook/jest/dist/esm/index.js");const __WEBPACK_DEFAULT_EXPORT__={component:_form_component__WEBPACK_IMPORTED_MODULE_2__.U,title:"FormComponent"},LoginForm={args:{children:[{type:"text",name:"username",color:"primary",autocomplete:"email",label:"Username",icon:"email"},{type:"password",name:"password",color:"primary",autocomplete:"current-password",label:"Password",icon:"email"}]}},Primary={args:{children:[{type:"text",name:"firstName",color:"primary",autocomplete:"given-name",label:"First Name",icon:"person"}]}},Heading={args:{},play:function play(_x){return(_ref=_ref||(0,C_Users_development_Projects_ahmet_emrebas_github_io_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__.Z)((function*({canvasElement}){const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByText(/form works!/gi)).toBeTruthy()}))).apply(this,arguments)}}},"?1f41":()=>{}}]);