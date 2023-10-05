(self.webpackChunk_techbir_source=self.webpackChunk_techbir_source||[]).push([[6137],{"./libs/material/src/button/button.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>ButtonModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/material/src/button/button/button.component.ts"),_combined_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/material/src/button/combined-button/combined-button.component.ts"),_icon_button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/material/src/button/icon-button/icon-button.component.ts");let ButtonModule=class ButtonModule{};ButtonModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_button__WEBPACK_IMPORTED_MODULE_2__.r,_combined_button__WEBPACK_IMPORTED_MODULE_3__.s,_icon_button__WEBPACK_IMPORTED_MODULE_4__.r],exports:[_button__WEBPACK_IMPORTED_MODULE_2__.r,_combined_button__WEBPACK_IMPORTED_MODULE_3__.s,_icon_button__WEBPACK_IMPORTED_MODULE_4__.r]})],ButtonModule)},"./libs/material/src/button/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ButtonComponent});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),_common_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/material/src/button/common-button/common-button.component.ts"),_micro_micro_module__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/material/src/micro/micro.module.ts");let ButtonComponent=class ButtonComponent extends _common_button__WEBPACK_IMPORTED_MODULE_0__.D{};ButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({selector:"tb-button",standalone:!0,imports:[_micro_micro_module__WEBPACK_IMPORTED_MODULE_3__.d],template:' <button\n    class="button {{ color }} {{ variant }} {{ size }} {{ borderPosition }}"\n    [type]="nativeType"\n    (click)="emit()"\n  >\n    {{ label }}\n  </button>'})],ButtonComponent)},"./libs/material/src/button/combined-button/combined-button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>CombinedButtonComponent});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),_common_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/material/src/button/common-button/common-button.component.ts"),_micro_micro_module__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/material/src/micro/micro.module.ts");let CombinedButtonComponent=class CombinedButtonComponent extends _common_button__WEBPACK_IMPORTED_MODULE_0__.D{};CombinedButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({selector:"tb-combined-button",standalone:!0,imports:[_micro_micro_module__WEBPACK_IMPORTED_MODULE_3__.d],template:' <button\n    #button\n    class="button combined-button  {{ color }} {{ variant }} {{ size }} {{\n      borderPosition\n    }}"\n    (click)="emit()"\n    [type]="nativeType"\n  >\n    <span class="icon" *ngIf="icon">{{ icon }}</span>\n    <span *ngIf="label">{{ label }}</span>\n  </button>'})],CombinedButtonComponent)},"./libs/material/src/button/common-button/common-button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>CommonButtonComponent});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs");let CommonButtonComponent=((_class=class CommonButtonComponent{constructor(){this.__ngContext__="",this.color="primary",this.nativeType="button",this.size="regular",this.variant="basic",this.clickEvent=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter}emit(){this.clickEvent.emit()}}).propDecorators={ref:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,args:["button"]}],__ngContext__:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],borderPosition:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],color:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],icon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],nativeType:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],variant:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],clickEvent:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}]},_class);CommonButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({template:""})],CommonButtonComponent)},"./libs/material/src/button/icon-button/icon-button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>IconButtonComponent});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),_common_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/material/src/button/common-button/common-button.component.ts"),_micro_micro_module__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/material/src/micro/micro.module.ts");let IconButtonComponent=class IconButtonComponent extends _common_button__WEBPACK_IMPORTED_MODULE_0__.D{};IconButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({selector:"tb-icon-button",standalone:!0,imports:[_micro_micro_module__WEBPACK_IMPORTED_MODULE_3__.d],template:'<button\n    class="icon-button  {{ color }} {{ variant }} {{ size }} {{\n      borderPosition\n    }}"\n    (click)="emit()"\n    [type]="nativeType"\n  >\n    <span class="icon">{{ icon }}</span>\n  </button>'})],IconButtonComponent)},"./libs/material/src/micro/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>IconComponent});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs");let IconComponent=((_class=class IconComponent{constructor(){this.fill=""}}).propDecorators={icon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],color:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],fill:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]},_class);IconComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"tb-icon",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],template:'<span class="icon {{ fill }}" *ngIf="icon">{{ icon }}</span>'})],IconComponent)},"./libs/material/src/micro/micro.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>MicroModule});var _class,tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs");let BadgeDirective=((_class=class BadgeDirective{constructor(elementRef){this.elementRef=elementRef,this.tbBadge="",this.tbBadgePosition="top-right",this.tbBadgeColor="primary"}ngAfterViewInit(){setTimeout((()=>{this.tbBadge&&(this.elementRef.nativeElement.setAttribute("data-badge",this.tbBadge),this.elementRef.nativeElement.setAttribute("data-badge-position",this.tbBadgePosition),this.elementRef.nativeElement.setAttribute("data-badge-color",this.tbBadgeColor))}),200)}}).ctorParameters=()=>[{type:core.ElementRef}],_class.propDecorators={tbBadge:[{type:core.Input}],tbBadgePosition:[{type:core.Input}],tbBadgeColor:[{type:core.Input}]},_class);var focus_directive_class;BadgeDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbBadge]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],BadgeDirective);let FocusDirective=((focus_directive_class=class FocusDirective{constructor(elementRef){this.elementRef=elementRef}ngAfterViewInit(){this.elementRef.nativeElement.focus()}}).ctorParameters=()=>[{type:core.ElementRef}],focus_directive_class);FocusDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbFocus]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],FocusDirective);var scroll_direction_directive_class,fromEvent=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js"),debounceTime=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js");let ScrollDirectionDirective=((scroll_direction_directive_class=class ScrollDirectionDirective{constructor(elementRef){this.elementRef=elementRef}ngOnDestroy(){this.subscription?.unsubscribe()}ngAfterViewInit(){this.elementRef.nativeElement.onwheel=event=>{event.shiftKey||event.preventDefault()},this.subscription=(0,fromEvent.R)(this.elementRef.nativeElement,"wheel").pipe((0,debounceTime.b)(100)).subscribe((e=>{e.shiftKey||this.elementRef.nativeElement.scrollBy({left:2*e.deltaY,behavior:"smooth"})}))}}).ctorParameters=()=>[{type:core.ElementRef}],scroll_direction_directive_class);var set_attribute_directive_class;ScrollDirectionDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbScrollX]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],ScrollDirectionDirective);let SetAttributeDirective=((set_attribute_directive_class=class SetAttributeDirective{constructor(elementRef){this.elementRef=elementRef}ngAfterViewInit(){if(this.tbSetAttribute){const entries=Object.entries(this.tbSetAttribute);for(const[key,value]of entries){if(key.startsWith("__"))return;this.elementRef.nativeElement.setAttribute(key,value)}}}}).ctorParameters=()=>[{type:core.ElementRef}],set_attribute_directive_class.propDecorators={tbSetAttribute:[{type:core.Input}]},set_attribute_directive_class);var tooltip_directive_class;SetAttributeDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbSetAttribute]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],SetAttributeDirective);let TooltipDirective=((tooltip_directive_class=class TooltipDirective{constructor(elementRef){this.elementRef=elementRef,this.tbTooltip="",this.tbTooltipPosition="bottom"}setTooltip(){const e=this.elementRef.nativeElement;e.setAttribute("aria-label",this.tbTooltip||""),e.setAttribute("tooltip-position",this.tbTooltipPosition||"bottom")}ngAfterViewChecked(){this.setTooltip()}}).ctorParameters=()=>[{type:core.ElementRef}],tooltip_directive_class.propDecorators={tbTooltip:[{type:core.Input}],tbTooltipPosition:[{type:core.Input}]},tooltip_directive_class);var set_component_attribute_directive_class;TooltipDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbTooltip]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],TooltipDirective);let SetComponentAttributeDirective=((set_component_attribute_directive_class=class SetComponentAttributeDirective{ngOnInit(){if(this.tbSetComponentAttribute){console.log(this.componentRef);const attributes=Object.entries(this.tbSetComponentAttribute);for(const[key,value]of attributes)key.startsWith("__")||(console.log(`Adding input : ${key}  : ${value}`),this.componentRef?.setInput(key,value))}}}).propDecorators={componentRef:[{type:core.Input}],tbSetComponentAttribute:[{type:core.Input}]},set_component_attribute_directive_class);var class_list_directive_class;SetComponentAttributeDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbSetComponentAttribute]",standalone:!0})],SetComponentAttributeDirective);let ClassListDirective=((class_list_directive_class=class ClassListDirective{constructor(elementRef){this.elementRef=elementRef}ngAfterViewInit(){if(console.log(this.tbClassList),this.tbClassList){console.log("Adding classes");const entries=Object.entries(this.tbClassList);console.log(entries);for(const[key,value]of entries)""===value||key.startsWith("tooltip")||key.startsWith("__")||key.startsWith("native")||key.startsWith("ng")||key.startsWith("can")||key.startsWith("emit")||key.startsWith("handle")||key.startsWith("children")||key.startsWith("child")||key.endsWith("Event")||key.endsWith("Ref")||(console.log("adding the class:",key,value),this.elementRef.nativeElement.classList.add(value))}}}).ctorParameters=()=>[{type:core.ElementRef}],class_list_directive_class.propDecorators={tbClassList:[{type:core.Input}]},class_list_directive_class);ClassListDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbClassList]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],ClassListDirective);var has_value_directive_class,fesm2022_forms=__webpack_require__("./node_modules/.pnpm/@angular+forms@16.2.0_@angular+common@16.2.0_@angular+core@16.2.0_@angular+platform-browser@16.2.0_rxjs@7.8.1/node_modules/@angular/forms/fesm2022/forms.mjs"),icon_component=__webpack_require__("./libs/material/src/micro/icon/icon.component.ts");let HasValueDirective=((has_value_directive_class=class HasValueDirective{constructor(elementRef){this.elementRef=elementRef}ngAfterViewInit(){this.elementRef.nativeElement.addEventListener("input",(event=>{console.log("Input Event: ",event.data);const data=event.data;data?.length>0?this.markAsHasValue():this.markAsHasNovalue()}))}markAsHasValue(){this.elementRef.nativeElement.setAttribute("has-value","true")}markAsHasNovalue(){this.elementRef.nativeElement.setAttribute("has-value","false")}}).ctorParameters=()=>[{type:core.ElementRef}],has_value_directive_class);HasValueDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbHasValue]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],HasValueDirective);let MicroModule=class MicroModule{};MicroModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,BadgeDirective,FocusDirective,ScrollDirectionDirective,SetAttributeDirective,TooltipDirective,SetComponentAttributeDirective,ClassListDirective,icon_component.o,HasValueDirective,fesm2022_forms.u5,fesm2022_forms.UX],exports:[common.CommonModule,BadgeDirective,FocusDirective,ScrollDirectionDirective,SetAttributeDirective,SetComponentAttributeDirective,TooltipDirective,ClassListDirective,icon_component.o,HasValueDirective,fesm2022_forms.u5,fesm2022_forms.UX]})],MicroModule)},"./libs/material/src/nav-list/nav-list-item/nav-list-item.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>NavListItemComponent});var _class,tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),_micro_micro_module__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/material/src/micro/micro.module.ts"),_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/material/src/button/combined-button/combined-button.component.ts");let NavListItemComponent=((_class=class NavListItemComponent extends _button__WEBPACK_IMPORTED_MODULE_0__.s{}).propDecorators={route:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}]},_class);NavListItemComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"tb-nav-list-item",standalone:!0,imports:[_micro_micro_module__WEBPACK_IMPORTED_MODULE_3__.d],template:'\n    <button\n      class="nav-list-item {{ color }} {{ variant }} {{ borderPosition }} "\n      (click)="emit()"\n      [attr.routerLink]="route ? route : undefined"\n    >\n      <span class="icon">{{ icon }}</span>\n      <span>{{ label }}</span>\n    </button>\n  '})],NavListItemComponent)},"./libs/material/src/nav-list/nav-list.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>NavListComponent,t:()=>NavListModule});var _class,tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),_nav_list_item_nav_list_item_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/material/src/nav-list/nav-list-item/nav-list-item.component.ts"),_micro_micro_module__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/material/src/micro/micro.module.ts"),_angular_router__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@angular+router@16.2.0_@angular+common@16.2.0_@angular+core@16.2.0_@angular+platform-browser@16.2.0_rxjs@7.8.1/node_modules/@angular/router/fesm2022/router.mjs");let NavListComponent=((_class=class NavListComponent{constructor(){this.__ngContext__="",this.componentType=_nav_list_item_nav_list_item_component__WEBPACK_IMPORTED_MODULE_0__.K,this.color="primary",this.icon="info"}childValue(child){const{ref,...rest}=child;return rest}}).propDecorators={__ngContext__:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],componentType:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],children:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,args:[_nav_list_item_nav_list_item_component__WEBPACK_IMPORTED_MODULE_0__.K]}],color:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],icon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}]},_class);NavListComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"tb-nav-list",standalone:!0,imports:[_micro_micro_module__WEBPACK_IMPORTED_MODULE_3__.d,_angular_router__WEBPACK_IMPORTED_MODULE_4__.Bz],template:'\n    <div class="nav-list">\n      <ng-container *ngFor="let child of children">\n        <ng-container\n          *ngComponentOutlet="componentType; inputs: childValue(child)"\n        ></ng-container>\n      </ng-container>\n    </div>\n  '})],NavListComponent);let NavListModule=class NavListModule{};NavListModule=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[NavListComponent,_nav_list_item_nav_list_item_component__WEBPACK_IMPORTED_MODULE_0__.K],exports:[NavListComponent,_nav_list_item_nav_list_item_component__WEBPACK_IMPORTED_MODULE_0__.K]})],NavListModule)},"./libs/material/src/tab/tab-container.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>TabContainerComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs");var _class,core=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),BehaviorSubject=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js"),debounceTime=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js"),tab_directive=__webpack_require__("./libs/material/src/tab/tab.directive.ts"),angular_animations=__webpack_require__("./node_modules/.pnpm/angular-animations@0.11.0_@angular+animations@16.2.0/node_modules/angular-animations/fesm2015/angular-animations.js"),nav_list_component=__webpack_require__("./libs/material/src/nav-list/nav-list.component.ts"),micro_module=__webpack_require__("./libs/material/src/micro/micro.module.ts"),combined_button_component=__webpack_require__("./libs/material/src/button/combined-button/combined-button.component.ts"),button_module=__webpack_require__("./libs/material/src/button/button.module.ts");let TabContainerComponent=((_class=class TabContainerComponent{constructor(){this.tabComponentType=combined_button_component.s,this.type="tab",this.activeChild$=new BehaviorSubject.X(void 0),this.delayedChild$=this.activeChild$.pipe((0,debounceTime.b)(200))}activateChild(child){this.activeChild$.next(void 0),setTimeout((()=>{this.activeChild$.next(child)}),200)}scroll(event){event.preventDefault(),this.container?.nativeElement.scrollBy({left:event.deltaY})}ngAfterViewInit(){this.children?.first&&this.activateChild(this.children.first)}}).propDecorators={container:[{type:core.ViewChild,args:["container"]}],children:[{type:core.ContentChildren,args:[tab_directive.w]}],type:[{type:core.Input}]},_class);TabContainerComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"tb-tab-container",standalone:!0,imports:[micro_module.d,nav_list_component.t,button_module.h],template:'<ng-container *ngIf="type === \'tab\'">\n  <div #container class="flex justify-stretch relative p-1em" tbScrollX>\n    <tb-combined-button\n      (clickEvent)="activateChild(child)"\n      [color]="child.color"\n      [icon]="child.icon"\n      [label]="child.label"\n      *ngFor="let child of children"\n      borderPosition="bottom"\n      class="w-100per"\n      variant="tab"\n      ></tb-combined-button>\n  </div>\n\n  <div *ngIf="delayedChild$ | async as delayedChild" [@enter]>\n    <ng-container *ngTemplateOutlet="delayedChild.templateRef">\n      <ng-content></ng-content>\n    </ng-container>\n  </div>\n</ng-container>\n\n\x3c!-- Sidenav --\x3e\n<ng-container *ngIf="type === \'sidenav\'">\n  <div class="flex row gap-1em">\n    <tb-nav-list>\n      <tb-nav-list-item\n        *ngFor="let child of children"\n        [icon]="child.icon"\n        [label]="child.label"\n        [color]="child.color"\n        (clickEvent)="activateChild(child)"\n      ></tb-nav-list-item>\n    </tb-nav-list>\n\n    <div *ngIf="delayedChild$ | async as delayedChild" [@enter]>\n      <ng-container *ngTemplateOutlet="delayedChild.templateRef">\n        <ng-content></ng-content>\n      </ng-container>\n    </div>\n  </div>\n</ng-container>\n',animations:[(0,angular_animations.QP)({anchor:"enter",duration:1e3})]})],TabContainerComponent)},"./libs/material/src/tab/tab.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>TabDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs");let TabDirective=((_class=class TabDirective{constructor(templateRef){this.templateRef=templateRef,this.clickEvent=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.__ngContext__="",this.borderPosition="bottom",this.color="primary",this.icon="info",this.label="",this.nativeType="button",this.size="regular",this.variant="tab"}emit(){this.clickEvent.emit()}}).ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef}],_class.propDecorators={clickEvent:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],__ngContext__:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],borderPosition:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],color:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],icon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],nativeType:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],variant:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]},_class);TabDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[tbTab]"}),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef])],TabDirective)},"./libs/material/src/tab/tab-container.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Heading:()=>Heading,Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ref,C_Users_development_Projects_ahmet_emrebas_github_io_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_tab_container_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/material/src/tab/tab-container.component.ts"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.2.0/node_modules/@storybook/testing-library/dist/index.mjs"),_storybook_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@storybook+jest@0.1.0/node_modules/@storybook/jest/dist/esm/index.js");const __WEBPACK_DEFAULT_EXPORT__={component:_tab_container_component__WEBPACK_IMPORTED_MODULE_2__.H,title:"TabContainerComponent"},Primary={args:{}},Heading={args:{},play:function play(_x){return(_ref=_ref||(0,C_Users_development_Projects_ahmet_emrebas_github_io_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__.Z)((function*({canvasElement}){const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByText(/tab-container works!/gi)).toBeTruthy()}))).apply(this,arguments)}}},"?1f41":()=>{}}]);