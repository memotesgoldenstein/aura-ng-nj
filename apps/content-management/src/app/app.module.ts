import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule, materialRoutes } from '@aura-ng-nj/material';
import { CoreDataModule, coreDataRoutes } from '@aura-ng-nj/core-data';
import { CoreStateModule, coreStateRoutes } from '@aura-ng-nj/core-state';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsListComponent } from './questions/questions-list/questions-list.component';
import { QuestionDetailsComponent } from './questions/question-details/question-details.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, QuestionsComponent, QuestionsListComponent, QuestionDetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    QuestionsComponent,
    QuestionsListComponent,
    QuestionDetailsComponent
  ],
})
export class AppModule {}
