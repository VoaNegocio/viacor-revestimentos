# Erros, Acertos e Bugs - Hero Mobile

## Status Atual: Pendente
- **Problema:** Conteúdo da seção Hero está sendo cortado em dispositivos móveis.
- **Feedback do Usuário:** "ainda nao" (solução anterior não resolveu totalmente ou foi revertida).
- **Tentativas Anteriores:**
  1. Redução do tamanho da fonte do título (`text-4xl` -> `text-3xl`).
  2. Ajuste de padding do container.
  3. Configuração de quebra de linha em botões (`whitespace-normal`).
  - **Resultado:** As alterações foram revertidas pelo usuário, indicando que não alcançaram o resultado visual desejado ou causaram outros problemas.
  4. Redução agressiva de largura (`max-w-[90%]`) e padding para mobile.
  - **Resultado:** Elementos ainda saindo da tela (print enviado). O `inline-block` ou `px` pode estar causando overflow.
  5. Ajuste de alinhamento vertical (`items-start`) e remoção de restrições de largura.
  - **Hipótese:** O problema não é largura, mas altura. `items-center` corta o topo/fundo de conteúdos altos no mobile.
  - **Resultado:** "ainda nao funcionou".
  6. Redução agressiva de `max-w` para `90%` + Padding e margens menores.
  - **Objetivo:** Forçar o conteúdo a caber na menor largura de tela (320px) com folga.
  - **Resultado:** "funcionou", mas o layout ficou desequilibrado (muito espaço embaixo).
  7. Ajuste de distribuição vertical (espaçamento/gaps).
  - **Objetivo:** Preencher melhor a tela sem causar overflow novamente.
  - **Resultado:** "vamos diminuir esse espaço gigante". (Ficou muito espaçado).
  8. Refinamento de espaçamento (reduzir `pt` e gaps).
  - **Resultado:** "diminui a altura". (Provavelmente o `min-h-screen` deixando muito espaço vazio embaixo).
  9. Ajuste de altura da section (`min-h-screen` -> `min-h-[85vh]` ou similar no mobile).
  - **Resultado:** "isso! agora diminui mais uns 30%".
  10. Redução agressiva de altura para `min-h-[60vh]`.









## Próximos Passos
- Investigar alternativas de layout para mobile (talvez empilhamento diferente ou ajustes mais agressivos de espaçamento).
- Aguardar mais detalhes sobre *onde* exatamente está cortando (se possível).
