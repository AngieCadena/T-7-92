# T-7-92 - Smile Bang Page

<img width="1621" alt="Screen Shot 2021-09-16 at 10 19 56 PM" src="https://user-images.githubusercontent.com/51678086/133718884-784021aa-4a4e-4175-96d0-9b261cd2dee1.png">


> Repositorio destinado a la creación y paulatino desarrollo del proyecto del grupo 7 de MINTIC 2022.

Smile Bang es una banda de rock para niños creada por profesores de música. Próximamente lanzarán su primer disco. No cuentan con página de internet, sin embargo sí tienen redes sociales activas y realizan con frecuencia actividades que le dan vida a la banda.

## Contribuciones
### Clonar repositorio

```git clone https://github.com/AngieCadena/T-7-92.git ```

### Crear nueva rama

Antes de realizar una contribución debemos tener actualizada nuestra rama main:

```git pull origin main```

Actualizado nuestro repositorio local, creamos la rama:

```git checkout -b [nombre de la rama]```

<img width="400" alt="Screen Shot 2021-09-16 at 8 58 24 PM" src="https://user-images.githubusercontent.com/51678086/133716502-62ef9156-982a-4013-8a9e-fded70a0f6f4.png">

> **Nota**: las ramas se crearán bajo la siguiente nomenclatura:
> `v+[número de versión]+[ID de la tarea]+[nombre de la contribución/tarea]`. 
> Es decir, si voy a crear la primera versión del navbar la rama se llamaría:
> `v1.0-3.1-navbar`.

### Subir contribución

- Terminada nuestra contribución, nos dirigimos al controlador de versiones de git en el Visual Studio Code y damos click en +(Stage Changes):

<img width="400" alt="Screen Shot 2021-09-16 at 9 01 50 PM" src="https://user-images.githubusercontent.com/51678086/133716682-1f8a57be-9925-4333-a74b-4082e57b3ee2.png">

- Escribirmos un mensaje para describir el cambio o contribución estamos haciendo y damos Ctrl+Enter (En windows o Linux) o cmd+Enter (En mac):

<img width="400" alt="Screen Shot 2021-09-16 at 9 03 54 PM" src="https://user-images.githubusercontent.com/51678086/133716868-a7269e63-007f-4f98-bb1e-08f25a2dcb77.png">

- Subimos la rama al repositorio:

```git push origin [nombre de la rama]```

- Al hacer el push, git nos creará un link para realizar el pull request

<img width="400" alt="Screen Shot 2021-09-16 at 9 04 43 PM" src="https://user-images.githubusercontent.com/51678086/133716944-c384dd56-1e83-4580-bf11-07bf4ccc0a2f.png">


## Pull request

- Una vez abrimos el link agregamos título, descripción y un screenshot como evidencia de la contribución que hacemos:

<img width="400" alt="Screen Shot 2021-09-16 at 9 07 41 PM" src="https://user-images.githubusercontent.com/51678086/133714722-ec6495b8-bf55-4c61-8a21-6b61ac90e46b.png">

- Compartimos el link del pull request en el grupo de whatsApp **para que otro compañero revise los cambios y, si no encuentra incongruencias, lo acepta**.

Revisamos en la pestaña `Changed files`

<img width="400" alt="" src="https://user-images.githubusercontent.com/51678086/133715696-16ddde49-e867-49d0-8cf7-29fea8f9946a.jpeg">

Aceptamos el pull request

<img width="400" alt="" src="https://user-images.githubusercontent.com/51678086/133715585-7defbacb-2146-4064-8f40-f69a3bb8c2a4.jpeg">

### Descargar actualizaciones de la rama main

Para cambiar de una rama específica a la rama main:

```git checkout main```

Para descargar las últimas actualizaciones:

```git pull origin main```

<img width="400" alt="" src="https://user-images.githubusercontent.com/51678086/133717260-2224b974-6978-4840-88c4-de723bd7f050.png">

