import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule} from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatTabsModule,
        MatIconModule,
        MatPaginatorModule
    ]
})

export class MaterialModule {}