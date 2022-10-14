# Nextskeleton

## Descripción

Proyecto desarrollado en el framework Nextjs destinado a ser el template oficial para la implemencación de todas las aplicaciones web del lado del cliente (Front end) de la corporación.

Contempla un estandar previamente aprobado por el equipo de diseño, donde se suministran tamaños de tipografia, colores y un uikit de componentes e iconos que se reutilizan en todos los productos de la empresa, logrando de esta manera tener siempre una misma identidad corporativa en todos los desarrollos.

## Development server

El manejador de paquetes utilizado es yarn, asi que todas las librerias que se necesiten instalar en el futuro debe ser bajo este manejador de paquetes.

Para correr el proyecto debemos ejecutar los siguientes comandos:

- yarn install para instalar las dependencias del proyecto
- yarn dev para correr el proyecto (Por defecto, corre en el puerto 3000)

El proyecto trae por default un archivo .env el cual contiene la variable de entorno donde se declara el servidor del backend. En este archivo declaramos todas las variables de entorno adicionales necesarias para el funcionamiento el proyecto.

IMPORTANTE: Es necesario agregar en el archivo .gitignore los archivos .env que se utilicen en el proyecto.

## Git flow

Usaremos tres ramas:

- main: Rama donde se encuentra la version del proyecto que esta en producción.
- develop: Rama donde se encuentra la ultima versión aprobada del desarrollo del producto.
- staging: Rama donde se encuentra las versiones que necesitan ser probadas por CTO, QA, desarrolaldores o stakeholders

Para subramas, usaremos los siguientes prefijos:

- feature/nombre de la rama: Representa el desarrollo de un nuevo feature
- hotfix/nombre de la rama: Representa un parche o corrección que va orientado hacia la rama que esta en producción
- bugfix/nombre de la rama: Representa la corrección de un bug.
- release/versión: Representa el desarrollo que va a pasar a la rama main (Producción)

EL proceso de merge a las ramas se hace de la siguiente manera:

- Se define el feature/hotfix/bugfix/release a desarrollar. Este debe ser concreto y no debe contener desarrollos de otro feature, de esta manera lo mantenemos pequeño y facil de auditar (code review).
- Se solicita un PR hacia la rama develop donde los demas compañeron revisarán y aporbaran el merge.
- Merge hacia develop

Para crear una nueva rama, siempre debe ser contra develop y antes de solicitar un PR, se debe actualizar contra develop (git pull origin develop) la rama en cuestion.

## Deploy

El proyecto cuenta con CI/CD en las siguientes ramas.

- main: Un push en main, hace un deploy automatico al entorno de producción
- staging: Un push en staging, hace un deploy automatico al entorno de staging (Pruebas)

# Dependencias

El proyecto cuenta con dependencias pre establecias que junto con React, nos hace el trabajo facil de realizar. En vista que algunas funcionalidades del uikit dependen de estas dependencias, el uso de las mismas es obligatorio. De esta manera garantizamos tener siempre un mismo patron de desarrollo.

Lista de dependencias:

- Typescript: Superset de javascript para tipar la logica del desarrollo.
- React query: Libreria para el manejos de las preticiones http.
- React hook form: Libreria para el manejo de formularios.
- Tailwind: Framework css para el manejo de estilos de los componentes.
- Ant design: libreria de componentes basados en react.
- Sass: Preprocesador para la gestion de estilos css

Sin embargo, esto no limita que no puedas usar otras dependencias que el producto pueda requerir.

## ESLint y prettier

El proyecto ya viene definido con reglas para el desarrollo y estilos de escritura. Por esta razon es necesario que instales Eslint y prettier en tu editor de codigo. Estas reglas las puedes encontrar en los archivos .prettierrc y .eslintrc

## Absolute imports

EL proyecto cuenta con absolute imports, asi que no sera necesario usar '../../assets/images', en vez de esto usaremos 'assets/images'.

## Estructura de carpetas

- assets: Contiene todos los recursos como imagenes, tipografías, estilos y el uikit.
- assets/images: Contiene todas las imagenes del proyectos ordenados en sub carpetas
- assets/styles: Contiene toda la estructura de los archivos scss para el manejo de estilos de la aplicación.
- assets/Uikit: Contiene todo los compnentes reutilizables que estan establecidos en el design system del equipo de diseño.
- commons: Continene todos los recursos reutilizables que se repiten en mas de un componente del desarrollo. Si el desarrolo de un componente requiere el uso de clases de css, se debe crear un archivo .scss en la carpeta assets/styles/components y alli colocar todos los estilos que este componente requiera.
- components: Segun exista un archivo en pages que representa una vista de la app, en components debe existir una carpeta llamada con el mismo nombre de la vista y alojar alli todos los componentes que componen la vista.
- context: se agregan todos los contextos que se usan en el desarrollo.
- hook: se agregan todos los custom hooks que se usan en el desarrollo.
- hooks/request: Contiene todos los custom hooks usados para hacer pretiones http con react query
- layouts: Contiene los componentes de tipo layout como headers, footers, sidebars etc.
- models: Contiene todas las interfaces con tipado de las entidades que se usaran en el desarrollo.
- pages: Contiene todas las vistas principales del desarrollo. Cada vista debe ser desglozada en subcomponentes que se alojan en un carpeta con el mismo nombre de la vista en la carpeta components. Si el desarrolo de la vista requiere el uso de clases de css, se debe crear un archivo .scss en la carpeta assets/styles/pages y alli colocar todos los estilos que este componente requiera.
- utils: contiene utilidades que ayudan a abstraer las reglas de negocio del desarrollo.
- utils/apiclient.ts: Es un middleware que usa los hooks de react query para funcionar correctamente.
- utils/enpoints.ts: Contiene todos los enpoints utilozados en el desarrollo.

NOTA: Todas las carpetas a excepción de assets solo pueden contener una sub carpeta como maximo.

## Context Api

El manejo de estados globales se realizara con context api de react. Como regla, cada contexto debe ser consumido a traves de un custom hook y nunca directamente desde el contexto. De esta manera reducimos la cantidad de imports y tenemos un codigo mas legible

## Tipografía

El proyecto por default tiene cargada la fuente Titilliun Web y se usa a través del cdn de google font. Si el producto requiere otra fuente, la puedes cambiar en el archivo \_document.tsx en la sección de <Head> y en assets/styles/base/\_html-core.scss, declaras la tipografia en la variable $primary-font

# Informacion adicional relacionada con Nextjs

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
