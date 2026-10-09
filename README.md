# Minha Agenda

Aplicativo de organização profissional com visual azul e branco.

## Protótipo visual

A primeira etapa é um protótipo web responsivo para você visualizar a interface no navegador antes da compilação Android. Ele demonstra a navegação principal e guarda os dados de demonstração localmente no navegador.

### Funcionalidades da primeira versão
- Início com compromissos de hoje e próximos eventos
- Agenda diária, semanal e mensal
- Cadastro de parceiros e histórico de atividades vinculadas
- Eventos ligados a parceiros ou eventos avulsos
- Avisos de conflito de horário antes de salvar compromissos
- Registro manual de saída e chegada, sem GPS
- Cadastro de lembretes e medicamentos conforme informações inseridas pelo usuário
- Relatórios diários, semanais, mensais e por parceiro, com impressão/salvamento em PDF
- Exportação e restauração manual de backup JSON

## Visualizar o protótipo

O arquivo `index.html` contém a interface demonstrativa. O GitHub Pages pode publicá-la automaticamente quando a implantação estiver ativada em **Settings → Pages**. Se a publicação automática não estiver ativada, escolha **Deploy from a branch → main → / (root)**.

## Importante

Esta é uma primeira versão de protótipo web, não um APK Android nativo. Os dados ficam neste navegador e não são sincronizados automaticamente. Lembretes confiáveis em segundo plano, armazenamento nativo, testes de conflitos mais completos e empacotamento Android ainda precisam ser implementados e testados na etapa nativa.

## Próximas etapas
1. Conferir a interface no celular e ajustar o visual.
2. Testar os fluxos de cadastro, conflitos, trajetos e relatórios.
3. Preparar a base Android e implementar notificações nativas.
4. Compilar e testar o APK antes de distribuir.
