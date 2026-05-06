import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppTodoList } from './app/app';

bootstrapApplication(AppTodoList, appConfig)
  .catch((err) => console.error(err));
