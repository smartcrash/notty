import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import NoteRepository from './app/repositories/note.repository';
import { environment } from './environments/environment';

(async () => {
  const repo = new NoteRepository()
})()


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
