(self.webpackChunk_techbir_source=self.webpackChunk_techbir_source||[]).push([[6927],{"./libs/material/src/button/combined-button/combined-button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>CombinedButtonComponent});var _class,tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs"),_common_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/material/src/button/common-button/common-button.component.ts");let CombinedButtonComponent=((_class=class CombinedButtonComponent extends _common_button__WEBPACK_IMPORTED_MODULE_0__.D{}).propDecorators={label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],icon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}]},_class);CombinedButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"tb-combined-button",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],template:'<button\n    class="combined-button  {{ color }} {{ variant }} {{ size }} {{\n      borderPosition\n    }}"\n    [type]="nativeType"\n    (click)="emit()"\n  >\n    <span class="icon" *ngIf="icon">{{ icon }}</span>\n    <span *ngIf="label">{{ label }}</span>\n  </button>'})],CombinedButtonComponent)},"./libs/material/src/button/common-button/common-button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>CommonButtonComponent});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),_micro_micro_module__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/material/src/micro/micro.module.ts");let CommonButtonComponent=((_class=class CommonButtonComponent{constructor(){this.tooltip="",this.color="primary",this.variant="basic",this.size="regular",this.nativeType="button",this.clickEvent=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter}emit(){this.clickEvent.emit()}}).propDecorators={tooltip:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],tooltipPosition:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],color:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],variant:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],borderPosition:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],nativeType:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],clickEvent:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}]},_class);CommonButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"tb-common-button",standalone:!0,imports:[_micro_micro_module__WEBPACK_IMPORTED_MODULE_2__.d],template:""})],CommonButtonComponent)},"./libs/material/src/micro/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>IconComponent});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs");let IconComponent=((_class=class IconComponent{constructor(){this.fill=""}}).propDecorators={icon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],color:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],fill:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]},_class);IconComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"tb-icon",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],template:'<span class="icon {{ fill }}" *ngIf="icon">{{ icon }}</span>'})],IconComponent)},"./libs/material/src/micro/micro.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>MicroModule});var _class,tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs");let BadgeDirective=((_class=class BadgeDirective{constructor(elementRef){this.elementRef=elementRef,this.tbBadgePosition="top-right",this.tbBadgeColor="primary"}ngAfterViewInit(){this.tbBadge&&(this.elementRef.nativeElement.setAttribute("data-badge",this.tbBadge),this.elementRef.nativeElement.setAttribute("data-badge-position",this.tbBadgePosition),this.elementRef.nativeElement.setAttribute("data-badge-color",this.tbBadgeColor))}}).ctorParameters=()=>[{type:core.ElementRef}],_class.propDecorators={tbBadge:[{type:core.Input}],tbBadgePosition:[{type:core.Input}],tbBadgeColor:[{type:core.Input}]},_class);var focus_directive_class;BadgeDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbBadge]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],BadgeDirective);let FocusDirective=((focus_directive_class=class FocusDirective{constructor(elementRef){this.elementRef=elementRef}ngAfterViewInit(){this.elementRef.nativeElement.focus()}}).ctorParameters=()=>[{type:core.ElementRef}],focus_directive_class);FocusDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbFocus]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],FocusDirective);var scroll_direction_directive_class,fromEvent=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js"),debounceTime=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js");let ScrollDirectionDirective=((scroll_direction_directive_class=class ScrollDirectionDirective{constructor(elementRef){this.elementRef=elementRef}ngOnDestroy(){this.subscription?.unsubscribe()}ngAfterViewInit(){this.elementRef.nativeElement.onwheel=event=>{event.shiftKey||event.preventDefault()},this.subscription=(0,fromEvent.R)(this.elementRef.nativeElement,"wheel").pipe((0,debounceTime.b)(100)).subscribe((e=>{e.shiftKey||this.elementRef.nativeElement.scrollBy({left:2*e.deltaY,behavior:"smooth"})}))}}).ctorParameters=()=>[{type:core.ElementRef}],scroll_direction_directive_class);var set_attribute_directive_class;ScrollDirectionDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbScrollX]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],ScrollDirectionDirective);let SetAttributeDirective=((set_attribute_directive_class=class SetAttributeDirective{constructor(elementRef){this.elementRef=elementRef}ngAfterViewInit(){if(this.tbSetAttribute){const entries=Object.entries(this.tbSetAttribute);for(const[key,value]of entries){if(key.startsWith("__"))return;this.elementRef.nativeElement.setAttribute(key,value)}}}}).ctorParameters=()=>[{type:core.ElementRef}],set_attribute_directive_class.propDecorators={tbSetAttribute:[{type:core.Input}]},set_attribute_directive_class);var tooltip_directive_class;SetAttributeDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbSetAttribute]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],SetAttributeDirective);let TooltipDirective=((tooltip_directive_class=class TooltipDirective{constructor(elementRef){this.elementRef=elementRef,this.tbTooltip="",this.tbTooltipPosition="bottom"}ngAfterViewInit(){const e=this.elementRef.nativeElement;e.setAttribute("aria-label",this.tbTooltip||""),e.setAttribute("tooltip-position",this.tbTooltipPosition||"bottom")}}).ctorParameters=()=>[{type:core.ElementRef}],tooltip_directive_class.propDecorators={tbTooltip:[{type:core.Input}],tbTooltipPosition:[{type:core.Input}]},tooltip_directive_class);var set_component_attribute_directive_class;TooltipDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbTooltip]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],TooltipDirective);let SetComponentAttributeDirective=((set_component_attribute_directive_class=class SetComponentAttributeDirective{ngOnInit(){if(this.tbSetComponentAttribute){console.log(this.componentRef);const attributes=Object.entries(this.tbSetComponentAttribute);for(const[key,value]of attributes)key.startsWith("__")||(console.log(`Adding input : ${key}  : ${value}`),this.componentRef?.setInput(key,value))}}}).propDecorators={componentRef:[{type:core.Input}],tbSetComponentAttribute:[{type:core.Input}]},set_component_attribute_directive_class);var class_list_directive_class;SetComponentAttributeDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbSetComponentAttribute]",standalone:!0})],SetComponentAttributeDirective);let ClassListDirective=((class_list_directive_class=class ClassListDirective{constructor(elementRef){this.elementRef=elementRef}ngAfterViewInit(){if(console.log(this.tbClassList),this.tbClassList){console.log("Adding classes");const entries=Object.entries(this.tbClassList);console.log(entries);for(const[key,value]of entries)""===value||key.startsWith("tooltip")||key.startsWith("__")||key.startsWith("native")||key.startsWith("ng")||key.startsWith("can")||key.startsWith("emit")||key.startsWith("handle")||key.startsWith("children")||key.startsWith("child")||key.endsWith("Event")||key.endsWith("Ref")||(console.log("adding the class:",key,value),this.elementRef.nativeElement.classList.add(value))}}}).ctorParameters=()=>[{type:core.ElementRef}],class_list_directive_class.propDecorators={tbClassList:[{type:core.Input}]},class_list_directive_class);ClassListDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbClassList]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],ClassListDirective);var has_value_directive_class,fesm2022_forms=__webpack_require__("./node_modules/.pnpm/@angular+forms@16.2.0_@angular+common@16.2.0_@angular+core@16.2.0_@angular+platform-browser@16.2.0_rxjs@7.8.1/node_modules/@angular/forms/fesm2022/forms.mjs"),icon_component=__webpack_require__("./libs/material/src/micro/icon/icon.component.ts");let HasValueDirective=((has_value_directive_class=class HasValueDirective{constructor(elementRef){this.elementRef=elementRef}ngAfterViewInit(){this.elementRef.nativeElement.addEventListener("input",(event=>{console.log("Input Event: ",event.data);const data=event.data;data?.length>0?this.markAsHasValue():this.markAsHasNovalue()}))}markAsHasValue(){this.elementRef.nativeElement.setAttribute("has-value","true")}markAsHasNovalue(){this.elementRef.nativeElement.setAttribute("has-value","false")}}).ctorParameters=()=>[{type:core.ElementRef}],has_value_directive_class);HasValueDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbHasValue]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],HasValueDirective);let MicroModule=class MicroModule{};MicroModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,BadgeDirective,FocusDirective,ScrollDirectionDirective,SetAttributeDirective,TooltipDirective,SetComponentAttributeDirective,ClassListDirective,icon_component.o,HasValueDirective,fesm2022_forms.u5,fesm2022_forms.UX],exports:[common.CommonModule,BadgeDirective,FocusDirective,ScrollDirectionDirective,SetAttributeDirective,SetComponentAttributeDirective,TooltipDirective,ClassListDirective,icon_component.o,HasValueDirective,fesm2022_forms.u5,fesm2022_forms.UX]})],MicroModule)},"./libs/material/src/button/combined-button/combined-button.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Heading:()=>Heading,Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ref,C_Users_development_Projects_ahmet_emrebas_github_io_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_combined_button_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/material/src/button/combined-button/combined-button.component.ts"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.2.0/node_modules/@storybook/testing-library/dist/index.mjs"),_storybook_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@storybook+jest@0.1.0/node_modules/@storybook/jest/dist/esm/index.js");const __WEBPACK_DEFAULT_EXPORT__={component:_combined_button_component__WEBPACK_IMPORTED_MODULE_2__.s,title:"Button Combined"},Primary={args:{label:"Combined",variant:"basic",icon:"info",color:"primary"}},Heading={args:{label:"Combined",variant:"basic",icon:"info",color:"accent"},play:function play(_x){return(_ref=_ref||(0,C_Users_development_Projects_ahmet_emrebas_github_io_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__.Z)((function*({canvasElement}){const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByText(/combined-button works!/gi)).toBeTruthy()}))).apply(this,arguments)}}},"?1f41":()=>{}}]);