

### 🔹 Switchs cœur / distribution (L3)

| Équipement | Rôle                                | IP de management | Commande SSH          |
| ---------- | ----------------------------------- | ---------------- | --------------------- |
| **HQ-SW1** | Switch L3 principal (HSRP actif)    | `10.0.99.1`      | `ssh admin@10.0.99.1` |
| **HQ-SW2** | Switch L3 secondaire (HSRP standby) | `10.0.99.2`      | `ssh admin@10.0.99.2` |

---

### 🔹 Switchs d’accès (L2)

| Équipement  | Rôle                        | IP de management | Commande SSH           |
| ----------- | --------------------------- | ---------------- | ---------------------- |
| **Switch1** | Accès utilisateurs (gauche) | `10.0.99.11`     | `ssh admin@10.0.99.11` |
| **Switch2** | Accès serveurs / DMZ        | `10.0.99.12`     | `ssh admin@10.0.99.12` |

---

### 🔹 Routeurs

| Équipement  | Rôle                        | IP d’accès SSH   | Interface | Commande SSH          |
| ----------- | --------------------------- | ---------------- | --------- | --------------------- |
| **Router2** | Routeur HQ ↔ WAN / Internet | `10.0.99.3`      | VLAN99    | `ssh admin@10.0.99.3` |
| **Router1** | Routeur inter-site          | `10.10.250.6` ⚠️ | WAN       | ❌ *non recommandé*    |

>


ssh \
  -o KexAlgorithms=+diffie-hellman-group14-sha1 \
  -o HostKeyAlgorithms=+ssh-rsa \
  -o PubkeyAcceptedAlgorithms=+ssh-rsa \
  admin@10.0.99.1



pswd : Admin@123