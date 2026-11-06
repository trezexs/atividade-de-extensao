# Acervo de E-books em PDF (`public/ebooks`)

Esta pasta armazena os arquivos PDF oficiais da coleção **IA na Prática (Edição 2026)**.

## Arquivos publicados

- **Volume 1 (Inclusão — Espaço reservado):** `volume-01-inclusao.pdf` *(aguardando envio)*
- **Volume 2 (Educação):** `volume-02-educacao.pdf`
- **Volume 3 (Pequenos Negócios / Empreendedorismo):** `volume-03-empreendedorismo.pdf`
- **Volume 4 (Segurança Digital):** `volume-04-seguranca-digital.pdf`
- **Volume 5 (Futuro do Trabalho):** `volume-05-futuro-do-trabalho.pdf`
- **Volume 6 (Desenvolvimento Comunitário):** `volume-06-desenvolvimento-comunitario.pdf`

## Como adicionar o Volume 1 depois

1. Copie o PDF do Volume 1 para esta pasta com o nome `volume-01-inclusao.pdf`.
2. No arquivo `src/data/ebooks.ts`, no item `id: 1`, altere `pdfUrl: ""` para:
   ```ts
   pdfUrl: "/ebooks/volume-01-inclusao.pdf",
   ```
