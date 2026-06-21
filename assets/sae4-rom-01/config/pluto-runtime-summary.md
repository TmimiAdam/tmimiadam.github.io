# Résumé de configuration SAÉ4.ROM.01

Ce fichier publie uniquement les paramètres non sensibles nécessaires pour comprendre la configuration LTE testée avec srsRAN et ADALM-Pluto.

## Paramètres réseau

- MCC : `001`
- MNC : `01`
- TAC : `0x0007`
- APN : `srsapn`
- EARFCN : `3350`
- Bande radio testée : 25 PRB
- MME bind address : `127.0.1.100`
- eNodeB S1/GTP address : `127.0.1.1`

## Paramètres radio ADALM-Pluto retenus dans le rapport final

- eNodeB TX gain : `40`
- eNodeB RX gain : `20`
- UE TX gain : `80`
- UE RX gain : `70`
- UE freq_offset : `4500`
- Backend RF : `SoapySDR`
- Driver : `plutosdr`

## Paramètres volontairement masqués

Les paramètres d'authentification LTE ont été configurés de façon cohérente entre l'EPC et l'UE, mais l'IMSI complet, l'IMEI, la clé `K` et l'`OPc` ne sont pas publiés dans le portfolio.
