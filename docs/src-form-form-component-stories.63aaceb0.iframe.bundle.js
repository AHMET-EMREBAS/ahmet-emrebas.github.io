"use strict";(self.webpackChunk_techbir_source=self.webpackChunk_techbir_source||[]).push([[8599],{"./libs/material/src/form/form-actions/form-actions.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>FormActionsDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs");let FormActionsDirective=((_class=class FormActionsDirective{constructor(templateRef){this.templateRef=templateRef}}).ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef}],_class);FormActionsDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[tbFormActions]",standalone:!0}),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef])],FormActionsDirective)},"./libs/material/src/form/form.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>FormComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs");var _class,core=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),input_component=__webpack_require__("./libs/material/src/form/input/input.component.ts"),form_actions_directive=__webpack_require__("./libs/material/src/form/form-actions/form-actions.directive.ts"),fesm2022_forms=__webpack_require__("./node_modules/.pnpm/@angular+forms@16.2.0_@angular+common@16.2.0_@angular+core@16.2.0_@angular+platform-browser@16.2.0_rxjs@7.8.1/node_modules/@angular/forms/fesm2022/forms.mjs"),micro_module=__webpack_require__("./libs/material/src/micro/micro.module.ts");class FormValue{constructor(){this.value=new Map}set(key,value){this.value.set(key,value)}get(key){return this.value.get(key)}reset(){this.value.clear()}formValue(){const result={};for(const[key,value]of this.value)result[key]=value;return result}}let FormComponent=((_class=class FormComponent{constructor(){this.componentType=input_component.a,this.submitEvent=new core.EventEmitter,this.title="",this.subtitle="",this.name="form",this.formValue=new FormValue}preventDefault(event){event.preventDefault()}childValue(value){return value.inputs({formName:this.name,formValue:this.formValue})}submit(){this.submitEvent.emit(this.formValue.formValue())}reset(){this.formValue.reset()}}).propDecorators={actions:[{type:core.ContentChildren,args:[form_actions_directive.r]}],children:[{type:core.ContentChildren,args:[input_component.a]}],submitEvent:[{type:core.Output}],title:[{type:core.Input}],subtitle:[{type:core.Input}],name:[{type:core.Input}]},_class);FormComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"tb-form",standalone:!0,imports:[micro_module.d,fesm2022_forms.u5,fesm2022_forms.UX,input_component.a],template:'<form\n  #form="ngForm"\n  ngForm\n  class="form-container primary"\n  autocomplete="on"\n  (ngSubmit)="submit()"\n  (submit)="preventDefault($event)"\n  (reset)="reset()"\n  novalidate\n>\n  <h1 class="title-1 form-title" [attr.substring]="subtitle" *ngIf="title">\n    {{ title }}\n  </h1>\n\n  <ng-container *ngFor="let child of children">\n    <ng-container\n      *ngComponentOutlet="componentType; inputs: childValue(child)"\n    ></ng-container>\n  </ng-container>\n\n  <div class="form-actions">\n    <ng-container\n      *ngTemplateOutlet="actions?.first?.templateRef!"\n    ></ng-container>\n  </div>\n</form>\n',changeDetection:core.ChangeDetectionStrategy.OnPush})],FormComponent)},"./libs/material/src/form/form.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Heading:()=>Heading,LoginForm:()=>LoginForm,Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ref,C_Users_development_Projects_ahmet_emrebas_github_io_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_form_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/material/src/form/form.component.ts"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.2.0/node_modules/@storybook/testing-library/dist/index.mjs"),_storybook_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@storybook+jest@0.1.0/node_modules/@storybook/jest/dist/esm/index.js");const __WEBPACK_DEFAULT_EXPORT__={component:_form_component__WEBPACK_IMPORTED_MODULE_2__.U,title:"FormComponent"},LoginForm={args:{children:[{type:"text",name:"username",color:"primary",autocomplete:"email",label:"Username",icon:"email"},{type:"password",name:"password",color:"primary",autocomplete:"current-password",label:"Password",icon:"email"}]}},Primary={args:{children:[{type:"text",name:"firstName",color:"primary",autocomplete:"given-name",label:"First Name",icon:"person"}]}},Heading={args:{},play:function play(_x){return(_ref=_ref||(0,C_Users_development_Projects_ahmet_emrebas_github_io_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__.Z)((function*({canvasElement}){const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByText(/form works!/gi)).toBeTruthy()}))).apply(this,arguments)}}}}]);