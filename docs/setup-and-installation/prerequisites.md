---
sidebar_position: 1
---

# Prerequisites

Before you embark on the installation of robolaunch, it's crucial to ensure that your system meets the necessary prerequisites. The following requirements ensure a smooth deployment and optimal performance of the platform:

## 1.1 Hardware Requirements

Here are the minimum hardware requirements for on premise setup of robolaunch Cloud AI/ML Platform:

- An Ubuntu 22.04 server for control plane
    - 4 vCPU
    - 16 GiB memory
    - 512 GB storage
- An Ubuntu 22.04 server for data plane
    - 4 vCPU
    - 16 GiB memory
    - 512 GB storage
    - a GPU with compute mode enabled 


:::warning

Remember that control plane and data plane instances should be reachable to each other from either over internal network or internet.

:::

## 1.2 Container Registry and Images

You can use public images provided by robolaunch or apply mirror configuration to your custom container registry.

## 1.3 Certificates

If you use self-signed certificates, you should apply optional steps that contains special configuration for self-signed certificates in the setup docs. Otherwise you can ignore these steps.

## 1.4 Web Browser

You need a web browser to interact with robolaunch services.

:::tip

Chrome browser is recommended to consume robolaunch services for better experience.

:::