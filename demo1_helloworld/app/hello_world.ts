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
