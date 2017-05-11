import { NgModule } from '@angular/core';
import { MdToolbarModule, MdTabsModule, MdButtonToggleModule, MdIconModule, MdCardModule } from '@angular/material';

const components = [
    MdToolbarModule,
    MdTabsModule,
    MdButtonToggleModule,
    MdIconModule,
    MdCardModule
]

@NgModule({
    imports: [...components],
    exports: [...components]
})
export class AppMaterialModule {

}
