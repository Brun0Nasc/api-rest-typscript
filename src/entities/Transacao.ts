import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import moment from 'moment-timezone';
import { Usuario } from "./Usuario";

@Entity("transacoes")
export class Transacao {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "float" })
    valor: number

    @ManyToOne(() => Usuario, de_usuario => de_usuario.transacao_envia)
    @JoinColumn({ name: 'de_usuario_id' })
    de_usuario: Usuario

    @ManyToOne(() => Usuario, para_usuario => para_usuario.transacao_recebe)
    @JoinColumn({ name: 'para_usuario_id' })
    para_usuario: Usuario

    @CreateDateColumn()
    created_at: Date

    @BeforeInsert()
    insertCreated() {
        this.created_at = new Date(
            moment().tz("America/Sao_Paulo").format("YYYY-MM-DD HH:mm:ss")
        );
    }
}