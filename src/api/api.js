export class Api {
  constructor() {}

  async simulacoes(indexacao, rendimento) {
    const simulation = await fetch(
      `http://localhost:3000/simulacoes?tipoIndexacao=${indexacao}&tipoRendimento=${rendimento}`
    )
      .then((data) => data.json())
      .then((data) => data[0]);

    return simulation;
  }

  async indicadores() {
    const indicadores = await fetch(`http://localhost:3000/indicadores`).then(
      (data) => data.json()
    );
    return indicadores;
  }
}
