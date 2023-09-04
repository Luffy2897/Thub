import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// EXPANSION MODULE IMPORTS-THEY START WITH MAT
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
// MATMODULES AT THE TOP OF THIS COMMENT
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ITComponent } from './it/it.component';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { SatComponent } from './sat/sat.component';
import { QualificationComponent } from './qualification/qualification.component';
import { CustomProgramComponent } from './custom-program/custom-program.component';
import { BasicComponent } from './it/basic/basic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntermediateComponent } from './it/intermediate/intermediate.component';
import { AdvanceComponent } from './it/advance/advance.component';
import { ExpertComponent } from './it/expert/expert.component';
import { EmbeddedComponent } from './embedded/embedded.component';
import { RouterModule } from '@angular/router';
import { ExpertEComponent } from './embedded/expert-e/expert-e.component';
import { AdvanceEComponent } from './embedded/advance-e/advance-e.component';
import { ITEMBEDDEDComponent } from './it-embedded/it-embedded.component';
import { BasicItembComponent } from './it-embedded/basic-itemb/basic-itemb.component';
import { IntermediateItembComponent } from './it-embedded/intermediate-itemb/intermediate-itemb.component';
import { AdvanceItembComponent } from './it-embedded/advance-itemb/advance-itemb.component';
import { ExpertItembComponent } from './it-embedded/expert-itemb/expert-itemb.component';
import { ProcessComponent } from './process/process.component';
import { IntermediateEComponent } from './embedded/intermediate/intermediate-e.component';
import { BasicEComponent } from './embedded/basic/basic-e.component';
import { CustomComponent } from './custom/custom.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { LocationSpocComponent } from './location-spoc/location-spoc.component';
import { FlashNewsComponent } from './flash-news/flash-news.component';
import { TestingComponent } from './testing/testing.component';
import { BasicTComponent } from './testing/basic-t/basic-t.component';
import { IntermediateTComponent } from './testing/intermediate-t/intermediate-t.component';
import { AdvanceTComponent } from './testing/advance-t/advance-t.component';
import { ExpertTComponent } from './testing/expert-t/expert-t.component';
import { ELECTRICALComponent } from './electrical/electrical.component';
import { BasicPComponent } from './process/basic-p/basic-p.component';
import { IntermediatePComponent } from './process/intermediate-p/intermediate-p.component';
import { AdvancePComponent } from './process/advance-p/advance-p.component';
import { ExpertPComponent } from './process/expert-p/expert-p.component';
import { BasicEleComponent } from './electrical/basic-ele/basic-ele.component';
import { IntermediateEleComponent } from './electrical/intermediate-ele/intermediate-ele.component';
import { AdvanceEleComponent } from './electrical/advance-ele/advance-ele.component';
import { ExpertEleComponent } from './electrical/expert-ele/expert-ele.component';
import { PmqComponent } from './pmq/pmq.component';
// PMQ COMPONENTS IMPORTS
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
// FOR THE BUTTONS IN CUSTOM
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { TcqComponent } from './tcq/tcq.component';
import { LoginComponent } from './login/login.component';
// FOR RESOURCE EXPANION PANEL
import { NgFor, NgIf } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ITComponent,
    StartComponent,
    HomeComponent,
    SatComponent,
    QualificationComponent,
    CustomProgramComponent,
    BasicComponent,
    IntermediateComponent,
    AdvanceComponent,
    ExpertComponent,
    EmbeddedComponent,
    BasicEComponent,
    IntermediateEComponent,
    ExpertEComponent,
    AdvanceEComponent,
    ITEMBEDDEDComponent,
    BasicItembComponent,
    IntermediateItembComponent,
    AdvanceItembComponent,
    ExpertItembComponent,
    ProcessComponent,
    CustomComponent,
    AboutComponent,
    FaqComponent,
    NewsFeedComponent,
    LocationSpocComponent,
    FlashNewsComponent,
    TestingComponent,
    BasicTComponent,
    IntermediateTComponent,
    AdvanceTComponent,
    ExpertTComponent,
    ELECTRICALComponent,
    BasicPComponent,
    IntermediatePComponent,
    AdvancePComponent,
    ExpertPComponent,
    BasicEleComponent,
    IntermediateEleComponent,
    AdvanceEleComponent,
    ExpertEleComponent,
    PmqComponent,
    TcqComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatExpansionModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatRadioModule,
    MatCardModule,
    RouterModule,
    NgFor,
    NgIf,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
