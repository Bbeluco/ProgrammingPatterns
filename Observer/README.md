# Observer

Basicamente todo mundo vai ficar observando aquela estrutura, quando ela mudar todos os que estavam observando o componente anteriormente ira ser notificado e tomara alguma acao

sujeito / publicador = nome tecnico dado ao objeto que tem um estado que nos interessa

A ideia eh que no publicador tenha um array que aponte pra todos os "assinantes" que aquela classe tiver (Imagina assinantes nesse caso como assinantes de uma revista/jornal)

Geralmente, publicadoras devem ter as seguintes caracteristicas

1. O array que falamos anteriormente.
2. Um metodo que permita com que o subscriber possa realizar assinaturas na classe
3. Um metodo que permita com que o subscriber possa desfazer assinaturas na classe
4. Um metodo padrao (privado) que dispara notificacao para os subscribers com assinatura

O fluxo nesse caso seria o seguinte:

Instancia da publisher ja existe no contexto
Cliente instancia "subscriber" de forma concreta (significa que o subscriber implementou metodos da interface pai "ISubscriber", geralmente vai ser o metodo update)
publisher.subscribe(cliente)

## Aplicabilidade
Eh recomendado utilizar observer quando:
 - Outras classes precisam saber o que ocorreu com outros componentes do sistema

## Pros e contras

Pros:
 - Principio aberto/fechado = Novas classes podem se ligar a publicadora sem que seja necessario alterar a pulicadora
 - Relacoes de publicadora e assinante sao escolhidas em tempo de execucao

Contras:
 - Assinantes são notificados em ordem aleatória