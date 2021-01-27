import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalPage } from "../modals/modal.page";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  title = "Awesome title";
  subTitle = "Awesome sub title";
  subSubTitle = "Awesome sub sub title";

  constructor(private readonly modalController: ModalController) {}

  async onTitleClicked() {
    console.log("onTitleClicked");
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        titleIdentifier: "Title",
      },
    });
    await modal.present();
  }

  async onSubTitleClicked() {
    console.log("onSubTitleClicked");
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        titleIdentifier: "Sub Title",
      },
    });
    await modal.present();
  }

  async onSubSubTitleClicked() {
    console.log("onSubSubTitleClicked");
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        titleIdentifier: "Sub Sub Title",
      },
    });
    await modal.present();
  }

  resetTitle() {
    this.title = "";
  }

  resetSubTitle() {
    this.subTitle = "";
  }
}
