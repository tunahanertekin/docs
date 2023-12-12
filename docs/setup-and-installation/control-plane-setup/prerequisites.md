---
sidebar_position: 1
---

# Prerequisites

An Ubuntu 22.04 instance and `root` permissions are needed for the control plane setup. Before deploying components, you need to satisfy these requirements.

Make sure that the required packages are up to date.

```bash
apt-get update
apt-get upgrade -y
apt-get dist-upgrade -y
apt-get install -y \
  unzip \
  curl \
  wget \
  git \
  jq \
  openssl
mkdir ~/robolaunch
```

Put the certificates (both CA and wildcard) to root directory. Apply the `ca.crt` if the certificates are self-signed.

```bash
# add and apply the certificates if your certificates are self signed
touch ca.crt 
touch server.crt
touch server.key
cp ca.crt /usr/local/share/ca-certificates
update-ca-certificates
```

Create file structure and download artifacts:

```bash
mkdir -p \
  ~/robolaunch/tools \
  ~/robolaunch/coredns \
  ~/robolaunch/metrics-server \
  ~/robolaunch/openebs \
  ~/robolaunch/ingress-nginx \
  ~/robolaunch/keycloak \
  ~/robolaunch/minio \
  ~/robolaunch/backend/data \
  ~/robolaunch/ui

touch \
  ~/robolaunch/coredns/values.yaml \
  ~/robolaunch/metrics-server/values.yaml \
  ~/robolaunch/openebs/values.yaml \
  ~/robolaunch/ingress-nginx/values.yaml \
  ~/robolaunch/keycloak/values.yaml \
  ~/robolaunch/minio/values.yaml \
  ~/robolaunch/backend/deployment.yaml \
  ~/robolaunch/backend/ingress.yaml \
  ~/robolaunch/backend/data/application.properties \
  ~/robolaunch/ui/deployment.yaml \
  ~/robolaunch/ui/ingress.yaml

export RELEASE=0.1.2-prerelease.10

wget -P ~/robolaunch/tools https://github.com/robolaunch/on-premise/releases/download/$RELEASE/k3s-1.27.4.sh
wget -P ~/robolaunch/tools https://github.com/robolaunch/on-premise/releases/download/$RELEASE/helm-v3.12.3-linux-amd64.tar.gz
wget -P ~/robolaunch/coredns https://github.com/robolaunch/on-premise/releases/download/0.1.2-prerelease.10/coredns-1.24.5.tgz
wget -P ~/robolaunch/metrics-server https://github.com/robolaunch/on-premise/releases/download/0.1.2-prerelease.10/metrics-server-3.11.0.tgz
wget -P ~/robolaunch/openebs https://github.com/robolaunch/on-premise/releases/download/$RELEASE/openebs-3.8.0.tgz
wget -P ~/robolaunch/ingress-nginx https://github.com/robolaunch/on-premise/releases/download/$RELEASE/ingress-nginx-4.7.1.tgz
wget -P ~/robolaunch/keycloak https://github.com/robolaunch/on-premise/releases/download/$RELEASE/keycloakx-2.2.2.tgz
wget -P ~/robolaunch/minio https://github.com/robolaunch/on-premise/releases/download/$RELEASE/minio-5.0.13.tgz
wget -P ~/robolaunch/keycloak/theme https://github.com/robolaunch/on-premise/releases/download/$RELEASE/robolaunch-keycloak-theme.zip
wget -P ~/robolaunch/keycloak https://github.com/robolaunch/on-premise/releases/download/$RELEASE/postgresql.yaml
wget -P ~/robolaunch/keycloak https://github.com/robolaunch/on-premise/releases/download/$RELEASE/robo-realm.json
wget -P ~/robolaunch/minio https://raw.githubusercontent.com/robolaunch/robolaunch/main/platform.yaml

unzip ~/robolaunch/keycloak/theme/robolaunch-keycloak-theme.zip -d ~/robolaunch/keycloak/theme
tar -zxvf ~/robolaunch/tools/helm*.tar.gz -C ~/robolaunch/tools
mv ~/robolaunch/tools/linux-amd64/helm /usr/local/bin/helm
chmod +x ~/robolaunch/tools/k3s-1.27.4.sh
```

