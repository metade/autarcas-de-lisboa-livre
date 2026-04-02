# Guia de utilização do CMS

Este guia explica como editar o conteúdo do site **Autarcas de Lisboa – Livre** através da interface de gestão de conteúdo (CMS).

O CMS está disponível em: **https://autarcas-lisboa-livre.metade.org/admin/**

---

## Acesso e autenticação

O CMS utiliza a conta GitHub como método de autenticação.

### Pré-requisito: acesso ao repositório

Para poder editar conteúdo é necessário ter **acesso de escrita** ao repositório `metade/autarcas-de-lisboa-livre` no GitHub. Quem gerir os acessos deve:

1. Ir a **github.com/metade/autarcas-de-lisboa-livre → Settings → Collaborators**
2. Clicar em **"Add people"** e pesquisar o nome de utilizador GitHub da pessoa
3. Selecionar a permissão **Write** e confirmar o convite

A pessoa convidada receberá um email do GitHub e deve aceitar o convite antes de conseguir entrar no CMS.

### Primeiro acesso (instalar e autorizar a aplicação GitHub)

Na primeira vez que entrar no CMS, o GitHub apresentará um ecrã de **"Install & Authorize"** para a aplicação **autarcas-de-lisboa-cms-auth**:

1. Abrir **https://autarcas-lisboa-livre.metade.org/admin/**
2. Clicar em **"Login with GitHub"**
3. O GitHub apresenta o ecrã de instalação — em **"Repository access"**, selecionar **"Only select repositories"** e escolher **`metade/autarcas-de-lisboa-livre`**
4. Clicar em **"Install & Authorize"**
5. É redirigido/a de volta para o CMS, já autenticado/a

Esta instalação só é pedida uma vez. Em acessos futuros, o login é imediato.

> **Nota:** Se aparecer uma mensagem de erro após autorizar, verificar que o convite de colaborador/a no repositório foi aceite (ver pré-requisito acima).

---

## Estrutura do CMS

O painel lateral esquerdo lista todas as coleções editáveis:

| Coleção | O que contém |
|---------|-------------|
| **Autarcas** | Perfis dos 16 eleitos (um ficheiro por pessoa) |
| **Juntas de Freguesia** | As 9 assembleias de freguesia |
| **Etiquetas** | Vocabulário controlado de temas para propostas |
| **Localizações** | Locais geográficos associáveis a propostas |
| **Propostas — Câmara Municipal** | Propostas/moções/requerimentos da CML |
| **Propostas — Assembleia Municipal** | Propostas da AM |
| **Propostas — Alvalade / Areeiro / …** | Propostas por cada junta (9 coleções) |
| **Páginas** | Câmara Municipal, Assembleia Municipal, Sobre |

---

## Publicação de alterações

Ao guardar qualquer entrada no CMS, as alterações são **automaticamente enviadas para o GitHub**. O site é reconstruído e publicado em cerca de **1–2 minutos**.

Não é necessário nenhuma ação adicional após guardar.

---

## Propostas, moções, requerimentos e votos

Esta é a operação mais frequente. Cada proposta tem a sua própria página no site.

### Criar uma nova proposta

1. No painel lateral, selecionar a coleção correspondente ao órgão onde a proposta foi apresentada (ex. **"Propostas — Arroios"**)
2. Clicar no botão **"New Proposta"** (canto superior direito)
3. Preencher os campos:

| Campo | Descrição |
|-------|-----------|
| **Título** | Título completo da proposta |
| **Tipo** | Proposta / Moção / Requerimento / Voto |
| **Data** | Data de apresentação (formato DD/MM/AAAA no seletor) |
| **Autores / Signatários** | Selecionar um ou mais autarcas na lista |
| **Estado** | Estado inicial: *Em análise* |
| **Resumo** | Texto curto para as listagens (opcional mas recomendado) |
| **Documento (PDF)** | Carregar o ficheiro PDF da proposta (opcional) |
| **Etiquetas** | Temas da proposta — escolher da lista existente |
| **Localizações** | Locais relevantes — escolher da lista (filtrada por junta) |
| **Resultado da votação** | Preencher após votação (ver abaixo) |
| **Texto completo** | Corpo completo da proposta em formato Markdown |

4. Clicar em **"Save"**

### Atualizar o estado de uma proposta

Após votação, abrir a proposta e:

1. Alterar o campo **Estado** para *Aprovada*, *Rejeitada* ou *Retirada*
2. Preencher a secção **Resultado da votação** (expandir clicando no título):
   - **A favor**: número de votos e partidos (ex. `L/CDU/PAN`)
   - **Contra**: número de votos e partidos
   - **Abstenções**: número de votos e partidos
3. Se a votação foi por pontos separados, usar **"Votação por pontos"** para registar cada ponto individualmente
4. Guardar

### Carregar um PDF

No campo **Documento (PDF)**, clicar em **"Choose a file"** e selecionar o PDF a partir do computador. O ficheiro será carregado para o repositório junto ao texto da proposta.

