import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule} from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatTabsModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatMenuModule,
        MatListModule,
        MatSnackBarModule
    ]
})

export class MaterialModule {}