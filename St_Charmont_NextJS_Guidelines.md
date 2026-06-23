# St. Charmont - Next.js Development Guidelines

## 1. Context & Role
**Role:** Senior Frontend Engineer and UI/UX expert.
**Task:** Build a high-end, high-performance luxury real estate landing page using Next.js (TypeScript) and CSS Modules. The website must feel exclusive, elegant, and highly interactive. 
**Language:** All text content must be in Spanish. Code, variables, and commit messages must be in English.

---

## 2. Design System

### Color Palette
Implement the following CSS variables globally:
- `--color-primary-bg`: `#c1aa8d` (Backgrounds, primary tone).
- `--color-secondary`: `#1a2f26` (Second primary: Accents, geometric shapes, text).
- `--color-tertiary`: `#5d2a09` (Third primary: Accents and shapes).
- `--color-quaternary`: `#182726` (Fourth primary: Accents, shapes, body text, main room/container backgrounds).

### Typography
- **Headings (H1, H2, H3):** A classic, luxury serif font (e.g., `Cormorant Garamond`, `Playfair Display`, or `Cinzel`). Needs to evoke exclusivity and wellness.
- **Body Text (P, Span):** A clean, elegant sans-serif (e.g., `Lato` or `Montserrat`) for readability.

---

## 3. Architecture & Code Guidelines
- **Strict Modularity:** Every section of the website must be broken down into its own `.tsx` file.
- **Scoped Styling:** Every `.tsx` file MUST have a dedicated CSS module file (e.g., `Hero.tsx` and `Hero.module.css`). **Do not use Tailwind or inline styles** for the main layout; rely strictly on CSS Modules.
- **Media Placeholders:** Leave well-structured, styled `div` containers with generic placeholder images (via Unsplash source URLs or colored blocks) wherever images are implied in the layout.

---

## 4. Component Specifications & Content

### 4.1. Interactive Hero: The Envelope (`Hero.tsx` & `Hero.module.css`)
- **Mechanics:** The screen should initially focus on a beautifully designed, closed envelope centered on the screen against the `--color-primary-bg`.
- **Animations:**
  1. **Idle State:** A subtle, continuous "shake" or "pulse" animation prompting the user to click.
  2. **Interaction:** Upon clicking, trigger an animation where the top flap (solapa) lifts up (3D transform/rotateX).
  3. **Reveal:** A letter smoothly slides out displaying an inviting introductory text.
  4. **Transition:** Once fully revealed, unlock scrolling or elegantly transition to allow the user to view the rest of the page.

### 4.2. Introduction (`StCharmontIntro.tsx`)
- **Heading:** ST. CHARMONT - Wellness & Luxury
- **Subheading:** Donde la historia encuentra una nueva forma de ser vivida.
- **Body:** Entre la elegancia atemporal de una hacienda histórica y una visión contemporánea del bienestar, surge St. Charmont: un destino concebido para quienes valoran la belleza, la privacidad y las experiencias extraordinarias.
- *Notes: Include an image placeholder alongside this text.*

### 4.3. Vision (`Vision.tsx`)
- **Heading:** UNA VISIÓN EXTRAORDINARIA
- **Subheading:** Más que un lugar. Un estilo de vida.
- **Body:** St. Charmont nace con la intención de crear uno de los destinos residenciales y de hospitalidad más exclusivos de Yucatán. Un entorno donde la arquitectura, la naturaleza, el bienestar y el servicio convergen para ofrecer una experiencia única, diseñada para disfrutarse generación tras generación.

### 4.4. The Soul (`TheSoul.tsx`)
- **Heading:** EL ALMA DE ST. CHARMONT
- **Subheading:** La Hacienda
- **Body:** En el corazón del proyecto se encuentra una hacienda histórica cuidadosamente restaurada para preservar su esencia y proyectarla hacia el futuro. Sus espacios, jardines y arquitectura darán vida a experiencias que celebran la cultura, la hospitalidad y el arte de vivir bien. No es un elemento del proyecto. Es su razón de existir.
- *Notes: Include a prominent, large image placeholder representing the historic hacienda.*

### 4.5. Wellness (`Wellness.tsx`)
- **Heading:** WELLNESS BY DESIGN
- **Subheading:** El lujo de sentirse bien.
- **Body:** En St. Charmont, el bienestar no es una amenidad. Es una filosofía presente en cada experiencia, cada espacio y cada detalle. Diseñado para fomentar el equilibrio entre cuerpo, mente y entorno, el proyecto invita a vivir con mayor plenitud, conexión y serenidad.

### 4.6. Hospitality (`Hospitality.tsx`)
- **Heading:** HOSPITALIDAD DE CLASE MUNDIAL
- **Subheading:** Una experiencia elevada.
- **Body:** St. Charmont integrará un hotel de lujo concebido para complementar la experiencia de sus residentes y visitantes. Un referente de hospitalidad que enriquecerá la vida cotidiana mediante experiencias exclusivas, servicio excepcional y una conexión auténtica con el patrimonio de la hacienda.

### 4.7. Location (`Location.tsx`)
- **Heading:** ENTRE MÉRIDA Y LA COSTA
- **Subheading:** Una ubicación privilegiada.
- **Body:** Estratégicamente ubicado en uno de los corredores más prometedores de Yucatán, St. Charmont ofrece la combinación perfecta entre privacidad, conectividad y acceso a los principales destinos de la región. Un lugar pensado para quienes entienden que la verdadera exclusividad también depende de dónde se encuentra.
- *Notes: Include an interactive or stylized map placeholder.*

### 4.8. Legacy (`Legacy.tsx`)
- **Heading:** LEGADO
- **Subheading:** Diseñado para trascender.
- **Body:** Algunas propiedades generan valor. Otras crean historia. St. Charmont ha sido concebido para convertirse en un referente de elegancia, bienestar y patrimonio en Yucatán; un lugar destinado a ser admirado hoy y apreciado por generaciones.

### 4.9. Footer / CTA (`FooterCTA.tsx`)
- **Heading:** CIERRE
- **Subheading:** Bienvenido a una nueva expresión del lujo.
- **Brand Text:** St. Charmont - Próximamente
- **Call to Action:** Implement a high-converting, elegantly styled input form or button that reads: *"Solicita información exclusiva sobre el lanzamiento."*
