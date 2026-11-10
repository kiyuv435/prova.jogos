import { knex } from "../database/knex.js";

class jogoRepository {
    async getall() {
        return await knex("jogo").select("*");
    }

    async getById(id) {
        return await knex("jogo")
            .where({ id })
            .first();
    }

    async create(dados) {
        const jogo = await Knex("jogo")
            .insert(dados)
            .returning("*");

        return jogo[0];
    }

    async delete(id) {
        const jogo = await Knex("jogo")
            .where({ id })
            .del()
            .returning("*");

        return {
            mensagem: "jogo deletado",
            jogo: jogo[0]
        };
    }

    async updateKnex(id, dados) {
        const jogoAtualizado = await Knex("jogo")
            .where({ id })
            .update(dados)
            .returning("*");

        return {
            message: "jogo atualizado com sucesso!",
            jogo: jogoAtualizado
        };
    }
}

export const jogoRepository = new jogoRepository();