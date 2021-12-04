import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageService } from './shared/images.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {  MatButtonModule} from '@angular/material/button';
import { MatListModule} from '@angular/material/list';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatMenuModule} from '@angular/material/menu';
import{  MatFormFieldModule} from '@angular/material/form-field'
import { NgxMasonryModule } from 'ngx-masonry';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
   MatListModule,
   MatExpansionModule,
   MatTooltipModule,
   MatGridListModule,
   MatMenuModule,
   MatFormFieldModule,
   NgxMasonryModule,
   MatProgressBarModule,
   MatInputModule
  
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
