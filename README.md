# SecuraQ Finanzas 🚀
> Sistema Web Móvil & PWA de Gestión Financiera Personal y Cálculo de Capital Libre para Inversión.

Desarrollado para **CrisBeBe** bajo arquitectura **Mobile-First**, 100% autocontenido en un solo archivo `index.html`, reactivo con **Alpine.js** y estilizado con **Tailwind CSS**.

---

## 📱 Características Principales

- **Diseño Mobile-First con una sola mano:** Navegación por pestaña inferior (Bottom Navigation Bar), modales flotantes (bottom-sheets) y diseño centrado optimizado para celulares.
- **Tarjeta Hero Dinámica:** Cálculo instantáneo en tiempo real del **Capital Libre Neto para Inversión**:
  $$\text{Capital Libre} = (\text{Sueldo Base} + \text{Ingresos Extra}) - (\text{Gastos Fijos Activos} + \text{Gastos Diarios})$$
- **Control Quincenal Automático:** División del sueldo base de S/ 950 en quincenas de S/ 475 con recomendación de cobertura de servicios por quincena.
- **Gestión de Ingresos:** Sueldo base editable en vivo + Registro y eliminación de ingresos externos (servicios técnicos, desarrollo web freelance, ventas).
- **Control de Gastos Fijos:** Precargado con Alquiler (S/ 200), Préstamo Personal (S/ 104 - saldado), Agua y Luz (S/ 37) y Spotify (S/ 15).
- **Gastos Diarios / De Bolsillo:** Registro rápido de alimentación, pasajes, antojos e imprevistos con historial y fecha.
- **Asesor Financiero Integrado:** Recomendación personalizada de asignación del capital libre (Fondo de Reserva en cuentas de alto rendimiento, Reinversión en herramientas/habilidades e Inversión indexada a largo plazo).
- **Persistencia y Respaldo:**
  - Auto-guardado instantáneo en `localStorage`.
  - Botón **Exportar JSON** (`securaq_finanzas_CrisBeBe_respaldo.json`).
  - Botón **Importar JSON** para restaurar tus datos en cualquier equipo.

---

## 🌐 Cómo Desplegar en Vercel Gratis (Paso a Paso)

### Opción 1: Desde la Web de GitHub y Vercel (Sin consola)
1. Entra a [github.com/new](https://github.com/new) y crea un repositorio llamado `securaq-finanzas`.
2. Sube el archivo `index.html`.
3. Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
4. Haz clic en **"Add New..."** > **"Project"**.
5. Selecciona el repositorio `securaq-finanzas` y haz clic en **"Deploy"**.
6. En 15 segundos tendrás tu enlace público HTTPS (ej. `securaq-finanzas.vercel.app`).

### Opción 2: Desde la Terminal (Git CLI)
```bash
cd C:\Users\cabre\.gemini\antigravity\scratch\securaq-finanzas
git init
git add .
git commit -m "feat: Lanzamiento de SecuraQ Finanzas Mobile PWA"
git branch -M main
git remote add origin https://github.com/CrisBeBe/securaq-finanzas.git
git push -u origin main
```

---

## 📲 Cómo Instalar como App en tu Celular (PWA)
1. Abre tu link de Vercel en **Google Chrome** en tu teléfono Android o Safari en iPhone.
2. Toca el menú de opciones (tres puntos verticales en Chrome o botón compartir en Safari).
3. Selecciona **"Agregar a la pantalla principal"** o **"Instalar aplicación"**.
4. ¡Listo! Se abrirá a pantalla completa sin barra del navegador como una app nativa.
