---
sidebar_position: 1
---

# Details (Step 1)
The "Application Details" form is a comprehensive set of configurations that define the main settings for creating your application. You can see the whole form in the below picture.

![Details form is the form that contains all the basic settings of your application to be created.](https://raw.githubusercontent.com/robolaunch/trademark/main/repository-media/docs/user-guide/environments/application/create-application/img/details.png)

### Application Name
Specify a unique name for your application. This name will help you easily identify and manage your applications within the robolaunch platform.

![Application Name](https://raw.githubusercontent.com/robolaunch/trademark/main/repository-media/docs/user-guide/environments/application/create-application/img/name.png)

### Application Categories
Choose the application category based on your project type. Available categories include Plain, Robotics, Simulation, and AI&ML. Selecting the appropriate category helps optimize the platform for your specific development needs.

![Application Categories](https://raw.githubusercontent.com/robolaunch/trademark/main/repository-media/docs/user-guide/environments/application/create-application/img/categories.png)

### GPU Models
Choose the GPU model that aligns with your application requirements. If MIG (Multi-Instance GPU) support is available architecturally, a minimum of 1 Core is required to create an application. Otherwise, 2 Cores are always needed.

![GPU Models](https://raw.githubusercontent.com/robolaunch/trademark/main/repository-media/docs/user-guide/environments/application/create-application/img/gpu-models.png)

### GPU Core Count
Determine the number of GPU cores your application will use. The available cores depend on the selected GPU model. The chosen core count should not exceed the maximum number of cores supported by the selected GPU model.

![GPU Core Count](https://raw.githubusercontent.com/robolaunch/trademark/main/repository-media/docs/user-guide/environments/application/create-application/img/gpu-core-count.png)

### VDI Session Count
Specify the number of simultaneous connections allowed to your application's Virtual Desktop Infrastructure (VDI) service. This parameter controls the accessibility of your application to multiple users.

![VDI Session Count](https://raw.githubusercontent.com/robolaunch/trademark/main/repository-media/docs/user-guide/environments/application/create-application/img/vdi-session-count.png)

### Storage
Allocate the desired amount of storage space for your application. This setting determines the storage capacity available for your project's files, data, and related resources.

![Storage](https://raw.githubusercontent.com/robolaunch/trademark/main/repository-media/docs/user-guide/environments/application/create-application/img/storage.png)

### Configure Workspaces
If needed, define specific workspaces for your application. Workspaces are customizable environments within your application that cater to different development or project requirements.

![Configure Workspaces](https://raw.githubusercontent.com/robolaunch/trademark/main/repository-media/docs/user-guide/environments/application/create-application/img/configure-workspaces.png)

## Advanced Settings
Access advanced settings for your application, such as directories or ports. Fine-tune configurations to meet specific needs related to your project's file structure or communication ports.

![Advanced Settings](https://raw.githubusercontent.com/robolaunch/trademark/main/repository-media/docs/user-guide/environments/application/create-application/img/advanced-settings.png)

### Persistent Directories
Specify directories that should persist within the application. Common directories, such as /var, /etc, /opt, and /usr, can be added as default or mandatory persistent directories.

![Persistent Directories](https://raw.githubusercontent.com/robolaunch/trademark/main/repository-media/docs/user-guide/environments/application/create-application/img/persistent-directories.png)

### Granted Directories
Define directories that users need access to within the application. For instance, /home/robolaunch can be set as a must-have and default directory.

![Granted Directories](https://raw.githubusercontent.com/robolaunch/trademark/main/repository-media/docs/user-guide/environments/application/create-application/img/granted-directories.png)

### Host Directories
Link a directory on the host to a directory specified in the application. This feature allows seamless integration of external directories into the application's file system. 

![Host Directories](https://raw.githubusercontent.com/robolaunch/trademark/main/repository-media/docs/user-guide/environments/application/create-application/img/host-directories.png)

### Custom Port Exposure From IDE
Specify custom ports for your application when running in the Integrated Development Environment (IDE) service. This allows you to expose specific ports, such as 8077 for Java in the provided example.

![Custom Port Exposure From IDE](https://raw.githubusercontent.com/robolaunch/trademark/main/repository-media/docs/user-guide/environments/application/create-application/img/custom-port-ide.png)

### Custom Port Exposure From VDI
Specify custom ports for your application when running in the Virtual Desktop Infrastructure (VDI) service. This enables you to expose designated ports, like 3000 for rjsx in the provided example.

![Custom Port Exposure From VDI](https://raw.githubusercontent.com/robolaunch/trademark/main/repository-media/docs/user-guide/environments/application/create-application/img/custom-port-vdi.png)

Feel free to review and adjust these configurations to tailor your application environment according to the unique needs of your project. Once you have finalized the settings, proceed with confidence, knowing that your application is configured to deliver optimal performance and functionality within the robolaunch platform.