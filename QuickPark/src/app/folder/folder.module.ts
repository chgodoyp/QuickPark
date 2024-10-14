import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolderPage } from './folder.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FolderPage]
})
export class FolderModule { }


