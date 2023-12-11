---
sidebar_position: 7
---

# vii. Deploying MinIO

Update MinIO values:

```bash
nano ~/robolaunch/minio/values.yaml
```

```yaml
nameOverride: ""
fullnameOverride: ""
clusterDomain: cluster.local
image:
  repository: quay.io/robolaunchio/minio
  tag: RELEASE.2023-11-15T20-43-25Z
  pullPolicy: IfNotPresent
mcImage:
  repository: quay.io/robolaunchio/mc
  tag: RELEASE.2023-11-10T21-37-17Z
  pullPolicy: IfNotPresent
mode: standalone
rootUser: "admin"
rootPassword: "7OA9vjUd912sM1WxrnxU"
persistence:
  enabled: true
  storageClass: "openebs-hostpath"
  accessMode: ReadWriteOnce
  size: 5Gi
service:
  type: NodePort
  port: "9000"
  nodePort: 32000
ingress:
  enabled: true
  ingressClassName: "nginx"
  annotations:
    nginx.ingress.kubernetes.io/proxy-buffer-size: 16k
    nginx.ingress.kubernetes.io/rewrite-target: /$1
    nginx.ingress.kubernetes.io/use-regex: "true"
  path: /(.*)
  hosts:
    - robolaunch-storage.robolaunch.internal
  tls:
  - secretName: prod-tls
    hosts:
      - robolaunch-storage.robolaunch.internal
consoleService:
  type: NodePort
  port: "9001"
  nodePort: 32001
consoleIngress:
  enabled: true
  ingressClassName: "nginx"
  annotations:
    nginx.ingress.kubernetes.io/proxy-buffer-size: 16k
    nginx.ingress.kubernetes.io/rewrite-target: /$1
    nginx.ingress.kubernetes.io/use-regex: "true"
    nginx.ingress.kubernetes.io/proxy-body-size: 900m
  path: /(.*)
  hosts:
    - robolaunch-storage.robolaunch.internal
  tls:
  - secretName: prod-tls
    hosts:
      - robolaunch-storage.robolaunch.internal
resources:
  requests:
    memory: 1Gi
buckets:
  - name: robolaunch-bucket
    policy: public
    purge: false
    versioning: false
    objectlocking: false
environment:
  MINIO_CONSOLE_SUBPATH: "/"
  MINIO_BROWSER_REDIRECT_URL: "https://robolaunch-storage.robolaunch.internal/"
```

Deploy MinIO with Helm:

```bash
helm upgrade --install \
  minio ~/robolaunch/minio/minio-5.0.13.tgz \
  --namespace minio \
  --create-namespace \
  -f ~/robolaunch/minio/values.yaml
```

Create and store an access key and a secret key from MinIO for backend properties `quarkus.minio.accessKey` and `quarkus.minio.secretKey`.

**SCREENSHOT**

Add `platform.yaml` to `robolaunch-bucket`. → https://raw.githubusercontent.com/robolaunch/robolaunch/main/platform.yaml

**SCREENSHOT**

Add `tls.crt` and `tls.key` to `robolaunch-bucket`.

**SCREENSHOT**