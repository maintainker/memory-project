import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Entity, Column, OneToMany } from 'typeorm';
import { CoreEntity } from 'src/common/core.entity';
import { GroupUser } from './group-user.entity';

@InputType('groupSpaceInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class GroupSpace extends CoreEntity {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String, { nullable: true, defaultValue: '' })
  @Column({ default: '' })
  description: string;

  @Field(() => String)
  @Column()
  type: string; // 돈냈냐?

  @Field(() => String)
  @Column()
  coverImg: string;

  @Field(() => Boolean, { defaultValue: false })
  @Column({ default: false })
  is_deleted: boolean;

  @OneToMany(() => GroupUser, groupUser => groupUser.group, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @Field(() => [GroupUser], { nullable: true })
  groupUser: GroupUser[];
}