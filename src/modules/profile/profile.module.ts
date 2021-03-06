import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from '@app/modules/user/entities/user.entity'
import { ProfileController } from './profile.controller'
import { ProfileService } from './profile.service'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
