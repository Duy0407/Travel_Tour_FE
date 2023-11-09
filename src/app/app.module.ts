import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ToKenAuth } from './core/interceptors/sample.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './modules/authencation/component/login/login.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { ContentComponent } from './modules/layout/content/content.component';
import { SharedModule } from './shared/shared.module';
import { BannerComponent } from './modules/layout/banner/banner.component';
import { TourComponent } from './modules/tour/tour.component';
import { FilterTourComponent } from './modules/tour/filter-tour/filter-tour.component';
import { TourListComponent } from './modules/tour/tour-list/tour-list.component';
import { TourItemComponent } from './modules/tour/tour-list/tour-item/tour-item.component';
import { RegisterComponent } from './modules/authencation/component/register/register.component';
import { InfoUserComponent } from './modules/layout/info-user/info-user.component';
import { ProfileComponent } from './modules/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    HeaderComponent,
    ContentComponent,
    BannerComponent,
    TourComponent,
    FilterTourComponent,
    TourListComponent,
    TourItemComponent,
    RegisterComponent,
    InfoUserComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ToKenAuth,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
