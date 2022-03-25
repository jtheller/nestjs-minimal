import { Module } from "@nestjs/common";
import { SampleController } from "./controller";
import { SampleService } from "./service";

@Module({
  imports: [],
  controllers: [SampleController],
  providers: [SampleService],
  exports: [SampleService]
})
export class SampleModule {}
