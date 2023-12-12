---
sidebar_position: 2
---

# ii. Adding Secrets to Cluster

Create namespaces and secrets:

```bash
kubectl create ns backend 
kubectl create ns ui 
kubectl create ns keycloak 
kubectl create ns minio
kubectl create secret tls prod-tls --namespace keycloak --key ~/server.key  --cert ~/server.crt
kubectl create secret tls prod-tls --namespace ui --key ~/server.key  --cert ~/server.crt
kubectl create secret tls prod-tls --namespace backend --key ~/server.key  --cert ~/server.crt
kubectl create secret tls prod-tls --namespace minio --key ~/server.key  --cert ~/server.crt
```