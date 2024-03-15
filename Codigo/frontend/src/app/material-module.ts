import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule} from "@angular/material/tabs"

@NgModule({
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatTabsModule
    ]
})

export class MaterialModule {}