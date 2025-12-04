# 🐱 CatStore – Frontend  
### Frontend desarrollado con React + Vite

Este repositorio corresponde al **frontend** de la aplicación CatStore.  
Para que la aplicación funcione correctamente, **debes ejecutar primero el backend**, disponible en:  
👉 https://github.com/PaulinaCampusano/CatStore-api.git

---

# 🚀 Requisitos previos

Antes de levantar el proyecto debes tener instalado:

- **Node.js 16+** → https://nodejs.org  
- **NPM** (incluido con Node)
- **Backend de CatStore corriendo en http://localhost:8080**

---

# 📥 1. Clonar el repositorio

En la terminal:
git clone https://github.com/KarcatBit/CatStore.git
cd CatStore

📦 2. Instalar dependencias
Ejecutar:

npm install
Esto instalará React, Vite, Axios y demás dependencias.

▶ 3. Levantar el servidor de desarrollo

npm run dev
Si todo funciona correctamente, Vite mostrará algo como:

VITE vX.X.X  ready in Xs
➜  Local:   http://localhost:5173/
Abrir en el navegador:
👉 http://localhost:5173

🔌 4. Conexión con la API (backend)
El frontend se conecta automáticamente a:

http://localhost:8080
Por eso es obligatorio que el backend esté encendido antes de ejecutar el frontend.

🧪 Endpoints consumidos desde el frontend

Inicio de sesión	  POST	  /api/v1/auth/login
Listar productos	  GET	    /api/v1/products
Crear producto	    POST	  /api/v1/products
Editar producto	    PUT	    /api/v1/products/{id}
Eliminar producto	  DELETE	/api/v1/products/{id}
Ver órdenes	        GET	    /api/v1/orders

🛠 Posibles solución de problemas
❌ Vite no se reconoce
Ejecutar:
npm install

❌ La app no carga productos
Verifica que el backend esté funcionando en localhost:8080.

❌ Error de CORS
Reinicia backend + frontend.
Confirmar que las rutas estén bien configuradas.

📄 Observación importante
Este proyecto no funcionará sin el backend.
Debes levantar ambos para tener la aplicación operativa.

¡Frontend listo! 🐾
