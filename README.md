# Portfólio Kelve Oliveira - Versão GitHub Pages

Esta pasta contém a versão estática do portfólio do Kelve Oliveira, pronta para ser hospedada no GitHub Pages gratuitamente.

## 🚀 Como subir no GitHub Pages

### Método 1: Upload direto no GitHub
1. Crie um novo repositório no GitHub
2. Faça upload de todos os arquivos desta pasta
3. Vá em Settings > Pages
4. Selecione "Deploy from a branch"
5. Escolha a branch "main" e pasta "/ (root)"
6. Clique em "Save"
7. Seu site estará disponível em: `https://seuusuario.github.io/nome-do-repositorio`

### Método 2: Via Git (linha de comando)
```bash
git init
git add .
git commit -m "Adicionar portfólio Kelve Oliveira"
git branch -M main
git remote add origin https://github.com/SEUUSUARIO/NOMEREPOSITORIO.git
git push -u origin main
```

## 📁 Arquivos Incluídos

- `index.html` - Página principal do portfólio
- `styles.css` - Estilos CSS personalizados
- `script.js` - JavaScript com todas as funcionalidades
- `assets/profile.png` - Imagem de perfil do Kelve
- `README.md` - Este arquivo de instruções

## ✨ Funcionalidades

- ✅ Design responsivo (mobile e desktop)
- ✅ Troca de temas (Preto & Amarelo / Preto & Rosa)
- ✅ Seção de portfólio com vídeos
- ✅ Botões de contato corretos (WhatsApp, Instagram, Email)
- ✅ Área administrativa (código: 1235800)
- ✅ Animações suaves
- ✅ Navegação por scroll suave

## 🎬 Personalizando os Vídeos

Edite o arquivo `script.js` na linha 2, no array `portfolioVideos`:

```javascript
const portfolioVideos = [
    {
        id: '1',
        title: 'Seu Título',
        description: 'Descrição do vídeo',
        videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID',
        videoType: 'youtube', // ou 'googledrive'
        orientation: 'horizontal', // 'horizontal', 'vertical', 'square'
        tags: ['Tag1', 'Tag2']
    }
];
```

## 📞 Contatos Configurados

- **WhatsApp**: https://wa.me/557582943899
- **Instagram**: https://www.instagram.com/kelveoliveiraa/
- **Email**: kelveoliveira1@gmail.com

Para alterar os contatos, edite o arquivo `index.html` nas seções correspondentes.

## 🎨 Alterando Cores dos Temas

No arquivo `styles.css`, procure por:

```css
body.theme1 {
    --theme-accent: hsl(51, 100%, 50%); /* Amarelo */
}

body.theme2 {
    --theme-accent: hsl(328, 100%, 54%); /* Rosa */
}
```

## 🔧 Testando Localmente

Para testar antes de subir:

1. Abra o arquivo `index.html` diretamente no navegador, ou
2. Use um servidor local:
   ```bash
   python -m http.server 8080
   ```
   E acesse: http://localhost:8080

## 📱 Compatibilidade

✅ Funciona em todos os navegadores modernos
✅ Responsivo para mobile e desktop
✅ Otimizado para performance

## 🆓 Hospedagem Gratuita

Esta versão foi criada especificamente para funcionar em:
- GitHub Pages
- Netlify
- Vercel
- Surge.sh
- Firebase Hosting

**Pronto para usar! Basta fazer upload no GitHub e ativar o Pages.**