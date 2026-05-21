WebComponents — Dashboard

Mini dashboard con 4 componentes propios conectados entre sí.


Qué puedes cambiar

Tarjeta de usuario (`index.html`)
```html
<user-card
  name="Alonso"    
  role="Profesor"  
  avatar="">   
</user-card>
```

 Mensaje del botón (`UserCard.js`, línea 20)
```js
mensaje: `Hola! Soy ${this.name} — ${this.role}`
```
Cambia el texto como quieras.

 Ciudad del clima (`WeatherTime.js`, línea 1)
```js
const URL_API = "https://goweather.xyz/v2/weather/liberia+guanacaste";
```
Cambia `liberia+guanacaste` por otra ciudad, por ejemplo `san+jose+costa+rica`.

Texto del badge (`index.html`)
```html
<warning-badge pulsing>Sesión por expirar</warning-badge>
```
Cambia el texto. Quita `pulsing` si no quieres la animación.

Cuánto dura visible el mensaje (`WarningBadge.js`, línea 37)
```js
}, 3000); // 3000 = 3 segundos
```
Súbelo o bájalo a tu gusto.