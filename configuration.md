# Configuration notes

Get started with Nx, create a fullstack app with Angular and NestJs

## Concurrently

1. Install concurrently

   ```markdown
   npm install concurrently -—save-dev
   ```

2. Configure package.json

   ```markdown
   "serve:api": "nx serve api",
   "serve:web": "ng serve --open",
   "serve:all": "concurrently \"npm run serve:api\" \"npm run serve:web\""
   ```

## Core libs

Following `libs` are generated with the following commands

1. Angular material lib:

   ```markdown
   npx nx g @nrwl/angular:lib material --parent-module=apps/content-management/src/app/app.module.ts --routing --style=scss
   ```

2. Core data lib:

   ```markdown
   npx nx g @nrwl/angular:lib core-data --parent-module=apps/content-management/src/app/app.module.ts --routing --style=scss
   ```

3. Core state lib:

   ```markdown
   npx nx g @nrwl/angular:lib core-state --parent-module=apps/content-management/src/app/app.module.ts --routing --style=scss
   ```

## Boilerplate Question components

Question related `components` are generated with the following command

1. Questions `container` component

   ```markdown
       npx nx g component questions --project=content-management --export
   ```

2. Question `list` component

   ```markdown
       npx nx g component questions/questions-list --project=content-management --export
   ```

3. Question `details` component

   ```markdown
       npx nx g component questions/question-details --project=content-management --export
   ```

## Routing module

```markdown
npx nx g module app-routing --flat --module=app
```

## Boilerplate Question service

```markdown
npx nx g service services/questions/questions --project=core-data
```
