import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { CanSeeUserGuard } from './can-see-user.guard';
import { ExampleHttpInterceptor } from './http.interceptor';

export class EnsureModuleLoadedOnceGuard {
  constructor(targetModule: any) {
    if (targetModule) {
      throw new Error(
        `${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`
      );
    }
  }
}

export const MY_INJECTION_TOKEN = new InjectionToken('MY_INJECTION_TOKEN');

@NgModule({
  providers: [
    CanSeeUserGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ExampleHttpInterceptor,
      multi: true,
    },
    {
      provide: MY_INJECTION_TOKEN,
      useValue: {
        hello: 'world',
      },
    },
  ],
})
export class AppCoreModule extends EnsureModuleLoadedOnceGuard {}
