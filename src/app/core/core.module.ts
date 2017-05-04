import { NgModule } from "@angular/core";
import { HeaderComponent } from "app/core/header/header.component";
import { FooterComponent } from "app/core/footer/footer.component";
import { CommonModule } from "@angular/common";
import { Ng2PageScrollModule } from "ng2-page-scroll/ng2-page-scroll";
import { PageScrollConfig } from 'ng2-page-scroll';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        Ng2PageScrollModule.forRoot(),
        CommonModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
})
export class CoreModule {
    constructor() {
        PageScrollConfig.defaultDuration = 1250;
        PageScrollConfig.defaultEasingLogic = {
            ease: (t: number, b: number, c: number, d: number): number => {
                // easeInOutExpo easing
                if (t === 0) return b;
                if (t === d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
    }

}