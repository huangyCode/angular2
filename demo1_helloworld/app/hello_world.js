System.register(['angular2/core', './child_component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, child_component_1;
    var HelloWorld;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (child_component_1_1) {
                child_component_1 = child_component_1_1;
            }],
        execute: function() {
            HelloWorld = (function () {
                function HelloWorld() {
                    // 返回页面时绑定的数据变量
                    this.yourName = '';
                    this.showDiv = true;
                }
                HelloWorld.prototype.buttonClick = function () {
                    this.showDiv = !this.showDiv;
                };
                HelloWorld = __decorate([
                    core_1.Component({
                        // 声明索引的标签名(有点像指令)
                        selector: 'hello-world',
                        // 返回的页面
                        templateUrl: 'app/hello_world.html',
                        directives: [child_component_1.childComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HelloWorld);
                return HelloWorld;
            })();
            exports_1("HelloWorld", HelloWorld);
        }
    }
});
//# sourceMappingURL=hello_world.js.map