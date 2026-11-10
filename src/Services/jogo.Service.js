import { jogoRepository } from "../repositories/jogo.Repository.js"

class jogoService {
    async getAll() {
        const jogo = await jogoRepository.getAll
        return jogo
    }

    async getById(id) {
        const jogo = await jogoRepository.getById
        return jogo
    }

    async create({ data }) {
        const jogoCriado = await jogoRepository.create(data)
        return jogoCriado
    }

    async delete(id) {
        const jogoDeletado = await jogoRepository.delete(id)
        return jogoDeletado
    }

    async updatePut(id, data) {
        const jogo = await jogoRepository.updatePut(id, data)

        return jogo
    }


    async updateKnex(id, dados) {
        const [jogoAtualizado] = await jogoRepository.updateKnex(id, dados)
        return jogoAtualizado
    }
}
export const jogoService = new JogoService();

