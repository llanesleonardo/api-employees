import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from 'typeorm'

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id = undefined

  @Column('varchar')
  name = ''
  @Column('varchar')
  lastname = ''
  @Column('varchar')
  email = ''
  @Column('int')
  department = 0
  @Column('int')
  position = 0
  @Column('varchar')
  creationDate = ''
  @Column('varchar')
  modificationDate = ''
  @Column('varchar')
  mobile = ''
  @Column('int')
  active = 0
  @Column('varchar')
  urlPhoto = ''
}
