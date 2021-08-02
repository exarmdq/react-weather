# react-weather

Aplicación web que muestra el estado del tiempo actual y el de los 5 días posteriores, en ciudades prefijadas. Utilizando la API de openweathermap.com

## Para ejecutarlo

El proyecto fue hecho en la última versión de `Node.js` LTS(14.17.3) y para ejecutarlo:

```
npm install # instala las dependencias
npm run start # para iniciar el proyecto
```
## A tener en cuenta
Para iniciar la aplicación es necesaria la configuración del archivo de environment, mas que nada el API_KEY de la app de clima de <a href="https://openweathermap.org/">https://openweathermap.org/</a>, en el proyecto hay un archivo con el modelo a seguir.

Para la parte del diseño se incluyó un cdn de <a href="https://bulma.io/">https://bulma.io/</a>, el cual aporta una estructura inicial, agilizando el desarrollo, se optó por esta opción ya que considero que en cualquier empresa ya se usa una base de css en la cual se trabaja. No se instalo el paquete de sass, ya que los estilos son mínimos, pero sí se tuvo en cuenta estilar con una metodología BEM.

Se realizo un deploy en <a href="https://vercel.com/">https://vercel.com/</a>, bajo la url <a href="https://react-weather-fawn.vercel.app/">https://react-weather-fawn.vercel.app/</a>
