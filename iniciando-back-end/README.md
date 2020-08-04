# Recuperação de senha
**Requisitos Funcionais**

- O usuario deve poder recuperar sua senha informando o seu email;
- O usuario deve receber o email com instruções de recuperação de senha;
- O usuario deve poder resetar sua senha;

**Requisitos Não-Funcionais**

- Utilizar mailtrap para testar envio de emails em desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**Regras de Negócios**

- O link enviado por email para resetar a senha, deve expirar em 2h;
- O usuario precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil
**Requisitos Funcionais**

- O usuario deve poder atualizar seu nome, email e senha;

**Requisitos Não-Funcionais**


**Regras de Negócios**

- O usuario não pode alterar seu email por um email ja utilizado por outro usuario;
- Para atualizar sua senha, o usuario deve informar a senha antiga;
- Para atualizar sua senha, o usuario precisa confirmar a nova senha;

# Painel do prestador
**Requisitos Funcionais**

- O usuario deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**Requisitos Não-Funcionais**

- Os agendamentos do prestador no dia devem ser armazenadas em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando o Socket.io;

**Regras de Negócios**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;


# Agendamento de serviços
**Requisitos Funcionais**

- O usuario deve poder listar todos os prestadores de serviço cadastrados;
- O usuario deve poder listar de um mês com pelo menos um horario disponivel de um prestador;
- O usuario deve poder listar horarios disponiveis em um dia especifico de um prestador;
- O usuario deve poder realizar um novo agendamento com um prestador;

**Requisitos Não-Funcionais**

- A listagem de prestadores devem ser armazenadas em cache;

**Regras de Negócios**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponiveis entre 8h às 18h (Primeiro as 8h, ultimo as 17h);
- O usuario não pode agendar em um horario já ocupado;
- O usuario não pode agendar em um horario que já passou;
- O usuario não pode agendar serviços consigo mesmo;
