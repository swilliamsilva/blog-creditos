# Blog Créditos - Apresentação de Projetos Open Source

Este blog foi desenvolvido em Angular 20 para apresentar dois projetos open source relacionados à consulta de créditos vinculados a NFS-e: **API Consulta Créditos** e **Frontend Créditos**.

## Sobre o Projeto

O Blog Créditos é uma aplicação web moderna que serve como vitrine para demonstrar as capacidades e funcionalidades dos projetos desenvolvidos por [swilliamsilva](https://github.com/swilliamsilva). O blog oferece:

- **Página Principal**: Visão geral dos projetos com links diretos para os repositórios
- **Página da API**: Documentação detalhada da API RESTful em Spring Boot
- **Página do Frontend**: Apresentação da interface Angular
- **Página de Contato**: Informações para contribuição e colaboração

##  Tecnologias Utilizadas

- **Angular 20**: Framework frontend mais recente
- **TypeScript**: Linguagem de programação tipada
- **SCSS**: Pré-processador CSS para estilização avançada
- **Angular Router**: Sistema de roteamento para SPA
- **Responsive Design**: Layout adaptável para todos os dispositivos

##  Projetos Apresentados

### 1. API Consulta Créditos
**Repositório**: [github.com/swilliamsilva/apiconsultacreditos](https://github.com/swilliamsilva/apiconsultacreditos)

API RESTful desenvolvida com Spring Boot 3.5.3 para consultar créditos constituídos vinculados a NFS-e.

**Características principais**:
- Java 21 (LTS)
- Spring Boot 3.5.3
- Spring Data JPA + Hibernate
- PostgreSQL / MariaDB / H2 (testes)
- Apache Kafka para mensageria
- Testes automatizados com JUnit 5 + Mockito
- Docker / Docker Compose

**Endpoints disponíveis**:
- `GET /api/creditos/{numeroNfse}` - Lista créditos por número NFS-e
- `GET /api/creditos/credito/{numeroCredito}` - Busca crédito específico

### 2. Frontend Créditos
**Repositório**: [github.com/swilliamsilva/frontend-creditos](https://github.com/swilliamsilva/frontend-creditos)

Interface moderna desenvolvida em Angular 20 para consumir a API de consulta de créditos.

**Características principais**:
- Angular 20
- TypeScript
- SCSS
- Design responsivo
- Testes automatizados com Karma/Jasmine
- Docker para containerização

##  Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- Angular CLI
- Git

### Passos para execução

1. **Clone o repositório**
```bash
git clone https://github.com/swilliamsilva/blog-creditos.git
cd blog-creditos
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
ng serve
```

4. **Acesse a aplicação**
Abra o navegador em `http://localhost:4200`

### Build para produção

```bash
ng build
```

Os arquivos de produção serão gerados na pasta `dist/blog-creditos`.

##  Docker

Para executar com Docker:

```bash
# Build da imagem
docker build -t blog-creditos .

# Executar container
docker run -p 80:80 blog-creditos
```

##  Testes

Execute os testes unitários:
```bash
ng test
```

Execute os testes end-to-end:
```bash
ng e2e
```

## Responsividade

O blog foi desenvolvido com design responsivo, garantindo uma experiência otimizada em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)


## 🤝 Como Contribuir

1. **Fork o projeto**
2. **Crie uma branch para sua feature** (`git checkout -b feature/nova-feature`)
3. **Commit suas mudanças** (`git commit -m 'Adiciona nova feature'`)
4. **Push para a branch** (`git push origin feature/nova-feature`)
5. **Abra um Pull Request**

##  Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

**swilliamsilva**
- GitHub: [@swilliamsilva](https://github.com/swilliamsilva)
- Projetos:
  - [API Consulta Créditos](https://github.com/swilliamsilva/apiconsultacreditos)
  - [Frontend Créditos](https://github.com/swilliamsilva/frontend-creditos)

## Links Úteis

- [Angular Documentation](https://angular.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [SCSS Documentation](https://sass-lang.com/documentation/)
- [Netlify Deployment Guide](https://docs.netlify.com/)

---

**Desenvolvido com ❤️ usando Angular 20**

