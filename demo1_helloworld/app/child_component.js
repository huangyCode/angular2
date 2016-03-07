System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var childComponent, List;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            childComponent = (function () {
                function childComponent() {
                    this.list = List;
                }
                childComponent = __decorate([
                    core_1.Component({
                        selector: "my-child",
                        styles: ['.child { width:200px; background-color: #CFD8DC !important; height:200px}'],
                        template: '<div class="child"><ul><li *ngFor="#l of list">{{l.code}}: <span>{{l.name}}</span></li></ul></div>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], childComponent);
                return childComponent;
            })();
            exports_1("childComponent", childComponent);
            List = [
                { "code": "code1", name: "1号child" },
                { "code": "code2", name: "2号child" }
            ];
        }
    }
});
//# sourceMappingURL=child_component.js.map