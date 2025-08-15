#!/bin/bash

echo "🚀 Déploiement de Bovann Group en cours..."

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Vérification de Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js n'est pas installé${NC}"
    exit 1
fi

# Vérification de npm
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm n'est pas installé${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 Installation des dépendances...${NC}"
npm install

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erreur lors de l'installation des dépendances${NC}"
    exit 1
fi

echo -e "${YELLOW}🔨 Build de production...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erreur lors du build${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build réussi !${NC}"

# Test du build
echo -e "${YELLOW}🧪 Test du build...${NC}"
npm start &
SERVER_PID=$!

# Attendre que le serveur démarre
sleep 10

# Vérifier si le serveur fonctionne
if curl -s http://localhost:3000 > /dev/null; then
    echo -e "${GREEN}✅ Serveur de test fonctionne sur http://localhost:3000${NC}"
else
    echo -e "${RED}❌ Serveur de test ne répond pas${NC}"
fi

# Arrêter le serveur de test
kill $SERVER_PID 2>/dev/null

echo -e "${GREEN}🎉 Votre site est prêt pour le déploiement !${NC}"
echo ""
echo "📋 Options de déploiement :"
echo "1. Vercel: vercel --prod"
echo "2. Netlify: netlify deploy --prod"
echo "3. Serveur VPS: copier le dossier .next/"
echo ""
echo "📁 Fichiers de build dans .next/"
echo "📖 Consultez deploy.md pour plus de détails"
