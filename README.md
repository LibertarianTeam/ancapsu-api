# **[AncapSU - API](https://api-ancapsu.herokuapp.com)**

> Simplificação da API oficial Visão Libertária.

## **Base URL**

https://api-ancapsu.herokuapp.com

### **Endpoints**

- [Vídeos](#tipo-vídeo)

  - [POST - Listar Vídeos](#listar-vídeos)
  - [POST - Listar Vídeos por Categoria](#listar-vídeos-por-categoria)
  - [POST - Buscar Vídeos](#buscar-vídeos)

- [Matérias](#tipo-matéria)

  - [POST - Listar Matérias](#listar-matérias)
  - [POST - Listar Matérias por Categoria](#listar-matérias-por-categoria)
  - [POST - Buscar Matérias](#buscar-matérias)

---

#### **Tipo Vídeo**

- <details>
    <summary><b>Query:</b></summary>

  ```graphql
  {
    id
    title
    image
    youtubeLink
    bitchuteLink
    description
    category {
      name
      label
    }
    authors {
      suggested {
        id
        name
      }
      authored {
        id
        name
      }
      revised {
        id
        name
      }
      narrated {
        id
        name
      }
      produced {
        id
        name
      }
      date
      status
    }
    status
  }
  ```

  </details>

- <details>
    <summary><b>Resultado:</b></summary>

  ```json
  {
    "id": "67298de2-e483-45d5-8012-699f2a70c350",
    "title": "Facebook bane grupo de extrema-direita que defende fim do governo",
    "image": "https://libvw.com/api/video/image?id=67298de2-e483-45d5-8012-699f2a70c350",
    "youtubeLink": "https://youtu.be/EZvqS4_Stj0",
    "bitchuteLink": "",
    "description": "",
    "category": {
      "name": "video",
      "label": "Vídeo"
    },
    "authors": {
      "suggested": {
        "id": "",
        "name": ""
      },
      "authored": {
        "id": "",
        "name": "N/D"
      },
      "revised": {
        "id": "",
        "name": ""
      },
      "narrated": {
        "id": "",
        "name": ""
      },
      "produced": {
        "id": "",
        "name": ""
      },
      "date": "02/07/2020",
      "status": ""
    },
    "status": "Publicado"
  }
  ```

  </details>

#### **Listar Vídeos**

- **Options:**

  - `ini=[integer]` - Inicio da lista de resultados, default=0.
  - `max=[integer]` - Quantidade de videos na lista de resultados, default=12.

- <details open>
    <summary><b>Request:</b></summary>

  ```graphql
  query {
    videoList(max: 2) {
      id
      title
    }
  }
  ```

  </details>

- <details>
    <summary><b>Response:</b></summary>

  ```json
  {
    "data": {
      "videoList": [
        {
          "id": "38b81295-7a54-4b1e-9d09-d4cec0132017",
          "title": "Pele em risco e porque políticos criam regras absurdas"
        },
        {
          "id": "338d345d-e84d-4140-acc9-06d09b467aaa",
          "title": "Por que a maioria dos estudos científicos está errada?"
        }
      ]
    }
  }
  ```

  </details>

#### **Listar Vídeos por Categoria**

- **Options:**

  - `categ=[string]` - "theory", "news", "comic", etc... obrigatório.
  - `ini=[integer]` - Inicio da lista de resultados, default=0.
  - `max=[integer]` - Quantidade de videos na lista de resultados, default=12.

- <details open>
    <summary><b>Request:</b></summary>

  ```graphql
  query {
    videoCategory(categ: "theory", max: 2) {
      id
      title
    }
  }
  ```

  </details>

- <details>
    <summary><b>Response:</b></summary>

  ```json
  {
    "data": {
      "videoCategory": [
        {
          "id": "38b81295-7a54-4b1e-9d09-d4cec0132017",
          "title": "Pele em risco e porque políticos criam regras absurdas"
        },
        {
          "id": "338d345d-e84d-4140-acc9-06d09b467aaa",
          "title": "Por que a maioria dos estudos científicos está errada?"
        }
      ]
    }
  }
  ```

</details>

#### **Buscar Vídeos**

- **Options:**

  - `search=[string]` - Conteudo da pesquisa, obrigatório.
  - `ini=[integer]` - Inicio da lista de resultados, default=0.
  - `max=[integer]` - Quantidade de videos na lista de resultados, default=12.

- <details open>
    <summary><b>Request:</b></summary>

  ```graphql
  query {
    videoSearch(search: "Argentina", max: 2) {
      id
      title
    }
  }
  ```

  </details>

- <details>
    <summary><b>Response:</b></summary>

  ```json
  {
    "data": {
      "videoSearch": []
    }
  }
  ```

</details>

---

#### **Tipo Matéria**

- <details>
    <summary><b>Query:</b></summary>

  ```graphql
  {
    id
    title
    image
    description
    category {
      name
      label
    }
    authors {
      suggested {
        id
        name
      }
      authored {
        id
        name
      }
      revised {
        id
        name
      }
      narrated {
        id
        name
      }
      produced {
        id
        name
      }
      date
      status
    }
    status
  }
  ```

  </details>

- <details>
    <summary><b>Resultado:</b></summary>

  ```json
  {
    "id": "8b7c1aee-3320-41ea-86d3-835d6f76f34c",
    "title": "(Mais uma) Jornalista que denunciou o epicentro do vírus do PCC é presa",
    "image": "https://libvw.com/api/article/image?id=8b7c1aee-3320-41ea-86d3-835d6f76f34c",
    "description": "Não é nada novo para o mundo que a China é um ambiente hostil para a imprensa, competindo com outros países como Eritreia, Turcomenistão e Coreia do Norte pelo título de ambiente mais repressivo para a imprensa. O histórico chinês de ataque a jornalistas, sobretudo desde os protestos em favor de Hon",
    "category": [
      {
        "name": "article",
        "label": "Artigo"
      },
      {
        "name": "socialism",
        "label": "Socialismo"
      },
      {
        "name": "info",
        "label": "Informação"
      },
      {
        "name": "health",
        "label": "Saúde"
      },
      {
        "name": "persona",
        "label": "Personalidades famosas"
      },
      {
        "name": "political",
        "label": "Políticos"
      },
      {
        "name": "deepstate",
        "label": "Estado profundo"
      },
      {
        "name": "expression",
        "label": "Liberdade de expressão"
      },
      {
        "name": "abroad",
        "label": "Exterior"
      }
    ],
    "authors": {
      "suggested": {
        "id": "32cfebea-2c67-4a25-9564-eacc97291749",
        "name": "Eder Senna"
      },
      "authored": {
        "id": "a44cac32-917b-481b-a9b3-87d74dfef93b",
        "name": "Zankel"
      },
      "revised": {
        "id": "37ca34c7-48fb-44c2-868f-b8a276f88957",
        "name": "JJ liber"
      },
      "narrated": {
        "id": "563554eb-43b5-4c0e-8f29-9e5b7cd22645",
        "name": "salander"
      },
      "produced": {
        "id": "23b0f439-72a2-4ea1-8f2f-f31e44d8fc2e",
        "name": "Peter Turguniev"
      },
      "date": "03/07/2020",
      "status": "Publicado"
    },
    "status": "Publicado"
  }
  ```

  </details>

#### **Listar Matérias**

- **Options:**

  - `max=[integer]` - Quantidade de materias. default=12.
  - `ini=[integer]` - Inicio da lista de resultados, default=0.

- <details open>
    <summary><b>Request:</b></summary>

  ```graphql
  query {
    articleList(max: 2) {
      id
      title
    }
  }
  ```

  </details>

- <details>
    <summary><b>Response:</b></summary>

  ```json
  {
    "data": {
      "articleList": [
        {
          "id": "56eb8f08-5330-4013-ac03-542ea03a08c5",
          "title": "Como governos abalam a economia mundial"
        },
        {
          "id": "4c7f2107-a32d-4664-a5ea-232c2eda698c",
          "title": "Influencer contra direitos trabalhistas teve que se retratar"
        }
      ]
    }
  }
  ```

  </details>

#### **Listar Matérias por Categoria**

- **Options:**

  - `categ=[string]` - "theory", "news", "comic", etc... obrigatório.
  - `max=[integer]` - Quantidade de materias. default=12.
  - `ini=[integer]` - Inicio da lista de resultados, default=0.

- <details open>
    <summary><b>Request:</b></summary>

  ```graphql
  query {
    articleCategory(categ: "socialism", max: 2) {
      id
      title
    }
  }
  ```

  </details>

- <details>
    <summary><b>Response:</b></summary>

  ```json
  {
    "data": {
      "articleCategory": [
        {
          "id": "56eb8f08-5330-4013-ac03-542ea03a08c5",
          "title": "Como governos abalam a economia mundial"
        },
        {
          "id": "8b7c1aee-3320-41ea-86d3-835d6f76f34c",
          "title": "(Mais uma) Jornalista que denunciou o epicentro do vírus do PCC é presa"
        }
      ]
    }
  }
  ```

  </details>

#### **Buscar Matérias**

- **Options:**

  - `search=[string]` - Conteudo da pesquisa, obrigatório.
  - `max=[integer]` - Quantidade de materias. default=12.
  - `ini=[integer]` - Inicio da lista de resultados, default=0.

- <details open>
    <summary><b>Request:</b></summary>

  ```graphql
  query {
    articleSearch(search: "Argentina", max: 2) {
      id
      title
    }
  }
  ```

  </details>

- <details>
    <summary><b>Response:</b></summary>

  ```json
  {
    "data": {
      "articleSearch": [
        {
          "id": "56eb8f08-5330-4013-ac03-542ea03a08c5",
          "title": "Como governos abalam a economia mundial"
        },
        {
          "id": "e4e50d41-c21c-49a5-a642-de9067ff65f8",
          "title": "Na Argentina, multidões lutam pela liberdade"
        }
      ]
    }
  }
  ```

  </details>

---

<div align="center">

> Imposto é roubo!

</div>
