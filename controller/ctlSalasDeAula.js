let salasDeAula = [
  { salasdeaulaid: 1, descricao: "G103", localizacao: "Bloco G", capacidade: 40, removido: false },
  { salasdeaulaid: 2, descricao: "D010", localizacao: "Bloco D", capacidade: 25, removido: false },
  { salasdeaulaid: 3, descricao: "D007", localizacao: "Bloco D", capacidade: 25, removido: true },
];

const GetAllSalasDeAula = (req, res) => {
  const result = salasDeAula.filter(s => s.removido === false);
  res.json(result);
};

const GetSalasDeAulaByID = (req, res) => {
  const { salasdeaulaid } = req.body;
  const sala = salasDeAula.find(s => s.salasdeaulaid === Number(salasdeaulaid) && s.removido === false);

  if (!sala) {
    return res.status(404).json({ message: "Sala não encontrada ou removida" });
  }

  res.json(sala);
};

const InsertSalasDeAula = (req, res) => {
  const { descricao, localizacao, capacidade } = req.body;

  if (!descricao || !localizacao || !capacidade) {
    return res.status(400).json({ message: "Descrição, localização e capacidade são obrigatórios" });
  }

  const novaSala = {
    salasdeaulaid: salasDeAula.length > 0 ? salasDeAula[salasDeAula.length - 1].salasdeaulaid + 1 : 1,
    descricao,
    localizacao,
    capacidade: Number(capacidade),
    removido: false
  };

  salasDeAula.push(novaSala);
  res.status(201).json(novaSala);
};

const UpdateSalasDeAula = (req, res) => {
  const { salasdeaulaid, descricao, localizacao, capacidade } = req.body;
  const index = salasDeAula.findIndex(s => s.salasdeaulaid === Number(salasdeaulaid) && s.removido === false);

  if (index === -1) {
    return res.status(404).json({ message: "Sala não encontrada ou removida" });
  }

  if (descricao) salasDeAula[index].descricao = descricao;
  if (localizacao) salasDeAula[index].localizacao = localizacao;
  if (capacidade) salasDeAula[index].capacidade = Number(capacidade);

  res.json(salasDeAula[index]);
};

const DeleteSalasDeAula = (req, res) => {
  const { salasdeaulaid } = req.body;
  const index = salasDeAula.findIndex(s => s.salasdeaulaid === Number(salasdeaulaid) && s.removido === false);

  if (index === -1) {
    return res.status(404).json({ message: "Sala não encontrada ou já removida" });
  }

  salasDeAula[index].removido = true;
  res.json({ message: "Sala removida com sucesso (soft delete)", sala: salasDeAula[index] });
};

module.exports = {
  GetAllSalasDeAula,
  GetSalasDeAulaByID,
  InsertSalasDeAula,
  UpdateSalasDeAula,
  DeleteSalasDeAula
};
