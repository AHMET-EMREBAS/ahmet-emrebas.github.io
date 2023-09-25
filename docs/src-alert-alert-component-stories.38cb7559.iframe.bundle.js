(self.webpackChunk_techbir_source=self.webpackChunk_techbir_source||[]).push([[5862],{"./libs/material/src/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ButtonComponent});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs"),_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/material/src/tooltip/tooltip.directive.ts");let ButtonComponent=((_class=class ButtonComponent{constructor(){this.color="primary",this.icon="info",this.label="Button",this.size="regular",this.buttonType="button",this.uuid="Id not set!",this.variant="basic",this.type="button",this.role="button",this.clickEvent=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter}ngAfterViewInit(){this.addClasses(this.size,this.variant,this.buttonType,this.color)}addClasses(...className){this.button?.nativeElement.classList.add(...className)}emitClickEvent(){this.clickEvent.emit({type:"click",payload:{label:this.label,uuid:this.uuid}})}}).propDecorators={button:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,args:["button"]}],color:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],icon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],tooltip:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],tooltipPosition:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],buttonType:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],uuid:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],variant:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],type:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],role:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],clickEvent:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}]},_class);ButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"tb-button",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__.i],template:'\n    <button\n      [type]="type"\n      #button\n      (click)="emitClickEvent()"\n      [tbTooltip]="tooltip"\n      [tbTooltipPosition]="tooltipPosition"\n      [attr.role]="role"\n    >\n      <span class="icon" *ngIf="type !== \'button\'">{{ icon }}</span>\n      <span *ngIf="buttonType !== \'icon-button\'">\n        {{ label }}\n      </span>\n    </button>\n  '})],ButtonComponent)},"./libs/material/src/tooltip/tooltip.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>TooltipDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs");let TooltipDirective=((_class=class TooltipDirective{constructor(elementRef){this.elementRef=elementRef,this.tbTooltip="",this.tbTooltipPosition="bottom"}ngAfterViewInit(){if(this.elementRef&&this.tbTooltip&&this.tbTooltip?.trim().length>0){const e=this.elementRef.nativeElement;e.setAttribute("aria-label",this.tbTooltip),this.tbTooltipPosition&&e.setAttribute("tooltip-position",this.tbTooltipPosition)}}}).ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef}],_class.propDecorators={tbTooltip:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],tbTooltipPosition:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]},_class);TooltipDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[tbTooltip]",standalone:!0}),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef])],TooltipDirective)},"./libs/material/src/alert/alert.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Heading:()=>Heading,Primary:()=>Primary,default:()=>alert_component_stories});var _class,asyncToGenerator=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs"),button_component=__webpack_require__("./libs/material/src/button/button.component.ts"),tooltip_directive=__webpack_require__("./libs/material/src/tooltip/tooltip.directive.ts");let AlertComponent=((_class=class AlertComponent{constructor(){this.closeEvent=new core.EventEmitter,this.color="primary",this.icon="info",this.message="Message",this.closable=!0}close(){this.closeEvent.emit({type:"click",payload:{label:"Closed alert"}})}}).propDecorators={closeEvent:[{type:core.Output}],color:[{type:core.Input}],icon:[{type:core.Input}],message:[{type:core.Input}],closable:[{type:core.Input}]},_class);AlertComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"tb-alert",standalone:!0,imports:[common.CommonModule,button_component.r,tooltip_directive.i],template:' <div class=" {{ color }}" role="alert">\n    <span class="icon">{{ icon }}</span>\n    <span>{{ message }}</span>\n    <div class="grow-1"></div>\n    <tb-button\n      type="icon-button"\n      buttonSize="small"\n      buttonStyleType="inbox"\n      [color]="color"\n      icon="close"\n    ></tb-button>\n  </div>'})],AlertComponent);var _ref,dist=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.2.0/node_modules/@storybook/testing-library/dist/index.mjs"),esm=__webpack_require__("./node_modules/.pnpm/@storybook+jest@0.1.0/node_modules/@storybook/jest/dist/esm/index.js");const alert_component_stories={component:AlertComponent,title:"AlertComponent"},Primary={args:{}},Heading={args:{},play:function play(_x){return(_ref=_ref||(0,asyncToGenerator.Z)((function*({canvasElement}){const canvas=(0,dist.uh)(canvasElement);(0,esm.l)(canvas.getByText(/alert works!/gi)).toBeTruthy()}))).apply(this,arguments)}}},"?1f41":()=>{}}]);