import { Component, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "modal.page",
  templateUrl: "./modal.page.html",
})
export class ModalPage {
  @Input() titleIdentifier: string;

  constructor(private readonly modalCtrl: ModalController) {}

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
