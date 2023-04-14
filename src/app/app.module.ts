import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from './services/translate.service';
import { TranslatePipe } from './services/translate.pipe';


export function setupTranslateServiceFactory(
  service: TranslateService): Function {
return () => service.use('en');
}
@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TranslateService,  {
    provide: APP_INITIALIZER,
    useFactory: setupTranslateServiceFactory,
    deps: [
      TranslateService
    ],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
