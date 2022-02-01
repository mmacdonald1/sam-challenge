import { Entity, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';

import { PrimaryGeneratedColumn } from 'typeorm';

@Entity('plants')
export class Plant {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ type: 'numeric', nullable: false })
  panda_plant: number;
  @Column({ type: 'numeric', nullable: false })
  aloe: number;
  @Column({ type: 'numeric', nullable: false })
  asparagus_fern: number;
  @Column({ type: 'numeric', nullable: false })
  alocasia: number;
  @Column({ type: 'numeric', nullable: false })
  banana_tree: number;
  @CreateDateColumn({ nullable: true })
  createdAt?: Date;
  @UpdateDateColumn({ nullable: true })
  updatedAt?: Date;
}
