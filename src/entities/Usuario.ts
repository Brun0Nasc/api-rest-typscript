import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import moment from 'moment-timezone';
import { Chave } from "./Chave";

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 70, nullable: false })
    nome: string

    @Column({ length: 16, nullable: false })
    telefone: string

    @Column({ length: 100, nullable: false })
    email: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @Column()
    deleted_at: Date

    @OneToMany(() => Chave, (chave) => chave.usuario)
    chaves: Chave[]

    @BeforeInsert()
    insertCreated() {
        this.created_at = new Date(
            moment().tz("America/Sao_Paulo").format("YYYY-MM-DD HH:mm:ss")
        );
        this.updated_at = new Date(
            moment().tz("America/Sao_Paulo").format("YYYY-MM-DD HH:mm:ss")
        );
    }

    @BeforeUpdate()
    insertUpdated() {
        this.updated_at = new Date(
            moment().tz("America/Sao_Paulo").format("YYYY-MM-DD HH:mm:ss")
        );
    }
}