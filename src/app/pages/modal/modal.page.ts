import { Component, OnInit } from '@angular/core';
import { ActionSheetController, IonRouterOutlet, ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  public title = 'Modal';
  constructor(public modalController: ModalController) {}

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  public onClick(){
    this.presentModal();
  }
  public fechaModal(){}

}
