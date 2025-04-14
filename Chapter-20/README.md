# Chapter 20 – Understanding Atlas and MongoDB Security Features

This directory contains code examples and documentation from **Chapter 20** of _MongoDB 8.0 in Action_.  
It explores the security architecture of **MongoDB Atlas**, including access control, encryption, authentication, authorization, auditing, and secure networking.

---

## 🔐 What You'll Learn

- The **shared responsibility model** in cloud security and how it applies to MongoDB Atlas
- Best practices for **authentication**, including:
  - SCRAM
  - x.509 certificates
  - AWS IAM
  - Federated authentication (SSO with IdPs)
  - Client-side certificate management
- How to use **Role-Based Access Control (RBAC)** and create **custom roles**
- Integration with **HashiCorp Vault** for dynamic, short-lived credentials
- Enabling and filtering **auditing** to monitor security-relevant database activity
- Implementing **encryption**:
  - In transit (TLS)
  - At rest (AES-256, Customer-Managed Keys)
  - In use (Client-Side Field Level Encryption, Queryable Encryption)
- Securing your network using:
  - IP Access Lists
  - **VPC Peering**
  - **Private Endpoints**
- Applying the **Defense in Depth** strategy to build multi-layered security in Atlas

---

## 📁 Files Included

| File name                  | Description |
|----------------------------|-------------|
| `sharedResponsibility.md` | Summary and table of the MongoDB Atlas Shared Responsibility Model. |
| `auth_methods_demo.js`     | JavaScript code demonstrating different authentication methods (SCRAM, x.509, AWS IAM). |
| `create_custom_roles.js`   | Script to define custom roles with specific privileges using the Atlas CLI. |
| `hashicorp_integration.sh` | Bash script to configure MongoDB Atlas and HashiCorp Vault integration for dynamic secrets. |
| `audit_filter.json`        | Example of a custom JSON audit filter for MongoDB Atlas database auditing. |
| `tls_config.md`            | Explanation of TLS configuration for encryption in transit in MongoDB Atlas. |
| `encryption_architecture.png` | Diagram of Atlas encryption architecture with BYOK (Bring Your Own Key). |
| `csfle_example.json`       | Sample document showing the structure of Client-Side Field Level Encrypted data. |
| `network_setup.md`         | Instructions for configuring IP access lists, VPC Peering, and Private Endpoints. |

---

## ✅ Requirements

- **MongoDB Atlas Account**
- **MongoDB CLI (atlas CLI)**: Install via https://www.mongodb.com/docs/atlas/cli/
- Optional:
  - HashiCorp Vault (`vault` CLI)
---

## ⚠️ Notes

- **LDAP authentication** is deprecated in MongoDB 8.0 and may be removed in future versions.
- Enabling `auditAuthorizationSuccess` will significantly increase audit log volume – use only if necessary.
- Use **deterministic encryption** if equality queries are required on encrypted fields.
- Atlas auditing and network features (like VPC peering) are not available on **M0 or Flex clusters**.
- Always apply the **principle of least privilege** when assigning database and project roles.
- Review encryption policies regularly to comply with **regulatory frameworks** like HIPAA, GDPR, PCI, and FedRAMP.

---

## 🔗 Learn More

- [MongoDB Atlas Security Documentation](https://www.mongodb.com/docs/atlas/security/)
- [HashiCorp Vault Integration](https://www.mongodb.com/products/integrations/hashicorp-vault)
- [Queryable Encryption Overview](https://www.mongodb.com/docs/manual/core/queryable-encryption/)
- [Atlas Custom Roles](https://www.mongodb.com/docs/atlas/reference/user-roles/)
