export class Tese {

  id: string;
  criador: string;
  tema: string;
  descricao: string;
  titulo: string;
  data: string;
  tipo: string;
  repNome: string;
  lingua: string;

// tslint:disable-next-line:max-line-length
  constructor(id: string, criador: string, tema: string, descricao: string, titulo: string, data: string, tipo: string, repNome: string, lingua: string) {
    this.id = id;
    this.criador = criador;
    this.tema = tema;
    this.descricao = descricao;
    this.titulo = titulo;
    this.data = data;
    this.tipo = tipo;
    this.repNome = repNome;
    this.lingua = lingua;
  }


}
