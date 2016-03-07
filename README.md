# angular2_demo简易说明
=====
###main.ts  
我们通过import把angular2.0启动的包给导入进来

    import {bootstrap}  from 'angular2/platform/browser';
    import {HelloWorld} from './hello_world';
    bootstrap(HelloWorld);
boostrap是在angular2/platform/browser下的一个方法用于启动angular。在启动的时候需要注入你所要让angular启动的模块如我这里写的一个helloworld模块。
###hello_world.ts

我们先看一下代码：

    import {Component} from 'angular2/core';
    import {childComponent} from './child_component';
    @Component({
        // 声明索引的标签名(有点像指令)
        selector: 'hello-world',
        // 返回的页面
        templateUrl: 'app/hello_world.html',
        directives: [childComponent]
    })

    export class HelloWorld {
        // 返回页面时绑定的数据变量
        yourName:string = '';
        showDiv:boolean = true;
        buttonClick() {
        this.showDiv = !this.showDiv;
       }
    }
####@component
@component我们可以理解angular1.x中的指令

* **selector**：相当于给指令命名 而该指令也相当于(restrict: "E")元素指令

* **templateUrl/template**：相当于指令里返回的页面路径或者是页面

* **directives**：表示加载该@component模块的时候里面还需要加载他的子@component的模块名
* **providers**：表示在@component模块加载的时候所需要依赖注入的服务名，我们把服务名写在providers这个属性里面

* **style**：表示加载@component返回页面里面所需要的样式

#### export class (name)

我们在上面main.ts里提到一个把hellowrld这个模块注入到bootsrap()里面bootsrap(HelloWorld)。

这个被注入的HelloWorld正是export class HelloWorld。

export class这个里面写的是该@component返回的页面里面(template)的页面逻辑相当于angular1.x指令里面的controller或者link函数之内的