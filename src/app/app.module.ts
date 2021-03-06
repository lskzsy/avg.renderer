import "zone.js/dist/zone-mix";
import "reflect-metadata";
import "polyfills";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { TitleViewComponent } from "./components/title-view/title-view.component";
import { TitleMenuComponent } from "./components/title-menu/title-menu.component";
import { TitleViewService } from "./components/title-view/title-view.service";
import { TitleMenuItemComponent } from "./components/title-menu-item/title-menu-item.component";
import { TransitionLayerComponent } from "./components/transition-layer/transition-layer.component";
import { MainSceneComponent } from "./components/main-scene/main-scene.component";
import { BackgroundCanvasComponent } from "./components/background-canvas/background-canvas.component";
import { DialogueBoxComponent } from "./components/dialogue-box/dialogue-box.component";
import { WidgetLayerComponent } from "./components/widget-layer/widget-layer.component";
import { TextWidgetComponent } from "./components/widget-layer/widget-component/text-widget.component";

import { ElectronService } from "./providers/electron.service";
import { MainSceneService } from "./components/main-scene/main-scene.service";
import { DialogueBoxService } from "./components/dialogue-box/dialogue-box.service";
import { TransitionLayerService } from "./components/transition-layer/transition-layer.service";
import { WidgetLayerService } from "./components/widget-layer/widget-layer.service";

@NgModule({
  declarations: [
    AppComponent,
    TitleViewComponent,
    TitleMenuComponent,
    TitleMenuItemComponent,
    TransitionLayerComponent,
    MainSceneComponent,
    BackgroundCanvasComponent,
    DialogueBoxComponent,
    WidgetLayerComponent,
    TextWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    ElectronService,
    TitleViewService,
    MainSceneService,
    DialogueBoxService,
    TransitionLayerService,
    WidgetLayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
