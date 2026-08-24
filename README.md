
# Sommaire <!-- omit in toc -->
- [Naming system](#naming-system)
  - [Block](#block)
    - [1. Block (Composant global et indépendant)](#1-block-composant-global-et-indépendant)
      - [Examples](#examples)
  - [Element](#element)
  - [2. Element (Partie interne d’un Block)](#2-element-partie-interne-dun-block)
  - [Modifier](#modifier)
  - [3. Modifier (Variation ou État d’un Block/Element)](#3-modifier-variation-ou-état-dun-blockelement)
- [Architecture](#architecture)
  - [**Exemple**](#exemple)
- [Liste des classes préparé](#liste-des-classes-préparé)
  - [Elements](#elements)
    - [typography.css](#typographycss)
  - [Components](#components)
    - [btn.css](#btncss)
    - [input.css](#inputcss)
    - [card.css](#cardcss)
    - [navbar.css](#navbarcss)
  - [Utilities](#utilities)
    - [display.css](#displaycss)
  - [objects](#objects)
    - [grid.css](#gridcss)
- [Éléments du root](#éléments-du-root)



# Naming system
Nous utilisons la convention **[BEM](https://getbem.com/)** (Block, Element, Modifier) pour nommer les classes CSS.

## Block
### 1. Block (Composant global et indépendant)
Un **Block** représente un composant autonome.

**Exemples de Blocks** :
- `btn`
- `card`
- `nav`
- `footer`
- `header`
#### Examples
```html
    <button class="btn">
        Ajouter
    </button>
```
## Element
## 2. Element (Partie interne d’un Block)
Un **Element** est une partie constitutive d’un Block.
Il se définit avec la syntaxe `block__element`.
**Exemples d'element** :
- `btn__icon`
- `section__title`


```html
    <button class="btn">
        <i class="btn__icon">
            +
        </i>
        Ajouter
    </button>
```

## Modifier
## 3. Modifier (Variation ou État d’un Block/Element)
Un **Modifier** permet de représenter une variation ou un état particulier.
Il se définit avec la syntaxe `block--modifier`.
**Exemples de Modifier** :
- `btn--primary` (style visuel différent)
- `btn--active` (état actif)
```html
    <button class="btn btn--primary">
        <i class="btn__icon">
            +
        </i>
        Ajouter
    </button>
```
<br />
<br />

# Architecture
Nous utilisons une architecture type **[ITCSS](https://www.freecodecamp.org/news/managing-large-s-css-projects-using-the-inverted-triangle-architecture-3c03e4b1e6df/)** (Inverted Triangle CSS)
## **Exemple**
```
/styles/
│
├── settings/ (variables, fonts, colors)/
│   ├── variables.css
│   └── themes.css
├── tools/ 
│   └── utilities.css
├── generic/ (reset, normalize)/
│   ├── reset.css
│   ├── elements/ (h1, p, a…)
│   ├── typography.css
│   └── link.css
├── objects/ (layout grid, containers)/
│   └── grid.css
├── components/ (btn, card, navbar…)/
│   ├── btn.css
│   ├── navbar.css
│   └── card.css
├── utilities/ (margin helpers, text-align…)/
│   └── display.css
└── pages/ (overrides spécifiques)/
    ├── homepage.css
    └── login.css
```


<br />
<br />

# Liste des classes préparé
## Elements
### typography.css
- `title`
- `subtitle`
- `surtitle`
- `text`

## Components
### btn.css
- `btn` base obligatoire
- `btn--pill`
- `btn--primary`  
  Fond avec la couleur primaire (`--color-primary`) et hover avec `--color-primary-dark`.

- `btn--secondary`  
  Fond avec la couleur secondaire (`--color-secondary`) et hover avec `--color-secondary-light`.

- `btn--dark`  
  Fond sombre (`--color-text`), texte clair (`--color-bg`), et hover avec `--color-text-light`.

- `btn--danger`  
  Fond couleur danger (`--color-danger`) avec hover en version plus claire (`--color-danger-light`).

- `btn--accentutation-1`  
  Fond accentuation 1 (`--color-accentuation-1`), hover (`--color-accentuation-1-dark`), texte clair (`--color-bg`).

- `btn--accentutation-2`  
  Fond accentuation 2 (`--color-accentuation-2`), texte clair (`--color-bg`), hover (`--color-accentuation-2-dark`).
- `btn--action` bouton plus grand
### input.css
- `input`
### card.css
- `card`
- `card--header` header de la carte ou ce trouve le titre et la nav
- `card--title` titre de la carte
- `card--title span` partie du titre en couleur gris
- `card--nav` liste de boutons
### navbar.css
- `nav`


## Utilities
### display.css

- `d-flex`  
  Affiche un élément en flex.

- `flex-column`  
  Affiche en flex en direction colonne.

- `flex-center`  
  Centre le contenu horizontalement et verticalement avec flex.

- `text-center`  
  Centre le texte horizontalement.

- `d-none`  
  Masque l’élément (`display: none`).

- `w-100`  
  Largeur 100%.

- `w-50`  
  Largeur 50%.

- `w-25`  
  Largeur 25%.

- `w-0`  
  Largeur 0.

- `h-100`  
  Hauteur 100%.

- `h-50`  
  Hauteur 50%.

- `h-25`  
  Hauteur 25%.

- `h-0`  
  Hauteur 0.

### color.css
#### Background

- `bg-primary`  
  Fond en `--color-primary`.

- `bg-secondary`  
  Fond en `--color-secondary`.

- `bg-accentuation--1`  
  Fond en `--color-accentuation-1`.

- `bg-accentuation--2`  
  Fond en `--color-accentuation-2`.

- `bg-danger`  
  Fond en `--color-danger`.

#### Text color

- `color-primary`  
  Texte en `--color-primary`.

- `color-text`  
  Texte en `--color-text`.

- `color-accentuation--1`  
  Texte en `--color-accentuation-1`.

- `color-accentuation--2`  
  Texte en `--color-accentuation-2`.

- `color-danger`  
  Texte en `--color-danger`.

## objects
### grid.css
- `grid`
- `grid--2`
- `grid--3`


<br />
<br />

# Éléments du root

