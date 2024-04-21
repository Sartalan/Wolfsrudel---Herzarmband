# Anteproyecto

* * *

## Recorrido General de la Realización del Proyecto:

Jorge Fariña, Gabriel Dominguez y Alan Barrera, estaremos realizando en simultáneo un proyecto que resumidamente consiste en un brazalete con un display que leerá nuestro pulso y presión cardíaca. Ese es el proyecto por ahora, con el tiempo irá mejorando a base de Anexos.

### **Descripción especifica:**

### _Brazalete:_

* Exterior: La parte exterior de la muñequera será hecha con Elástico (Como Spandex o Elastano) y a su vez tendrá adherida una tela previamente enviada a bordar con el logo de un lobo
* Interna: La parte interna de la muñequera se ensambrará a la parte superior (con botones y tela adhesiva). La misma siempre será retirable cuando uno se saque la muñeca. Se compondrá principalmente de (Microfibra - Poliéster) Al ser un material de baja absorción de agua y buena ventilación por aire.
* Independientemente de su material, el circuito de igual forma tendrá un forrado de plástico (o cualquier material aislante) para garantizar su seguridad.

### Logo

+ El Bordado que se le piensa añadir al brazalete hace referencia al nombre de la empresa para una mayor consistencia, y será el siguiente:

![Wolfsrudel Logo](/img/icon.jpg)

### Bocetos:

+ | Imagen |

### _Software:_

### App:

* La App será creada en React Native y consistirá de una barra de navegación superior con dos secciones distintas: una que mostrará el pulso cardíaco por pantalla de X individuo junto a su foto asignada y, la otra dará una lista de personas a elegir para mostrar en la sección antes nombrada.

Para una mayor noción de la App, disponemos del siguiente boceto:

![](https://t9013211267.p.clickup-attachments.com/t9013211267/b61027d0-5413-445b-8cf3-699cc9ffe961/App%20Idea.png)

Como se vé: esas serán las dos secciones de la App, siendo la izquierda la primera y principal; la App siempre iniciará con esa pantalla y, la segunda, la pantalla que estará destinada a tener una lista de usuarios a elegir, que rellenarán los datos de la pantalla principal y siendo solo estos datos una foto y un nombre que preferiblemente se tratarán de guardar en un archivo json que se guardará en el telefono.

Luego, el signo de " + " abrirá una venCtana emergente que esperará un nombre y el adjunte de una imagen.

### Sección Principal:

![](https://t9013211267.p.clickup-attachments.com/t9013211267/8c265ed6-d4d6-4afd-bef1-d6b2ed21542c/App%20One.png)

### Sección Secundaria | Lista

![](https://t9013211267.p.clickup-attachments.com/t9013211267/48dbf013-6bed-495d-bb6b-ec0ac29ee52e/App%20Two%20.png)

* * *

### Script:

* Con Script hago referencia al código general del funcionamiento del brazalete, y éste consistirá, principalmente, de un código que se encargue de crear un menu de estilo carrousel que se encargue de mostrar datos en pantalla, ya sea el pulso, la hora, el nivel de bateria, etc.

Su diseño se piensa así para ser intuitivo y ser fácilmente utilizable con un único botón que se encargará de simplemente desplazar pantallas.

¿A qué me refiero con "carrousel"? Básicamente a una UI que funcione de la siguiente manera:

![](https://t9013211267.p.clickup-attachments.com/t9013211267/c40dbaa1-ef9a-403b-a104-bff346d8625a/carousel-ads.gif.original.gif)

Lo ídoneo a lo que pensamos llegar es a crear una UI que en el HUB superior contenga el nivel de bateria y la hora; mientras que, en la inferior exista este "carrousel" que irá cambiando entre ventanas que serán ídoneamente una función de código que pueda reutilizarse y esté bien documentada para que, sí quisiemos nosotros o alguien más implementar éste código, ya sea para crear Anexos del proyecto o, simplemente utilizar este código: sea sencillo de reutilizar.

---

## Hardware:

+ De parte del Hardware se espera lograr un circuito con integración SMD y muy posible integración de Flex para garantizar un tamaño altamente reducido del circuito y así maximizar el uso del espacio.
  
  Se espera que este tenga un ESP32 como microcontrolador principal, un circuito integrado para la medición continúa de la hora, un circuito integrado para la carga de bateria y a su vez una entrada de alimentación para ello que será un micro usb, luego un sensor que será un pulsíoximetro que mostrará sus valores por un display oled. 

---

### Componentes Totales:

1. ESP32            | Microcontrolador Principal   
2. TC4056          | Cargador para Batería
3. Max30100     | Pulsioxímetro
4. SSD1306 I2C | Display Oled

#### Precios en USD:

1. ESP32                 |  10$

2. TC4056               | 2.5$

3. Max30100          | 7.5$

4. SSD1306             | 9$

#### Precio Total:

## [ **29$** ]

* * *