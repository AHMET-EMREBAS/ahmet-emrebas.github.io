(self.webpackChunk_techbir_source=self.webpackChunk_techbir_source||[]).push([[5862],{"./libs/material/src/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ButtonComponent});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),_micro_micro_module__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/material/src/micro/micro.module.ts");let ButtonComponent=((_class=class ButtonComponent{constructor(){this.__ngcontext__="",this.clickEvent=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.buttonStyle="basic",this.buttonType="button",this.color="primary",this.icon="info",this.label="Button",this.role="button",this.size="regular",this.type="button"}emitClickEvent(){this.clickEvent.emit()}canRenderIcon(){return["combined-button","icon-button"].includes(this.buttonType)}canRenderLabel(){return["button","tab-button","combined-button"].includes(this.buttonType)}}).propDecorators={__ngcontext__:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],__buttonRef:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,args:["button"]}],clickEvent:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}],buttonStyle:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],buttonType:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],color:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],icon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],role:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],type:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]},_class);ButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"tb-button",standalone:!0,imports:[_micro_micro_module__WEBPACK_IMPORTED_MODULE_2__.d],template:'\n    <button #button (click)="emitClickEvent()" [tbSetAttribute]="this">\n      <span class="icon" *ngIf="canRenderIcon()">{{ icon }}</span>\n      <span *ngIf="canRenderLabel()"> {{ label }} </span>\n    </button>\n  '})],ButtonComponent)},"./libs/material/src/micro/focus/focus.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>FocusDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs");let FocusDirective=((_class=class FocusDirective{constructor(elementRef){this.elementRef=elementRef}ngAfterViewInit(){this.elementRef.nativeElement.focus()}}).ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef}],_class);FocusDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[tbFocus]",standalone:!0}),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef])],FocusDirective)},"./libs/material/src/micro/micro.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>MicroModule});var _class,tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs");let BadgeDirective=((_class=class BadgeDirective{constructor(elementRef){this.elementRef=elementRef,this.tbBadgePosition="top-right",this.tbBadgeColor="primary"}ngAfterViewInit(){this.tbBadge&&(this.elementRef.nativeElement.setAttribute("data-badge",this.tbBadge),this.elementRef.nativeElement.setAttribute("data-badge-position",this.tbBadgePosition),this.elementRef.nativeElement.setAttribute("data-badge-color",this.tbBadgeColor))}}).ctorParameters=()=>[{type:core.ElementRef}],_class.propDecorators={tbBadge:[{type:core.Input}],tbBadgePosition:[{type:core.Input}],tbBadgeColor:[{type:core.Input}]},_class);BadgeDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbBadge]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],BadgeDirective);var set_attribute_directive_class,_class2,focus_directive=__webpack_require__("./libs/material/src/micro/focus/focus.directive.ts"),scroll_direction_directive=__webpack_require__("./libs/material/src/micro/scroll-direction/scroll-direction.directive.ts");let SetAttributeDirective=((set_attribute_directive_class=class SetAttributeDirective{constructor(elementRef){this.elementRef=elementRef}ngAfterViewInit(){if(this.tbSetattribute){const entries=Object.entries(this.tbSetattribute);for(const[key,value]of entries)this.elementRef.nativeElement.setAttribute(key,value)}}}).ctorParameters=()=>[{type:core.ElementRef}],set_attribute_directive_class.propDecorators={tbSetattribute:[{type:core.Input}]},set_attribute_directive_class);SetAttributeDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbSetAttribute]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],SetAttributeDirective);let SetComponentAttributeDirective=((_class2=class SetComponentAttributeDirective{constructor(componentRef){this.componentRef=componentRef}ngAfterViewInit(){if(this.tbSetComponentAttribute){const attributes=Object.entries(this.tbSetComponentAttribute);for(const[key,value]of attributes)this.componentRef.setInput(key,value)}}}).ctorParameters=()=>[{type:core.ComponentRef}],_class2.propDecorators={tbSetComponentAttribute:[{type:core.Input}]},_class2);var tooltip_directive_class;SetComponentAttributeDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbSetComponentAttribute]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ComponentRef])],SetComponentAttributeDirective);let TooltipDirective=((tooltip_directive_class=class TooltipDirective{constructor(elementRef){this.elementRef=elementRef,this.tbTooltip="",this.tbTooltipPosition="bottom"}ngAfterViewInit(){const e=this.elementRef.nativeElement;e.setAttribute("aria-label",this.tbTooltip||""),e.setAttribute("tooltip-position",this.tbTooltipPosition||"bottom")}}).ctorParameters=()=>[{type:core.ElementRef}],tooltip_directive_class.propDecorators={tbTooltip:[{type:core.Input}],tbTooltipPosition:[{type:core.Input}]},tooltip_directive_class);TooltipDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[tbTooltip]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],TooltipDirective);let MicroModule=class MicroModule{};MicroModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,BadgeDirective,focus_directive.R,scroll_direction_directive.s,SetAttributeDirective,TooltipDirective,SetComponentAttributeDirective],exports:[common.CommonModule,BadgeDirective,focus_directive.R,scroll_direction_directive.s,SetAttributeDirective,SetComponentAttributeDirective,TooltipDirective]})],MicroModule)},"./libs/material/src/micro/scroll-direction/scroll-direction.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>ScrollDirectionDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js"),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js");let ScrollDirectionDirective=((_class=class ScrollDirectionDirective{constructor(elementRef){this.elementRef=elementRef}ngOnDestroy(){this.subscription?.unsubscribe()}ngAfterViewInit(){this.elementRef.nativeElement.onwheel=event=>{event.shiftKey||event.preventDefault()},this.subscription=(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.R)(this.elementRef.nativeElement,"wheel").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.b)(100)).subscribe((e=>{e.shiftKey||this.elementRef.nativeElement.scrollBy({left:2*e.deltaY,behavior:"smooth"})}))}}).ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef}],_class);ScrollDirectionDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({selector:"[tbScrollX]",standalone:!0}),(0,tslib__WEBPACK_IMPORTED_MODULE_3__.w6)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef])],ScrollDirectionDirective)},"./libs/material/src/alert/alert.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Heading:()=>Heading,Primary:()=>Primary,default:()=>alert_component_stories});var _class,asyncToGenerator=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),button_component=__webpack_require__("./libs/material/src/button/button.component.ts"),micro_module=__webpack_require__("./libs/material/src/micro/micro.module.ts");let AlertComponent=((_class=class AlertComponent{constructor(){this.closeEvent=new core.EventEmitter,this.color="primary",this.icon="info",this.message="Message",this.closable=!0}emitCloseEvent(){this.closeEvent.emit()}}).propDecorators={closeEvent:[{type:core.Output}],color:[{type:core.Input}],icon:[{type:core.Input}],message:[{type:core.Input}],closable:[{type:core.Input}]},_class);AlertComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"tb-alert",standalone:!0,imports:[micro_module.d,button_component.r],template:' <div class=" {{ color }}" role="alert">\n    <span class="icon">{{ icon }}</span>\n    <span>{{ message }}</span>\n    <div class="grow-1"></div>\n    <tb-button></tb-button>\n  </div>'})],AlertComponent);var _ref,dist=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.2.0/node_modules/@storybook/testing-library/dist/index.mjs"),esm=__webpack_require__("./node_modules/.pnpm/@storybook+jest@0.1.0/node_modules/@storybook/jest/dist/esm/index.js");const alert_component_stories={component:AlertComponent,title:"AlertComponent"},Primary={args:{}},Heading={args:{},play:function play(_x){return(_ref=_ref||(0,asyncToGenerator.Z)((function*({canvasElement}){const canvas=(0,dist.uh)(canvasElement);(0,esm.l)(canvas.getByText(/alert works!/gi)).toBeTruthy()}))).apply(this,arguments)}}},"./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>fromEvent});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs"),_observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_Observable__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/Observable.js"),_operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),_util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js"),_util_isFunction__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/isFunction.js"),_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"),nodeEventEmitterMethods=["addListener","removeListener"],eventTargetMethods=["addEventListener","removeEventListener"],jqueryMethods=["on","off"];function fromEvent(target,eventName,options,resultSelector){if((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(options)&&(resultSelector=options,options=void 0),resultSelector)return fromEvent(target,eventName,options).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__.Z)(resultSelector));var _a=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.CR)(function isEventTarget(target){return(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(target.addEventListener)&&(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(target.removeEventListener)}(target)?eventTargetMethods.map((function(methodName){return function(handler){return target[methodName](eventName,handler,options)}})):function isNodeStyleEventEmitter(target){return(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(target.addListener)&&(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(target.removeListener)}(target)?nodeEventEmitterMethods.map(toCommonHandlerRegistry(target,eventName)):function isJQueryStyleEventEmitter(target){return(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(target.on)&&(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(target.off)}(target)?jqueryMethods.map(toCommonHandlerRegistry(target,eventName)):[],2),add=_a[0],remove=_a[1];if(!add&&(0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__.z)(target))return(0,_operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__.z)((function(subTarget){return fromEvent(subTarget,eventName,options)}))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__.Xf)(target));if(!add)throw new TypeError("Invalid event target");return new _Observable__WEBPACK_IMPORTED_MODULE_6__.y((function(subscriber){var handler=function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return subscriber.next(1<args.length?args:args[0])};return add(handler),function(){return remove(handler)}}))}function toCommonHandlerRegistry(target,eventName){return function(methodName){return function(handler){return target[methodName](eventName,handler)}}}},"./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>debounceTime});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs"),Action=function(_super){function Action(scheduler,work){return _super.call(this)||this}return(0,tslib_es6.ZT)(Action,_super),Action.prototype.schedule=function(state,delay){return void 0===delay&&(delay=0),this},Action}(__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/Subscription.js").w0),intervalProvider={setInterval:function(handler,timeout){for(var args=[],_i=2;_i<arguments.length;_i++)args[_i-2]=arguments[_i];var delegate=intervalProvider.delegate;return(null==delegate?void 0:delegate.setInterval)?delegate.setInterval.apply(delegate,(0,tslib_es6.ev)([handler,timeout],(0,tslib_es6.CR)(args))):setInterval.apply(void 0,(0,tslib_es6.ev)([handler,timeout],(0,tslib_es6.CR)(args)))},clearInterval:function(handle){var delegate=intervalProvider.delegate;return((null==delegate?void 0:delegate.clearInterval)||clearInterval)(handle)},delegate:void 0},arrRemove=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/arrRemove.js"),AsyncAction=function(_super){function AsyncAction(scheduler,work){var _this=_super.call(this,scheduler,work)||this;return _this.scheduler=scheduler,_this.work=work,_this.pending=!1,_this}return(0,tslib_es6.ZT)(AsyncAction,_super),AsyncAction.prototype.schedule=function(state,delay){var _a;if(void 0===delay&&(delay=0),this.closed)return this;this.state=state;var id=this.id,scheduler=this.scheduler;return null!=id&&(this.id=this.recycleAsyncId(scheduler,id,delay)),this.pending=!0,this.delay=delay,this.id=null!==(_a=this.id)&&void 0!==_a?_a:this.requestAsyncId(scheduler,this.id,delay),this},AsyncAction.prototype.requestAsyncId=function(scheduler,_id,delay){return void 0===delay&&(delay=0),intervalProvider.setInterval(scheduler.flush.bind(scheduler,this),delay)},AsyncAction.prototype.recycleAsyncId=function(_scheduler,id,delay){if(void 0===delay&&(delay=0),null!=delay&&this.delay===delay&&!1===this.pending)return id;null!=id&&intervalProvider.clearInterval(id)},AsyncAction.prototype.execute=function(state,delay){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var error=this._execute(state,delay);if(error)return error;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},AsyncAction.prototype._execute=function(state,_delay){var errorValue,errored=!1;try{this.work(state)}catch(e){errored=!0,errorValue=e||new Error("Scheduled action threw falsy error")}if(errored)return this.unsubscribe(),errorValue},AsyncAction.prototype.unsubscribe=function(){if(!this.closed){var id=this.id,scheduler=this.scheduler,actions=scheduler.actions;this.work=this.state=this.scheduler=null,this.pending=!1,(0,arrRemove.P)(actions,this),null!=id&&(this.id=this.recycleAsyncId(scheduler,id,null)),this.delay=null,_super.prototype.unsubscribe.call(this)}},AsyncAction}(Action),dateTimestampProvider={now:function(){return(dateTimestampProvider.delegate||Date).now()},delegate:void 0},Scheduler=function(){function Scheduler(schedulerActionCtor,now){void 0===now&&(now=Scheduler.now),this.schedulerActionCtor=schedulerActionCtor,this.now=now}return Scheduler.prototype.schedule=function(work,delay,state){return void 0===delay&&(delay=0),new this.schedulerActionCtor(this,work).schedule(state,delay)},Scheduler.now=dateTimestampProvider.now,Scheduler}(),asyncScheduler=new(function(_super){function AsyncScheduler(SchedulerAction,now){void 0===now&&(now=Scheduler.now);var _this=_super.call(this,SchedulerAction,now)||this;return _this.actions=[],_this._active=!1,_this}return(0,tslib_es6.ZT)(AsyncScheduler,_super),AsyncScheduler.prototype.flush=function(action){var actions=this.actions;if(this._active)actions.push(action);else{var error;this._active=!0;do{if(error=action.execute(action.state,action.delay))break}while(action=actions.shift());if(this._active=!1,error){for(;action=actions.shift();)action.unsubscribe();throw error}}},AsyncScheduler}(Scheduler))(AsyncAction),lift=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/lift.js"),OperatorSubscriber=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function debounceTime(dueTime,scheduler){return void 0===scheduler&&(scheduler=asyncScheduler),(0,lift.e)((function(source,subscriber){var activeTask=null,lastValue=null,lastTime=null,emit=function(){if(activeTask){activeTask.unsubscribe(),activeTask=null;var value=lastValue;lastValue=null,subscriber.next(value)}};function emitWhenIdle(){var targetTime=lastTime+dueTime,now=scheduler.now();if(now<targetTime)return activeTask=this.schedule(void 0,targetTime-now),void subscriber.add(activeTask);emit()}source.subscribe((0,OperatorSubscriber.x)(subscriber,(function(value){lastValue=value,lastTime=scheduler.now(),activeTask||(activeTask=scheduler.schedule(emitWhenIdle,dueTime),subscriber.add(activeTask))}),(function(){emit(),subscriber.complete()}),void 0,(function(){lastValue=activeTask=null})))}))}},"./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>mapOneOrManyArgs});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs"),_operators_map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/map.js"),isArray=Array.isArray;function mapOneOrManyArgs(fn){return(0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.U)((function(args){return function callOrApply(fn,args){return isArray(args)?fn.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_0__.ev)([],(0,tslib__WEBPACK_IMPORTED_MODULE_0__.CR)(args))):fn(args)}(fn,args)}))}},"?1f41":()=>{}}]);