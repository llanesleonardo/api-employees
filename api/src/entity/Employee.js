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
  @Column('varchar')
  department = ''
  @Column('varchar')
  position = ''
  @Column('varchar')
  creationDate = ''
  @Column('varchar')
  modificationDate = ''
  @Column('varchar')
  mobile = ''
  @Column('boolean')
  active = ''
  @Column('varchar')
  urlPhoto = ''
}
