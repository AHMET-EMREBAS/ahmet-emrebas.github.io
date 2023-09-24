(self.webpackChunk_techbir_source=self.webpackChunk_techbir_source||[]).push([[885],{"./libs/material/src/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ButtonComponent});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs"),_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/material/src/tooltip/tooltip.directive.ts");let ButtonComponent=((_class=class ButtonComponent{constructor(){this.color="primary",this.icon="info",this.label="Button",this.size="regular",this.type="button",this.uuid="Id not set!",this.variant="basic",this.clickEvent=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter}ngAfterViewInit(){this.addClasses(this.size,this.variant,this.type,this.color)}addClasses(...className){this.button?.nativeElement.classList.add(...className)}emitClickEvent(){this.clickEvent.emit({type:"click",payload:{label:this.label,uuid:this.uuid}})}}).propDecorators={button:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,args:["button"]}],color:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],icon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],tooltip:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],tooltipPosition:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],type:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],uuid:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],variant:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],clickEvent:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}]},_class);ButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"tb-button",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__.i],template:'\n    <button\n      #button\n      (click)="emitClickEvent()"\n      [tbTooltip]="tooltip"\n      [tbTooltipPosition]="tooltipPosition"\n    >\n      <span class="icon" *ngIf="type !== \'button\'">{{ icon }}</span>\n      <span *ngIf="type !== \'icon-button\'">\n        {{ label }}\n      </span>\n    </button>\n  '})],ButtonComponent)},"./libs/material/src/menu/menu.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>MenuComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs");var _class,MenuComponent_1,core=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs"),button_component=__webpack_require__("./libs/material/src/button/button.component.ts");let MenuComponent=(_class=class MenuComponent extends button_component.r{constructor(detector){super(),this.detector=detector,this.componentType=MenuComponent_1,this.clickEvent=new core.EventEmitter,this.position="none",this.showAs="column"}ngAfterViewInit(){super.ngAfterViewInit(),this.children||(this.children=this.childrenViaInput||this.childrenViaContent?.toArray()),this.detector.detectChanges()}childValue(child){const{type,variant,color,size,children,label,position,showAs,icon,tooltip,tooltipPosition}=child;return{type:type||this.type,variant:variant||this.variant,color:color||this.color,size:size||this.size,childrenViaInput:children,label,tooltip:tooltip||this.tooltip,tooltipPosition:tooltipPosition||this.tooltipPosition,position:position||this.position,showAs:showAs||this.showAs,icon,clickEvent:this.clickEvent}}},MenuComponent_1=_class,_class.ctorParameters=()=>[{type:core.ChangeDetectorRef}],_class.propDecorators={clickEvent:[{type:core.Input},{type:core.Output}],childrenViaContent:[{type:core.ContentChildren,args:[MenuComponent_1]}],childrenViaInput:[{type:core.Input}],position:[{type:core.Input}],showAs:[{type:core.Input}]},_class);MenuComponent=MenuComponent_1=(0,tslib_es6.gn)([(0,core.Component)({selector:"tb-menu",standalone:!0,imports:[common.CommonModule,button_component.r],template:'<div class="dropdown {{ position }} {{ color }}">\n  <tb-button\n    [color]="color"\n    [label]="label"\n    [type]="type"\n    [variant]="variant"\n    (clickEvent)="emitClickEvent()"\n    [icon]="icon"\n    [size]="size"\n    [tooltip]="tooltip"\n    [tooltipPosition]="tooltipPosition"\n  ></tb-button>\n\n  <div\n    class="dropdown-items {{ showAs }}"\n    *ngIf="children && children.length > 0"\n  >\n    <ng-container *ngFor="let child of children">\n      <ng-container\n        *ngComponentOutlet="componentType; inputs: childValue(child)"\n      ></ng-container>\n    </ng-container>\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush}),(0,tslib_es6.w6)("design:paramtypes",[core.ChangeDetectorRef])],MenuComponent)},"./libs/material/src/tooltip/tooltip.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>TooltipDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs");let TooltipDirective=((_class=class TooltipDirective{constructor(elementRef){this.elementRef=elementRef,this.tbTooltip="",this.tbTooltipPosition="bottom"}ngAfterViewInit(){if(this.elementRef&&this.tbTooltip&&this.tbTooltip?.trim().length>0){const e=this.elementRef.nativeElement;e.setAttribute("aria-label",this.tbTooltip),this.tbTooltipPosition&&e.setAttribute("tooltip-position",this.tbTooltipPosition)}}}).ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef}],_class.propDecorators={tbTooltip:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],tbTooltipPosition:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]},_class);TooltipDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[tbTooltip]",standalone:!0}),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef])],TooltipDirective)},"./libs/material/src/menu/menu.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Heading:()=>Heading,Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ref,C_Users_development_Projects_ahmet_emrebas_github_io_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_menu_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/material/src/menu/menu.component.ts"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.2.0/node_modules/@storybook/testing-library/dist/index.mjs"),_storybook_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@storybook+jest@0.1.0/node_modules/@storybook/jest/dist/esm/index.js");const __WEBPACK_DEFAULT_EXPORT__={component:_menu_component__WEBPACK_IMPORTED_MODULE_2__.M,title:"MenuComponent"},Primary={args:{label:"Triger 1",color:"primary",position:"bottom",children:[{type:"button",label:"Label 1",variant:"basic"},{type:"button",label:"Triger 2",variant:"basic",color:"accent",position:"right",children:[{type:"button",label:"Label 2",variant:"flat"},{type:"button",label:"Triger 3",variant:"basic",color:"secondary",position:"right",showAs:"row",children:[{type:"button",label:"Label 5",variant:"flat"},{type:"button",label:"Label 6",variant:"flat"},{type:"button",label:"Triger 4",variant:"basic",color:"warn",position:"top",children:[{type:"icon-button",icon:"home",variant:"raised",tooltip:"Go to home page",tooltipPosition:"top"},{type:"icon-button",icon:"info",variant:"raised",tooltip:"Go to about page",tooltipPosition:"top"},{type:"icon-button",icon:"apps",variant:"raised",tooltip:"Show services",tooltipPosition:"top",position:"bottom",showAs:"column",color:"primary",children:[{type:"icon-button",icon:"inventory",color:"primary",variant:"raised"},{type:"icon-button",icon:"house",color:"primary",variant:"raised"},{type:"icon-button",icon:"dashboard",color:"primary",variant:"raised"},{type:"icon-button",icon:"store",color:"primary",variant:"raised"}]}]}]},{type:"button",label:"Label 4",variant:"flat"}]}]}},Heading={args:{label:"Triger 1"},play:function play(_x){return(_ref=_ref||(0,C_Users_development_Projects_ahmet_emrebas_github_io_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__.Z)((function*({canvasElement}){const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByText(/Triger 1/gi)).toBeTruthy()}))).apply(this,arguments)}}},"?1f41":()=>{}}]);