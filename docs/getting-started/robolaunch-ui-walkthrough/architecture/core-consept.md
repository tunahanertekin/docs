---
sidebar_position: 1
---

# Core Consept

Architectural components of robolaunch are defined below.

- **robolaunch Management Suite** - contains management console and components

  - **robolaunch Management Console** - subcomponent of management suite that contains orchestrator and UI
    - **robolaunch Orchestrator** - backend that orchestrates platform operations using workflow engine
    - **robolaunch UI** - frontend that enables performing platform capabilities via user interface
  - **robolaunch Management Components** - subcomponent of management suite that contains other open-source management tools

- **robolaunch Kubernetes Infrastructure** - Kubernetes infrastructures for central cloud, regional cloud and edge cloud

  - **robolaunch Super Cloud Instance** - Kubernetes cluster which is the control plane of cloud instances (virtual clusters)
  - **robolaunch Cloud Instance (Virtual Cluster)** - tenant Kubernetes cluster that contains fleets of robots in a region

- **robolaunch Kubernetes Operators**
  - **robolaunch Robot Operator** - software that does decomposition, regional distribution, lifecycle management and configuration of ROS-based robots in cloud-only, cloud-powered or cloud-connected modes
  - **robolaunch Robot** - contains ROS components (Runtime Pod, VDI, Code Server IDE, ROS Tracker, Foxglove Studio, ROS Bridge Suite, Configurational Resources), robolaunch Robot instances can be decomposed and distributed to both cloud instances and physical robots using federation
  - **robolaunch Fleet Operator** - software that manages lifecycle and configuration of multiple robots and robot's connectivity layer that contains DDS Discovery Server and ROS Bridge Suite
  - **robolaunch Fleet** - contains multiple robot deployments across multiple physical robots and cloud instances using federation

#### Glossary

- **Fleet Namespace** - corresponds to a federated Kubernetes namespace in a cloud instance which is abstractly matched with a fleet
- **Robot Namespace** - corresponds to a federated Kubernetes namespace in edge (physical robot), contains a physical member of fleet
- **Cloud Infrastructure (AWS)** - corresponds common cloud infrastructure on AWS
- **Physical Robot** - corresponds a physical robot and it's components
- **Robot Infrastructure** - corresponds common robot infrastructure
