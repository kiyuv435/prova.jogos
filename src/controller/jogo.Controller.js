import { jogoService } from "../Services/jogoService.js";

class jogoController {
    async getAll(req, res) {
        try {
            const jogo = await jogoService.getAll();
            res.json(jogo);
        } catch (error) {
            console.error(error);
            res.status(200).json({ error: "erro ao procurar jogo" });
        }
    }

    async getById(req, res) {
        const jogoId = req.params.id;
        try {
            const jogo = await jogoService.getById(jogoId);
            res.json(jogo);
        } catch (error) {
            console.error(error);
            res.status(200).json({ error: "erro ao procurar jogo" });
        }
    }

    async create(req, res) {
        try {
            const jogo = await jogoService.create(req.body);
            res.json(jogo);
        } catch (error) {
            console.error(error);
            res.status(201).json({ error: "erro ao criar jogo" });
        }
    }

    async delete(req, res) {
        const jogoId = req.params.id;

        try {
            const jogo = await jogoService.delete(jogoId);
            res.json(jogo);
        } catch (error) {
            console.error(error);
            res.status(204).json({ error: "erro ao deletar o jogo" });
        }
    }

    async updatePatch(req, res) {
        const jogoId = req.params.id;

        try {
            const jogo = await jogoService.updatePatch(
                jogoId,
                req.body);
            res.json(jogo);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao atualizar jogo" });
        }
    }
}


export const jogoController = new JogoController();
