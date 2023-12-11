---
sidebar_position: 5
---

# v. Deploying Ingress-NGINX

Update Ingress-NGINX values:

```bash
nano ~/robolaunch/ingress-nginx/values.yaml
```

```yaml
controller:
  kind: DaemonSet
  hostPort:
    enabled: true
  hostNetwork: true
  dnsPolicy: ClusterFirstWithHostNet
  ingressClassResource:
    name: nginx
    enabled: true
    default: true
  image:
    registry: quay.io
    image: robolaunchio/ingress-controller
    tag: v1.8.1
    digest: ""
  admissionWebhooks:
    patch:
      image:
        registry: quay.io
        image: robolaunchio/kube-webhook-certgen
        tag: v20230407
        digest: ""
  service:
    type: NodePort
defaultBackend:
  enabled: true
  image:
    registry: quay.io
    image: robolaunchio/defaultbackend-amd64
    tag: 1.5
```

Deploy Helm chart for Ingress-NGINX:

```bash
helm upgrade --install \
  ingress-nginx ~/robolaunch/ingress-nginx/ingress-nginx-4.7.1.tgz \
  --namespace ingress-nginx \
  --create-namespace \
  -f ~/robolaunch/ingress-nginx/values.yaml
```