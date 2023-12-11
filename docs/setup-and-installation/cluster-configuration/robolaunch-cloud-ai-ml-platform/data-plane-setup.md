---
sidebar_position: 2
---

# Data Plane Setup

Optionally, you can mirror container registries by creating a YAML file as below:

```bash
mkdir -p /etc/rancher/k3s
nano /etc/rancher/k3s/registries.yaml
```

```yaml
mirrors:
  "*":
    endpoint:
      - "my-custom-registry.com"
    rewrite:
      "^.*/(.*)": "robolaunch/$1"
# configs:
#   "my-custom-registry.com":
#     auth:
#       username: xxxxxx
#       password: xxxxxx
#       # insecure_skip_verify: true
```

Get installation script and give permission to execute:

```bash
wget -P ~/ https://raw.githubusercontent.com/robolaunch/on-premise/main/infrastructure/dev/data-plane/run.sh
chmod +x ~/run.sh
```

Get OIDC client secret from Keycloak available on control plane:

**SCREENSHOT**

Enter the asset names gathered from control plane as environment variables:

```bash
export org_name_plain=your-org-name
export cluster_plain=your-ci-name
export region_plain=your-region-name
export identity_subdomain=robolaunch-identity
export root_domain=robolaunch.internal
export org_client_secret=<OIDC-CLIENT-SECRET>
export github_pat=<GITHUB-PERSONAL-ACCESS-TOKEN>
export mig_strategy=mixed # optional, can be applied if the instance has datacenter GPUs
export available_mig_instance=mig-1g.6gb # optional, can be applied if the instance has datacenter GPUs
```

Run the script:

```bash
~/run.sh
```

After the script finishes the installation, get `kubeconfig` file from data plane and add it to the MinIO available on control plane:

**SCREENSHOT**