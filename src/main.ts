import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import database from './database';
import { environment } from './environments/environment';
import { TableName } from './model/schema';

(async () => {
  const res = await database.get(TableName.NOTES).query().fetch()
  console.log(res);
})()


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
