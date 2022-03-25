import { BadRequestException, Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { SampleService } from "./service";

@Controller("sample")
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Get()
  sampleGet(@Query() query?: any) {
    return this.sampleService.returnData({ query });
  }

  @Get("/route")
  sampleGetSubRoute(@Query() query?: any) {
    return this.sampleService.returnData({
      route: "route",
      query
    });
  }

  @Get("/error")
  sampleErrorReturn() {
    const error: Error = new Error("Sample error message");
    throw new BadRequestException(error); // code 400
  }

  @Get("/:paramName")
  sampleGetWithRouteParam(
    @Param("paramName") paramName: string,
    @Query() query: any
  ) {
    return this.sampleService.returnData({
      paramName,
      query
    });
  }

  @Post()
  samplePost(
    @Query() query?: any,
    @Body() body?: any
  ) {
    return this.sampleService.returnData({
      query,
      body
    });
  }

  @Post("/route")
  samplePostSubRoute(
    @Query() query?: any,
    @Body() body?: any
  ) {
    return this.sampleService.returnData({
      query,
      body
    });
  }

  @Post("/:paramName")
  samplePostWithRouteParam(
    @Param("paramName") paramName: string,
    @Query() query?: any,
    @Body() body?: any
  ) {
    return this.sampleService.returnData({
      paramName,
      query,
      body
    });
  }
}
