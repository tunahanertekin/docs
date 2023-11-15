---
sidebar_position: 1
---

# Details (Step 1)

![Details form is the form that contains all the basic settings of your application to be created.](./img/details.png)

Details form is the form that contains all the main settings and configurations of your application to be created.

### Application Name

![Application Name](./img/name.png)

You can specify the name of your application here.

### Application Categories

![Application Categories](./img/categories.png)

You can choose the application category and application here.

### GPU Models

![GPU Models](./img/gpu-models.png)

You can choose the GPU model here.

### GPU Core Count

![GPU Core Count](./img/gpu-core-count.png)

Here you can determine how many cores your application will use.

### VDI Session Count

![VDI Session Count](./img/vdi-session-count.png)

Here you can determine how many people can connect to your application's VDI service at the same time.

### Storage

![Storage](./img/storage.png)

You can determine how much storage space will be allocated for your application here.

### Configure Workspaces

![Configure Workspaces](./img/configure-workspaces.png)

If you want to specify workspaces, you can do so here.

## Advanced Settings

![Advanced Settings](./img/advanced-settings.png)

It contains advanced settings of the application such as Directories or Port.

### Persistent Directories

![Persistent Directories](./img/persistent-directories.png)

Here you can persist directorys on the application.

As in the example in the image, `/var`, `/etc`, `/opt` and `/usr` directories are added as must and default.

### Granted Directories

![Granted Directories](./img/granted-directories.png)

Here you can specify the directories that the user needs to access.

As in the example in the image, `/home/robolaunch` directory are added as must and default.

### Host Directories

![Host Directories](./img/host-directories.png)

You can link a directory on the host to the directory specified in the application here.

As in the example in the image, the /dataset directory is mounted to the /robot-dataset directory in the application.

### Custom Port Exposure From IDE

![Custom Port Exposure From IDE](./img/custom-port-ide.png)

Here you can specify the custom ports you want your application running in the IDE service to expose.

As in the example in the image, the `8077` port named `java` can be output from the `32549` port.

### Custom Port Exposure From VDI

![Custom Port Exposure From VDI](./img/custom-port-vdi.png)

Here you can specify the custom ports you want your application running in the VDI service to expose.

As in the example in the image, the `3000` port named `rjsx` can be output from the `32118` port.
