# GMJ Telecom — Website institucional

Website em **Next.js (App Router)** para publicação na Hostinger (hospedagem Node.js).

## Iniciar localmente

Requer Node.js 20 ou superior (ideal 22 LTS).

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Publicar na Hostinger

1. No GitHub, entre na conta **guilhermemj88** e crie um repositório privado chamado `gmj-telecom-site`.
2. Na pasta do projeto, faça:

```bash
git init
git add .
git commit -m "Site institucional GMJ Telecom"
git branch -M main
git remote add origin https://github.com/guilhermemj88/gmj-telecom-site.git
git push -u origin main
```

3. No painel da Hostinger, escolha **Importar repositório Git**. Conecte a conta GitHub, escolha o repositório e a branch `main`. Caso a interface aceite apenas URL pública, use a integração de conta para acesso privado ou torne o repositório público apenas se desejar.
4. Framework: Next.js / Node.js. Build: `npm run build`. Start: `npm run start`. Instalação: `npm install`. Porta: use a porta que a Hostinger informar (a aplicação Next aceita a variável `PORT`).
5. Configure o domínio `gmjtelecom.com.br` e HTTPS no painel. Verifique DNS existente antes de mexer nos registros, para **não interromper o e-mail**.

## Dados da empresa

- E-mail: guilherme@gmjtelecom.com.br
- WhatsApp: +55 31 99107-8277
- Endereço: Rua Pernambuco, 1389, Savassi, Belo Horizonte/MG
- CNPJ: 26.221.155/0001-41 (informado pelo titular; não validado em base pública)

## Formulário

Os campos do formulário são convertidos em uma mensagem pré-preenchida de WhatsApp; **não há backend que envie/guarde dados**. A ação abre o WhatsApp em nova guia e depende da pessoa confirmar o envio.

## Antes de colocar no ar

- Conferir razão social/endereço/CNPJ e eventual CEP
- Revisar se todos os serviços descritos são efetivamente prestados pela empresa
- Conferir dominio e contas de email antes de alterar DNS
- Ajustar, se desejar, horário de atendimento, depoimentos, cases e redes sociais

## Arquivos importantes

- `app/page.jsx`: conteúdo e seções
- `app/globals.css`: aparência e responsividade
- `app/layout.jsx`: metadados SEO
- `public/gmj-mark.svg`: símbolo inspirado na opção escolhida
- `public/favicon.svg`: ícone do navegador
