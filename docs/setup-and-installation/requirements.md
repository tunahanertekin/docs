---
sidebar_position: 1
---

# 1. Requirements

Before you embark on the installation of robolaunch, it's crucial to ensure that your system meets the necessary prerequisites. The following requirements ensure a smooth deployment and optimal performance of the platform:

## 1.1 Hardware Requirements

- **Compute:** A system with sufficient processing power to handle the computational demands of AI/ML and robotics applications.
- **Storage:** Adequate storage capacity for storing datasets, models, and other project-related data.
- **Networking:** A stable and high-speed network connection for efficient communication between components.
- **GPU:** A compatible GPU with CUDA support is required for leveraging GPU-powered performance. Refer to the documentation for the list of supported GPUs.

## 1.2 Software Requirements

- **Operating System:** Robolaunch is compatible with Linux distributions. Currently supported versions include Ubuntu 18.04 and CentOS 7.
- **Docker:** Ensure that Docker is installed on your system. Robolaunch utilizes containerization for efficient deployment.

## 1.3 Network Requirements

- **Internet Connectivity:** A reliable internet connection is necessary for initial setup, updates, and accessing cloud-based resources.

## 1.4 Container Registry and Images (Quay)

- **Container Registry:** Set up a container registry such as Quay.io to store and manage container images used by robolaunch.

## 1.5 Code and Helm Chart Repositories

- **Code Repository:** A version control system (e.g., Git) to store and manage the source code of your AI/ML and robotics projects.
- **Helm Chart Repository:** A repository for Helm charts to facilitate the deployment and management of Kubernetes applications.

## 1.6 AuthN/AuthZ - Users/Groups (Organizations) usage in K8S

- **Authentication and Authorization:** Establish a robust authentication and authorization system for Kubernetes, managing users, groups, and organizations.

## 1.7 CI/CD

- **Continuous Integration and Continuous Deployment (CI/CD):** Implement a CI/CD pipeline to automate the testing and deployment of your applications on robolaunch.

## 1.8 Certificates

- **SSL/TLS Certificates:** Secure the communication within robolaunch by configuring SSL/TLS certificates.

## 1.9 Compliance (Vulnerability Test)

- **Compliance Check:** Perform vulnerability tests and ensure compliance with security standards to safeguard your robolaunch environment.

Ensure that your system meets these requirements to guarantee a successful installation and a seamless experience with robolaunch.
