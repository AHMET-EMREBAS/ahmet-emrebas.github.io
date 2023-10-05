import { NgModule } from '@angular/core';
import { CategoryFormComponent } from './category-form.component';
import { CategoryTableComponent } from './category-table.component';
import { RouterModule } from '@angular/router';
import { CategoryService } from './category.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
  ToolbarComponent,
} from '@techbir/material';
import { CategoryComponent } from './category.component';
import { routesCategory } from './category.routes';

@NgModule({
  declarations: [
    CategoryFormComponent,
    CategoryTableComponent,
    CategoryComponent,
  ],
  imports: [
    MicroModule,
    ToolbarComponent,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routesCategory),
  ],
  providers: [CategoryService],
})
export class CategoryModule {}
