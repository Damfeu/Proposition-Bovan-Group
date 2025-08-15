# 🚀 Bovann Group - Site Web Professionnel

Site web moderne et responsive pour Bovann Group, spécialisé en communication digitale et formations professionnelles.

## ✨ Fonctionnalités

- 🎨 **Design moderne** avec animations fluides
- 📱 **Responsive design** optimisé mobile/desktop
- ⚡ **Performance optimisée** avec Next.js 13
- 🎭 **Animations avancées** avec Framer Motion
- 🎨 **UI/UX premium** avec Tailwind CSS
- 🔍 **SEO optimisé** et accessible

## 🛠️ Technologies

- **Framework** : Next.js 13 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **UI Components** : Radix UI + Shadcn/ui
- **Icons** : Lucide React

## 🚀 Déploiement Rapide

### **Option 1: Vercel (Recommandé)**

```bash
# Installation
npm i -g vercel

# Déploiement
vercel --prod
```

### **Option 2: Netlify**

```bash
# Installation
npm i -g netlify-cli

# Déploiement
netlify deploy --prod
```

### **Option 3: Build Local**

```bash
# Build de production
npm run build

# Test local
npm start

# Export statique (optionnel)
npm run export
```

## 📦 Installation

```bash
# Cloner le projet
git clone [votre-repo]
cd bovann-group-website

# Installer les dépendances
npm install

# Démarrage en développement
npm run dev

# Build de production
npm run build
```

## 🔧 Scripts Disponibles

```bash
npm run dev          # Démarrage développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification du code
npm run type-check   # Vérification TypeScript
npm run deploy:test  # Test du build
```

## 📁 Structure du Projet

```
├── app/                 # App Router Next.js 13
├── components/          # Composants React
│   ├── layout/         # Header, Footer
│   ├── sections/       # Sections de la page
│   └── ui/            # Composants UI réutilisables
├── lib/                # Utilitaires et configurations
├── hooks/              # Hooks personnalisés
└── public/             # Assets statiques
```

## 🎨 Personnalisation

### **Couleurs de marque**
```css
--red-eclat: #E30613      /* Rouge principal */
--noir-intense: #000000   /* Noir */
--blanc-pur: #FFFFFF      /* Blanc */
--gris-clair: #F5F5F5     /* Gris clair */
```

### **Animations**
- Effets de hover avancés
- Transitions fluides
- Particules flottantes
- Effets de parallax

## 📱 Responsive Design

- **Mobile First** : Optimisé pour les petits écrans
- **Breakpoints** : sm, md, lg, xl, 2xl
- **Touch Friendly** : Interactions tactiles optimisées

## 🚀 Performance

- **Lazy Loading** : Composants chargés à la demande
- **Code Splitting** : JavaScript optimisé
- **Image Optimization** : Images automatiquement optimisées
- **Bundle Analysis** : `npm run analyze`

## 🔍 SEO & Accessibilité

- **Meta tags** optimisés
- **Structured data** pour les moteurs de recherche
- **WCAG 2.1 AA** compliance
- **Semantic HTML** structure

## 📊 Monitoring

### **Vercel Analytics**
```bash
# Intégration automatique avec Vercel
vercel --prod
```

### **Google Analytics**
```bash
# Ajouter dans .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🛡️ Sécurité

- **Headers de sécurité** configurés
- **CSP** (Content Security Policy)
- **HTTPS** obligatoire en production
- **Validation des entrées** avec Zod

## 🔄 Mise à Jour

```bash
# Mise à jour des dépendances
npm update

# Mise à jour de Next.js
npm install next@latest react@latest react-dom@latest

# Vérification des types
npm run type-check
```

## 📝 Changelog

### **v1.0.0** - Version initiale
- ✅ Site complet avec toutes les sections
- ✅ Animations avancées avec Framer Motion
- ✅ Design responsive et moderne
- ✅ Optimisations de performance
- ✅ Configuration de déploiement

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Auteurs

- **ADODODJI Kokouvi Damaz**
- **AMEKPO Mawuli Jean**

## 📞 Support

Pour toute question ou support :
- 📧 Email : contact@bovann-group.com
- 🌐 Site : [bovann-group.com](https://bovann-group.com)

---

**🚀 Votre site est prêt pour la production !**
