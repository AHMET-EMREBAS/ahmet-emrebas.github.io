(self.webpackChunk_techbir_source=self.webpackChunk_techbir_source||[]).push([[757],{"./libs/material/src/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ButtonComponent});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs"),_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/material/src/tooltip/tooltip.directive.ts");let ButtonComponent=((_class=class ButtonComponent{constructor(){this.color="primary",this.icon="info",this.label="Button",this.size="regular",this.type="button",this.uuid="Id not set!",this.variant="basic",this.clickEvent=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter}ngAfterViewInit(){this.addClasses(this.size,this.variant,this.type,this.color)}addClasses(...className){this.button?.nativeElement.classList.add(...className)}emitClickEvent(){this.clickEvent.emit({type:"click",payload:{label:this.label,uuid:this.uuid}})}}).propDecorators={button:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,args:["button"]}],color:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],icon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],tooltip:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],tooltipPosition:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],type:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],uuid:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],variant:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],clickEvent:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}]},_class);ButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"tb-button",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__.i],template:'\n    <button\n      #button\n      (click)="emitClickEvent()"\n      [tbTooltip]="tooltip"\n      [tbTooltipPosition]="tooltipPosition"\n    >\n      <span class="button-icon icon" *ngIf="type !== \'button\'">{{ icon }}</span>\n      <span class="button-label" *ngIf="type !== \'icon-button\'">\n        {{ label }}\n      </span>\n    </button>\n  '})],ButtonComponent)},"./libs/material/src/menu/menu.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>MenuComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs");var _class,MenuComponent_1,core=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs"),button_component=__webpack_require__("./libs/material/src/button/button.component.ts");let MenuComponent=(_class=class MenuComponent extends button_component.r{constructor(detector){super(),this.detector=detector,this.componentType=MenuComponent_1,this.clickEvent=new core.EventEmitter,this.position="none",this.showAs="column"}ngAfterViewInit(){super.ngAfterViewInit(),this.children||(this.children=this.childrenViaInput||this.childrenViaContent?.toArray()),this.detector.detectChanges()}childValue(child){const{type,variant,color,size,children,label,position,showAs,icon,tooltip,tooltipPosition}=child;return{type:type||this.type,variant:variant||this.variant,color:color||this.color,size:size||this.size,childrenViaInput:children,label,tooltip:tooltip||this.tooltip,tooltipPosition:tooltipPosition||this.tooltipPosition,position:position||this.position,showAs:showAs||this.showAs,icon,clickEvent:this.clickEvent}}},MenuComponent_1=_class,_class.ctorParameters=()=>[{type:core.ChangeDetectorRef}],_class.propDecorators={clickEvent:[{type:core.Input},{type:core.Output}],childrenViaContent:[{type:core.ContentChildren,args:[MenuComponent_1]}],childrenViaInput:[{type:core.Input}],position:[{type:core.Input}],showAs:[{type:core.Input}]},_class);MenuComponent=MenuComponent_1=(0,tslib_es6.gn)([(0,core.Component)({selector:"tb-menu",standalone:!0,imports:[common.CommonModule,button_component.r],template:'<div class="dropdown {{ position }} {{ color }}">\n  <tb-button\n    [color]="color"\n    [label]="label"\n    [type]="type"\n    [variant]="variant"\n    (clickEvent)="emitClickEvent()"\n    [icon]="icon"\n    [size]="size"\n    [tooltip]="tooltip"\n    [tooltipPosition]="tooltipPosition"\n  ></tb-button>\n\n  <div\n    class="dropdown-items {{ showAs }}"\n    *ngIf="children && children.length > 0"\n  >\n    <ng-container *ngFor="let child of children">\n      <ng-container\n        *ngComponentOutlet="componentType; inputs: childValue(child)"\n      ></ng-container>\n    </ng-container>\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush}),(0,tslib_es6.w6)("design:paramtypes",[core.ChangeDetectorRef])],MenuComponent)},"./libs/material/src/toolbar/toolbar.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>ToolbarComponent});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs");let ToolbarComponent=((_class=class ToolbarComponent{constructor(){this.color="primary"}}).propDecorators={color:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]},_class);ToolbarComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"tb-toolbar",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],template:'\n    <div class="toolbar {{ color }}">\n      <ng-content></ng-content>\n    </div>\n  '})],ToolbarComponent)},"./libs/material/src/tooltip/tooltip.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>TooltipDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs");let TooltipDirective=((_class=class TooltipDirective{constructor(elementRef){this.elementRef=elementRef,this.tbTooltip="",this.tbTooltipPosition="bottom"}ngAfterViewInit(){if(this.elementRef&&this.tbTooltip&&this.tbTooltip?.trim().length>0){const e=this.elementRef.nativeElement;e.setAttribute("aria-label",this.tbTooltip),this.tbTooltipPosition&&e.setAttribute("tooltip-position",this.tbTooltipPosition)}}}).ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef}],_class.propDecorators={tbTooltip:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],tbTooltipPosition:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]},_class);TooltipDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[tbTooltip]",standalone:!0}),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef])],TooltipDirective)},"./libs/material/src/showcase/showcase.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Heading:()=>Heading,Primary:()=>Primary,default:()=>showcase_component_stories});var asyncToGenerator=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs");var showcase_component=__webpack_require__("./libs/material/src/showcase/showcase.component.ts.css?ngResource!=!./node_modules/.pnpm/@ngtools+webpack@16.2.2_@angular+compiler-cli@16.2.5_typescript@5.1.3_webpack@5.88.2/node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5jb250YWluZXIgewogICAgICAgIG1pbi1oZWlnaHQ6IDIwMDBweDsKICAgICAgfQogICAg!./libs/material/src/showcase/showcase.component.ts"),showcase_component_default=__webpack_require__.n(showcase_component),core=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs"),button_component=__webpack_require__("./libs/material/src/button/button.component.ts"),menu_component=__webpack_require__("./libs/material/src/menu/menu.component.ts"),toolbar_component=__webpack_require__("./libs/material/src/toolbar/toolbar.component.ts");var _class,_class2;let TabDirective=((_class=class TabDirective{constructor(templateRef){this.templateRef=templateRef}}).ctorParameters=()=>[{type:core.TemplateRef}],_class);TabDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"tb-tab"}),(0,tslib_es6.w6)("design:paramtypes",[core.TemplateRef])],TabDirective);let TabComponent=((_class2=class TabComponent{constructor(){this.label="",this.active=!1}}).propDecorators={content:[{type:core.ContentChildren,args:[TabDirective]}],label:[{type:core.Input}],active:[{type:core.Input}]},_class2);var tab_container_component_class;TabComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"tb-tab",standalone:!0,imports:[common.CommonModule],template:'<ng-content *ngIf="active"></ng-content>\n'})],TabComponent);let TabContainerComponent=((tab_container_component_class=class TabContainerComponent{constructor(){this.componentType=TabComponent}childValue(child){return{label:child.label,active:child.active}}activate(child){console.log(child);const updated=this.children?.toArray();if(updated?.forEach((e=>e.active=!1)),updated){const found=updated.find((e=>e.label===child.label));found&&(found.active=!0,this.children?.reset([...updated]),this.children?.setDirty())}}scroll(event){event.preventDefault(),this.container?.nativeElement.scrollBy({behavior:"smooth",left:event.deltaY})}mousemove(event){console.log(event)}}).propDecorators={container:[{type:core.ViewChild,args:["container"]}],children:[{type:core.ContentChildren,args:[TabComponent]}]},tab_container_component_class);TabContainerComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"tb-tab-container",standalone:!0,imports:[common.CommonModule,TabComponent],template:'<div\n  #container\n  class="flex row gap-2 w-100 ox-auto oy-hidden pb-3 relative"\n  (wheel)="scroll($event)"\n>\n  <ng-container *ngFor="let child of children">\n    <button\n      class="tab-button primary bottom"\n      (click)="activate(child)"\n      [attr.data-active]="child.active"\n    >\n      {{ child.label }}\n    </button>\n  </ng-container>\n</div>\n<ng-container *ngFor="let child of children">\n  <ng-container\n    [ngComponentOutlet]="componentType"\n    [ngComponentOutletInputs]="childValue(child)"\n  >\n    <ng-content></ng-content>\n  </ng-container>\n</ng-container>\n'})],TabContainerComponent);let ShowcaseComponent=class ShowcaseComponent{handle(event){console.log(event)}};ShowcaseComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"tb-showcase",standalone:!0,imports:[common.CommonModule,button_component.r,menu_component.M,toolbar_component.n,TabContainerComponent,TabComponent],template:'<tb-toolbar>\n  <tb-menu\n    label="Home"\n    icon="home"\n    type="icon-button"\n    variant="flat"\n    color="primary"\n    tooltip="Go to home page"\n    tooltipPosition="bottom"\n  ></tb-menu>\n  <tb-menu\n    label="Home"\n    icon="info"\n    type="icon-button"\n    variant="flat"\n    color="primary"\n    tooltip="About us"\n    tooltipPosition="bottom"\n  ></tb-menu>\n  <tb-menu\n    label="Home"\n    icon="apps"\n    type="icon-button"\n    variant="flat"\n    color="primary"\n    position="bottom"\n  >\n    <tb-menu\n      label="Solutions"\n      icon="apps"\n      type="combined-button"\n      variant="raised"\n      color="primary"\n      position="right"\n      showAs="row"\n    >\n      <tb-menu\n        label="IM"\n        icon="inventory"\n        type="combined-button"\n        variant="flat"\n        color="red"\n        tooltip="We built a brand new inventory management application that comply with the modern world standards"\n        tooltipPosition="top"\n      ></tb-menu>\n      <tb-menu\n        label="Pos"\n        icon="point_of_sale"\n        type="combined-button"\n        variant="flat"\n        color="secondary"\n        tooltip="Point of sale"\n        tooltipPosition="top"\n      ></tb-menu>\n      <tb-menu\n        label="CMS"\n        icon="point_of_sale"\n        type="combined-button"\n        variant="flat"\n        color="accent"\n        tooltip="Customer Management"\n        tooltipPosition="top"\n      ></tb-menu>\n      <tb-menu\n        label="Commerce"\n        icon="store"\n        type="combined-button"\n        variant="flat"\n        color="warn"\n        tooltip="Sell with us."\n        tooltipPosition="top"\n      ></tb-menu>\n    </tb-menu>\n    <tb-menu\n      label="Fullstack Development"\n      icon="apps"\n      type="combined-button"\n      variant="raised"\n    ></tb-menu>\n  </tb-menu>\n  <div class="grow-1"></div>\n\n  <tb-menu\n    type="icon-button"\n    icon="person"\n    variant="inbox"\n    color="primary"\n    position="bottom"\n    showAs="column"\n    tooltipPosition="left"\n  >\n    <tb-menu\n      tooltip="Logout"\n      type="icon-button"\n      icon="logout"\n      variant="raised"\n      color="primary"\n    ></tb-menu>\n    <tb-menu\n      tooltip="Settings"\n      type="icon-button"\n      icon="settings"\n      variant="raised"\n      color="primary"\n    ></tb-menu>\n    <tb-menu\n      tooltip="Inbox"\n      type="icon-button"\n      icon="inbox"\n      variant="raised"\n      color="primary"\n    ></tb-menu>\n  </tb-menu>\n</tb-toolbar>\n\n<tb-tab-container>\n  <tb-tab label="Tab 1" [active]="true">  <span >Tab 1 Content Goes here </span></tb-tab>\n  <tb-tab label="Tab 2" [active]="false"> <span > Tab 2 Content Goes here </span></tb-tab>\n  <tb-tab label="Tab 3" [active]="false"> <span > Tab 3 Content Goes here </span></tb-tab>\n  <tb-tab label="Tab 4" [active]="false"> <span > Tab 4 Content Goes here </span></tb-tab>\n  <tb-tab label="Tab 5" [active]="false"> <span > Tab 5 Content Goes here </span></tb-tab>\n  <tb-tab label="Tab 6" [active]="false"> <span > Tab 6 Content Goes here </span></tb-tab>\n  <tb-tab label="Tab 7" [active]="false"> <span > Tab 7 Content Goes here </span></tb-tab>\n  <tb-tab label="Tab 8" [active]="false"> <span > Tab 8 Content Goes here </span></tb-tab>\n  <tb-tab label="Tab 9" [active]="false"> <span > Tab 9 Content Goes here </span></tb-tab>\n  <tb-tab label="Tab 10" [active]="false"> <span > Tab 10 Content Goes here </span></tb-tab>\n  <tb-tab label="Tab 11" [active]="false"> <span > Tab 11 Content Goes here </span></tb-tab>\n  <tb-tab label="Tab 12" [active]="false"> <span > Tab 12ontent Goes here </span></tb-tab>\n  <tb-tab label="Tab 13" [active]="false"> <span > Tab 13 Content Goes here </span></tb-tab>\n</tb-tab-container>\n\x3c!-- <ng-container [ngTemplateOutlet]="" [ngTemplateOutletContext]=""></ng-container> --\x3e\n\x3c!-- <div class="flex column gap-2 p-12">\n  <div class="title-1" substring="you can add [substring] attribute to titles">\n    Title 1 with substring attribute\n  </div>\n  <div class="title-2" substring="you can add [substring] attribute to titles">\n    Title 2 with substring attribute\n  </div>\n</div> --\x3e\n\n\x3c!-- \n<p>\n  <span class="icon">copyright</span>\n  <span> All rights are reserved. </span>\n</p> --\x3e\n',styles:[showcase_component_default()]})],ShowcaseComponent);var _ref,dist=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.2.0/node_modules/@storybook/testing-library/dist/index.mjs"),esm=__webpack_require__("./node_modules/.pnpm/@storybook+jest@0.1.0/node_modules/@storybook/jest/dist/esm/index.js");const showcase_component_stories={component:ShowcaseComponent,title:"ShowcaseComponent"},Primary={args:{}},Heading={args:{},play:function play(_x){return(_ref=_ref||(0,asyncToGenerator.Z)((function*({canvasElement}){const canvas=(0,dist.uh)(canvasElement);(0,esm.l)(canvas.getByText(/showcase works!/gi)).toBeTruthy()}))).apply(this,arguments)}}},"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./libs/material/src/showcase/showcase.component.ts.css?ngResource!=!./node_modules/.pnpm/@ngtools+webpack@16.2.2_@angular+compiler-cli@16.2.5_typescript@5.1.3_webpack@5.88.2/node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5jb250YWluZXIgewogICAgICAgIG1pbi1oZWlnaHQ6IDIwMDBweDsKICAgICAgfQogICAg!./libs/material/src/showcase/showcase.component.ts":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"\n      .container {\n        min-height: 2000px;\n      }\n    ",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"?1f41":()=>{}}]);