import { Controller,Get } from "@nestjs/common";

@Controller('/app')
class AppController {
  @Get()
  getRootRoute() {
    return 'Hello World';
  }

  @Get('/bye')
  getByeThere(){
    return "Ok Bye!!!"
  }
}

export default AppController