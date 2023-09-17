import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputsComponent } from './inputs/inputs.component';
import { ColorsComponent } from './colors/colors.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { FontsComponent } from './fonts/fonts.component';
import { BordersComponent } from './borders/borders.component';
import { PositionsComponent } from './positions/positions.component';
import { SizingComponent } from './sizing/sizing.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { IconsComponent } from './icons/icons.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout';

@NgModule({
  declarations: [
    ThemeComponent,
    ButtonsComponent,
    InputsComponent,
    ColorsComponent,
    FlexboxComponent,
    FontsComponent,
    BordersComponent,
    PositionsComponent,
    SizingComponent,
    LayoutsComponent,
    IconsComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component: ThemeComponent,
        children: [
          { path: 'border', component: BordersComponent },
          { path: 'button', component: ButtonsComponent },
          { path: 'color', component: ColorsComponent },
          { path: 'flexbox', component: FlexboxComponent },
          { path: 'font', component: FontsComponent },
          { path: 'icon', component: IconsComponent },
          { path: 'input', component: InputsComponent },
          { path: 'layout', component: LayoutsComponent },
          { path: 'position', component: PositionsComponent },
          { path: 'sizing', component: SizingComponent },
        ],
      },
    ]),
  ],
})
export class ThemeModule {}
