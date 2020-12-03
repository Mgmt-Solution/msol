import { Controller, Get, Render, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

class ProjectDto {
  name: string;
}

class PaymentDto {
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('projects')
  index() {
    return null;
  }

  @Get('projects')
  @Render('projects/index')
  projectsIndex(): ProjectDto[] {
    return [{
      name: 'Example Project',
    }];
    // return this.appService.getHello();
  }


  @Get('payments')
  @Render('payments/index')
  paymentsIndex(): PaymentDto[] {
    return [{
      name: 'Example Payment',
    }];
    // return this.appService.getHello();
  }

  // @Get('projects/:id')
  // @Render('projects/show')
  // projectsShow() {
  //   return {
  //     name: 'Example Project',
  //   };
  //   // return this.appService.getHello();
  // }
}
