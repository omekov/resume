import { Component } from '@angular/core';
import { TranslateService } from './services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'omekov';
  phoneNumber = '';
  isShowPhoneNumber = false;
  constructor(private translateService: TranslateService) {
    console.log(translateService.data);
  }
  changeLanguage(language: string) {
    this.translateService.use(language)
  }
  showPhoneNumber() {
    this.isShowPhoneNumber = !this.isShowPhoneNumber
    this.phoneNumber = '(707) 171 81-60'
  }
}
