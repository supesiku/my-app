import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app_0/app.module';
import { AppModule } from './app_1/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
