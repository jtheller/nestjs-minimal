import { Module } from '@nestjs/common';
import { SampleModule } from './modules/SampleModule';

@Module({
  imports: [
    SampleModule
  ]
})
export class AppModule {}
