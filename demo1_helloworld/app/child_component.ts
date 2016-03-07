import {Component} from 'angular2/core'
import {data} from './child_data'
@Component({
    selector:"my-child",
    styles:['.child { width:200px; background-color: #CFD8DC !important; height:200px}'],
    template:'<div class="child"><ul><li *ngFor="#l of list">{{l.code}}: <span>{{l.name}}</span></li></ul></div>'
})
export class childComponent{
    list = List;
}
let List : data[] = [
    { "code":"code1",name:"1号child"},
    {"code":"code2",name:"2号child"}
]