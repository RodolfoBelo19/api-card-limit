import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CardModule } from './card/card.module';

@Module({
  imports: [
    CardModule,
    MongooseModule.forRoot(
      'mongodb+srv://mongodbrd:cinQo2-qagbyq-dycfob@cluster0.uboej.mongodb.net/?retryWrites=true&w=majority',
    ),
    CardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
