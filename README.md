# loginJWT
Projeto de um API de Login utilizando NodeJS, MongoDB.
O objetivo é fixar os conceitos de NodeJS, MongoDB,API REST, JWT, BCRYPT, JOI além de outros modules.

## Resumo

 - JavaScript, NodeJS(Express.js),MongoDB.
 -  API Routes.
		 - Rotas separadas de acordo com o nível de permissao.
		 - Rotas: Register, Login e ADMIN/FREE.
 - Modules:
		 - *mongoose*: Gerencia e conecta ao cluster do MongoDB.
		 - *JWT*: Cria tokens de autenticaçao da sessao do usuário.
		 - *bcrypt*: Criptografa strings e compara/autentica nao criptografados.
		 - *joi*:Autentica dados com base em **schemas**(schema similar ao do mongoose ao criar um objeto de uma collection).
