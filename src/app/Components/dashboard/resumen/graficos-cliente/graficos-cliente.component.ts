import { Shipment } from './../../../../../models/Shipments';
import { Order } from './../../../../../models/Order';
import { OrderService } from './../../../../services/order.service';
import { ShipmentsService } from './../../../../services/shipments.service';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { S } from 'chart.js/dist/chunks/helpers.core';
@Component({
  selector: 'app-graficos-cliente',
  templateUrl: './graficos-cliente.component.html',
  styleUrls: ['./graficos-cliente.component.css']
})
export class GraficosClienteComponent implements OnInit {
  chartBar:any;
  chartdoughnut:any;
  account1:number;
  account2:number;
  accounto1:number;
  accounto2:number;

  grafica=true;
  constructor(private shipmentService:ShipmentsService, private orderService:OrderService) {
    setTimeout(() => 

    {
      this.processProductResponse();
     
    
    },
    
    3000);
    Chart.register(...registerables);
    this.getInfo();
    
   }

  ngOnInit(): void {
   
  }
  getInfo(){
    this.shipmentService.getShipmentUserIdPay(Number(sessionStorage.getItem('Id_Logged_User'))).subscribe(
      {
        next:(data)=>{
          this.account2=data.length;
        },
        error:(err)=>{
          console.log("Hola")
        }
      }
  )
  this.orderService.getOrdersFiltradasShipmentsPay(Number(sessionStorage.getItem('Id_Logged_User'))).subscribe(
    {
      next:(data)=>{
        this.account1=data.length;
      },
      error:(err)=>{
        console.log("Hola")
      }
    }
  )
  this.orderService.getOrdersFiltradasShipments(Number(sessionStorage.getItem('Id_Logged_User'))).subscribe(
    {
      next:(data)=>{
        this.accounto2=data.length;
    
      },
      error:(err)=>{
        console.log("Hola")
      }
    }
  )
  this.shipmentService.getShipmentUserIdNoPay(Number(sessionStorage.getItem('Id_Logged_User'))).subscribe(
    {
      next:(data)=>{
        this.accounto1=data.length;
      },
      error:(err)=>{
        console.log("Hola")
      }
    }
  )
    
  }

  processProductResponse() {
    
 
    const nameLabel: String[] = ['Pedidos','Vuelos'];
    const account: number[] = [this.account1,this.account2]; 
    const account1: number[] = [this.accounto1,this.account2,this.accounto2,this.account1]; 
    const nameLabel1: String[] = ['Encargos no Pagados','Encargos Pagados','Pedidos no Pagados','Pedidos Pagados'];
    console.log(account)
    //nuestro gráfico de doughnut
    this.chartdoughnut = new Chart('canvas-doughnut', {
      type: 'doughnut',
      data: {
        labels: nameLabel,
        datasets: [
          {
            label: 'Cantidad',
            data: account,
            borderColor: '#00000',

            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(120, 180, 120, 1 )',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 0, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
          },
        ],
      },
    });
    this.chartBar = new Chart('canvas-bar', {
      type: 'bar',
      data: {
        labels: nameLabel1,
        
        datasets: [
          {
            label: 'Cantidad',
            data: account1,
            
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],

            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 0, 1)',
              'rgba(255, 159, 64, 1)',
            ],
          },
        ],
      },
    });
  }
}
