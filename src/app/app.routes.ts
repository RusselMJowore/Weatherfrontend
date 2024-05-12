import { RouterModule,Routes } from '@angular/router';
import path from 'node:path';
import { CitysearchComponent } from './components/citysearch/citysearch.component';
import { FivedayforcastComponent } from './components/fivedayforcast/fivedayforcast.component';

export const routes: Routes = [
    {
        path: '',
        component: CitysearchComponent
        
},
{
    path: 'fivedayforcast',
    component: FivedayforcastComponent

}
];
