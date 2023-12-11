---
sidebar_position: 8
---

# viii. Deploying robolaunch Backend

Every control plane needs a specific robolaunch Backend image that contains secrets from Keycloak and MinIO. If you don't have such image, please get in touch with us from info@robolaunch.io.

Edit `deployment.yaml`. Remember replacing `<ROBOLAUNCH-BACKEND-IMAGE>`: 

```bash
nano ~/robolaunch/backend/deployment.yaml
```

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend
  namespace: backend
spec:
  replicas: 1
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
      - name: backend
        image: <ROBOLAUNCH-BACKEND-IMAGE>
        imagePullPolicy: IfNotPresent
        ports:
        - containerPort: 8080
          name: http
          protocol: TCP
      dnsPolicy: ClusterFirst
      restartPolicy: Always
---
apiVersion: v1
kind: Service
metadata:
  name: backend
  namespace: backend
spec:
  ports:
  - name: http
    port: 80
    protocol: TCP
    targetPort: 8080
  sessionAffinity: ClientIP
  selector:
    app: backend
  type: NodePort
```

Edit `ingress.yaml`:

```bash
nano ~/robolaunch/backend/ingress.yaml
```

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: backend
  namespace: backend
spec:
  ingressClassName: nginx
  rules:
  - host: robolaunch-backend.robolaunch.internal
    http:
      paths:
      - backend:
          service:
            name: backend
            port:
              number: 80
        path: /
        pathType: Prefix
  tls:
  - hosts:
    - robolaunch-backend.robolaunch.internal
    secretName: prod-tls
```

Deploy robolaunch Backend deployment and ingress:

```bash
kubectl apply -f ~/robolaunch/backend/deployment.yaml
kubectl apply -f ~/robolaunch/backend/ingress.yaml
```