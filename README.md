# Paiva Pratas — Central de Atendimento

Painel administrativo próprio para organizar atendimento, clientes e pedidos da Paiva Pratas, mantendo o iZap como sistema de atendimento WhatsApp.

## Status

**Fase 1 — Estrutura inicial do painel.** A interface inicial é demonstrativa. Nenhuma conversa, pedido, pagamento ou rastreio está conectado ainda.

## Princípios

- O iZap continua responsável pelo atendimento e automações do WhatsApp.
- O painel só exibirá dados reais recebidos por integração autorizada ou cadastrados por um operador.
- Nunca preencher dados de entrega por conta própria: o cliente deve informar e confirmar os dados.
- Não registrar pagamento como aprovado sem confirmação do meio de pagamento.
- Segredos e tokens ficam apenas em variáveis de ambiente protegidas, nunca no Git.

## Stack planejada

- Next.js com App Router
- TypeScript
- PostgreSQL
- Integração com iZap por API/webhooks oficiais, após validação da documentação e credenciais
- Autenticação administrativa antes de disponibilizar dados reais

## Executar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` quando os serviços forem configurados. Não publique valores reais.

## Próximas etapas

1. Validar acesso ao repositório e manter o projeto privado.
2. Implementar autenticação e banco de dados.
3. Confirmar API, eventos e webhooks disponíveis no iZap.
4. Implementar sincronização segura e idempotente.
5. Testar com dados fictícios antes de usar dados de clientes.
