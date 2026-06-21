## Sommaire
- [1. Référentiels et portée](#1-référentiels-et-portée)
- [2. Conventions d’adressage](#2-conventions-dadressage)
- [3. Site HQ (Siège)](#3-site-hq-siège)
  - [3.1 VLANs L3 + HSRP (10.10.x.0/24)](#31-vlans-l3--hsrp-1010x024)
  - [3.2 VLAN 99 Management (10.0.99.0/24)](#32-vlan-99-management-10099024)
  - [3.3 Services / hôtes référencés](#33-services--hôtes-référencés)
- [4. Site BR (Succursale)](#4-site-br-succursale)
- [5. Liaisons WAN / transit](#5-liaisons-wan--transit)
- [6. DHCP / DNS / Logs (paramètres d’exploitation)](#6-dhcp--dns--logs-paramètres-dexploitation)
- [7. Variante observée dans les traces DHCP (10.0.20.0/24)](#7-variante-observée-dans-les-traces-dhcp-10020024)
- [8. Champs non établis](#8-champs-non-établis)

---

## 1. Référentiels et portée

Ce plan d’adressage est **déduit exclusivement** :
- des configurations réseau (Cisco) fournies (VLANs, SVIs, HSRP, liens /30, syslog),
- d’extraits de preuves DHCP/DNS/logs côté systèmes (baux, resolv.conf, services systemd).

Aucune valeur (plage DHCP, DNS secondaire, IP firewall, etc.) n’est inventée : quand un élément n’est pas établi, il est indiqué **Non établi**.

---

## 2. Conventions d’adressage

### 2.1 Site HQ (Siège)
- VLANs de production/serveurs/DMZ : `10.10.<VLAN>.0/24`
- Passerelle par défaut (VIP HSRP) : `10.10.<VLAN>.254`
- Interfaces SVI :
  - HQ-SW1 : `10.10.<VLAN>.1`
  - HQ-SW2 : `10.10.<VLAN>.2`

### 2.2 VLAN Management (HQ)
- Réseau management : `10.0.99.0/24`
- VIP HSRP management : `10.0.99.254`
- HQ-SW1 : `10.0.99.1`
- HQ-SW2 : `10.0.99.2`

### 2.3 Site BR (Succursale)
- VLANs : `10.20.<VLAN>.0/24`
- Passerelle : `10.20.<VLAN>.1` (routeur BR-R1, sous-interfaces dot1Q)

### 2.4 Transits WAN
- Transits en /30 (point à point) : `10.10.250.x/30`
- Lien firewall en /30 : `172.16.10.0/30`

---

## 3. Site HQ (Siège)

### 3.1 VLANs L3 + HSRP (10.10.x.0/24)

| VLAN | Usage (si connu) | Réseau | Masque | VIP HSRP (GW) | HQ-SW1 SVI | HQ-SW2 SVI | DHCP relay (helper) |
|---:|---|---|---|---|---|---|---|
| 10 | Non établi | 10.10.10.0 | /24 | 10.10.10.254 | 10.10.10.1 | 10.10.10.2 | 10.10.70.10 |
| 20 | Non établi | 10.10.20.0 | /24 | 10.10.20.254 | 10.10.20.1 | 10.10.20.2 | 10.10.70.10 |
| 30 | Non établi | 10.10.30.0 | /24 | 10.10.30.254 | 10.10.30.1 | 10.10.30.2 | 10.10.70.10 |
| 40 | Non établi | 10.10.40.0 | /24 | 10.10.40.254 | 10.10.40.1 | 10.10.40.2 | 10.10.70.10 |
| 50 | Non établi | 10.10.50.0 | /24 | 10.10.50.254 | 10.10.50.1 | 10.10.50.2 | 10.10.70.10 |
| 60 | Non établi | 10.10.60.0 | /24 | 10.10.60.254 | 10.10.60.1 | 10.10.60.2 | 10.10.70.10 |
| 70 | Serveurs (DHCP/DNS référencé) | 10.10.70.0 | /24 | 10.10.70.254 | 10.10.70.1 | 10.10.70.2 | 10.10.70.10 |
| 80 | DMZ (proxy référencé) | 10.10.80.0 | /24 | 10.10.80.254 | 10.10.80.1 | 10.10.80.2 | 10.10.70.10 |

> Remarque : la présence de `ip helper-address 10.10.70.10` sur les SVIs établit l’usage d’un serveur DHCP central (ou équivalent) situé en VLAN70.

---

### 3.2 VLAN 99 Management (10.0.99.0/24)

| Élément | Réseau | Masque | Adresse | Rôle |
|---|---|---|---|---|
| VLAN 99 MGMT | 10.0.99.0 | /24 | — | Réseau de management |
| VIP HSRP MGMT | 10.0.99.0 | /24 | 10.0.99.254 | Passerelle MGMT |
| HQ-SW1 SVI | 10.0.99.0 | /24 | 10.0.99.1 | Management L3 |
| HQ-SW2 SVI | 10.0.99.0 | /24 | 10.0.99.2 | Management L3 |
| Router2 (MGMT) | 10.0.99.0 | /24 | 10.0.99.3 | Interface vers MGMT |
| Switch1 (mgmt) | 10.0.99.0 | /24 | 10.0.99.11 | Management L2 |
| Switch2 (mgmt) | 10.0.99.0 | /24 | 10.0.99.12 | Management L2 |

---

### 3.3 Services / hôtes référencés

| Service | Adresse | Localisation (déduite) | Commentaire |
|---|---:|---|---|
| Serveur DHCP (relay cible) | 10.10.70.10 | VLAN 70 (HQ) | Cible des `ip helper-address` |
| DNS (autorisé via ACL) | 10.10.70.10 | VLAN 70 (HQ) | DNS autorisé TCP/UDP 53 |
| Proxy / services DMZ (ACL) | 10.10.80.10 | VLAN 80 (HQ) | Proxy (3128) + web (80/443) |
| Collecteur Syslog | 10.0.10.10 | Non établi | Présent dans `logging host` |

---

## 4. Site BR (Succursale)

| VLAN | Réseau | Masque | Passerelle (BR-R1) |
|---:|---|---|---|
| 10 | 10.20.10.0 | /24 | 10.20.10.1 |
| 20 | 10.20.20.0 | /24 | 10.20.20.1 |
| 30 | 10.20.30.0 | /24 | 10.20.30.1 |
| 40 | 10.20.40.0 | /24 | 10.20.40.1 |
| 50 | 10.20.50.0 | /24 | 10.20.50.1 |
| 60 | 10.20.60.0 | /24 | 10.20.60.1 |
| 99 | 10.20.99.0 | /24 | 10.20.99.1 |

---

## 5. Liaisons WAN / transit

| Lien | Réseau | Masque | Côté A | IP A | Côté B | IP B |
|---|---|---|---|---|---|---|
| Router1 ↔ BR-R1 | 10.10.250.16 | /30 | Router1 Gi0/3 | 10.10.250.17 | BR-R1 Gi0/0 | 10.10.250.18 |
| Router2 ↔ “internet” | 10.10.250.8 | /30 | Router2 Gi0/3 | 10.10.250.10 | internet Gi0/0 | 10.10.250.9 |
| Router1 ↔ (amont HQ) | 10.10.250.4 | /30 | Router1 Gi0/1 | 10.10.250.6 | Pair | Non établi |
| Router2 ↔ Firewall-1 | 172.16.10.0 | /30 | Router2 Gi0/2 | 172.16.10.1 | Firewall-1 | Non établi |

---

## 6. DHCP / DNS / Logs (paramètres d’exploitation)

### 6.1 DHCP 
- Relais DHCP (SVI) : `ip helper-address 10.10.70.10`
- Conclusion : les scopes DHCP sont **externes** (serveur) et non hébergés dans les switches L3.

**Plages DHCP : Non établi**
- Pour chaque VLAN concerné :
  - Option routeur (gateway) : VIP HSRP du VLAN (`.254`)
  - Exclusions : `.1`, `.2`, `.254`, et toutes IP serveurs statiques

### 6.2 DNS
- DNS autorisé vers `10.10.70.10` (vu dans les ACL)
- DNS distribué côté clients dans une variante observée : `10.0.10.10` (cf. §7)

**DNS primaire officiel : Non établi** (selon l’itération retenue)

### 6.3 Logs / Syslog
- Équipements configurés pour syslog vers `10.0.10.10`
- Interface source syslog parfois fixée sur `Vlan99`

**Emplacement du collecteur 10.0.10.10 : Non établi**
- Réseau exact, VLAN d’hébergement, passerelle.

---

## 7. Exemple DHCP (10.0.20.0/24)

Des preuves d’exécution DHCP côté client montrent un bail :
- IP attribuée : `10.0.20.50/24`
- Serveur DHCP : `10.0.20.1`
- Passerelle : `10.0.20.254`
- DNS : `10.0.10.10`
- Domaine (search) : `hq.local`


