# MongoDB Atlas – Shared Responsibility Model

In MongoDB Atlas, security and operational responsibilities are distributed across three primary entities:

1. **Customer**
2. **MongoDB (Atlas)**
3. **Cloud Provider** (AWS, Azure, GCP)

---

## 🔁 Model Overview

| Responsibility Area               | Customer Responsibility                                                                 | MongoDB Responsibility                                                                                         | Cloud Provider Responsibility                          |
|----------------------------------|------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| **Cloud Infrastructure**         | Choose region, provider, and tier. Configure networking (VPC, peering, endpoints).       | Deploy Atlas clusters in secure VPCs with auto-scaling and high availability.                                 | Maintain physical security, data centers, and hardware. |
| **User Identity & Access**       | Create and manage users, roles, federated auth, MFA.                                     | Provide identity federation, MFA integration, and role-based access.                                          | -                                                      |
| **Database Access**              | Set up users, roles, LDAP, and API key access.                                           | Enforce always-on authentication (SCRAM, x.509), access logging.                                              | -                                                      |
| **Data Encryption**              | Configure KMS (BYOK), client-side encryption.                                            | Enforce TLS, encryption at rest/in-transit, integration with external KMS.                                    | Transparent disk encryption with provider-managed keys. |
| **Auditing & Compliance**        | Enable and configure auditing, filters.                                                  | Provide auditing tools, log access, and compliance features (HIPAA, PCI, GDPR, etc).                          | -                                                      |
| **Network Access Control**       | Configure IP Access Lists, private endpoints, and peering.                               | Support secure private networking features.                                                                   | Provide network infrastructure.                        |
| **Maintenance & Patching**       | Schedule maintenance windows.                                                            | Apply security patches, minor upgrades automatically.                                                         | Maintain physical host systems.                        |

---

## 🔒 Key Takeaways

- MongoDB Atlas **automates enforcement** of many security best practices, but **you are still responsible** for configuring user access and protecting data.
- Use **federated identity**, **MFA**, and **custom roles** to follow the **principle of least privilege**.
- Enable **auditing** and regularly review logs for unexpected activity.
- Use **private networking options** (VPC Peering, Private Endpoints) to restrict exposure.

For the full list of responsibilities, see [MongoDB Atlas Shared Responsibility Docs](https://www.mongodb.com/docs/atlas/security/)
