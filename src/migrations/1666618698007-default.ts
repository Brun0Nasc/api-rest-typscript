import { MigrationInterface, QueryRunner } from "typeorm";

export class default1666618698007 implements MigrationInterface {
    name = 'default1666618698007'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transacoes" ("id" SERIAL NOT NULL, "valor" double precision NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "de_usuario_id" integer, "para_usuario_id" integer, CONSTRAINT "PK_19e05c3d8e87df1545fcc6c8505" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "transacoes" ADD CONSTRAINT "FK_aa9f6d37b6679929d6b37a0d0ed" FOREIGN KEY ("de_usuario_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transacoes" ADD CONSTRAINT "FK_5c0e7a28f1adc3bf2ac546d1941" FOREIGN KEY ("para_usuario_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transacoes" DROP CONSTRAINT "FK_5c0e7a28f1adc3bf2ac546d1941"`);
        await queryRunner.query(`ALTER TABLE "transacoes" DROP CONSTRAINT "FK_aa9f6d37b6679929d6b37a0d0ed"`);
        await queryRunner.query(`DROP TABLE "transacoes"`);
    }

}
