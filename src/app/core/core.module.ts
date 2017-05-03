import { NgModule } from "@angular/core";
import { HeaderComponent } from "app/core/header/header.component";
import { FooterComponent } from "app/core/footer/footer.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        HeaderComponent
    ],
})
export class CoreModule{

}