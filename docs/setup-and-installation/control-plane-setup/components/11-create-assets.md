---
sidebar_position: 11
---

# xi. Create Predefined Organization/Region/Cloud Instance(s)

Create organization, region and cloud instance respectively. Substitute the secrets and endpoints:

```bash
# get first token from Keycloak
export user=tester
export pass=123
export kc_url=robolaunch-identity.robolaunch.internal
export kc_realm=robo-realm
export backend_url=robolaunch-backend.robolaunch.internal
export org=your-org-name
export gatekeeper_cred="T5XzUGlIb42fGJudrvIWJUFBSGOVYLdk"

export access_token=$(\
	curl -X POST https://$kc_url/auth/realms/$kc_realm/protocol/openid-connect/token \
	--user gatekeeper:$gatekeeper_cred \
	-H "content-type: application/x-www-form-urlencoded" \
	-d "username=$user&password=$pass&grant_type=password" | jq --raw-output '.access_token' \
)

echo $access_token

# create organization
curl -X POST \
  https://$backend_url/organization/createOrganization \
  -H "accept: text/plain" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $access_token"  \
  -d "{
  \"name\": \"$org\",
  \"enterprise\": true
}"
```

After creating organization successfully, get organization ID from MinIO:

![Organization bucket](https://github.com/robolaunch/trademark/blob/main/repository-media/docs/setup/img/organization-bucket.png?raw=true)

Create region and cloud instance records:

```bash
export org_id="8e71e4ff-0287-422c-845f-c0b424e5abeb"
export region=your-region-name

# create region
curl -X POST \
  https://$backend_url/cloud/createRoboticsCloud \
  -H "accept: text/plain" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $access_token"  \
  -d "{\"organizationId\" : \"$org_id\",  \"roboticsClouds\": [{\"name\" : \"$region\", \"region\" : \"$region\"}]}"

export cloud_instance=your-ci-name

# register cloud instance
curl -X POST \
  https://$backend_url/cloud/createOnPremiseCloudInstance \
  -H "accept: text/plain" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $access_token"  \
  -d "{\"organizationId\" : \"$org_id\",  \"roboticsClouds\": [{\"name\": \"$region\", \"region\" : \"$region\", \"cloudInstances\": [{\"name\" : \"$cloud_instance\"}]}]}"
```

If the response says `success`, a new cloud instance (data plane) is registered to the control plane. Continue with [Data Plane Prerequisites](../../robolaunch-cloud-ai-ml-platform/prerequisites.md).  