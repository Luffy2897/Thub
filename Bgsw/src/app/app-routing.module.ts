import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CustomProgramComponent } from './custom-program/custom-program.component';
import { CustomComponent } from './custom/custom.component';
import { AdvanceEleComponent } from './electrical/advance-ele/advance-ele.component';
import { BasicEleComponent } from './electrical/basic-ele/basic-ele.component';
import { ELECTRICALComponent } from './electrical/electrical.component';
import { ExpertEleComponent } from './electrical/expert-ele/expert-ele.component';
import { IntermediateEleComponent } from './electrical/intermediate-ele/intermediate-ele.component';
import { AdvanceEComponent } from './embedded/advance-e/advance-e.component';
import { BasicEComponent } from './embedded/basic/basic-e.component';
import { EmbeddedComponent } from './embedded/embedded.component';
import { IntermediateEComponent } from './embedded/intermediate/intermediate-e.component';
import { FaqComponent } from './faq/faq.component';
import { FlashNewsComponent } from './flash-news/flash-news.component';
import { HomeComponent } from './home/home.component';
import { AdvanceItembComponent } from './it-embedded/advance-itemb/advance-itemb.component';
import { BasicItembComponent } from './it-embedded/basic-itemb/basic-itemb.component';
import { ExpertItembComponent } from './it-embedded/expert-itemb/expert-itemb.component';
import { IntermediateItembComponent } from './it-embedded/intermediate-itemb/intermediate-itemb.component';
import { ITEMBEDDEDComponent } from './it-embedded/it-embedded.component';
import { AdvanceComponent } from './it/advance/advance.component';
import { BasicComponent } from './it/basic/basic.component';
import { ExpertComponent } from './it/expert/expert.component';
import { IntermediateComponent } from './it/intermediate/intermediate.component';
import { ITComponent } from './it/it.component';
import { LocationSpocComponent } from './location-spoc/location-spoc.component';
import { LoginComponent } from './login/login.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { OpenCalenderComponent } from './open-calender/open-calender.component';
import { PmqComponent } from './pmq/pmq.component';
import { AdvancePComponent } from './process/advance-p/advance-p.component';
import { BasicPComponent } from './process/basic-p/basic-p.component';
import { ExpertPComponent } from './process/expert-p/expert-p.component';
import { IntermediatePComponent } from './process/intermediate-p/intermediate-p.component';
import { ProcessComponent } from './process/process.component';
import { QualificationComponent } from './qualification/qualification.component';
import { SatComponent } from './sat/sat.component';
import { TcqComponent } from './tcq/tcq.component';
import { AdvanceTComponent } from './testing/advance-t/advance-t.component';
import { BasicTComponent } from './testing/basic-t/basic-t.component';
import { ExpertTComponent } from './testing/expert-t/expert-t.component';
import { IntermediateTComponent } from './testing/intermediate-t/intermediate-t.component';
import { TestingComponent } from './testing/testing.component';
import { ExpertEComponent } from './embedded/expert-e/expert-e.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'it', component: ITComponent },
  { path: 'Sat', component: SatComponent },
  { path: 'Qualification', component: QualificationComponent },
  { path: 'custom_program', component: CustomProgramComponent },
  { path: 'open_calender', component: OpenCalenderComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'intermediate', component: IntermediateComponent },
  { path: 'advance', component: AdvanceComponent },
  { path: 'expert', component: ExpertComponent },
  { path: 'embedded', component: EmbeddedComponent },
  { path: 'basic-e', component: BasicEComponent },
  { path: 'intermediate-e', component: IntermediateEComponent },
  { path: 'advance-e', component: AdvanceEComponent },
  { path: 'expert-e', component: ExpertEComponent },
  { path: 'itembedded', component: ITEMBEDDEDComponent },
  { path: 'basicitemb', component: BasicItembComponent },
  { path: 'intermediateitemb', component: IntermediateItembComponent },
  { path: 'expertitemb', component: ExpertItembComponent },
  { path: 'advanceitemb', component: AdvanceItembComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'basicp', component: BasicPComponent },
  { path: 'intermediatep', component: IntermediatePComponent },
  { path: 'advancep', component: AdvancePComponent },
  { path: 'expertp', component: ExpertPComponent },
  { path: 'custom', component: CustomComponent },
  { path: 'about', component: AboutComponent },
  { path: 'newsfeed', component: NewsFeedComponent },
  { path: 'flashnews', component: FlashNewsComponent },
  { path: 'location', component: LocationSpocComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'basict', component: BasicTComponent },
  { path: 'intermediatet', component: IntermediateTComponent },
  { path: 'advancet', component: AdvanceTComponent },
  { path: 'expertt', component: ExpertTComponent },
  { path: 'electrical', component: ELECTRICALComponent },
  { path: 'basicele', component: BasicEleComponent },
  { path: 'intermediateele', component: IntermediateEleComponent },
  { path: 'advanceele', component: AdvanceEleComponent },
  { path: 'expertele', component: ExpertEleComponent },
  { path: 'pmq', component: PmqComponent },
  { path: 'tcq', component: TcqComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
