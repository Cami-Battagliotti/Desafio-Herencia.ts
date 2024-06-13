
Link al repo: https://github.com/TomasArno/herencia


# MODELO DE HERENCIA POR PROTOTIPOS o MODELO DE DELEGACION DE OBJETOS:

Herencia: Capacidad de heredar propiedades y metodos de otras clases.







<h1 align="center"> Herencia y Abstracción </h1>

<img src="https://imgs.search.brave.com/5sfKICabF8knDE4s0eK_tNn4tubMJSKwIh6S-fU3BKg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGFj/a2lmeS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMTIv/T09QLUNvbmNlcHRz/LUluaGVyaXRhbmNl/LTg4MXg0NDEtMS5w/bmc" />

<h2 align="center"> Abstracción </h2>

Etimológicamente, la palabra **abstracción** viene del latín _abstractio_ que significa _'separación mental de las cualidades de una cosa y de su realidad física'_. En el contexto de la **programación orientada a objetos**, se denomina abstracción al proceso mental mediante el cuál extraemos las propiedades y métodos comunes a un grupo de objetos, para posteriormente crear una clase con esas propiedades y métodos.

<h2 align="center"> HERENCIA </h2>

<img src="https://codideep.com/img/blogpost/imagenportada/201609030000001.png?x=2020-02-24_20-35-09" /> <br>

Es la capacidad que tienen las clases de heredar propiedades y métodos de otras. Teniendo en cuenta que queremos reutilizar la mayor cantidad de código posible, lo apropiado sería crear superclases que contengan todas las propiedades y métodos comunes a todas las subclases, y subclases que agreguen las variantes particulares. Así, **reutilzamos** código y **simplificamos** la aplicación.

- **Superclases |** Clase jerárquicamente superior a cualquier clase. Pueden tener cualquier número de subclases.
- **Subclases |** Clases hijas de las superclases. Pueden tener sólo una superclase.

<h2 align="center"> MODULARIZACIÓN </h2>

Es el proceso mediante el cual seccionamos el código en **módulos**, cada uno con una **responsabilidad en particular**. Esto nos permite:

- **Reutilizar** código evitando la repetición
- Más **rapidez** a la hora de programar
- **Escalabilidad**, por facilitar el agregado de módulos
- **Mantenimiento** y legibilidad
- **Depuración de errores**, facilidad para localizar el error

<h3 align="center"> ¿Cómo modularizar el código? </h3>

Dividir el programa en módulos que se encarguen de distintos aspectos, por ejemplo:

- Módulo A --> Conexiones || Clase 1, Clase 2
- Módulo B --> Interfaz de usuario || Clase 3
- Módulo C --> Comunicación entre módulos || Clase 4, Clase 5, Clase 6
- Módulo D --> Tareas varias... || Clase 7, Clase 8, Clase 9, Clase 10

<h4 align="center" style="color: steelblue;"> ¿No les resulta familiar esto? </h4>

<p align="center"><img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*Gj4EpUJAcyHgxYi7CJeloQ.png" /></p>

A la hora de construir aplicaciones que respeten el protocolo **HTTP** **Cliente-Servidor**, el patrón más usado es el **MVC**:

- Módulo MODELO --> Conexiones con la DB.
- Módulo VISTA --> Interfaz de usuario.
- Módulo CONTROLADOR --> Encargado de la comunicación entre los módulos.

<h2 align="center" style="color: tomato;"> DESAFÍO </h2>

La universidad de Harvard acaba de consultar la web de https://www.ada.dev/ pidiendo cotización por una aplicación. Ellos necesitan desarrollar un campus virtual en el que se puedan loguear distintos tipos de usuarios. Estos usuarios pueden ser profesores, alumnos o administradores.

Los usuarios tienen asociados distintos datos, y pueden realizar distintas acciones:

- Profesor:

  - Atributos: Nombre de usuario, contraseña, UUID, tipo de usuario, cantidad de materias que enseña y fecha de nacimiento.
  - Acciones: Calificar a los alumnos, login, logout, cambiar contraseña de su perfil.

- Alumno:

  - Atributos: Nombre de usuario, contraseña, UUID, tipo de usuario, cantidad de materias que cursa y fecha de nacimiento.
  - Acciones: Inscribirse a materias, login, sign out, cambiar contraseña de su perfil.

- Administrador:
  - Atributos: Nombre de usuario, contraseña, tipo de usuario y UUID.
  - Acciones: Crear nuevas materias, dar de alta alumnos y profesores, login, sign out, cambiar nombres y contraseñas de cualquier usuario.

En esta primera etapa del desarrollo, el personal de Harvard quiere solamente saber cuáles van a ser las clases que conformarán el MODELO (model.ts) de la aplicación.
Por lo que en esta primera parte, el desafío es completar el modelo con las clases necesarias para crear todos los objetos necesarios posibles. Tener en cuenta los conceptos que aprendimos.

Tienen que forkear este repo y clonarlo. Una vez que lo terminen, hagan un pull request al repo original.

---

Determinar qué objetos voy a necesitar para referenciar los datos detallados por Harvard.

- ¿Sólo vamos a necesitar objetos que referencian usuarios?
- ¿Vamos a necesitar más variedad?
- Investiguen la dependencia _'picocolors'_ de **NPM** para estilar un poco los datos de la terminal!

<h2 align="center"> LINKS </h2>

- [Herramienta para crear dibujos](https://excalidraw.com/)
- [Herencia en TypeScript](https://www.typescriptlang.org/docs/handbook/2/classes.html#extends-clauses)
- [Diagrama de ejemplo](https://excalidraw.com/#json=MxJ6CoZETmurt1bre3Ts4,1TjSgLqcf3exO6xB3Kz4JA)