import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@aura-ng-nj/core-data';
import { CoreStateModule } from '@aura-ng-nj/core-state';
import { MaterialModule } from '@aura-ng-nj/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionDetailsComponent } from './questions/question-details/question-details.component';
import { QuestionsListComponent } from './questions/questions-list/questions-list.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionsListComponent,
    QuestionDetailsComponent,
  ],
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
    QuestionDetailsComponent,
  ],
})
export class AppModule {}
