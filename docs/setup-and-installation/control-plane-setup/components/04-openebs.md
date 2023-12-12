---
sidebar_position: 4
---

# iv. Deploying OpenEBS & Configuring Default StorageClass

Update OpenEBS values.

```bash
nano ~/robolaunch/openebs/values.yaml
```

```yaml
image:
  repository: quay.io/
helper:
  image: robolaunchio/linux-utils
  imageTag: 3.4.0
ndm:
  image: robolaunchio/node-disk-manager
  imageTag: 2.1.0
ndmOperator:
  image: robolaunchio/node-disk-operator
  imageTag: 2.1.0
localprovisioner:
  image: robolaunchio/provisioner-localpv
  imageTag: 3.4.0
```

Install OpenEBS via Helm:

```bash
helm upgrade --install \
  openebs ~/robolaunch/openebs/openebs-3.8.0.tgz \
  --namespace openebs \
  --create-namespace \
  -f ~/robolaunch/openebs/values.yaml
```

Set `openebs-hostpath` as default storage class after OpenEBS is installed:

```bash
kubectl patch storageclass openebs-hostpath -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}';
```