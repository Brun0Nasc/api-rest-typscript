import { BeforeInsert, BeforeUpdate, Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import moment from 'moment-timezone';
import { Usuario } from "./Usuario";

@Entity("chaves")
export class Chave {
    @PrimaryGeneratedColumn()
    id: number

    @Index({ unique: true })
    @Column({ type: 'text', nullable: false })
    valor_chave: string

    @ManyToOne(() => Usuario, usuario => usuario.chaves)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @Column({nullable: true})
    deleted_at: Date

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