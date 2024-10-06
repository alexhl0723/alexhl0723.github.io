
# 📚 BookStore

**BookStore** es una aplicación web dedicada a los amantes de los libros, donde puedes explorar una gran variedad de títulos, buscar tus favoritos y agregarlos a tu carrito de compras.

## 🖥️ Descripción del Proyecto

BookStore tiene como objetivo brindar una experiencia intuitiva y agradable para los usuarios interesados en comprar libros. Con una interfaz moderna, sencilla y adaptada a dispositivos móviles, podrás encontrar fácilmente el libro que buscas.

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura del contenido de la web.
- **CSS3**: Diseño y presentación visual.
- **JavaScript**: Funcionalidades interactivas.
- **Node.js**: Backend y lógica del servidor.
- **MySQL**: Base de datos relacional para el almacenamiento de información de los libros y usuarios.
- **Express**: Framework para Node.js, utilizado para crear el servidor.
- **React.js**: Utilizado en la parte del frontend para hacer la interfaz interactiva.

## 🚀 Funcionalidades

- **📖 Catálogo de libros**: Explora una lista completa de libros por categoría o autor.
- **🔍 Búsqueda avanzada**: Encuentra libros específicos mediante el buscador.
- **🛒 Carrito de compras**: Agrega libros a tu carrito y procede a la compra.
- **📱 Diseño responsive**: Navega de forma cómoda en cualquier dispositivo, desde computadoras hasta smartphones.
- **🔐 Autenticación de usuarios**: Registro e inicio de sesión para acceder a funciones personalizadas.
  
## 📂 Estructura del Proyecto

```
BookStore/
│
├── public/                # Archivos estáticos como imágenes, CSS, JS
├── src/                   # Código fuente de la aplicación
│   ├── components/        # Componentes de React
│   ├── pages/             # Páginas principales de la app
│   ├── services/          # Lógica de conexión con la API
│   └── utils/             # Utilidades y funciones auxiliares
├── server/                # Código del backend (Node.js y Express)
├── database/              # Configuración y scripts de la base de datos
├── README.md              # Documento actual
└── package.json           # Dependencias y scripts del proyecto
```

## 💻 Instalación y Uso

### Requisitos Previos
- Node.js (v14 o superior)
- MySQL

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/alexhl0723/alexhl0723.github.io.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd bookstore
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Crea y configura la base de datos en MySQL con el script proporcionado en `database/setup.sql`.

5. Configura las variables de entorno en un archivo `.env`:
   ```bash
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=tu_contraseña
   DB_NAME=bookstore
   ```

6. Inicia el servidor:
   ```bash
   npm start
   ```

### Uso

Accede a la aplicación desde tu navegador en `http://localhost:3000` y empieza a explorar el catálogo de libros.

## 🔗 Demo

Puedes ver una versión en vivo de la aplicación [aquí](https://alexhl0723.github.io).


## 📧 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de **[ALEX](mailto:alex@gmail.com)** o **[jossxph@gmail.com](mailto:jossxph@gmail.com)**.
