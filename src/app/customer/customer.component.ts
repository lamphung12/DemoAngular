import { Component, OnInit } from '@angular/core';
import {Customer} from "../Customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers :Customer[]=[
    {id:1 , name:"Lam",address:"Tan Tien",city:"Vinh Phuc",state:"abc",country:"Vinh Yen" },
    {id:2 , name:"Long",address:"Thuong Lao",city:"Vinh Phuc",state:"abc",country:"Vinh Yen" },
    {id:3 , name:"Duy",address:"Haf Noi",city:"Vinh Phuc",state:"abc",country:"Vinh Yen" },
    {id:4 , name:"Quang",address:"Hai Phong",city:"Vinh Phuc",state:"abc",country:"Vinh Yen" },
    {id:5 , name:"Dung",address:"Ho Chi Minh",city:"Vinh Phuc",state:"abc",country:"Vinh Yen" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
