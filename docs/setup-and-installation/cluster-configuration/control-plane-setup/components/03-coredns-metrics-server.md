---
sidebar_position: 3
---

# iii. Deploying CoreDNS & Metrics Server

Update CoreDNS values. Add your hosts if needed:

```bash
nano ~/robolaunch/coredns/values.yaml
```

```yaml
image:
  repository: quay.io/robolaunchio/coredns
  tag: 1.10.1
service:
  clusterIP: 10.43.0.10
servers:
- zones:
  - zone: .
  port: 53
  plugins:
  - name: errors
  - name: health
    configBlock: |-
      lameduck 5s
  - name: ready
  - name: kubernetes
    parameters: cluster.local in-addr.arpa ip6.arpa
    configBlock: |-
      pods insecure
      fallthrough in-addr.arpa ip6.arpa
      ttl 30
  - name: hosts
    parameters: /etc/coredns/NodeHosts
    configBlock: |-
      # hosts
      ttl 60
      reload 15s
      fallthrough
  - name: prometheus
    parameters: 0.0.0.0:9153
  - name: forward
    parameters: . /etc/resolv.conf
  - name: cache
    parameters: 30
  - name: loop
  - name: reload
  - name: loadbalance
```

Update Metrics Server values:

```bash
nano ~/robolaunch/metrics-server/values.yaml
```

```yaml
image:
  repository: quay.io/robolaunchio/metrics-server
  tag: v0.6.4
```

Install CoreDNS and Metrics Server via Helm:

```yaml
helm upgrade --install \
  coredns ~/robolaunch/coredns/coredns-1.24.5.tgz \
  --namespace coredns \
  --create-namespace \
  -f ~/robolaunch/coredns/values.yaml

helm upgrade --install \
  metrics-server ~/robolaunch/metrics-server/metrics-server-3.11.0.tgz \
  --namespace metrics-server \
  --create-namespace \
  -f ~/robolaunch/metrics-server/values.yaml
```