---

## Autarcas

### Editar o perfil de um/a autarca

1. Selecionar **Autarcas** no painel lateral
2. Clicar no nome da pessoa a editar
3. Editar os campos pretendidos e guardar

Campos de contacto/redes sociais (todos opcionais):

| Campo | Formato |
|-------|---------|
| Email de contacto | Endereço completo (ex. `nome@example.com`) |
| Twitter / X | Só o identificador, **sem @** (ex. `nomeutilizador`) |
| Instagram | Só o identificador, **sem @** |
| LinkedIn | URL completo (ex. `https://www.linkedin.com/in/nome`) |
| Bluesky | Só o identificador, **sem @** (ex. `nome.bsky.social`) |
| Facebook | URL completo (ex. `https://www.facebook.com/nome`) |

### Adicionar um/a novo/a autarca

1. Selecionar **Autarcas** e clicar em **"New Autarca"**
2. Preencher os campos obrigatórios: **Nome completo**, **Género gramatical**, **Juntas** e **Cargos**
3. No campo **Juntas**, selecionar todas as assembleias onde a pessoa tem cargo — este campo é usado para filtrar a pessoa nas páginas de cada junta
4. Em **Cargos**, adicionar um cargo por cada órgão:
   - **Cargo**: escolher o tipo na lista
   - **Órgão**: nome completo (ex. `Assembleia de Freguesia de Arroios`)
   - **Junta**: selecionar da lista
5. Guardar

> **Atenção:** O campo **Juntas** (no topo) e o campo **Junta** dentro de cada cargo devem conter os mesmos valores. Se a pessoa tiver cargos em dois órgãos diferentes, ambas as juntas devem estar selecionadas em **Juntas**.

### Registar uma ausência temporária (substituição)

Quando um/a eleito/a fica temporariamente ausente e é substituído/a:

**No perfil do/a membro ausente:**
1. No cargo correspondente, ativar **"Temporariamente ausente"**
2. No campo **"Substituído/a por"**, selecionar o/a substituto/a

**No perfil do/a substituto/a** (criar novo autarca se ainda não existir):
1. Adicionar o cargo com o mesmo órgão e junta
2. Ativar **"Cargo temporário (substituição)"**
3. No campo **"Substitui"**, selecionar o/a membro ausente

O site apresentará automaticamente o/a membro ausente numa linha separada na página da junta, com indicação visual de ausência.

### Terminar uma substituição

Quando o/a membro regressa:

1. **No perfil do/a substituto/a**: remover o cargo temporário (ou desativar o campo "Cargo temporário")
2. **No perfil do/a membro ausente**: desativar "Temporariamente ausente" e limpar "Substituído/a por"

---

## Etiquetas e Localizações

As etiquetas e localizações são **vocabulários controlados** — as propostas apenas podem usar valores que existam nestas coleções. Antes de usar uma etiqueta ou localização nova numa proposta, é necessário criá-la primeiro.

### Criar uma nova etiqueta

1. Selecionar **Etiquetas** no painel lateral
2. Clicar em **"New Etiqueta"**
3. Preencher o campo **Nome** (ex. `Mobilidade`, `Ambiente`)
4. Guardar

### Criar uma nova localização

1. Selecionar **Localizações** no painel lateral
2. Clicar em **"New Localização"**
3. Preencher o **Nome** e selecionar a **Junta** à qual pertence
4. Guardar

> **Nota:** As localizações estão associadas a uma junta específica. Nas coleções de propostas por junta, o seletor de localizações mostra apenas as localizações dessa junta.

---

## Juntas de Freguesia

As páginas das 9 assembleias de freguesia podem ser editadas em **Juntas de Freguesia**. Campos disponíveis:

- **Descrição** — texto de apresentação da assembleia
- **Website oficial / Facebook / X / Instagram / YouTube** — links para os canais oficiais (URLs completos)
- **Fotografia** — imagem de capa da página

As páginas **Câmara Municipal** e **Assembleia Municipal** editam-se em **Páginas**.

---

## Perguntas frequentes

**Fiz uma alteração mas o site não atualizou.**
O site demora 1–2 minutos a reconstruir após guardar. Aguardar e recarregar a página. Se passados 5 minutos não aparecer a alteração, verificar se o ficheiro foi efetivamente guardado no CMS.

**Não consigo selecionar um/a autarca numa proposta.**
O autarca precisa de existir na coleção **Autarcas** antes de poder ser selecionado. Criar o perfil primeiro.

**Quero usar uma etiqueta que não está na lista.**
Criar primeiro a etiqueta em **Etiquetas**, depois regressar à proposta e seleccioná-la.

**O seletor de localizações está vazio.**
As localizações são filtradas por junta. Verificar se já existem localizações criadas para essa junta em **Localizações**.

**Preciso de acesso ao CMS.**
Pedir ao responsável pelo repositório para adicionar a conta GitHub como colaborador/a em `github.com/metade/autarcas-de-lisboa-livre`.
