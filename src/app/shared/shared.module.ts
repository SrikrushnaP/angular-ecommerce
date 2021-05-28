import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageNotFoundErrorComponent } from './layouts/page-not-found-error/page-not-found-error.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { WalletComponent } from './layouts/wallet/wallet.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundErrorComponent,
    NumberOnlyDirective,
    WalletComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TranslateModule,
    NumberOnlyDirective
  ]
})
export class SharedModule { }
