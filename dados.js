//OBJETO USUÁRIO
usuario = {
  id: uuid.v4(),       //id aleatório
  nome: nome,          //nome da pessoa
  usuario: usuario,    //nome de usuário (EX: marcelo.96)
  idade: idade,        //idade
  sexo: sexo,          //sexo
  altura: altura,      //altura
  peso: [{ y: peso }], //lista contendo o histórico de pesagens
  exercicios: [],      //lista de exercícios
  treinos: [],         //lista de treinos
  senha: senha         //senha
};

//OBJETO EXERCÍCIO
exercicio = {
  id: uuid.v4(),                     //id aleatório
  nome: nomeEx.value,                //nome do exercício (EX: Supino Inclinado)
  descricao: descEx.value,           //descrição do exercício (numero de séries, repetições, peso etc...)
  descanso: parseInt(descanso.value) //descanso entre séries (segundos)
};

//OBJETO TREINO
treino = {
  id: uuid.v4(),           //id aleatório
  nome: nomeTreino.value,  //nome do treino
  exercicios: selecionados //lista de exercícios contidos no treino
};