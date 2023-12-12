---
sidebar_position: 1
---

# Prerequisites

An Ubuntu 22.04 instance and `root` permissions are needed for the data plane setup. Additionally, data plane needs a control plane to connect. Before deploying components, you need to satisfy these requirements.

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

Put the certificate authority data to the root directory. Apply the `ca.crt` if the certificates are self-signed.

```bash
# add and apply the certificates if your certificates are self signed
touch ca.crt 
cp ca.crt /usr/local/share/ca-certificates
update-ca-certificates
```