"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("./data.service");
var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
    }
    AppComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.getData().then(function (myData) {
            _this.myData = myData;
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div *ngIf=\"myData\">\n                  <h2>{{myData.title}}</h2>\n                  <h2>{{myData.body}}</h2>\n             </div>\n             "
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map