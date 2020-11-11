import { Component } from '@angular/core';
import{AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titlePage = "Grocery List";

  items = [
    {
        name: "blueberries",
        quantity: 2
    },
    {
      name: "mango",
      quantity: 8
    },
    {
      name: "milk",
      quantity: 1
    },
    {
      name: "bread",
      quantity: 2
    },
  ];

  constructor(public alertController: AlertController) {}

  removeItem(item,index){
    console.log('Removing Item ', item, index);
    this.items.splice(index,1);
  }

  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add Item',
      inputs: [
        {
          name: 'name',
          placeholder: 'Item'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },      
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: item => {
            console.log('Confirm Cancel', item);
          }
        }, {
          text: 'Ok',
          handler: item => {
            console.log('Confirm Ok', item);
            this.items.push(item);
          }
        }
      ]
    });
    await alert.present();
  }

}  
