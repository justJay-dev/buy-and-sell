import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';
import { RegisterComponent } from './auth/register/register.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '' , redirectTo: '/index', pathMatch: 'full' },
  { path: 'listings', component: ListingsPageComponent, pathMatch: 'full'},
  { path: 'listings/:id', component: ListingDetailPageComponent },
  { path: 'contact/:id', component: ContactPageComponent },
  { path: 'edit-listing/:id', component: EditListingPageComponent},
  { path: 'my-listings', component: MyListingsPageComponent},
  { path: 'new-listing', component: NewListingPageComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'index', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
