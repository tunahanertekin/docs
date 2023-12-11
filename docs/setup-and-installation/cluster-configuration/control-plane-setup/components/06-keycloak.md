---
sidebar_position: 6
---

# vi. Deploying & Configuring Keycloak

Update Keycloak values:

```bash
nano ~/robolaunch/keycloak/values.yaml
```

```yaml
image:
  repository: quay.io/robolaunchio/keycloak
  tag: "22.0"
  digest: ""
  pullPolicy: IfNotPresent
terminationGracePeriodSeconds: 60
clusterDomain: cluster.local
command:
- "/opt/keycloak/bin/kc.sh"
- "start"
- "--http-enabled=true"
- "--http-port=8080"
- "--hostname=robolaunch-identity.robolaunch.internal"
extraEnv: |
  - name: KEYCLOAK_ADMIN
    value: admin
  - name: KEYCLOAK_ADMIN_PASSWORD
    value: 7OA9vjUd912sM1WxrnxU
  - name: JAVA_OPTS_APPEND
    value: >-
      -Djgroups.dns.query={{ include "keycloak.fullname" . }}-headless
ingress:
  enabled: true
  ingressClassName: "nginx"
  servicePort: http
  annotations:
    nginx.ingress.kubernetes.io/affinity: cookie
    nginx.ingress.kubernetes.io/affinity-mode: persistent
    nginx.ingress.kubernetes.io/proxy-buffer-size: 16k
    nginx.ingress.kubernetes.io/proxy-buffers-number: "4"
  labels: {}
  rules:
    -
      host: 'robolaunch-identity.robolaunch.internal'
      paths:
        - path: '{{ tpl .Values.http.relativePath $ | trimSuffix "/" }}/'
          pathType: Prefix
  tls:
    - hosts:
        - robolaunch-identity.robolaunch.internal
      secretName: "prod-tls"
  console:
    enabled: true
    ingressClassName: "nginx"
    annotations:
      nginx.ingress.kubernetes.io/affinity: cookie
      nginx.ingress.kubernetes.io/affinity-mode: persistent
      nginx.ingress.kubernetes.io/proxy-buffer-size: 16k
      nginx.ingress.kubernetes.io/proxy-buffers-number: "4"
    rules:
      -
        host: 'robolaunch-identity.robolaunch.internal'
        paths:
          - path: '{{ tpl .Values.http.relativePath $ | trimSuffix "/" }}/admin'
            pathType: Prefix
    tls:
     - hosts:
         - robolaunch-identity.robolaunch.internal
       secretName: "prod-tls"
dbchecker:
  enabled: true
  image:
    repository: quay.io/robolaunchio/busybox
    tag: 1.32
database:
  vendor: postgres
  hostname: postgresdb
  port: 5432
  username: admin
  password: 7OA9vjUd912sM1WxrnxU
  database: keycloakDb
extraVolumeMounts: '[{"name": "host-mount", "mountPath": "/opt/keycloak/themes/robolaunch"}]'
extraVolumes: '[{"name": "host-mount", "hostPath": {"path": "/root/robolaunch/keycloak/theme/robolaunch"}}]'
```

Deploy namespace and Postresql:

```bash
kubectl apply -f ~/robolaunch/keycloak/postgresql.yaml -n keycloak
```

Deploy Keycloak with Helm:

```bash
helm upgrade --install \
  keycloak ~/robolaunch/keycloak/keycloakx-2.2.2.tgz \
  --namespace keycloak \
  --create-namespace \
  -f ~/robolaunch/keycloak/values.yaml
```

Open the user interface of Keycloak. Go to https://robolaunch-identity.robolaunch.internal/auth Import the realm. → (https://github.com/robolaunch/on-premise/releases/download/0.1.2-prerelease.10/robo-realm.json)

**SCREENSHOT**

Create a tester user with email verified. Set credentials as not temporary.

**SCREENSHOT**

**SCREENSHOT**

Go to robo-realm → Clients → gatekeeper → Credentials, then regenerate the client secret and store for backend’s property `quarkus.oidc.client.credentials`.

**SCREENSHOT**