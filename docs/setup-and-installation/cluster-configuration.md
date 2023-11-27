---
sidebar_position: 2
---

# 2. Cluster Configuration

Once you've ensured that your system meets the requirements, the next step is configuring your cluster for robolaunch. The configuration process varies based on your deployment environment. Follow the guidelines below for both public cloud and on-premise installations.

## 2.1 Public Cloud
*Note: As of now, the public cloud deployment option specifically covers AWS (Amazon Web Services). Support for additional public cloud providers will be introduced in future updates.*

### Amazon Web Services (AWS)

1. **Compute Resources:** Set up virtual machines (VMs) on AWS EC2 instances with the required specifications, ensuring sufficient CPU and memory resources.
2. **Storage:** Configure AWS S3 or other suitable storage solutions for storing datasets, models, and project-related data.
3. **Networking:** Establish a Virtual Private Cloud (VPC) with the necessary network configurations, security groups, and subnets.
4. **GPU Support:** Select EC2 instances with GPU support to leverage robolaunch's GPU-powered performance.
5. **Container Registry:** Utilize AWS Elastic Container Registry (ECR) or another container registry for storing and managing container images.

## 2.2 On-premise

### Hardware Configuration

1. **Compute Resources:** Set up physical or virtual servers with sufficient processing power for AI/ML and robotics applications.
2. **Storage:** Configure on-premise storage solutions for datasets, models, and project-related data.
3. **Networking:** Establish a local network with the necessary configurations for communication between components.
4. **GPU Support:** If applicable, install compatible GPUs in on-premise servers for GPU-powered performance.
5. **Container Registry:** Set up a container registry (e.g., Quay) to store and manage container images.

### Software Configuration

1. **Operating System:** Install a compatible Linux distribution (e.g., Ubuntu 18.04, CentOS 7) on on-premise servers.
2. **Docker:** Ensure Docker is installed on your on-premise servers for containerization.

Follow the respective guidelines for your deployment environment to configure your cluster successfully.
