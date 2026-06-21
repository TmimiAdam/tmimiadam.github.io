window.PORTFOLIO_DATA = {
  "profile": {
    "name": "Adam Tmimi",
    "role": "Étudiant BUT2 Réseaux & Télécommunications - Parcours ROM",
    "email": "adamtmimi43@gmail.com",
    "linkedin": "https://www.linkedin.com/in/adam-tmimi/",
    "github": "https://github.com/tmimiadam"
  },
  "evidenceTypes": [
    {
      "id": "schema-reseau",
      "title": "Schéma réseau",
      "icon": "fa-diagram-project"
    },
    {
      "id": "packet-tracer",
      "title": "Capture Packet Tracer",
      "icon": "fa-network-wired"
    },
    {
      "id": "configuration-cisco",
      "title": "Configuration Cisco",
      "icon": "fa-terminal"
    },
    {
      "id": "script-python",
      "title": "Script Python",
      "icon": "fa-code"
    },
    {
      "id": "capture-wireshark",
      "title": "Capture Wireshark",
      "icon": "fa-magnifying-glass-chart"
    },
    {
      "id": "rapport-pdf",
      "title": "Rapport PDF",
      "icon": "fa-file-pdf"
    },
    {
      "id": "test-ping",
      "title": "Test ping",
      "icon": "fa-right-left"
    },
    {
      "id": "test-traceroute",
      "title": "Test traceroute",
      "icon": "fa-route"
    },
    {
      "id": "test-dhcp",
      "title": "Test DHCP",
      "icon": "fa-server"
    },
    {
      "id": "test-dns",
      "title": "Test DNS",
      "icon": "fa-globe"
    },
    {
      "id": "test-ssh",
      "title": "Test SSH",
      "icon": "fa-lock"
    },
    {
      "id": "test-qos",
      "title": "Test QoS",
      "icon": "fa-gauge-high"
    },
    {
      "id": "capture-toip",
      "title": "Capture ToIP",
      "icon": "fa-phone-volume"
    },
    {
      "id": "capture-automatisation",
      "title": "Capture d’automatisation",
      "icon": "fa-robot"
    }
  ],
  "saes": {
    "sae3-01": {
      "code": "SAÉ3.01",
      "title": "Diffusion HF d’un streaming audio/vidéo avec ADALM-Pluto",
      "semester": "S3",
      "page": "sae-3-01.html",
      "linkedACs": [
        "AC22.01",
        "AC22.03",
        "AC22.04",
        "AC22.05"
      ],
      "competenceSlugs": [
        "connecter"
      ],
      "metaDescription": "SAÉ3.01 : diffusion HF d’un streaming audio/vidéo avec ADALM-Pluto, GNU Radio, VLC, QPSK et analyse spectrale.",
      "summary": "Mise en œuvre d’une chaîne de transmission HF pour diffuser un flux audio/vidéo avec un ADALM-Pluto, GNU Radio et une source de streaming, en justifiant les choix de modulation, de débit et de bande passante.",
      "description": "La SAÉ3.01 porte sur la configuration et le déploiement d’un système HF permettant la diffusion d’un streaming audio/vidéo avec ADALM-Pluto. Le sujet officiel impose GNU Radio pour la modulation/démodulation, une seule source audio/vidéo, le respect des porteuses et puissances autorisées, une analyse spectrale et une démonstration du fonctionnement final.",
      "context": "Cette SAÉ consiste à concevoir et déployer une chaîne de transmission HF permettant la diffusion d’un flux audio/vidéo. Les documents fournis couvrent la recherche ADALM-Pluto, le TNRBF, la prise en main GNU Radio, la réception/émission avec PlutoSDR et le thème final de streaming HF.",
      "problem": "Comment transporter un flux audio/vidéo réel sur une liaison radio HF en maîtrisant la source, l’encodage, la modulation, la bande passante, la réglementation et la restitution côté réception ?",
      "objectives": [
        "Mettre en œuvre une transmission radio fonctionnelle en utilisant l’ADALM-Pluto et GNU Radio.",
        "Choisir une seule source audio/vidéo parmi une webcam ou un serveur de streaming continu.",
        "Justifier les outils de diffusion et les codecs audio/vidéo retenus.",
        "Configurer une chaîne GNU Radio de modulation et de démodulation adaptée au flux.",
        "Respecter les porteuses autorisées et la puissance d’émission.",
        "Analyser le spectre HF émis et relier la bande occupée aux paramètres de modulation."
      ],
      "constraints": [
        "Durée indicative du thème final : 6 heures.",
        "Autonomie attendue sur le thème streaming HF, avec appui des documents ADALM-Pluto, TNRBF et GNU Radio.",
        "Utiliser une seule source : webcam ou serveur de streaming continu, mais pas les deux en même temps.",
        "Utiliser obligatoirement GNU Radio pour la modulation et la démodulation.",
        "Respecter les porteuses autorisées et la puissance d’émission.",
        "Faire apparaître le choix des outils de diffusion, les codecs, le débit, la bande passante, l’analyse spectrale et une démonstration vidéo."
      ],
      "deliverables": [
        "Rapport SAÉ3.01 de 23 pages fourni en PDF.",
        "Analyse bibliographique ADALM-Pluto et TNRBF.",
        "Flowgraphs GNU Radio d’émission et de réception.",
        "Captures VLC, spectre, constellation et restitution du flux.",
        "Vidéo de démonstration finale : si le fichier vidéo original doit être présenté."
      ],
      "deliverable": "Rapport, captures de flowgraphs GNU Radio, analyse spectrale, traces VLC et démonstration du lien HF.",
      "personalRole": "Le rapport indique un travail réalisé par Adam Tmimi et Anton Maurette. La part exacte prise personnellement dans chaque module n’est pas détaillée dans les fichiers fournis :",
      "technologies": [
        "ADALM-Pluto",
        "GNU Radio",
        "PlutoSDR Source",
        "PlutoSDR Sink",
        "VLC",
        "Streaming audio/vidéo",
        "Transmission HF",
        "SDR",
        "QPSK",
        "RRC Filter",
        "UDP",
        "H.264",
        "MP3",
        "FFT",
        "QT GUI Frequency Sink",
        "Analyse spectrale",
        "2,4 GHz"
      ],
      "workDone": [
        "Recherche bibliographique sur ADALM-Pluto et les bandes de fréquences autorisées à partir du TNRBF.",
        "Prise en main de GNU Radio : signaux sinusoïdaux, types de données, sliders, FFT, résolution fréquentielle et repliement de spectre.",
        "Validation d’une chaîne audio AM avec PlutoSDR à 433,5 MHz avant le passage au streaming numérique.",
        "Validation de la réception RF avec PlutoSDR sur une station FM réelle avant l’émission du flux propre au projet.",
        "Choix de VLC comme outil de diffusion, avec profil H.264 + MP3 et encapsulation MP4 selon le rapport.",
        "Mise en place d’une émission QPSK dans GNU Radio avec UDP Source, Stream to Tagged Stream, Constellation Modulator, filtre RRC et PlutoSDR Sink.",
        "Mise en place d’une réception avec PlutoSDR Source, filtrage, Costas Loop, Clock Recovery, décodage QPSK et UDP Sink vers VLC.",
        "Analyse du spectre et de la constellation pour vérifier la cohérence de la modulation et de la bande occupée."
      ],
      "method": [
        "Partir des contraintes officielles du thème : source unique, GNU Radio obligatoire, respect fréquentiel, codecs et analyse spectrale.",
        "S’appuyer sur les thèmes préparatoires pour caractériser ADALM-Pluto, comprendre GNU Radio et vérifier la réception/émission RF.",
        "Valider progressivement la chaîne : simulation, audio AM, réception FM, émission QPSK, réception QPSK, restitution du flux.",
        "Utiliser les captures du rapport comme preuves lorsque les résultats sont explicitement visibles.",
        "Laisser en fichiers de test invalides les éléments non publiés sous forme de fichier autonome, notamment la vidéo de démonstration originale et la mesure de puissance expérimentale."
      ],
      "architecture": [
        {
          "label": "Source",
          "value": "Le sujet autorise une webcam ou un serveur de streaming continu. Le rapport documente VLC avec support direct de la webcam et flux UDP."
        },
        {
          "label": "Encodage",
          "value": "Profil indiqué dans le rapport : H.264 pour la vidéo, MP3 pour l’audio, encapsulation MP4."
        },
        {
          "label": "Transport",
          "value": "Flux UDP vers GNU Radio, avec port 5000 côté émission et restitution VLC côté réception."
        },
        {
          "label": "Modulation",
          "value": "Modulation QPSK avec Constellation Modulator, samples/symbol = 2 et roll-off = 0,35."
        },
        {
          "label": "Émission",
          "value": "PlutoSDR Sink à 2,4 GHz, sample rate 2 MHz, atténuation TX1 10 dB, bande passante RF 20 MHz dans le rapport."
        },
        {
          "label": "Réception",
          "value": "PlutoSDR Source, filtre passe-bande, Costas Loop, filtre RRC, Clock Recovery, Constellation Decoder, Pack K Bits et UDP Sink."
        }
      ],
      "transmissionChain": [
        {
          "label": "Source vidéo/audio",
          "detail": "Webcam ou serveur continu selon le sujet; source non détaillée dans les traces publiées."
        },
        {
          "label": "Outil de streaming",
          "detail": "VLC est documenté dans le rapport; OBS est cité par le sujet mais comme utilisé."
        },
        {
          "label": "Encodage",
          "detail": "H.264 + MP3, encapsulation MP4, débit observé 1 à 2 Mb/s dans le rapport."
        },
        {
          "label": "Flux numérique",
          "detail": "Transport UDP vers GNU Radio, port 5000 côté émission."
        },
        {
          "label": "GNU Radio TX",
          "detail": "Paquetisation, modulation QPSK, filtre RRC et sortie PlutoSDR Sink."
        },
        {
          "label": "ADALM-Pluto TX",
          "detail": "Émission HF à 2,4 GHz d’après le rapport final."
        },
        {
          "label": "Transmission HF",
          "detail": "Lien radio en laboratoire, dans le respect des bandes et puissances autorisées."
        },
        {
          "label": "ADALM-Pluto RX",
          "detail": "Réception du signal QPSK avec PlutoSDR Source."
        },
        {
          "label": "GNU Radio RX",
          "detail": "Filtrage, Costas Loop, récupération d’horloge, décodage QPSK."
        },
        {
          "label": "Restitution",
          "detail": "Flux renvoyé en UDP vers VLC pour lecture audio/vidéo."
        }
      ],
      "transmissionNote": "Certains détails ne sont pas détaillés avec la solution réellement choisie en séance, notamment la source exacte et la mesure de puissance expérimentale.",
      "sourceOptions": [
        {
          "label": "Option 1",
          "title": "Webcam",
          "description": "Le sujet autorise une webcam disponible en salle. Le rapport indique que VLC a été choisi notamment pour son support direct de la webcam."
        },
        {
          "label": "Option 2",
          "title": "Serveur de streaming continu",
          "description": "Le sujet autorise aussi un serveur diffusant une vidéo en continu, mais les fichiers fournis ne prouvent pas son utilisation effective."
        }
      ],
      "projectTools": [
        {
          "name": "GNU Radio",
          "detail": "Outil obligatoire du sujet pour la modulation et la démodulation.",
          "status": "Prouvé par les captures de flowgraphs."
        },
        {
          "name": "ADALM-Pluto",
          "detail": "SDR utilisé pour l’émission et la réception HF.",
          "status": "Prouvé par le rapport et les blocs PlutoSDR."
        },
        {
          "name": "VLC",
          "detail": "Outil de diffusion/restitution documenté avec H.264, MP3, MP4 et UDP.",
          "status": "Prouvé dans le rapport."
        },
        {
          "name": "OBS",
          "detail": "Outil cité par le sujet comme option possible.",
          "status": "Utilisation e dans le ZIP/PDF."
        },
        {
          "name": "TNRBF",
          "detail": "Référence réglementaire pour les fréquences et puissances autorisées.",
          "status": "Document fourni dans le ZIP."
        },
        {
          "name": "QT GUI Frequency Sink",
          "detail": "Affichage du spectre dans GNU Radio.",
          "status": "Prouvé dans le rapport."
        }
      ],
      "codecBandwidth": {
        "explanation": "Le choix des codecs et du débit influence directement la taille du flux à transmettre, la stabilité de la diffusion et la bande passante nécessaire sur la liaison HF.",
        "audioCodec": "MP3 d’après le rapport,",
        "estimatedBandwidth": "Environ 1,35 MHz d’après l’analyse spectrale du rapport avec Rs = 1 MHz et α = 0,35.",
        "tradeoff": "La QPSK et le filtre RRC limitent l’occupation spectrale, mais le flux vidéo reste sensible au débit et à la stabilité du lien HF."
      },
      "implementationSteps": [
        {
          "title": "Préparation de la source audio/vidéo",
          "objective": "Choisir une source unique conforme au sujet.",
          "tools": "Webcam ou serveur de streaming; VLC documenté.",
          "proof": "Rapport page 18 pour VLC; source non détaillée dans les traces publiées."
        },
        {
          "title": "Configuration du flux de streaming",
          "objective": "Produire un flux lisible par GNU Radio.",
          "tools": "VLC, UDP, profil H.264 + MP3.",
          "result": "Flux UDP sur le port 5000 d’après le rapport.",
          "proof": "Capture VLC page 18."
        },
        {
          "title": "Paramétrage de GNU Radio",
          "objective": "Construire la chaîne de traitement du flux.",
          "tools": "GNU Radio Companion, UDP Source, Stream to Tagged Stream.",
          "result": "Découpage en paquets packet_len = 1024.",
          "proof": "Flowgraph émission page 19."
        },
        {
          "title": "Mise en place de la modulation",
          "objective": "Adapter le flux numérique à une émission HF.",
          "tools": "Constellation Modulator QPSK, RRC Filter.",
          "result": "QPSK, samples/symbol = 2, roll-off = 0,35.",
          "proof": "Rapport page 19."
        },
        {
          "title": "Configuration de l’ADALM-Pluto en émission",
          "objective": "Transposer le signal en RF.",
          "tools": "PlutoSDR Sink.",
          "result": "Fréquence 2,4 GHz, sample rate 2 MHz, atténuation 10 dB, RF bandwidth 20 MHz dans le rapport.",
          "proof": "Flowgraph émission page 19."
        },
        {
          "title": "Réception et démodulation",
          "objective": "Reconstruire le flux côté réception.",
          "tools": "PlutoSDR Source, Band Pass Filter, Costas Loop, RRC, Clock Recovery, Constellation Decoder.",
          "result": "Chaîne de réception QPSK documentée.",
          "proof": "Rapport pages 20 à 22."
        },
        {
          "title": "Vérification de la restitution du flux",
          "objective": "Lire le flux reçu dans VLC.",
          "tools": "UDP Sink vers VLC.",
          "result": "Le rapport indique un flux correctement décodé et transmis à VLC via UDP.",
          "proof": "Rapport page 23."
        },
        {
          "title": "Analyse spectrale et ajustements",
          "objective": "Contrôler l’occupation fréquentielle.",
          "tools": "QT GUI Frequency Sink, FFT, analyse du spectre.",
          "result": "Bande passante d’environ 1,35 MHz et spectre QPSK filtré RRC conforme selon le rapport.",
          "proof": "Rapport pages 19 et 23."
        }
      ],
      "spectralAnalysis": {
        "explanation": "L’analyse spectrale permet de vérifier l’occupation fréquentielle du signal, la présence de la porteuse et la cohérence entre les paramètres de modulation choisis et la bande passante réellement utilisée.",
        "carrierFrequency": "2,4 GHz d’après la chaîne QPSK finale du rapport.",
        "measuredBandwidth": "Environ 1,35 MHz d’après le QT GUI Frequency Sink.",
        "observations": "Signal centré autour de 0 Hz après conversion en bande de base, forme cohérente avec une QPSK filtrée RRC et roll-off 0,35.",
        "image": {
          "src": "assets/sae3-01/captures/rapport-page-23-spectre-vlc.png",
          "alt": "Analyse spectrale et restitution VLC du rapport SAÉ3.01"
        }
      },
      "tests": [
        {
          "title": "Vérification de la diffusion du flux",
          "objective": "S’assurer que la source est encodée et envoyée vers GNU Radio.",
          "result": "Le rapport documente VLC, H.264 + MP3, encapsulation MP4 et UDP.",
          "conclusion": "Diffusion documentée, source non détaillée dans les traces publiées."
        },
        {
          "title": "Vérification de la réception",
          "objective": "Recevoir le signal QPSK et reconstruire le flux UDP.",
          "result": "Le rapport indique un flux correctement décodé et transmis à VLC.",
          "conclusion": "Réception documentée par la chaîne GNU Radio et la capture VLC."
        },
        {
          "title": "Vérification audio",
          "objective": "Contrôler la restitution audio.",
          "result": "Le rapport décrit une chaîne audio AM propre et intelligible; le test audio final du streaming n’est pas détaillé avec une trace dédiée."
        },
        {
          "title": "Vérification vidéo",
          "objective": "Contrôler la restitution vidéo.",
          "result": "Le rapport indique une vidéo fluide et intelligible.",
          "conclusion": "Résultat rapporté et illustré par une capture VLC."
        },
        {
          "title": "Vérification de stabilité",
          "objective": "Observer la stabilité du lien et de la constellation.",
          "result": "La constellation montre quatre amas distincts; les dispersions sont attribuées au bruit RF, au débit vidéo et au canal réel."
        },
        {
          "title": "Analyse spectrale",
          "objective": "Mesurer l’occupation spectrale de l’émission HF.",
          "result": "Bande passante d’environ 1,35 MHz cohérente avec BW = Rs × (1 + α).",
          "conclusion": "Analyse spectrale disponible dans le rapport."
        },
        {
          "title": "Vidéo de démonstration",
          "objective": "Montrer le fonctionnement final complet.",
          "conclusion": "Le rapport contient une capture finale, mais pas le fichier vidéo autonome."
        }
      ],
      "evidenceTypes": [
        {
          "id": "transmission-chain",
          "title": "Schéma de chaîne de transmission",
          "icon": "fa-diagram-project"
        },
        {
          "id": "gnuradio-flowgraph",
          "title": "Flowgraph GNU Radio",
          "icon": "fa-wave-square"
        },
        {
          "id": "adalm-pluto-config",
          "title": "Configuration ADALM-Pluto",
          "icon": "fa-satellite-dish"
        },
        {
          "id": "vlc-obs-capture",
          "title": "Capture VLC ou OBS",
          "icon": "fa-display"
        },
        {
          "id": "spectral-capture",
          "title": "Capture spectrale",
          "icon": "fa-chart-line"
        },
        {
          "id": "demo-video",
          "title": "Vidéo de démonstration",
          "icon": "fa-video"
        },
        {
          "id": "report-excerpt",
          "title": "Extrait de rapport",
          "icon": "fa-file-pdf"
        },
        {
          "id": "reception-capture",
          "title": "Capture de réception",
          "icon": "fa-tower-broadcast"
        },
        {
          "id": "transmission-capture",
          "title": "Capture de transmission",
          "icon": "fa-arrow-up-right-dots"
        }
      ],
      "evidence": [
        {
          "type": "gnuradio-flowgraph",
          "status": "available",
          "label": "Flowgraphs émission et réception",
          "description": "Le rapport montre l’émission QPSK avec PlutoSDR Sink et la réception avec Costas Loop, RRC, Clock Recovery et UDP Sink.",
          "images": [
            {
              "src": "assets/sae3-01/captures/rapport-page-19-emission-qpsk.png",
              "alt": "Flowgraph GNU Radio émission QPSK avec PlutoSDR Sink"
            },
            {
              "src": "assets/sae3-01/captures/rapport-page-22-reception-constellation.png",
              "alt": "Flowgraph réception GNU Radio et constellation QPSK"
            }
          ],
          "links": [
            {
              "label": "Rapport SAÉ3.01",
              "href": "assets/sae3-01/docs/rapport-sae-301.pdf"
            }
          ]
        },
        {
          "type": "adalm-pluto-config",
          "status": "available",
          "label": "Paramètres PlutoSDR documentés",
          "description": "Les captures du rapport indiquent une émission à 2,4 GHz, sample rate 2 MHz, atténuation 10 dB et bande passante RF 20 MHz. La mesure de puissance n’est pas publiée dans les traces disponibles.",
          "images": [
            {
              "src": "assets/sae3-01/captures/rapport-page-19-emission-qpsk.png",
              "alt": "Paramètres PlutoSDR Sink dans le flowgraph d’émission"
            }
          ],
          "links": [
            {
              "label": "TNRBF 2025",
              "href": "assets/sae3-01/docs/tnrbf-2025-04-18.pdf"
            }
          ]
        },
        {
          "type": "vlc-obs-capture",
          "status": "available",
          "label": "VLC prouvé, OBS",
          "description": "Le rapport documente VLC avec profil H.264 + MP3, MP4 et UDP. OBS est cité par le sujet mais aucun fichier fourni ne prouve son utilisation.",
          "images": [
            {
              "src": "assets/sae3-01/captures/rapport-page-18-vlc-source.png",
              "alt": "Configuration VLC H.264 MP3 dans le rapport"
            },
            {
              "src": "assets/sae3-01/captures/rapport-page-23-spectre-vlc.png",
              "alt": "Lecture VLC du flux reçu"
            }
          ]
        },
        {
          "type": "spectral-capture",
          "status": "available",
          "label": "Spectre HF disponible",
          "description": "Le rapport présente un spectre centré autour de 0 Hz avec une bande passante d’environ 1,35 MHz.",
          "images": [
            {
              "src": "assets/sae3-01/captures/rapport-page-23-spectre-vlc.png",
              "alt": "Capture spectrale QPSK et restitution VLC"
            }
          ]
        },
        {
          "type": "report-excerpt",
          "status": "available",
          "label": "Sujet officiel et rapport fournis",
          "description": "Le sujet thématique précise les contraintes officielles et le rapport rassemble les choix techniques, les captures et les résultats.",
          "images": [
            {
              "src": "assets/sae3-01/captures/sujet-theme-4-streaming.png",
              "alt": "Sujet officiel du thème streaming HF ADALM-Pluto"
            },
            {
              "src": "assets/sae3-01/captures/rapport-page-18-vlc-source.png",
              "alt": "Extrait de rapport sur le choix VLC"
            }
          ],
          "links": [
            {
              "label": "Sujet thème 4",
              "href": "assets/sae3-01/docs/sae301-theme-4-streaming-adalm-pluto.pdf"
            },
            {
              "label": "Rapport SAÉ3.01",
              "href": "assets/sae3-01/docs/rapport-sae-301.pdf"
            }
          ]
        },
        {
          "type": "reception-capture",
          "status": "available",
          "label": "Réception QPSK et restitution VLC",
          "description": "La page 22 montre la constellation QPSK et la page 23 montre la restitution dans VLC.",
          "images": [
            {
              "src": "assets/sae3-01/captures/rapport-page-22-reception-constellation.png",
              "alt": "Constellation QPSK en réception"
            },
            {
              "src": "assets/sae3-01/captures/rapport-page-23-spectre-vlc.png",
              "alt": "VLC côté réception"
            }
          ]
        },
        {
          "type": "transmission-capture",
          "status": "available",
          "label": "Émission QPSK documentée",
          "description": "La page 19 montre la chaîne émission GNU Radio avec UDP Source, Constellation Modulator, RRC Filter et PlutoSDR Sink.",
          "images": [
            {
              "src": "assets/sae3-01/captures/rapport-page-19-emission-qpsk.png",
              "alt": "Chaîne d’émission QPSK dans GNU Radio"
            }
          ]
        }
      ],
      "referenceDocs": [
        {
          "label": "Rapport SAÉ3.01",
          "href": "assets/sae3-01/docs/rapport-sae-301.pdf"
        },
        {
          "label": "Sujet thème 1 - ADALM-Pluto",
          "href": "assets/sae3-01/docs/sae31-theme-1-adalm-pluto.pdf"
        },
        {
          "label": "TNRBF 2025",
          "href": "assets/sae3-01/docs/tnrbf-2025-04-18.pdf"
        },
        {
          "label": "Sujet thème 2 - GNU Radio",
          "href": "assets/sae3-01/docs/sae301-theme-2-gnuradio.pdf"
        },
        {
          "label": "Sujet thème 3 - GNU Radio et ADALM-Pluto",
          "href": "assets/sae3-01/docs/sae301-theme-3-gnuradio-adalm-pluto.pdf"
        },
        {
          "label": "Sujet thème 4 - Streaming HF",
          "href": "assets/sae3-01/docs/sae301-theme-4-streaming-adalm-pluto.pdf"
        },
        {
          "label": "Article BUP - GNU Radio et modulations",
          "href": "assets/sae3-01/docs/article-bup-gnuradio-modulations.pdf"
        }
      ],
      "reflectionDefaults": {
        "comment": "J’ai relié le sujet officiel, les documents thématiques et le rapport pour comprendre la chaîne de transmission avant de présenter les résultats.",
        "outils": "ADALM-Pluto, GNU Radio Companion, PlutoSDR Source/Sink, VLC, UDP, QPSK, filtres RRC, FFT, QT GUI Frequency Sink et documents réglementaires TNRBF.",
        "difficultes": "Les traces montrent toutefois des points techniques délicats : réglages de gain, débit vidéo, dispersion de constellation et cohérence de bande passante.",
        "fonctionne": "Les preuves disponibles montrent le flowgraph d’émission, la réception QPSK, le spectre et une restitution VLC.",
        "pasFonctionne": "Les fichiers fournis ne contiennent pas la vidéo de démonstration autonome ni une mesure détaillée de puissance.",
        "appris": "Cette SAÉ m’a fait relier source multimédia, codecs, débit, modulation numérique, SDR et contrôle spectral dans une même chaîne.",
        "autrement": "Je documenterais séparément les paramètres exacts de la source, la puissance mesurée et une vidéo de démonstration exportée.",
        "progression": "La progression se voit dans le passage des simulations GNU Radio à un lien HF complet avec émission, réception, analyse et restitution applicative."
      },
      "reflections": {
        "AC22.01": {
          "fait": "J’ai caractérisé une chaîne de transmission complexe : source audio/vidéo, encodage, UDP, modulation QPSK, émission/réception ADALM-Pluto, démodulation et restitution VLC.",
          "pourquoi": "L’objectif était de vérifier qu’un système de transmission ne se limite pas à émettre un signal : il faut contrôler le débit, la bande passante, la synchronisation et la qualité restituée.",
          "comment": "Je me suis appuyé sur les flowgraphs GNU Radio, les paramètres PlutoSDR et les captures de spectre/constellation du rapport.",
          "difficultes": "Les traces indiquent que le réglage du gain, la stabilité de la constellation et les variations du débit vidéo sont des points sensibles.",
          "fonctionne": "Le rapport montre un flux reçu, une constellation QPSK exploitable et une bande occupée cohérente avec le roll-off.",
          "appris": "J’ai mieux compris le lien entre paramétrage théorique d’une modulation et observation réelle du spectre.",
          "progression": "Je passe d’une analyse de signaux isolés à une chaîne complète de transmission et de validation."
        },
        "AC22.03": {
          "fait": "J’ai étudié une liaison entre deux postes via un canal HF, avec reconstruction du flux UDP côté réception.",
          "pourquoi": "Même si la SAÉ n’est pas un réseau opérateur complet, elle impose de penser la continuité de service entre source, canal radio et lecteur final.",
          "comment": "La chaîne TX/RX a été décrite avec PlutoSDR Sink, propagation HF, PlutoSDR Source, démodulation et UDP Sink vers VLC.",
          "difficultes": "Les traces montrent que la synchronisation QPSK et le bruit RF influencent directement la réception.",
          "fonctionne": "Le rapport indique que le flux reçu est décodé et transmis à VLC via UDP.",
          "pasFonctionne": "Un scénario de test de distance, d’atténuation ou de robustesse longue durée n’est pas fourni.",
          "appris": "J’ai appris à relier une transmission radio à une logique de service de bout en bout.",
          "progression": "Je progresse dans la compréhension d’un lien de transmission comme support d’un usage applicatif."
        },
        "AC22.04": {
          "fait": "J’ai pris en compte les bandes autorisées, les puissances et les contraintes réglementaires à partir du TNRBF et du rapport.",
          "pourquoi": "Une transmission HF ne peut pas être évaluée seulement techniquement : elle doit aussi respecter le cadre fréquentiel et la puissance autorisée.",
          "comment": "Le rapport retient notamment la bande 2,4 GHz et rappelle la compatibilité avec la puissance modeste du Pluto; le sujet impose le respect des porteuses autorisées.",
          "difficultes": "La difficulté visible est de transformer une contrainte réglementaire en choix concret de fréquence et de puissance.",
          "fonctionne": "Les documents fournis justifient le choix fréquentiel et donnent des références réglementaires.",
          "pasFonctionne": "La mesure expérimentale précise de puissance d’émission n’est pas publiée dans les traces disponibles.",
          "appris": "J’ai appris que l’administration d’un accès radio passe par la maîtrise de la fréquence, de la puissance et de l’occupation spectrale.",
          "progression": "Je relie mieux les choix de laboratoire aux contraintes réelles d’un accès radio."
        },
        "AC22.05": {
          "fait": "J’ai transformé le cahier des charges en critères vérifiables : source unique, GNU Radio obligatoire, codecs, débit, analyse spectrale et démonstration.",
          "pourquoi": "Sans critères clairs, il serait facile de présenter une chaîne partielle sans prouver la réception, la bande occupée ou la restitution finale.",
          "difficultes": "Les fichiers fournis imposent de ne pas confondre une capture finale avec une vidéo de démonstration autonome.",
          "fonctionne": "Les choix VLC, H.264, MP3, QPSK, 2,4 GHz et bande d’environ 1,35 MHz sont documentés.",
          "pasFonctionne": "La source exacte utilisée et la vidéo de démonstration doivent être confirmées par une trace dédiée.",
          "appris": "J’ai appris à questionner un cahier des charges technique en preuves attendues et non seulement en tâches à réaliser.",
          "progression": "Je progresse dans la distinction entre résultat annoncé, preuve disponible et élément encore à documenter."
        }
      }
    },
    "sae3-02": {
      "code": "SAÉ3.02",
      "title": "Search Engine Project",
      "semester": "S3",
      "page": "sae-3-02.html",
      "linkedACs": [
        "AC21.06",
        "AC22.05",
        "AC23.02",
        "AC23.03",
        "AC23.04",
        "AC23.05"
      ],
      "competenceSlugs": [
        "administrer",
        "connecter",
        "programmer"
      ],
      "metaDescription": "SAÉ3.02 Search Engine Project : moteur de recherche documentaire Python pour TXT, HTML, PDF et XLSX, avec client socket et interface web Flask.",
      "summary": "Application Python de recherche documentaire capable d’interroger un corpus local composé de fichiers TXT, HTML, PDF et XLSX, avec un mode client/serveur socket et une interface web Flask.",
      "description": "Le dépôt SAÉ3.02 fourni contient un moteur de recherche documentaire. Le serveur parcourt le dossier data, recherche une requête simple, booléenne ou regex dans plusieurs formats de fichiers, puis renvoie le fichier, le type, l’emplacement et un extrait du résultat.",
      "context": "Le projet répond à un besoin de consultation rapide d’un ensemble hétérogène de documents. Le corpus comprend un fichier texte de test, une page HTML sur l’algorithme Adam, un PDF valide sur la chronologie du Maroc, un fichier Excel ANRT valide, ainsi que deux fichiers fichiers de test invalides utilisés comme cas limites.",
      "problem": "Comment construire une application qui donne le même service de recherche sur des formats très différents, tout en restant utilisable depuis un client socket, une API JSON et une interface web ?",
      "objectives": [
        "Rechercher une requête dans des fichiers TXT, HTML, PDF et XLSX stockés dans le dossier data.",
        "Retourner des résultats structurés avec nom du fichier, type, emplacement et extrait contextualisé.",
        "Gérer les requêtes avancées avec opérateurs AND/OR, alias français et/ou, parenthèses et mode regex.",
        "Proposer deux accès à l’application : client/serveur TCP et interface web Flask.",
        "Prévoir des garde-fous lorsque certaines dépendances ou certains fichiers de données sont invalides."
      ],
      "constraints": [
        "Le README impose l’utilisation du dossier data relatif au projet.",
        "Le serveur socket écoute en local sur 127.0.0.1 :52300.",
        "L’interface web Flask est prévue sur 127.0.0.1 :8000 dans le dépôt original.",
        "Les formats pris en charge par le moteur sont limités à TXT, HTML, PDF et XLSX.",
        "Les fichiers document.pdf et data.xlsx présents dans la ZIP sont des fichiers de test invalides invalides : ils ne doivent pas être présentés comme de vrais livrables exploitables."
      ],
      "deliverables": [
        "README d’installation et d’utilisation du moteur de recherche.",
        "Serveur de recherche Python avec logique de parsing et handlers par format.",
        "Client socket Python pour interroger le serveur.",
        "Serveur web Flask exposant la page d’accueil et l’API /api/search.",
        "Template HTML Bootstrap avec filtres de formats, mode regex et tableau de résultats.",
        "Jeux de données de test : TXT, HTML, PDF, XLSX valide et fichiers de test invalides."
      ],
      "deliverable": "Application Python Search Engine Project avec interface socket, API Flask, interface web et corpus de test.",
      "personalRole": "La répartition individuelle n’est pas indiquée dans le ZIP. La page documente donc les réalisations visibles dans le dépôt : moteur Python, client/serveur socket, API Flask, interface web, traitement multi-formats et tests de validation. sur la part exacte prise dans chaque module.",
      "technologies": [
        "Python",
        "Socket TCP",
        "Flask",
        "HTML",
        "Bootstrap",
        "JavaScript",
        "JSON",
        "BeautifulSoup4",
        "pypdf",
        "pandas",
        "openpyxl",
        "Regex",
        "XLSX",
        "PDF"
      ],
      "workDone": [
        "Structuration du projet avec un dossier src pour le code, un dossier templates pour l’interface et un dossier data pour les documents interrogés.",
        "Développement d’un serveur de recherche local capable de sélectionner les fichiers par type et de renvoyer des résultats structurés.",
        "Mise en place d’un client socket qui se connecte à 127.0.0.1 :52300, envoie une requête et affiche la réponse du serveur.",
        "Ajout d’un parsing de requêtes avancées : opérateurs AND/OR, alias et/ou, parenthèses et préfixes regex.",
        "Création de handlers dédiés pour TXT, HTML, PDF et XLSX afin de produire des emplacements adaptés : ligne, page ou feuille/ligne Excel.",
        "Création d’une API Flask /api/search qui renvoie les résultats au format JSON et gère les erreurs de requête.",
        "Création d’une interface web Bootstrap avec champ de recherche, filtres TXT/HTML/PDF/XLSX, option regex et tableau de résultats.",
        "Validation locale sur les jeux de données fournis, y compris les fichiers fichiers de test invalides document.pdf et data.xlsx."
      ],
      "method": [
        "Lecture du README pour identifier les deux modes d’exécution : serveur socket avec client CLI et interface web Flask.",
        "Analyse du fichier server.py pour séparer la logique commune de recherche, les handlers de formats et le formatage des résultats.",
        "Validation progressive par type de fichier : TXT avec le mot moteur, HTML avec adam AND optimization, PDF avec Maroc, XLSX avec 2006.",
        "Test de l’API Flask avec le client de test Flask puis génération d’une capture de l’interface web en exécution réelle.",
        "Contrôle des fichiers invalides : document.pdf est un faux PDF et data.xlsx est un texte fichiers de test invalides, ce qui confirme l’intérêt des fallbacks prévus dans le code."
      ],
      "architecture": [
        {
          "label": "Moteur principal",
          "value": "src/server.py contient le parsing des requêtes, les handlers par format, le serveur socket et la fonction perform_structured_search."
        },
        {
          "label": "Client réseau",
          "value": "src/client.py ouvre une connexion TCP vers 127.0.0.1 :52300 et transmet les mots-clés saisis par l’utilisateur."
        },
        {
          "label": "API web",
          "value": "src/web_server.py expose / et /api/search avec Flask, puis retourne les résultats sous forme de JSON."
        },
        {
          "label": "Interface",
          "value": "src/templates/index.html propose une page Bootstrap avec filtres de type, mode regex, mise en évidence des résultats et tableau de restitution."
        },
        {
          "label": "Corpus",
          "value": "data contient test.txt, adam.html, pdf_chronologie_maroc.pdf, un fichier Excel ANRT valide, ainsi que document.pdf et data.xlsx comme fichiers de test invalides."
        },
        {
          "label": "Dépendances",
          "value": "requirements.txt liste flask, beautifulsoup4, pypdf, pandas, openpyxl et pytest."
        }
      ],
      "tests": [
        {
          "title": "Recherche TXT",
          "objective": "Vérifier la recherche simple dans un fichier texte.",
          "result": "La requête moteur renvoie 2 résultats dans test.txt, aux lignes 2 et 4.",
          "conclusion": "Le handler TXT retrouve bien les occurrences et retourne des emplacements lisibles."
        },
        {
          "title": "Recherche HTML",
          "objective": "Valider l’extraction du texte visible dans une page HTML.",
          "result": "La requête adam AND optimization limitée au type HTML renvoie 1 résultat dans adam.html.",
          "conclusion": "BeautifulSoup permet d’éviter de travailler directement sur les balises et de rechercher dans le contenu utile."
        },
        {
          "title": "Recherche regex",
          "objective": "Contrôler le mode avancé avec expression régulière.",
          "result": "La requête re :Bonj.*test limitée au TXT renvoie 1 résultat sur la première ligne de test.txt.",
          "conclusion": "Le préfixe regex est interprété correctement par le moteur."
        },
        {
          "title": "Recherche PDF",
          "objective": "Vérifier l’extraction de texte depuis un PDF valide.",
          "result": "La requête Maroc limitée au PDF renvoie 22 résultats dans pdf_chronologie_maroc.pdf.",
          "conclusion": "Le moteur sait retourner des emplacements par page lorsque le PDF est exploitable."
        },
        {
          "title": "Recherche XLSX",
          "objective": "Contrôler la lecture d’un classeur Excel.",
          "result": "La requête 2006 limitée au XLSX renvoie 1 résultat dans la feuille Bande passante Internet, ligne 2.",
          "conclusion": "Le handler XLSX parcourt les feuilles et restitue une localisation feuille/ligne pertinente."
        },
        {
          "title": "API Flask",
          "objective": "Valider l’accès web aux résultats structurés.",
          "result": "Les appels /api/search?q=moteur&types=txt, /api/search?q=adam%20AND%20optimization&types=html et /api/search?q=Maroc&types=pdf ont renvoyé le statut 200.",
          "conclusion": "L’interface web s’appuie bien sur la même fonction de recherche que le serveur."
        }
      ],
      "evidence": [
        {
          "type": "script-python",
          "status": "available",
          "label": "Code Python fourni dans la ZIP",
          "description": "Le code source montre le moteur multi-formats, le client socket et le serveur Flask.",
          "code": "SUPPORTED_TYPES = (\"txt\", \"html\", \"pdf\", \"xlsx\")\nFILE_PATTERNS = { \"txt\": \"*.txt\", \"html\": \"*.html\", \"pdf\": \"*.pdf\", \"xlsx\": \"*.xlsx\",\n} def perform_structured_search(keyword, types=None, use_regex=False) : \"\"\"Return structured search results for the selected file types.\"\"\" cleaned_keyword = keyword.strip() if not cleaned_keyword : return [] search_spec = parse_search_query(cleaned_keyword, use_regex=use_regex) requested_types = types or list(SUPPORTED_TYPES) results = [] for file_type in requested_types : if file_type not in SEARCH_HANDLERS : continue for filepath in get_files_for_type(file_type) : results.extend(SEARCH_HANDLERS[file_type](filepath, search_spec)) return results",
          "links": [
            {
              "label": "server.py",
              "href": "assets/sae3-02/source/server.py"
            },
            {
              "label": "client.py",
              "href": "assets/sae3-02/source/client.py"
            },
            {
              "label": "web_server.py",
              "href": "assets/sae3-02/source/web_server.py"
            },
            {
              "label": "requirements.txt",
              "href": "assets/sae3-02/docs/requirements.txt"
            }
          ]
        },
        {
          "type": "rapport-pdf",
          "status": "available",
          "label": "PDF et données sources",
          "description": "Le PDF valide contient 24 pages et sert de support au test de recherche PDF. Le fichier document.pdf est conservé comme fichiers de test invalides invalide, sans être présenté comme rapport réel.",
          "images": [
            {
              "src": "assets/sae3-02/captures/pdf-chronologie-maroc-page1.png",
              "alt": "Première page rendue du PDF chronologie Maroc utilisé pour les tests"
            }
          ],
          "links": [
            {
              "label": "PDF chronologie Maroc",
              "href": "assets/sae3-02/data/pdf_chronologie_maroc.pdf"
            },
            {
              "label": "Classeur ANRT XLSX",
              "href": "assets/sae3-02/data/anrt_observatoires_bande-passante-internet-internationale_2024.xlsx"
            },
            {
              "label": "README du projet",
              "href": "assets/sae3-02/docs/README.md"
            }
          ]
        },
        {
          "type": "capture-automatisation",
          "status": "available",
          "label": "Interface Flask exécutée avec résultats",
          "description": "Capture générée à partir de l’application Flask lancée localement sur le corpus fourni, avec une recherche Maroc dans le PDF.",
          "images": [
            {
              "src": "assets/sae3-02/captures/interface-recherche-maroc.png",
              "alt": "Interface web Flask du moteur de recherche avec résultats PDF pour Maroc"
            }
          ],
          "code": "@app.route('/api/search')\ndef api_search() : \"\"\"Return structured search results as JSON.\"\"\" q = request.args.get(\"q\", \"\").strip() if not q : return jsonify({\"query\": q, \"count\": 0, \"results\": []}) types_param = request.args.get(\"types\", \"\") types = [t for t in types_param.split(',') if t] if types_param else None use_regex = request.args.get(\"regex\", \"\").lower() in {\"1\", \"true\", \"yes\", \"on\"} results = search_server.perform_structured_search(q, types=types, use_regex=use_regex) return jsonify({\"query\": q, \"count\": len(results), \"results\": results})",
          "links": [
            {
              "label": "Template index.html",
              "href": "assets/sae3-02/source/templates/index.html"
            },
            {
              "label": "web_server.py",
              "href": "assets/sae3-02/source/web_server.py"
            }
          ]
        }
      ],
      "referenceDocs": [
        {
          "label": "README.md",
          "href": "assets/sae3-02/docs/README.md"
        },
        {
          "label": "requirements.txt",
          "href": "assets/sae3-02/docs/requirements.txt"
        },
        {
          "label": "server.py",
          "href": "assets/sae3-02/source/server.py"
        },
        {
          "label": "client.py",
          "href": "assets/sae3-02/source/client.py"
        },
        {
          "label": "web_server.py",
          "href": "assets/sae3-02/source/web_server.py"
        },
        {
          "label": "Interface HTML",
          "href": "assets/sae3-02/source/templates/index.html"
        },
        {
          "label": "test.txt",
          "href": "assets/sae3-02/data/test.txt"
        },
        {
          "label": "adam.html",
          "href": "assets/sae3-02/data/adam.html"
        },
        {
          "label": "Excel ANRT",
          "href": "assets/sae3-02/data/anrt_observatoires_bande-passante-internet-internationale_2024.xlsx"
        },
        {
          "label": "PDF chronologie Maroc",
          "href": "assets/sae3-02/data/pdf_chronologie_maroc.pdf"
        }
      ],
      "reflectionDefaults": {
        "comment": "J’ai avancé par lecture du besoin, découpage des formats à traiter, validation unitaire des handlers puis vérification par l’interface web.",
        "outils": "Python, sockets TCP, Flask, Bootstrap, BeautifulSoup4, pypdf, pandas, openpyxl, tests par requêtes ciblées et inspection des sorties JSON.",
        "difficultes": "La difficulté principale visible dans les traces est la diversité des formats et la présence de fichiers fichiers de test invalides qui ne doivent pas être interprétés comme de vrais PDF/XLSX.",
        "fonctionne": "Les tests ciblés confirment les recherches TXT, HTML, PDF, XLSX, regex et API Flask lorsque les dépendances du README sont installées.",
        "pasFonctionne": "Sans les dépendances du README, l’HTML et l’API Flask ne peuvent pas être validés; document.pdf et data.xlsx ne sont pas des fichiers exploitables dans leur format annoncé.",
        "appris": "J’ai appris à relier développement applicatif, accès aux données, protocole client/serveur et validation par preuves plutôt qu’à présenter seulement une interface.",
        "autrement": "Je prévoirais des tests automatisés pytest, un vrai jeu de données complet à la place des fichiers de test invalides, une configuration de port par variable et une pagination de l’interface web.",
        "progression": "Cette SAÉ montre une progression vers une démarche plus professionnelle : lire le besoin, isoler les modules, tester les cas limites et documenter ce qui est réellement validé."
      },
      "reflections": {
        "AC21.06": {
          "fait": "J’ai organisé les traces du projet pour rendre visibles les modules, les dépendances, les jeux de données et les validations. La répartition individuelle n’étant pas présente dans la ZIP, je décris uniquement les éléments visibles dans les traces publiées.",
          "pourquoi": "Pour travailler efficacement en équipe, il ne suffit pas d’avoir du code : il faut aussi rendre le projet compréhensible, installable et vérifiable par une autre personne.",
          "difficultes": "La limite principale est l’absence de document de répartition des rôles dans le dépôt. La page évite donc d’inventer une organisation de groupe non documentée.",
          "appris": "J’ai appris que la traçabilité du travail collectif passe par le README, les dépendances, les exemples de données et les tests reproductibles.",
          "progression": "Je progresse dans ma capacité à transformer un dépôt technique en preuve de compétence exploitable dans un portfolio."
        },
        "AC22.05": {
          "fait": "J’ai traduit le besoin en critères vérifiables : formats supportés, types de requêtes, structure des résultats, modes d’accès et gestion des erreurs.",
          "pourquoi": "Questionner le cahier des charges permet d’éviter une application limitée à un seul fichier ou à une interface sans preuve de fonctionnement.",
          "comment": "J’ai comparé le README, les handlers du code et les données fournies pour vérifier que chaque exigence visible avait une trace concrète.",
          "pasFonctionne": "Les fichiers de test invalides document.pdf et data.xlsx montrent qu’un cahier des charges doit préciser la qualité attendue des données de test.",
          "autrement": "Je demanderais dès le départ des fichiers de validation complets et un tableau de critères d’acceptation par format.",
          "progression": "Je passe d’une réponse centrée sur le code à une lecture plus critique du besoin et des preuves disponibles."
        },
        "AC23.02": {
          "fait": "J’ai présenté l’application web Flask avec son champ de recherche, ses filtres de format, son mode regex et son tableau de résultats.",
          "pourquoi": "L’interface rend le moteur utilisable par un utilisateur qui ne veut pas interagir uniquement en ligne de commande.",
          "comment": "La page Bootstrap appelle /api/search en JavaScript, puis affiche le fichier, le type, l’emplacement et l’extrait retournés par le serveur.",
          "fonctionne": "La capture de l’interface avec la requête Maroc confirme l’affichage de résultats PDF réels.",
          "pasFonctionne": "L’interface reste simple : elle ne propose pas encore de pagination, d’export de résultats ou de message détaillé sur les fichiers invalides.",
          "appris": "J’ai appris à séparer une interface web légère d’un moteur de recherche réutilisable côté serveur.",
          "autrement": "J’ajouterais des états de chargement plus propres, une pagination et des tests d’interface automatisés."
        },
        "AC23.03": {
          "fait": "J’ai documenté l’architecture client/serveur socket : le client envoie une requête au serveur local, le serveur traite la recherche et renvoie une réponse formatée.",
          "pourquoi": "Ce choix permet de montrer un échange réseau applicatif en plus de l’interface web.",
          "comment": "Le client utilise une socket TCP vers 127.0.0.1 :52300 et le serveur gère les connexions entrantes avant d’appeler le moteur de recherche.",
          "fonctionne": "Le protocole est simple et adapté au besoin : une requête texte, une réponse avec les résultats, puis fermeture avec q.",
          "pasFonctionne": "Le protocole reste local et minimal : il ne gère pas l’authentification, la concurrence avancée ou un format de message versionné.",
          "appris": "J’ai mieux compris le lien entre protocole réseau, application cliente et traitement serveur.",
          "autrement": "Je définirais un format JSON aussi pour le client socket afin d’éviter un simple texte formaté difficile à exploiter automatiquement."
        },
        "AC23.04": {
          "fait": "J’ai travaillé sur un corpus de données hétérogènes plutôt que sur un SGBD classique : fichiers texte, HTML, PDF et Excel.",
          "pourquoi": "L’objectif était d’administrer l’accès aux données disponibles dans le projet, de vérifier leur validité et de produire une restitution cohérente.",
          "comment": "Le code teste les fichiers XLSX avec zipfile, ouvre les classeurs avec pandas/openpyxl et prévoit un fallback texte quand un fichier annoncé comme XLSX n’en est pas un.",
          "fonctionne": "Le classeur ANRT est lu correctement : la requête 2006 retourne une ligne de la feuille Bande passante Internet.",
          "pasFonctionne": "data.xlsx est un fichiers de test invalides texte, donc il ne doit pas être considéré comme un vrai classeur de validation.",
          "appris": "J’ai appris qu’administrer des données signifie aussi vérifier leur format réel, pas seulement leur extension.",
          "autrement": "Je remplacerais les fichiers de test invalides par des jeux de données réels et j’ajouterais un rapport d’intégrité des fichiers au démarrage."
        },
        "AC23.05": {
          "fait": "J’ai relié l’application web au corpus via une API qui interroge les données et renvoie les résultats en JSON.",
          "pourquoi": "L’utilisateur doit pouvoir accéder aux données depuis une interface claire, avec des filtres et des extraits qui donnent du contexte.",
          "comment": "La route /api/search récupère la requête, les types demandés et l’option regex, puis délègue à perform_structured_search.",
          "fonctionne": "Les tests API renvoient le statut 200 et les nombres de résultats attendus pour TXT, HTML et PDF.",
          "pasFonctionne": "La page ne distingue pas encore visuellement les erreurs de dépendances, les fichiers invalides et l’absence réelle de résultat.",
          "appris": "J’ai appris à connecter une interface, une API et un corpus de fichiers en gardant une réponse structurée et exploitable.",
          "autrement": "J’ajouterais un journal de validation des sources et un affichage séparé des avertissements de fichiers ignorés ou dégradés."
        }
      }
    },
    "sae3-rom-03": {
      "code": "SAÉ3.ROM.03",
      "title": "Pépinière multi-sites (Siège / Succursale)",
      "semester": "S3",
      "page": "sae-3-rom-03.html",
      "linkedACs": [
        "AC21.01",
        "AC21.02",
        "AC21.03",
        "AC21.04",
        "AC21.05",
        "AC21.06",
        "AC22.02",
        "AC22.03",
        "AC24.01ROM",
        "AC24.02ROM",
        "AC24.03ROM",
        "AC24.04ROM",
        "AC24.05ROM",
        "AC25.01ROM"
      ],
      "competenceSlugs": [
        "administrer",
        "connecter",
        "reseaux-operateurs",
        "communications-unifiees"
      ],
      "summary": "Maquette réseau multi-sites pour une entreprise organisée autour d’un siège et d’une succursale, avec segmentation, services centralisés, administration contrôlée et interconnexion sécurisée.",
      "description": "La SAÉ3.ROM.03 porte sur la conception d’une infrastructure réseau multi-sites pour une pépinière. Les documents fournis présentent une maquette siège/succursale avec VLAN, redondance au siège, services DHCP/DNS/Syslog, proxy HTTP, accès SSH restreint et liaison sécurisée entre sites.",
      "context": "L’entreprise étudiée dispose d’un siège et d’une succursale distante. Les échanges inter-sites doivent être sécurisés, les usages doivent être séparés par zones et l’administration des équipements doit rester maîtrisée.",
      "problem": "Comment relier un siège et une succursale tout en cloisonnant les usages, en centralisant les services d’infrastructure au siège et en limitant l’administration aux réseaux autorisés ?",
      "objectives": [
        "Mettre en place une segmentation par VLAN pour ADMIN, PERSONNEL, VIDEO, PRODUCTION, WIFI, SERVEURS et DMZ.",
        "Restreindre l’administration SSH aux réseaux d’administration autorisés.",
        "Assurer une redondance de passerelle au siège avec HSRP.",
        "Centraliser DHCP, DNS, proxy HTTP et journaux au siège.",
        "Acheminer le trafic de la succursale via le siège et documenter l’interconnexion sécurisée.",
        "Prévoir une priorisation du trafic vidéo avec des éléments de configuration QoS."
      ],
      "constraints": [
        "Administration SSH uniquement depuis le réseau ADMIN ou les réseaux explicitement autorisés par ACL.",
        "Wi-Fi invité limité au Web via le proxy et sans accès aux réseaux internes.",
        "Trafic externe de la succursale à faire remonter vers le siège.",
        "Journalisation centralisée vers un serveur Syslog au siège.",
        "Aucun résultat de test ne doit être présenté comme validé lorsque le rapport indique une preuve à produire ou un échec."
      ],
      "deliverables": [
        "Rapport technique SAÉ 3.3 - Projet pépinière multi-sites.",
        "Compte rendu SAÉ3.03 - Maquette réseau multi-sites.",
        "Document de démonstration SAÉ 3.3.",
        "Fichier Packet Tracer du projet.",
        "Configurations Cisco et GNS3 exportées.",
        "Plan d’adressage et procédure SSH."
      ],
      "deliverable": "Rapports techniques, démonstration, fichier Packet Tracer, configurations Cisco/GNS3, plan d’adressage et procédures d’accès.",
      "personalRole": "D’après le rapport Packet Tracer, mon rôle a porté sur les VLAN/trunks, les SVI et l’inter-VLAN, les ACL inter-VLAN et management, SSH, DHCP relay, Syslog, Proxy, les tests/preuves et la validation générale.",
      "technologies": [
        "Cisco IOS",
        "Packet Tracer",
        "GNS3",
        "VLAN",
        "Trunks 802.1Q",
        "SVI",
        "HSRP",
        "OSPF",
        "GRE",
        "IPsec",
        "ACL",
        "SSH",
        "DHCP relay",
        "DNS/BIND",
        "Squid proxy",
        "Rsyslog",
        "QoS",
        "Rapid-PVST"
      ],
      "workDone": [
        "Conception d’une architecture siège/succursale avec zones séparées et services centralisés au siège.",
        "Configuration des VLAN et trunks sur les commutateurs cœur et accès.",
        "Mise en place des SVI, passerelles virtuelles HSRP et relais DHCP vers le serveur central.",
        "Application d’ACL pour restreindre l’administration SSH et isoler les flux invités, DMZ et production.",
        "Configuration et documentation des services DHCP, DNS, proxy HTTP et Syslog à partir des traces fournies.",
        "Préparation des tests de validation : VLAN, SSH, DHCP, DNS, HSRP, proxy, syslog, VPN et QoS.",
        "Constitution des preuves à partir des rapports, configurations, images de topologie et fichiers de maquette."
      ],
      "method": [
        "Analyse du besoin multi-sites et découpage en zones fonctionnelles : administration, personnel, vidéo, production, Wi-Fi, serveurs et DMZ.",
        "Préparation du plan d’adressage puis distinction entre la version Packet Tracer en 192.168.x et la maquette GNS3 en 10.10.x / 10.20.x documentée dans le ZIP.",
        "Mise en œuvre progressive : couche 2, routage inter-VLAN, redondance, services, filtrage, puis interconnexion.",
        "Validation par commandes réseau et services : show vlan brief, show standby brief, DHCP client, dig, show access-lists, show logging et sorties crypto IPsec.",
        "Analyse des limites : DNS retournant REFUSED dans une preuve, IPsec configuré mais trafic non validé dans la capture, preuves applicatives proxy/traceroute à produire."
      ],
      "architecture": [
        {
          "label": "Sites",
          "value": "Siège et succursale distante."
        },
        {
          "label": "Cœur réseau",
          "value": "Deux commutateurs L3 au siège avec HSRP et Rapid-PVST."
        },
        {
          "label": "VLAN siège",
          "value": "10 ADMIN, 20 PERSONNEL, 30 VIDEO, 40 PRODUCTION, 50 WIFI personnel, 60 WIFI invités, 70 SERVEURS, 80 DMZ/PROXY, 99 MGMT."
        },
        {
          "label": "Adressage GNS3",
          "value": "Siège en 10.10.<VLAN>.0/24, management 10.0.99.0/24, succursale en 10.20.<VLAN>.0/24."
        },
        {
          "label": "Services",
          "value": "DHCP/DNS, proxy HTTP et centralisation des logs au siège."
        },
        {
          "label": "Sécurité",
          "value": "ACL SSH_ADMIN, ACL DMZ_IN, ACL LAN_TO_PROXY, filtrage invité, IPsec site-à-site documenté."
        },
        {
          "label": "Routage",
          "value": "OSPF/GRE dans la démonstration Packet Tracer; routes statiques, VRF et IPsec dans les exports GNS3."
        },
        {
          "label": "QoS",
          "value": "Class-map et policy-map pour prioriser le trafic vidéo / VLAN 30 dans les configurations."
        }
      ],
      "tests": [
        {
          "title": "VLAN et trunks",
          "objective": "Vérifier la segmentation logique du siège.",
          "result": "Les extraits de preuve affichent les VLAN 10, 20, 30, 40, 50, 60, 70, 80 et 99 déclarés.",
          "conclusion": "La segmentation attendue est documentée dans le rapport complet."
        },
        {
          "title": "SVI et HSRP",
          "objective": "Vérifier les passerelles redondées au siège.",
          "result": "Les SVI sont indiquées up/up et HQ-SW2 apparaît en Standby avec les VIP 10.10.x.254 et 10.0.99.254.",
          "conclusion": "La redondance HSRP est prouvée par les sorties de commande fournies."
        },
        {
          "title": "SSH restreint",
          "objective": "Limiter l’administration aux réseaux autorisés.",
          "result": "L’ACL SSH_ADMIN contient des autorisations pour les réseaux d’administration et un deny any avec des correspondances; les lignes VTY utilisent access-class SSH_ADMIN.",
          "conclusion": "Le contrôle d’accès SSH est démontré côté configuration et runtime."
        },
        {
          "title": "DHCP",
          "objective": "Valider l’attribution d’adresse par le service central.",
          "result": "La preuve DHCP montre un DHCPOFFER puis un DHCPACK pour 10.0.10.50 depuis 10.0.10.10.",
          "conclusion": "Le fonctionnement DHCP est appuyé par une trace client réelle."
        },
        {
          "title": "DNS",
          "objective": "Vérifier le service de résolution interne.",
          "result": "Le service named est actif, mais la requête dig dns.hq.local retourne REFUSED dans la preuve extraite.",
          "conclusion": "Le service existe, mais la résolution fournie n’est pas une validation complète; ce point reste à corriger ou documenter."
        },
        {
          "title": "Proxy HTTP",
          "objective": "Contrôler la sortie Web via proxy centralisé.",
          "result": "L’ACL LAN_TO_PROXY autorise TCP vers 10.10.80.10 :3128 et contient un deny final loggé."
        },
        {
          "title": "VPN IPsec",
          "objective": "Sécuriser les flux entre siège et succursale.",
          "result": "Les objets IPsec sont configurés, mais la capture affiche des compteurs IPsec à 0 et un ping VRF vers 10.20.0.1 à 0 %.",
          "conclusion": "La configuration est présente, mais le trafic inter-sites n’est pas validé dans les traces fournies."
        },
        {
          "title": "Syslog",
          "objective": "Centraliser les journaux des équipements.",
          "result": "Les configurations contiennent logging host 10.0.10.10 et la preuve montre rsyslog actif.",
          "conclusion": "La centralisation est préparée et le service de réception est actif; une preuve de réception d’événement n’est pas publiée dans les traces disponibles."
        },
        {
          "title": "QoS vidéo",
          "objective": "Prioriser le trafic vidéo.",
          "result": "Les configurations contiennent des class-map et policy-map liées au trafic VIDEO/VLAN30."
        }
      ],
      "evidence": [
        {
          "type": "schema-reseau",
          "status": "available",
          "label": "Schémas réseau fournis",
          "description": "Topologie GNS3 et schéma d’architecture siège/succursale issus du ZIP.",
          "images": [
            {
              "src": "assets/sae3-rom-03/images/maquette_gns3.png",
              "alt": "Capture GNS3 de la maquette multi-sites"
            },
            {
              "src": "assets/sae3-rom-03/images/plan.png",
              "alt": "Schéma d’architecture siège succursale"
            }
          ],
          "links": [
            {
              "href": "assets/sae3-rom-03/images/maquette_gns3.png",
              "label": "Ouvrir la capture GNS3"
            },
            {
              "href": "assets/sae3-rom-03/images/plan.png",
              "label": "Ouvrir le schéma d’architecture"
            }
          ]
        },
        {
          "type": "packet-tracer",
          "status": "available",
          "label": "Fichier Packet Tracer",
          "description": "Maquette Packet Tracer SAÉ33.pkt fournie dans le ZIP.",
          "links": [
            {
              "href": "assets/sae3-rom-03/packet-tracer/SAE33.pkt",
              "label": "Télécharger le fichier Packet Tracer"
            }
          ]
        },
        {
          "type": "configuration-cisco",
          "status": "available",
          "label": "Configurations Cisco et GNS3",
          "description": "Exports de configuration CORE-SW1, CORE-SW2, R-HQ, R-BRANCH et configuration globale GNS3.",
          "code": "interface Vlan80 ip access-group DMZ_IN in ip helper-address 10.10.70.10 standby 80 ip 10.10.80.254\n!\nip access-list standard SSH_ADMIN permit 10.10.10.0 0.0.0.255 deny any",
          "links": [
            {
              "href": "assets/sae3-rom-03/configs/CORE-SW1_running-config.txt",
              "label": "CORE-SW1"
            },
            {
              "href": "assets/sae3-rom-03/configs/CORE-SW2_running-config.txt",
              "label": "CORE-SW2"
            },
            {
              "href": "assets/sae3-rom-03/configs/R-HQ_running-config.txt",
              "label": "R-HQ"
            },
            {
              "href": "assets/sae3-rom-03/configs/R-BRANCH_running-config.txt",
              "label": "R-BRANCH"
            },
            {
              "href": "assets/sae3-rom-03/configs/confglobla_gns3_compact.txt",
              "label": "Configuration globale GNS3"
            }
          ]
        },
        {
          "type": "rapport-pdf",
          "status": "available",
          "label": "Rapports et démonstration",
          "description": "Rapport complet, rapport Packet Tracer et support de démonstration extraits du ZIP.",
          "links": [
            {
              "href": "assets/sae3-rom-03/docs/SAE33_rapport__1_.pdf",
              "label": "Compte rendu SAÉ3.03"
            },
            {
              "href": "assets/sae3-rom-03/docs/RAPPORT_PACKET_TRACER_SAE_33.pdf",
              "label": "Rapport Packet Tracer"
            },
            {
              "href": "assets/sae3-rom-03/docs/DEMO__SAE_3.3.pdf",
              "label": "Démonstration SAÉ 3.3"
            }
          ]
        },
        {
          "type": "test-ping",
          "status": "available",
          "label": "Tests de filtrage et connectivité",
          "description": "Le rapport Packet Tracer mentionne un ping bloqué entre PERSONNEL et PRODUCTION; le rapport complet indique aussi un ping VRF IPsec à 0 %.",
          "links": [
            {
              "href": "assets/sae3-rom-03/docs/RAPPORT_PACKET_TRACER_SAE_33.pdf",
              "label": "Voir le rapport Packet Tracer"
            }
          ]
        },
        {
          "type": "test-dhcp",
          "status": "available",
          "label": "Trace DHCP",
          "description": "DHCPOFFER et DHCPACK pour 10.0.10.50 depuis 10.0.10.10 dans le compte rendu.",
          "code": "DHCPOFFER of 10.0.10.50 from 10.0.10.10\nDHCPACK of 10.0.10.50 from 10.0.10.10\nbound to 10.0.10.50",
          "links": [
            {
              "href": "assets/sae3-rom-03/docs/SAE33_rapport__1_.pdf",
              "label": "Voir le compte rendu"
            }
          ]
        },
        {
          "type": "test-dns",
          "status": "available",
          "label": "État DNS",
          "description": "Service BIND actif, mais preuve dig retournant REFUSED pour dns.hq.local.",
          "code": "named.service - BIND Domain Name Server\nActive : active (running)\nstatus : REFUSED",
          "links": [
            {
              "href": "assets/sae3-rom-03/docs/SAE33_rapport__1_.pdf",
              "label": "Voir la preuve DNS"
            }
          ]
        },
        {
          "type": "test-ssh",
          "status": "available",
          "label": "SSH restreint par ACL",
          "description": "Les lignes VTY utilisent access-class SSH_ADMIN et l’ACL contient des réseaux autorisés puis un deny any.",
          "code": "line vty 0 4 access-class SSH_ADMIN in login local transport input ssh",
          "links": [
            {
              "href": "assets/sae3-rom-03/configs/ssh.md",
              "label": "Voir la procédure SSH"
            }
          ]
        },
        {
          "type": "test-qos",
          "status": "available",
          "label": "QoS vidéo",
          "description": "Les configurations contiennent des class-map/policy-map pour le trafic vidéo ou VLAN30.",
          "code": "class-map match-any CM-VLAN30 match access-group name ACL-VLAN30\npolicy-map PM-QOS-VLAN30 class CM-VLAN30 priority percent 30"
        }
      ],
      "referenceDocs": [
        {
          "href": "assets/sae3-rom-03/docs/NT_IPsec.pdf",
          "label": "ANSSI - Recommandations IPsec"
        },
        {
          "href": "assets/sae3-rom-03/docs/anssi_essentiels_architecture_securisee_v1.0.pdf",
          "label": "ANSSI - Architecture sécurisée de SI"
        },
        {
          "href": "assets/sae3-rom-03/docs/guide_hygiene_informatique_anssi.pdf",
          "label": "ANSSI - Guide d’hygiène informatique"
        },
        {
          "href": "assets/sae3-rom-03/configs/Plan_dadressage.md",
          "label": "Plan d’adressage"
        },
        {
          "href": "assets/sae3-rom-03/configs/ssh.md",
          "label": "Accès SSH"
        }
      ],
      "reflectionDefaults": {
        "comment": "J’ai avancé par couches : topologie, VLAN/trunks, SVI et passerelles, filtrage, services, puis tests. Cette méthode m’a permis de relier chaque configuration à une preuve ou à un point restant à valider.",
        "outils": "J’ai utilisé les rapports fournis, Packet Tracer, GNS3, les configurations Cisco, les commandes show, les traces DHCP/DNS/Syslog et les documents ANSSI présents dans le ZIP.",
        "difficultes": "Les traces montrent plusieurs points à traiter avec prudence : DNS répond REFUSED dans une preuve, IPsec est configuré mais le ping VRF est à 0 %, et certaines validations sont indiquées comme à produire en séance.",
        "fonctionne": "Les preuves disponibles valident notamment les VLAN, SVI, HSRP, ACL SSH, DHCP, éléments de proxy, QoS configurée et service rsyslog actif.",
        "autrement": "Je préparerais une grille de recette dès le début du projet pour associer chaque exigence à une commande, une capture, un résultat attendu et une conclusion vérifiable.",
        "progression": "Cette SAÉ montre ma progression dans la lecture critique d’une infrastructure : je ne regarde plus seulement si une configuration existe, je vérifie aussi si la preuve démontre réellement le fonctionnement annoncé."
      },
      "reflections": {
        "AC21.01": {
          "fait": "J’ai participé à l’organisation du routage et des chemins entre le siège et la succursale, en m’appuyant sur les routes, OSPF/GRE documenté et la configuration IPsec présente.",
          "pourquoi": "Il fallait garantir que les réseaux de chaque site puissent être atteints de manière contrôlée.",
          "appris": "J’ai compris qu’un tunnel ou une route configurée ne suffit pas : la preuve de trafic doit confirmer la convergence ou la connectivité.",
          "progression": "Je progresse vers une démarche où je compare configuration, table de routage et résultat de test avant de conclure."
        },
        "AC21.02": {
          "fait": "J’ai travaillé sur les ACL de management, les ACL DMZ/LAN_TO_PROXY et les éléments QoS liés au VLAN vidéo.",
          "pourquoi": "La maquette devait limiter les flux non autorisés et prioriser les usages sensibles comme la vidéo.",
          "appris": "J’ai appris à lire une politique de filtrage comme une chaîne de décisions, avec des autorisations précises et un deny final journalisé.",
          "progression": "Je sais mieux justifier une règle de sécurité par rapport à un besoin fonctionnel et à une trace de validation."
        },
        "AC21.03": {
          "fait": "J’ai exploité une maquette composée de postes, serveurs, routeurs, commutateurs et services virtualisés dans Packet Tracer/GNS3.",
          "pourquoi": "La situation nécessitait de simuler un environnement réaliste sans déployer physiquement toute l’infrastructure.",
          "appris": "J’ai identifié l’importance de documenter les limites de simulation, notamment lorsque certains tests doivent être produits séparément.",
          "progression": "Je distingue mieux ce qui relève de la conception, de la simulation et de la preuve réellement obtenue."
        },
        "AC21.04": {
          "fait": "J’ai documenté les services DHCP, DNS, proxy HTTP et Syslog centralisés au siège.",
          "pourquoi": "Ces services structurent l’exploitation du réseau et permettent d’administrer plusieurs zones depuis un point central.",
          "appris": "J’ai compris qu’un service actif n’est pas toujours une validation complète : le DNS actif avec une réponse REFUSED doit être analysé.",
          "progression": "Je suis plus attentif à la différence entre installation, configuration et recette fonctionnelle."
        },
        "AC21.05": {
          "fait": "J’ai relié la topologie locale aux notions de WAN, proxy de sortie, DMZ, tunnel et interconnexion de sites.",
          "pourquoi": "La succursale devait utiliser le siège comme point de passage et de contrôle.",
          "appris": "J’ai mieux compris comment une architecture d’entreprise combine accès, cœur, DMZ, transit et services.",
          "progression": "Je sais mieux représenter une architecture globale plutôt qu’une somme d’équipements isolés."
        },
        "AC21.06": {
          "fait": "Le rapport Packet Tracer précise une répartition avec mon travail sur VLAN/trunks, SVI, ACL, SSH, DHCP relay, Syslog, Proxy, tests/preuves et validation générale.",
          "pourquoi": "Le projet nécessitait de partager les responsabilités pour couvrir à la fois conception, configuration, tests et documentation.",
          "appris": "J’ai appris que la documentation des rôles est aussi importante que la configuration technique pour rendre le travail vérifiable.",
          "progression": "Je progresse dans la production de preuves exploitables par une autre personne que moi."
        },
        "AC22.02": {
          "fait": "J’ai contribué à la partie accès distant sécurisé avec SSH limité par ACL et documentation des accès d’administration.",
          "pourquoi": "L’administration des équipements ne devait pas être accessible depuis les VLAN utilisateurs ou invités.",
          "appris": "J’ai compris le rôle combiné des comptes locaux, SSH v2, access-class VTY et réseaux autorisés.",
          "progression": "Je sais mieux sécuriser un accès d’administration en partant d’une politique d’accès, pas seulement d’une commande SSH."
        },
        "AC22.03": {
          "fait": "J’ai étudié l’interconnexion siège/succursale avec trafic succursale dirigé vers le siège et proxy central.",
          "pourquoi": "L’objectif était de garder le contrôle des sorties et des services depuis le siège.",
          "appris": "J’ai appris à vérifier une interconnexion multi-site avec un plan d’adressage, des routes, un tunnel et des tests de bout en bout.",
          "progression": "Je progresse dans la conception multi-site, surtout sur la cohérence entre adressage, filtrage et preuve de connectivité."
        },
        "AC24.01ROM": {
          "fait": "J’ai documenté les zones d’accès des deux sites : utilisateurs, production, vidéo, Wi-Fi personnel et invité.",
          "pourquoi": "Les réseaux d’accès devaient séparer les usages tout en gardant les services nécessaires.",
          "appris": "J’ai mieux compris le lien entre accès utilisateur, VLAN et règles de filtrage.",
          "progression": "Je sais mieux lire une topologie d’accès comme une organisation de services et de droits."
        },
        "AC24.02ROM": {
          "fait": "J’ai exploité une maquette virtualisée Packet Tracer/GNS3 avec routeurs, commutateurs, postes et services.",
          "pourquoi": "La virtualisation permettait de tester une architecture complète sans matériel réel.",
          "appris": "J’ai appris à documenter les composants virtualisés et à indiquer les limites lorsque la simulation ne valide pas tout.",
          "progression": "Je suis plus rigoureux dans la distinction entre preuve de configuration et preuve de service."
        },
        "AC24.03ROM": {
          "fait": "J’ai travaillé sur une architecture inspirée d’un contexte opérateur/entreprise : siège, succursale, WAN, DMZ, proxy et services centralisés.",
          "pourquoi": "Le projet demandait une vision d’ensemble des offres et services fournis par l’infrastructure.",
          "appris": "J’ai compris que l’architecture doit rester lisible : zones, flux, passerelles, points de contrôle et supervision.",
          "progression": "Je sais mieux expliquer pourquoi chaque brique technique existe dans le service global."
        },
        "AC24.04ROM": {
          "fait": "J’ai analysé les trunks, SVI, routes, ACL et mécanismes d’interconnexion entre cœur, routeurs et succursale.",
          "pourquoi": "Le bon fonctionnement dépendait de la cohérence entre commutation, routage et filtrage.",
          "appris": "J’ai appris à vérifier les flux en suivant leur chemin logique entre VLAN, passerelle, routeur et tunnel.",
          "progression": "Je progresse dans le diagnostic de bout en bout, pas seulement équipement par équipement."
        },
        "AC24.05ROM": {
          "fait": "J’ai organisé les configurations exportées et les extraits utiles pour rendre l’infrastructure vérifiable.",
          "pourquoi": "Même sans scripts d’automatisation fournis dans le ZIP, la standardisation des configurations aide à fiabiliser l’exploitation.",
          "appris": "J’ai compris l’intérêt d’archiver les configurations complètes et les extraits ciblés pour préparer une validation reproductible.",
          "progression": "Je commence à penser l’exploitation comme un ensemble de traces, versions et contrôles réutilisables."
        },
        "AC25.01ROM": {
          "fait": "J’ai pris en compte le VLAN vidéo et les éléments QoS prévus pour prioriser ce trafic.",
          "pourquoi": "Les flux vidéo sont sensibles à la latence et doivent être distingués des flux classiques.",
          "appris": "J’ai compris que la QoS doit être prouvée par configuration mais aussi par mesure ou observation de files/politiques.",
          "progression": "Je sais mieux relier un besoin temps réel à une politique réseau et à une preuve de validation attendue."
        }
      }
    },
    "sae3-rom-04": {
      "code": "SAÉ3.ROM.04",
      "title": "Déploiement et sécurisation d’une infrastructure ToIP avec Asterisk",
      "semester": "S3",
      "page": "sae-3-rom-04.html",
      "linkedACs": [
        "AC25.01ROM",
        "AC25.02ROM",
        "AC25.03ROM"
      ],
      "competenceSlugs": [
        "communications-unifiees"
      ],
      "metaDescription": "SAÉ3.ROM.04 : déploiement ToIP avec Asterisk, PJSIP, SIP, TFTP, messagerie vocale, IVR, trunk inter-sites, TLS et analyse de sécurité VoIP.",
      "summary": "Mise en œuvre d’un IPBX Asterisk avec terminaux SIP Fanvil et Cisco, plan de numérotation, TFTP, messagerie vocale, IVR, trunk SIP inter-sites et démarche de sécurisation des échanges SIP/RTP.",
      "description": "La SAÉ3.ROM.04 correspond au projet ToIP : déployer un service de téléphonie adapté avec Asterisk, PJSIP, terminaux Fanvil et Cisco, services IPBX, trunk SIP et sécurisation. Les PDF fournis montrent des procédures de configuration, des extraits de fichiers Asterisk, une présentation finale et une analyse de sécurité menée en environnement pédagogique contrôlé.",
      "context": "Le projet consiste à construire une infrastructure de téléphonie sur IP comprenant un ou plusieurs serveurs Asterisk, des comptes SIP PJSIP, des téléphones Fanvil et Cisco, un serveur TFTP pour le provisioning Cisco, une messagerie vocale, un serveur vocal interactif, un trunk SIP entre deux serveurs et une analyse des risques SIP/RTP.",
      "problem": "Comment déployer un service ToIP exploitable tout en gardant une configuration administrable, des terminaux provisionnés, des services téléphoniques utiles et une démarche de sécurisation adaptée aux flux temps réel ?",
      "objectives": [
        "Installer et préparer un serveur Asterisk avec accès SSH et vérification de connectivité.",
        "Configurer PJSIP avec endpoints, auth, AOR, transport, identify et trunk.",
        "Créer un plan de numérotation dans extensions.conf pour les appels internes et inter-sites.",
        "Configurer des terminaux Fanvil et Cisco avec une logique de provisioning adaptée.",
        "Déployer une messagerie vocale et un serveur vocal interactif accessible par 0800.",
        "Mettre en place un trunk SIP entre deux serveurs Asterisk.",
        "Analyser les flux SIP/RTP en environnement de TP contrôlé et proposer des contre-mesures.",
        "Mettre en évidence TLS pour la signalisation et présenter SRTP comme axe de sécurisation média lorsque la preuve complète manque."
      ],
      "constraints": [
        "Ne publier aucun mot de passe réel, aucune adresse MAC complète, aucune clé privée ni certificat complet.",
        "Anonymiser les adresses IP privées dans les extraits de configuration publiés.",
        "Présenter l’analyse MITM uniquement comme une démarche pédagogique et défensive, sans procédure exploitable.",
        "Ne pas déclarer qu’une politique QoS complète a été déployée : les documents prouvent surtout l’analyse des besoins temps réel.",
        "Ne pas déclarer SRTP entièrement validé sans preuve Wireshark précise du média chiffré."
      ],
      "deliverables": [
        "Procédures TP Asterisk/PJSIP/extensions/TFTP/voicemail/IVR/trunk.",
        "Extraits de configuration assainis pour PJSIP, extensions.conf, trunk SIP, TLS et provisioning Cisco.",
        "Captures recadrées de la soutenance : topologie, provisioning, messagerie, IVR, trunk, TLS et roadmap sécurité.",
        "Analyse de sécurité défensive des risques SIP/RTP et des contre-mesures."
      ],
      "deliverable": "Page portfolio dédiée avec preuves recadrées, extraits assainis, statuts de validation et analyse réflexive BUT2.",
      "personalRole": "Les documents de soutenance indiquent un projet réalisé par Adam et Anton. La répartition exacte des tâches personnelles n’est pas détaillée dans les PDF :",
      "heroBadges": [
        "Asterisk",
        "PJSIP",
        "SIP",
        "RTP / SRTP",
        "TLS",
        "IVR",
        "Messagerie vocale",
        "TFTP",
        "Wireshark"
      ],
      "technologies": [
        "Asterisk",
        "PJSIP",
        "SIP",
        "SIPS",
        "RTP",
        "SRTP",
        "TLS",
        "Voicemail",
        "IVR",
        "TFTP",
        "XML Cisco",
        "Fanvil",
        "Cisco",
        "Wireshark",
        "SSH",
        "Asterisk CLI",
        "extensions.conf",
        "pjsip.conf"
      ],
      "workDone": [
        "Préparation d’une VM Asterisk avec mise à jour des paquets, installation d’Asterisk, nano et OpenSSH.",
        "Activation de SSH et vérification de la connectivité entre la machine client et le serveur.",
        "Configuration PJSIP des endpoints Fanvil et Cisco avec sections endpoint, auth et AOR.",
        "Création du plan de numérotation interne dans extensions.conf avec Dial() et Hangup().",
        "Configuration du téléphone Fanvil par interface web.",
        "Déploiement d’un serveur TFTP et préparation d’un fichier XML SEP[MAC].cnf.xml pour le téléphone Cisco.",
        "Ajout d’une messagerie vocale avec VoiceMail() et consultation centralisée par l’extension 888.",
        "Création d’un IVR sur l’extension 0800 avec menu DTMF, options Fanvil, Cisco, heure système et raccrochage.",
        "Mise en place d’un trunk SIP entre deux serveurs Asterisk avec auth, AOR, endpoint, registration et identify.",
        "Analyse des flux avec Wireshark et étude des risques liés à SIP/RTP non chiffrés.",
        "Étude et configuration du transport TLS sur PJSIP pour sécuriser la signalisation."
      ],
      "architecture": [
        {
          "label": "Asterisk",
          "value": "IPBX logiciel utilisé pour gérer les extensions, appels, services de messagerie, IVR et routage vers le trunk SIP."
        },
        {
          "label": "PJSIP",
          "value": "Pile SIP modulaire : endpoint, auth, AOR, transport, identify et trunk structurent la configuration des terminaux et interconnexions."
        },
        {
          "label": "Fanvil",
          "value": "Téléphone SIP configuré directement via son interface web et rattaché à un compte PJSIP."
        },
        {
          "label": "Cisco",
          "value": "Téléphone provisionné via un fichier XML distribué par TFTP, puis enregistré sur Asterisk."
        },
        {
          "label": "Trunk SIP",
          "value": "Interconnexion entre deux serveurs Asterisk pour acheminer des appels inter-sites."
        },
        {
          "label": "TLS / SRTP",
          "value": "TLS est documenté pour chiffrer la signalisation SIP. SRTP est présenté comme contre-mesure média, mais sa validation complète n’est pas publiée dans les traces disponibles."
        }
      ],
      "toipTopology": {
        "title": "Architecture ToIP",
        "description": "La chaîne relie les terminaux SIP aux serveurs Asterisk, avec un trunk inter-sites et un serveur TFTP pour le provisioning Cisco. Les flux de signalisation passent en SIP ou SIPS, tandis que les flux média sont en RTP ou SRTP selon la sécurisation visée.",
        "nodes": [
          {
            "label": "Téléphone Fanvil",
            "detail": "Terminal SIP configuré par interface web.",
            "icon": "fa-phone",
            "kind": "endpoint"
          },
          {
            "label": "Asterisk A",
            "detail": "IPBX, extensions, voicemail, IVR et routage sortant.",
            "icon": "fa-server",
            "kind": "service"
          },
          {
            "label": "Trunk SIP",
            "detail": "Lien inter-PBX pour les appels entre sites.",
            "icon": "fa-route",
            "kind": "service"
          },
          {
            "label": "Asterisk B",
            "detail": "Serveur distant, contexte externe et distribution locale.",
            "icon": "fa-server",
            "kind": "service"
          },
          {
            "label": "Téléphone Cisco",
            "detail": "Terminal provisionné par TFTP avec fichier XML.",
            "icon": "fa-phone-volume",
            "kind": "endpoint"
          }
        ],
        "flows": [
          "SIP / SIPS : signalisation",
          "RTP / SRTP : média",
          "TFTP : provisioning Cisco",
          "CLI Asterisk : diagnostic",
          "Wireshark : observation réseau"
        ],
        "image": {
          "src": "assets/sae3-rom-04/captures/topologie-toip.png",
          "alt": "Topologie ToIP recadrée avec serveurs Asterisk, Fanvil, Cisco et TFTP"
        }
      },
      "configCards": [
        {
          "title": "PJSIP",
          "icon": "fa-file-code",
          "description": "Les PDF montrent la structure modulaire de pjsip.conf pour déclarer les terminaux et le trunk.",
          "points": [
            "endpoint : définit le terminal, le contexte et les codecs.",
            "auth : gère l’authentification utilisateur.",
            "AOR : localise le terminal et limite les contacts.",
            "transport : définit UDP ou TLS.",
            "identify : associe une adresse à un endpoint.",
            "trunk : interconnecte deux IPBX."
          ],
          "code": "[FanvilXX]\ntype=endpoint\ncontext=interne\ndisallow=all\nallow=ulaw\nauth=FanvilXX-auth\naors=FanvilXX [FanvilXX-auth]\ntype=auth\nauth_type=userpass\nusername=FanvilXX\npassword=<mot-de-passe-masque>",
          "links": [
            {
              "label": "pjsip assaini",
              "href": "assets/sae3-rom-04/configs/pjsip-sanitized.conf"
            }
          ]
        },
        {
          "title": "Plan de numérotation",
          "icon": "fa-list-ol",
          "description": "extensions.conf route les appels internes, la messagerie, l’IVR et les appels inter-sites.",
          "points": [
            "Dial() pour joindre un poste.",
            "Hangup() pour terminer l’appel.",
            "VoiceMail() en cas de non-réponse.",
            "VoiceMailMain() sur l’extension 888.",
            "0800 comme entrée de l’IVR.",
            "Patterns _1X ou _20XX pour le routage trunk selon le serveur."
          ],
          "code": "exten => 0800,1,Answer()\nsame => n,Goto(AccueilAnnonce,s,1) [AccueilAnnonce]\nexten => s,1,Playback(accueil)\nsame => n,Playback(menuIVR)\nsame => n,WaitExten(5)\nexten => 1,1,Dial(PJSIP/FanvilXX,12)\nexten => 2,1,Dial(PJSIP/CiscoXX,12)",
          "links": [
            {
              "label": "extensions assaini",
              "href": "assets/sae3-rom-04/configs/extensions-sanitized.conf"
            }
          ]
        },
        {
          "title": "Trunk SIP",
          "icon": "fa-network-wired",
          "description": "Le trunk utilise des blocs auth, AOR, endpoint, registration et identify pour relier deux serveurs Asterisk.",
          "points": [
            "authentification inter-PBX masquée dans le portfolio.",
            "contact distant anonymisé.",
            "registration pour l’enregistrement automatique.",
            "identify pour reconnaître les paquets entrants.",
            "routage des extensions distantes dans extensions.conf."
          ],
          "code": "[siptrunk]\ntype=endpoint\ntransport=transport-udp\ncontext=externe_recu\ndisallow=all\nallow=ulaw\noutbound_auth=siptrunk-auth\naors=siptrunk-aor [siptrunk-identify]\ntype=identify\nendpoint=siptrunk\nmatch=<ip-serveur-distant>",
          "links": [
            {
              "label": "trunk assaini",
              "href": "assets/sae3-rom-04/configs/trunk-sanitized.conf"
            }
          ]
        },
        {
          "title": "Transport TLS",
          "icon": "fa-lock",
          "description": "Le PDF de sécurisation documente un transport TLS PJSIP sur le port 5061 avec certificats.",
          "points": [
            "transport-tls en protocol=tls.",
            "certificat et clé privée référencés, mais non publiés.",
            "Wireshark montre Client Hello, Server Hello, certificats et Application Data.",
            "Le contenu SIP devient non lisible après établissement TLS."
          ],
          "code": "[transport-tls]\ntype=transport\nprotocol=tls\nbind=0.0.0.0 :5061\ncert_file=<chemin-certificat-non-publie>\npriv_key_file=<chemin-cle-privee-non-publie>\nmethod=tlsv1_2",
          "links": [
            {
              "label": "TLS assaini",
              "href": "assets/sae3-rom-04/configs/tls-sanitized.conf"
            }
          ]
        }
      ],
      "serviceCards": [
        {
          "title": "Appels internes",
          "icon": "fa-phone",
          "description": "Les appels entre terminaux sont dirigés par extensions.conf avec Dial(PJSIP/..).",
          "points": [
            "Postes Fanvil et Cisco.",
            "Contexte interne.",
            "Validation prévue avec dialplan show."
          ],
          "status": "Configuration documentée; test d’appel réel non publié si une capture dédiée existe."
        },
        {
          "title": "Messagerie vocale",
          "icon": "fa-voicemail",
          "description": "Le TP et la soutenance montrent VoiceMail(), VoiceMailMain() et l’accès centralisé par l’extension 888.",
          "points": [
            "Redirection après non-réponse.",
            "Consultation avec ${CALLERID(num)}.",
            "voicemail.conf documenté."
          ],
          "status": "Configuration documentée."
        },
        {
          "title": "Serveur vocal interactif",
          "icon": "fa-headset",
          "description": "L’IVR est prévu sur 0800 avec menu DTMF et plusieurs branches.",
          "points": [
            "Option 1 : joindre Fanvil.",
            "Option 2 : joindre Cisco.",
            "Option 3 : annoncer l’heure système.",
            "Option 4 : raccrocher."
          ],
          "status": "Logique IVR documentée dans extensions.conf."
        },
        {
          "title": "Trunk SIP inter-sites",
          "icon": "fa-share-nodes",
          "description": "Le trunk relie deux serveurs Asterisk et route les extensions distantes.",
          "points": [
            "auth, AOR, endpoint, registration, identify.",
            "Routage par patterns.",
            "Vérification prévue avec pjsip show registrations."
          ],
          "status": "Configuration documentée; appel inter-sites réel"
        }
      ],
      "provisioningComparison": [
        {
          "title": "Fanvil",
          "icon": "fa-phone",
          "description": "Le Fanvil est présenté comme le terminal le plus direct à configurer.",
          "points": [
            "Configuration via interface web.",
            "Compte SIP PJSIP.",
            "Enregistrement sur Asterisk.",
            "Preuve d’enregistrement réelle"
          ],
          "image": {
            "src": "assets/sae3-rom-04/captures/provisioning-terminaux.png",
            "alt": "Comparatif de provisioning Fanvil et Cisco"
          }
        },
        {
          "title": "Cisco",
          "icon": "fa-phone-volume",
          "description": "Le Cisco requiert un provisioning réseau par serveur TFTP et fichier XML.",
          "points": [
            "Serveur TFTP tftp-hpa.",
            "Fichier SEP[MAC].cnf.xml.",
            "Paramètres SIP et serveur dans XML."
          ],
          "image": {
            "src": "assets/sae3-rom-04/captures/provisioning-terminaux.png",
            "alt": "Méthode de configuration Cisco par XML via TFTP"
          }
        }
      ],
      "securityAudit": {
        "description": "Les analyses de sécurité sont présentées comme un travail pédagogique défensif en environnement de TP contrôlé. Aucune commande d’attaque exploitable ni procédure MITM détaillée n’est publiée.",
        "risks": {
          "title": "Risques observés",
          "items": [
            "Signalisation SIP lisible lorsque le transport n’est pas chiffré.",
            "Flux RTP exposé à l’écoute dans un réseau local non protégé.",
            "Provisioning TFTP non chiffré et sensible aux observations réseau.",
            "Identifiants SIP faibles ou exposés dans des fichiers de configuration.",
            "Qualité voix sensible aux pertes, à la gigue et au délai."
          ]
        },
        "analysis": {
          "title": "Analyse réalisée",
          "items": [
            "Observation des échanges SIP/TFTP avec Wireshark.",
            "Étude du risque d’interception dans un environnement de TP contrôlé.",
            "Lecture des limites de SIP/RTP non chiffrés.",
            "Aucune procédure offensive détaillée n’est publiée dans le portfolio."
          ]
        },
        "countermeasures": {
          "title": "Contre-mesures",
          "items": [
            "TLS pour chiffrer la signalisation SIP.",
            "SRTP comme contre-mesure média à valider par preuve dédiée.",
            "Certificats et clés stockés côté serveur, non publiés.",
            "Authentification SIP robuste et secrets non exposés.",
            "identify, remove_existing et limitation des contacts.",
            "Segmentation réseau, VLAN voix, DSCP et QoS comme axes professionnels."
          ]
        },
        "validation": {
          "title": "Validation TLS",
          "items": [
            "La soutenance montre un échange TLS dans Wireshark.",
            "Client Hello, Server Hello, certificats et échange de clés sont visibles.",
            "Après établissement TLS, le contenu SIP apparaît en Application Data.",
            "SRTP n’est pas présenté comme totalement validé faute de capture média dédiée."
          ]
        },
        "image": {
          "src": "assets/sae3-rom-04/captures/wireshark-tls-redacted.png",
          "alt": "Capture Wireshark TLS anonymisée montrant Application Data et messages TLS"
        }
      },
      "method": [
        "Lire les procédures et la soutenance pour distinguer configuration, validation et éléments seulement attendus.",
        "Documenter les fichiers Asterisk par rôles : PJSIP pour les terminaux, extensions.conf pour la logique d’appel, voicemail.conf pour les boîtes vocales.",
        "Séparer les preuves de configuration des preuves de fonctionnement réel.",
        "Assainir tous les extraits avant publication : mots de passe, IP privées, MAC, clés et certificats.",
        "Présenter la sécurité sous un angle défensif : risques, observations, contre-mesures et limites."
      ],
      "implementationSteps": {
        "eyebrow": "Travail réalisé",
        "title": "Timeline technique",
        "steps": [
          {
            "title": "Préparation de la VM et installation d’Asterisk",
            "objective": "Installer le socle IPBX.",
            "tools": "apk, Asterisk, nano, OpenSSH.",
            "result": "Procédure documentée dans TP.pdf.",
            "proof": "TP pages 1 à 3."
          },
          {
            "title": "Activation de SSH et connectivité",
            "objective": "Administrer le serveur à distance.",
            "tools": "sshd, ping, ssh.",
            "result": "Procédure de connexion documentée.",
            "proof": "TP pages 1 à 3; IP non publiée."
          },
          {
            "title": "Configuration PJSIP",
            "objective": "Déclarer les comptes SIP.",
            "tools": "pjsip.conf, endpoint, auth, AOR.",
            "result": "Structure Fanvil/Cisco documentée.",
            "proof": "Extrait assaini pjsip-sanitized.conf."
          },
          {
            "title": "Création des endpoints Fanvil et Cisco",
            "objective": "Associer les terminaux aux contextes Asterisk.",
            "tools": "PJSIP, codecs ulaw, context interne.",
            "result": "Endpoints documentés dans TP et sécurisation.",
            "proof": "Captures et extraits assainis."
          },
          {
            "title": "Authentifications et AOR",
            "objective": "Gérer login SIP et localisation du terminal.",
            "tools": "auth_type=userpass, max_contacts, remove_existing.",
            "result": "Blocs documentés, mots de passe masqués.",
            "proof": "pjsip-sanitized.conf."
          },
          {
            "title": "Plan de numérotation",
            "objective": "Router les appels internes et services.",
            "tools": "extensions.conf, Dial(), Hangup().",
            "result": "Appels Fanvil/Cisco et extension 888/0800 documentés.",
            "proof": "extensions-sanitized.conf."
          },
          {
            "title": "Vérifications CLI",
            "objective": "Contrôler endpoints et dialplan.",
            "tools": "pjsip show endpoints, dialplan show.",
            "result": "Commandes prévues par les PDF; sortie réelle non publiée.",
            "proof": "TP pages 1, 2, 5, 6."
          },
          {
            "title": "Configuration Fanvil",
            "objective": "Enregistrer un téléphone SIP simple.",
            "tools": "Interface web Fanvil, compte SIP.",
            "result": "Méthode documentée.",
            "proof": "Soutenance provisioning."
          },
          {
            "title": "Serveur TFTP",
            "objective": "Distribuer la configuration Cisco.",
            "tools": "tftp-hpa, /var/tftpboot.",
            "result": "Procédure TFTP documentée."
          },
          {
            "title": "Provisioning Cisco XML",
            "objective": "Configurer un téléphone Cisco par fichier SEP[MAC].cnf.xml.",
            "tools": "XML, TFTP, Wireshark.",
            "result": "Structure documentée, MAC et secrets masqués.",
            "proof": "cisco-provisioning-sanitized.xml."
          },
          {
            "title": "Messagerie vocale",
            "objective": "Rediriger les appels non répondus.",
            "tools": "VoiceMail(), VoiceMailMain(), voicemail.conf.",
            "result": "Extension 888 et ${CALLERID(num)} documentés.",
            "proof": "Capture messagerie vocale."
          },
          {
            "title": "Serveur vocal interactif",
            "objective": "Créer un menu d’accueil.",
            "tools": "Answer(), Playback(), WaitExten(), Dial(), SayUnixTime().",
            "result": "Options 1 à 4 documentées.",
            "proof": "Captures IVR et applications Asterisk."
          },
          {
            "title": "Trunk SIP inter-sites",
            "objective": "Relier deux IPBX.",
            "tools": "auth, AOR, endpoint, registration, identify.",
            "result": "Configuration trunk documentée.",
            "proof": "trunk-sanitized.conf et tableau soutenance."
          },
          {
            "title": "Analyse Wireshark",
            "objective": "Observer les échanges VoIP.",
            "tools": "Wireshark, filtres SIP/TFTP/TLS.",
            "proof": "Capture Wireshark TLS anonymisée."
          },
          {
            "title": "TLS et SRTP",
            "objective": "Sécuriser signalisation et média.",
            "tools": "PJSIP TLS, certificats, SRTP.",
            "result": "TLS documenté et illustré; SRTP présenté comme principe/roadmap.",
            "proof": "tls-sanitized.conf et captures TLS/SRTP."
          },
          {
            "title": "Analyse de vulnérabilités",
            "objective": "Identifier les faiblesses et contre-mesures.",
            "tools": "Notes MITM, Wireshark, analyse défensive.",
            "result": "Risques décrits sans procédure offensive.",
            "proof": "Section sécurité et sources analysées."
          }
        ]
      },
      "commandBlocks": [
        {
          "title": "Diagnostic Asterisk",
          "description": "Commandes de vérification indiquées dans les PDF.",
          "command": "asterisk -rvv\npjsip show endpoints\ndialplan show interne\npjsip show registrations\npjsip show aors"
        },
        {
          "title": "Services système",
          "description": "Commandes d’administration de base du serveur ToIP.",
          "command": "service asterisk status\nservice asterisk start\nservice asterisk restart\nrc-service sshd start\nservice in.tftpd restart",
          "proof": "Procédures présentes dans TP.pdf."
        },
        {
          "title": "Observation réseau défensive",
          "description": "Filtres d’observation cités pour vérifier les échanges, sans fournir de procédure offensive.",
          "command": "sip || tftp || arp\nAnalyse TLS : Client Hello, Server Hello, Certificate, Application Data",
          "proof": "Wireshark TLS documenté dans la soutenance."
        }
      ],
      "statusResults": [
        {
          "status": "validated",
          "icon": "fa-file-code",
          "title": "PJSIP documenté",
          "result": "Endpoints, auth, AOR, transport, identify et trunk apparaissent dans les PDF.",
          "proof": "TP.pdf et sécurisation.pdf."
        },
        {
          "status": "validated",
          "icon": "fa-list-ol",
          "title": "Dialplan documenté",
          "result": "extensions.conf contient appels internes, voicemail, extension 888, IVR 0800 et routage trunk.",
          "proof": "TP.pdf pages 10 à 26."
        },
        {
          "status": "validated",
          "icon": "fa-voicemail",
          "title": "Messagerie vocale documentée",
          "result": "VoiceMail(), VoiceMailMain() et ${CALLERID(num)} sont présents.",
          "proof": "TP.pdf et soutenance page 10."
        },
        {
          "status": "validated",
          "icon": "fa-headset",
          "title": "IVR documenté",
          "result": "Menu avec Fanvil, Cisco, heure système et raccrochage.",
          "proof": "TP.pdf et soutenance pages 11 à 15."
        },
        {
          "status": "validated",
          "icon": "fa-lock",
          "title": "TLS documenté",
          "result": "Transport TLS PJSIP et capture Wireshark TLS avec Application Data.",
          "proof": "sécurisation.pdf et soutenance page 24."
        },
        {
          "status": "partial",
          "icon": "fa-phone-volume",
          "title": "Provisioning Cisco",
          "proof": "TP.pdf pages 7 à 9."
        },
        {
          "status": "partial",
          "icon": "fa-share-nodes",
          "title": "Trunk SIP",
          "proof": "TP.pdf et soutenance pages 16 à 17."
        },
        {
          "status": "partial",
          "icon": "fa-wave-square",
          "title": "SRTP",
          "result": "Présenté comme principe et roadmap de sécurisation, sans preuve média dédiée suffisante.",
          "proof": "Soutenance pages 27 à 29."
        }
      ],
      "limitations": [
        {
          "title": "Mots de passe et identifiants masqués",
          "text": "Les PDF contiennent des mots de passe, adresses IP privées et un exemple de fichier Cisco avec informations sensibles. Le portfolio publie uniquement des extraits assainis."
        },
        {
          "title": "SRTP non présenté comme totalement validé",
          "text": "La soutenance explique le principe SRTP et la roadmap, mais ne fournit pas une capture média dédiée suffisante pour déclarer une validation complète."
        },
        {
          "text": "Pour AC25.03ROM, la page analyse les besoins temps réel de la voix, mais ne prétend pas qu’une politique QoS effective a été déployée."
        },
        {
          "title": "Analyse MITM encadrée",
          "text": "Le PDF MIT mentionne des outils et l’écoute de flux en TP. La page conserve uniquement la lecture défensive des risques et des contre-mesures."
        }
      ],
      "tests": [
        {
          "title": "Asterisk démarré",
          "objective": "Vérifier que l’IPBX fonctionne.",
          "result": "Procédure service asterisk status/start documentée.",
          "proof": "TP.pdf page 1."
        },
        {
          "title": "Endpoints PJSIP",
          "objective": "Contrôler les terminaux déclarés.",
          "result": "Commandes pjsip show endpoints documentées.",
          "proof": "TP.pdf pages 1 et 5.",
          "conclusion": "Configuration disponible, sortie réelle non publiée."
        },
        {
          "title": "Plan de numérotation",
          "objective": "Vérifier le dialplan.",
          "result": "dialplan show interne est prévu, et extensions.conf est documenté.",
          "proof": "TP.pdf pages 2, 5, 10 à 12.",
          "conclusion": "Configuration documentée."
        },
        {
          "title": "Téléphone Cisco provisionné",
          "objective": "Valider la récupération XML via TFTP.",
          "result": "Le TP indique l’observation attendue d’une requête TFTP.",
          "conclusion": "Partiellement validé par procédure."
        },
        {
          "title": "Messagerie vocale",
          "objective": "Rediriger les appels non répondus.",
          "result": "VoiceMail() et VoiceMailMain() sont documentés.",
          "proof": "Capture messagerie vocale.",
          "conclusion": "Configuration documentée."
        },
        {
          "title": "IVR",
          "objective": "Aiguiller les appels par menu.",
          "result": "Les options du menu sont écrites dans extensions.conf.",
          "proof": "Captures IVR.",
          "conclusion": "Logique documentée."
        },
        {
          "title": "Trunk SIP",
          "objective": "Interconnecter deux serveurs Asterisk.",
          "result": "Blocs trunk et patterns de routage documentés.",
          "proof": "trunk-sanitized.conf et capture trunk."
        },
        {
          "title": "Transport TLS",
          "objective": "Chiffrer la signalisation SIP.",
          "result": "Wireshark montre négociation TLS et Application Data.",
          "proof": "Capture TLS anonymisée.",
          "conclusion": "TLS présenté comme validé."
        },
        {
          "title": "SRTP",
          "objective": "Protéger les flux média.",
          "result": "Principe présenté, preuve complète non publiée.",
          "conclusion": "Ne pas déclarer validé entièrement."
        }
      ],
      "evidenceTypes": [
        {
          "id": "topologie-toip",
          "title": "Schéma topologique ToIP",
          "icon": "fa-diagram-project"
        },
        {
          "id": "pjsip-config",
          "title": "Extrait pjsip.conf",
          "icon": "fa-file-code"
        },
        {
          "id": "dialplan-config",
          "title": "Extrait extensions.conf",
          "icon": "fa-list-ol"
        },
        {
          "id": "provisioning",
          "title": "Provisioning Fanvil/Cisco",
          "icon": "fa-phone-volume"
        },
        {
          "id": "messagerie",
          "title": "Messagerie vocale",
          "icon": "fa-voicemail"
        },
        {
          "id": "ivr",
          "title": "Diagramme IVR",
          "icon": "fa-headset"
        },
        {
          "id": "trunk",
          "title": "Trunk SIP",
          "icon": "fa-share-nodes"
        },
        {
          "id": "tls-wireshark",
          "title": "Wireshark TLS",
          "icon": "fa-lock"
        },
        {
          "id": "srtp",
          "title": "SRTP",
          "icon": "fa-shield-halved"
        },
        {
          "id": "audit-securite",
          "title": "Audit de sécurité",
          "icon": "fa-user-shield"
        },
        {
          "id": "qos",
          "title": "QoS voix",
          "icon": "fa-gauge-high"
        }
      ],
      "evidence": [
        {
          "type": "topologie-toip",
          "status": "available",
          "label": "Topologie recadrée",
          "description": "Capture de la soutenance montrant serveurs Asterisk A/B, téléphones Fanvil/Cisco, réseau IP et serveur TFTP.",
          "images": [
            {
              "src": "assets/sae3-rom-04/captures/topologie-toip.png",
              "alt": "Topologie réseau ToIP recadrée"
            }
          ]
        },
        {
          "type": "pjsip-config",
          "status": "available",
          "label": "Configuration PJSIP assainie",
          "description": "Endpoint, auth, AOR et transport sont repris sous forme anonymisée à partir des PDF.",
          "code": "[FanvilXX]\ntype=endpoint\ncontext=interne\nauth=FanvilXX-auth\naors=FanvilXX [FanvilXX-auth]\npassword=<mot-de-passe-masque>",
          "links": [
            {
              "label": "pjsip-sanitized.conf",
              "href": "assets/sae3-rom-04/configs/pjsip-sanitized.conf"
            }
          ]
        },
        {
          "type": "dialplan-config",
          "status": "available",
          "label": "Plan de numérotation assaini",
          "description": "Appels internes, messagerie, 888 et IVR 0800 sont repris sans données sensibles.",
          "code": "exten => 888,1,VoiceMailMain(${CALLERID(num)}@default)\nexten => 0800,1,Answer()\nsame => n,Goto(AccueilAnnonce,s,1)",
          "links": [
            {
              "label": "extensions-sanitized.conf",
              "href": "assets/sae3-rom-04/configs/extensions-sanitized.conf"
            }
          ]
        },
        {
          "type": "provisioning",
          "status": "available",
          "label": "Comparatif de provisioning",
          "description": "La soutenance compare Fanvil en interface web et Cisco par XML/TFTP. Le XML publié est assaini.",
          "images": [
            {
              "src": "assets/sae3-rom-04/captures/provisioning-terminaux.png",
              "alt": "Provisioning des terminaux Fanvil et Cisco"
            }
          ],
          "links": [
            {
              "label": "Cisco XML assaini",
              "href": "assets/sae3-rom-04/configs/cisco-provisioning-sanitized.xml"
            }
          ]
        },
        {
          "type": "messagerie",
          "status": "available",
          "label": "Messagerie vocale documentée",
          "description": "La capture de soutenance montre l’accès centralisé 888 et l’usage de VoiceMail().",
          "images": [
            {
              "src": "assets/sae3-rom-04/captures/messagerie-vocale.png",
              "alt": "Messagerie vocale avec VoiceMail et extension 888"
            }
          ]
        },
        {
          "type": "ivr",
          "status": "available",
          "label": "IVR documenté",
          "description": "Les captures montrent l’architecture IVR et les applications Asterisk utilisées.",
          "images": [
            {
              "src": "assets/sae3-rom-04/captures/ivr-architecture.png",
              "alt": "Architecture du serveur vocal interactif"
            },
            {
              "src": "assets/sae3-rom-04/captures/applications-asterisk-ivr.png",
              "alt": "Applications Asterisk utilisées pour l’IVR"
            }
          ]
        },
        {
          "type": "trunk",
          "status": "available",
          "label": "Configuration trunk documentée",
          "description": "La soutenance et les TP détaillent les blocs trunk SIP. L’appel inter-sites réel reste à prouver par capture dédiée.",
          "images": [
            {
              "src": "assets/sae3-rom-04/captures/trunk-sip-interconnexion.png",
              "alt": "Interconnexion de sites par trunk SIP"
            },
            {
              "src": "assets/sae3-rom-04/captures/trunk-sip-tableau.png",
              "alt": "Tableau des blocs de configuration trunk SIP"
            }
          ],
          "links": [
            {
              "label": "trunk-sanitized.conf",
              "href": "assets/sae3-rom-04/configs/trunk-sanitized.conf"
            }
          ]
        },
        {
          "type": "tls-wireshark",
          "status": "available",
          "label": "TLS validé par capture anonymisée",
          "description": "La soutenance montre Client Hello, Server Hello, certificats, échange de clés et Application Data après établissement TLS.",
          "images": [
            {
              "src": "assets/sae3-rom-04/captures/wireshark-tls-redacted.png",
              "alt": "Capture Wireshark TLS anonymisée"
            }
          ],
          "links": [
            {
              "label": "tls-sanitized.conf",
              "href": "assets/sae3-rom-04/configs/tls-sanitized.conf"
            }
          ]
        },
        {
          "type": "srtp",
          "status": "available",
          "label": "Principe documenté, validation non publiée",
          "description": "La soutenance présente SRTP comme protection média. Le portfolio ne le déclare pas entièrement validé faute de preuve média dédiée.",
          "images": [
            {
              "src": "assets/sae3-rom-04/captures/tls-srtp-principe.png",
              "alt": "Principe TLS et SRTP"
            },
            {
              "src": "assets/sae3-rom-04/captures/roadmap-securisation.png",
              "alt": "Roadmap de sécurisation TLS SRTP et validation"
            }
          ]
        },
        {
          "type": "audit-securite",
          "status": "available",
          "label": "Analyse défensive",
          "description": "Le PDF MIT est utilisé seulement pour expliquer les risques d’écoute en environnement de TP contrôlé et les contre-mesures.",
          "links": [
            {
              "label": "Sources analysées",
              "href": "assets/sae3-rom-04/docs/sources-analysees.md"
            }
          ]
        }
      ],
      "referenceDocs": [
        {
          "label": "Sources analysées",
          "href": "assets/sae3-rom-04/docs/sources-analysees.md"
        },
        {
          "label": "PJSIP assaini",
          "href": "assets/sae3-rom-04/configs/pjsip-sanitized.conf"
        },
        {
          "label": "Dialplan assaini",
          "href": "assets/sae3-rom-04/configs/extensions-sanitized.conf"
        },
        {
          "label": "TLS assaini",
          "href": "assets/sae3-rom-04/configs/tls-sanitized.conf"
        }
      ],
      "extraActions": [
        {
          "label": "Retour aux compétences",
          "href": "competences.html",
          "icon": "fa-arrow-left"
        },
        {
          "label": "Voir les preuves",
          "href": "#sae-proofs",
          "icon": "fa-folder-open",
          "variant": "primary"
        }
      ],
      "reflectionDefaults": {
        "comment": "en précisant ma contribution exacte dans le binôme.",
        "outils": "Asterisk, PJSIP, extensions.conf, voicemail.conf, terminaux Fanvil/Cisco, TFTP, XML, Wireshark, TLS, Asterisk CLI.",
        "difficultes": "Les documents montrent toutefois des points délicats : provisioning Cisco, trunk SIP, sécurité TLS/SRTP et séparation entre preuve de configuration et preuve de fonctionnement.",
        "fonctionne": "La configuration des services ToIP est documentée, TLS est illustré par une capture Wireshark et les éléments sensibles sont correctement identifiés pour publication.",
        "appris": "Cette SAÉ m’a fait relier service téléphonique, administration IPBX, terminaux SIP, sécurité et qualité temps réel.",
        "autrement": "Je préparerais une collecte de preuves dès les tests : captures CLI, appels, enregistrements, trunk, TFTP, TLS et mesures QoS.",
        "progression": "Je progresse d’une configuration de service vers une démarche plus professionnelle : architecture, exploitation, preuves, sécurité et limites."
      },
      "reflections": {
        "AC25.01ROM": {
          "fait": "J’ai étudié et documenté une architecture ToIP avec Asterisk, terminaux Fanvil/Cisco, serveur TFTP, trunk SIP, messagerie vocale et IVR.",
          "pourquoi": "Le but était de choisir une architecture capable de fournir un vrai service téléphonique, pas seulement deux postes SIP isolés.",
          "comment": "Je me suis appuyé sur les PDF TP et soutenance pour relier chaque composant à son rôle : IPBX, endpoints, plan de numérotation, provisioning et interconnexion.",
          "outils": "Asterisk, PJSIP, extensions.conf, TFTP, XML Cisco, Fanvil, Cisco, trunk SIP et schéma de topologie.",
          "difficultes": "Les documents montrent que Cisco est plus complexe à provisionner que Fanvil et demande une logique TFTP/XML.",
          "fonctionne": "L’architecture est cohérente et les services principaux sont documentés dans les fichiers fournis.",
          "pasFonctionne": "La preuve d’un appel complet entre sites ou d’un enregistrement réel des postes doit encore être ajoutée si elle existe.",
          "appris": "J’ai compris qu’un service ToIP dépend d’un ensemble de choix : terminaux, IPBX, plan de numérotation, provisioning et routage.",
          "autrement": "Je créerais un tableau de tests dès le départ pour associer chaque choix d’architecture à une preuve.",
          "progression": "Cette SAÉ montre ma progression dans le choix et le déploiement d’une architecture de téléphonie d’entreprise."
        },
        "AC25.02ROM": {
          "fait": "J’ai travaillé sur l’administration du service : endpoints, comptes SIP, auth, AOR, dialplan, messagerie, IVR, trunk et commandes CLI.",
          "pourquoi": "Un service ToIP doit être maintenable : il faut savoir ajouter un poste, vérifier un endpoint, modifier un routage et diagnostiquer un problème.",
          "comment": "J’ai structuré la page autour des fichiers Asterisk et des commandes de diagnostic vues dans les PDF.",
          "outils": "pjsip.conf, extensions.conf, voicemail.conf, asterisk -rvv, pjsip show endpoints, dialplan show, pjsip show registrations.",
          "difficultes": "La difficulté visible est de garder les configurations lisibles tout en évitant d’exposer des secrets.",
          "fonctionne": "Les services sont décrits avec leurs blocs de configuration et les extraits publiés sont assainis.",
          "appris": "J’ai appris à voir l’administration ToIP comme un équilibre entre configuration, diagnostic et sécurité des informations.",
          "autrement": "Je conserverais des captures CLI anonymisées pour chaque étape importante.",
          "progression": "Je progresse dans l’administration d’un service téléphonique complet, avec plusieurs terminaux et services associés."
        },
        "AC25.03ROM": {
          "fait": "J’ai analysé les besoins temps réel de la voix et les risques qualité liés aux flux SIP/RTP, sans prétendre avoir déployé une QoS complète.",
          "pourquoi": "La voix est sensible au délai, à la gigue et aux pertes. Une infrastructure professionnelle doit donc prévoir une priorisation et une séparation adaptées.",
          "comment": "J’ai relié les services ToIP aux contraintes de transport : RTP/SRTP pour le média, TLS pour la signalisation, VLAN voix, DSCP et files QoS comme pistes d’amélioration.",
          "outils": "Analyse Wireshark, principes RTP/SRTP, TLS, réflexion sur VLAN voix, DSCP, priorisation RTP et contrôle de bande passante.",
          "difficultes": "Les documents ne fournissent pas de configuration QoS complète, donc il faut distinguer analyse et déploiement réel.",
          "fonctionne": "La page explique les contraintes temps réel et identifie les mécanismes qui seraient nécessaires pour une QoS professionnelle.",
          "pasFonctionne": "Aucune preuve de marquage DSCP, VLAN voix ou files QoS n’est fournie.",
          "appris": "J’ai compris que sécuriser et administrer la ToIP ne suffit pas : il faut aussi garantir la qualité perçue par l’utilisateur.",
          "autrement": "Je mettrais en place des tests de latence, gigue, pertes et une politique DSCP/VLAN voix mesurable.",
          "progression": "Cette réflexion montre que je sais reconnaître les limites d’un projet et formuler les améliorations nécessaires pour un contexte professionnel."
        }
      }
    },
    "sae4-rom-01": {
      "code": "SAÉ4.ROM.01",
      "title": "Déployer une infrastructure opérateur et ses services clients",
      "semester": "S4",
      "page": "sae-4-rom-01.html",
      "linkedACs": [
        "AC24.01ROM",
        "AC24.02ROM",
        "AC24.03ROM",
        "AC24.04ROM",
        "AC24.05ROM"
      ],
      "competenceSlugs": [
        "reseaux-operateurs"
      ],
      "metaDescription": "SAÉ4.ROM.01 : déploiement LTE srsRAN 4G avec EPC, eNodeB, UE, ADALM-Pluto, Docker, SoapySDR, S1AP et analyse des limites PBCH.",
      "summary": "Déploiement d’une infrastructure LTE expérimentale avec srsRAN 4G, depuis le socle virtualisé jusqu’aux essais ADALM-Pluto. Les preuves montrent un cœur EPC démarré, un eNodeB relié au MME en SCTP/S1AP et une détection de cellule côté UE, mais pas d’attachement LTE complet.",
      "description": "La SAÉ4.ROM.01 demandait de déployer un réseau opérateur mobile avec srsRAN 4G en utilisant srsEPC, srsENB et srsUE, d’abord en radio virtuelle puis avec une couche radio réelle de type ADALM-Pluto. Le rapport final et les traces fournies montrent une progression avancée, avec une limite finale située au décodage stable du PBCH côté UE.",
      "context": "Le sujet officiel impose de mettre en place les briques d’un réseau LTE/4G, de documenter les rôles de srsUE, srsENB et srsEPC, de tester la chaîne puis de remplacer la radio virtuelle ZeroMQ par une interface matérielle comme ADALM-Pluto. Le travail final retient une architecture avec EPC et eNodeB sur une VM, un UE lancé depuis Docker sur la machine hôte et deux modules ADALM-Pluto.",
      "problem": "Comment passer d’une infrastructure LTE virtualisée à une couche radio réelle sans perdre la cohérence des paramètres cœur, eNodeB, UE, authentification, fréquence, gains RF et preuves réseau ?",
      "objectives": [
        "Déployer les composants srsRAN 4G : srsEPC, srsENB et srsUE.",
        "Comprendre le rôle du cœur EPC, de l’eNodeB, de l’UE et de l’interface S1AP.",
        "Préparer un socle Docker/ZeroMQ puis faire évoluer la chaîne vers ADALM-Pluto.",
        "Configurer des paramètres LTE cohérents : MCC, MNC, TAC, APN, EARFCN, PRB et authentification UE.",
        "Valider la communication entre eNodeB et MME par capture SCTP/S1AP.",
        "Diagnostiquer les limites radio côté UE : synchronisation PSS/SSS, PBCH, PLMN et attachement NAS."
      ],
      "constraints": [
        "Projet réalisé en binôme, groupe 4, avec rendu technique et soutenance.",
        "Sujet officiel centré sur srsRAN 4G et l’évolution de ZeroMQ vers UHD ou ADALM-Pluto.",
        "Respecter la cohérence des paramètres LTE entre EPC, eNodeB et UE.",
        "Ne pas publier les paramètres d’authentification LTE sensibles : IMSI complet, K, OPc et IMEI.",
        "Ne pas présenter le résultat final comme un succès LTE complet : le PBCH n’a pas été décodé de manière stable côté UE.",
        "Distinguer les preuves réellement présentes des éléments attendus mais non archivés."
      ],
      "deliverables": [
        "Sujet officiel SAÉ4.ROM.01 fourni en PDF.",
        "Rapport final de 13 pages analysé, non publié en entier car il contient des secrets LTE.",
        "Dépôt de configuration srsRAN avec Docker, scripts, fichiers EPC/eNodeB/UE et documents de préparation.",
        "PCAP réelle pluto_core_wire.pcap montrant l’association SCTP/S1AP entre eNodeB et MME.",
        "Captures sélectionnées du rapport final sans paramètres sensibles.",
        "Configurations assainies publiables pour expliquer les paramètres réseau et radio."
      ],
      "deliverable": "Rapport final, dépôt de configuration, scripts de lancement, captures de preuves, PCAP S1AP et synthèse des limites radio.",
      "personalRole": "Le rapport final est signé par Adam Tmimi et Anton Maurette. La répartition exacte des tâches individuelles n’est pas détaillée dans les fichiers : pour préciser ma contribution propre.",
      "heroBadges": [
        "srsRAN 4G",
        "LTE",
        "EPC",
        "eNodeB",
        "UE",
        "ADALM-Pluto",
        "SoapySDR",
        "Docker",
        "ZeroMQ",
        "SCTP / S1AP"
      ],
      "technologies": [
        "srsRAN 4G",
        "srsEPC",
        "srsENB",
        "srsUE",
        "LTE",
        "EPC",
        "MME",
        "HSS",
        "SP-GW",
        "S1AP",
        "SCTP",
        "GTP-U",
        "ADALM-Pluto",
        "SoapySDR",
        "SoapyPlutoSDR",
        "Docker",
        "Docker Compose",
        "ZeroMQ",
        "tcpdump",
        "Wireshark",
        "Linux",
        "TUN",
        "USB passthrough"
      ],
      "workDone": [
        "Analyse du sujet officiel et des documents srsRAN pour identifier les briques EPC, eNodeB, UE et les preuves attendues.",
        "Préparation d’un dépôt Docker avec Dockerfile, docker-compose, scripts d’entrée et fichiers de configuration srsRAN.",
        "Validation préparatoire en radio virtuelle ZeroMQ avant le passage à la radio matérielle.",
        "Installation et vérification de l’environnement SoapySDR/SoapyPlutoSDR pour rendre ADALM-Pluto utilisable par srsRAN.",
        "Configuration d’un cœur EPC et d’un eNodeB sur une VM avec MCC 001, MNC 01, TAC 0x0007, APN srsapn, EARFCN 3350 et 25 PRB.",
        "Lancement séparé de srsepc et srsenb pour faciliter le diagnostic et isoler les erreurs cœur/eNodeB.",
        "Mise en place d’un UE srsUE dans Docker avec accès direct au bus USB et au périphérique TUN.",
        "Capture du trafic cœur/eNodeB avec tcpdump et vérification de l’association SCTP/S1AP dans pluto_core_wire.pcap.",
        "Diagnostic radio côté UE : recherche PLMN, détection PSS/SSS, puis blocage au décodage PBCH."
      ],
      "architecture": [
        {
          "label": "Cœur EPC",
          "value": "srsEPC regroupe les fonctions HSS, MME et SP-GW. Le rapport montre un démarrage correct du cœur avec HSS, S11, GTP-C et GTP-U initialisés."
        },
        {
          "label": "Station de base",
          "value": "srsENB joue le rôle d’eNodeB : il se connecte au MME en S1AP et émet la cellule LTE avec ADALM-Pluto côté VM."
        },
        {
          "label": "Terminal utilisateur",
          "value": "srsUE est lancé côté hôte dans Docker avec accès USB direct au Pluto UE et à /dev/net/tun."
        },
        {
          "label": "Radio réelle",
          "value": "Deux ADALM-Pluto sont utilisés pour remplacer la radio virtuelle. Le backend SoapySDR charge le module plutosdr."
        },
        {
          "label": "Interface cœur",
          "value": "La capture pluto_core_wire.pcap prouve l’association SCTP sur le port S1AP 36412 entre 127.0.1.1 et 127.0.1.100."
        },
        {
          "label": "Limite finale",
          "value": "L’UE détecte PSS/SSS mais ne décode pas PBCH de façon stable. Cela empêche la sélection PLMN et l’attachement NAS complet."
        }
      ],
      "lteTopology": {
        "title": "Architecture de la chaîne LTE testée",
        "description": "Le déploiement sépare le cœur LTE, la station de base et le terminal utilisateur pour diagnostiquer chaque couche : cœur EPC, interface S1AP, radio ADALM-Pluto, recherche réseau UE et attachement NAS.",
        "lanes": [
          {
            "title": "VM cœur LTE",
            "subtitle": "EPC + eNodeB + Pluto émission",
            "icon": "fa-server",
            "nodes": [
              {
                "badge": "EPC",
                "title": "srsEPC",
                "detail": "MME, HSS et SP-GW démarrés avec MCC 001, MNC 01, TAC 0x0007 et APN srsapn."
              },
              {
                "badge": "S1",
                "title": "SCTP / S1AP",
                "detail": "Association eNodeB-MME observée dans la PCAP sur le port 36412."
              },
              {
                "badge": "eNB",
                "title": "srsENB",
                "detail": "Station de base LTE configurée en SoapySDR avec EARFCN 3350 et 25 PRB."
              },
              {
                "badge": "RF",
                "title": "ADALM-Pluto eNodeB",
                "detail": "Backend plutosdr, gains eNodeB ajustés et émission cellule LTE observée indirectement par l’UE."
              }
            ]
          },
          {
            "title": "Machine hôte / UE",
            "subtitle": "Docker + Pluto réception",
            "icon": "fa-laptop-code",
            "nodes": [
              {
                "badge": "USB",
                "title": "Accès matériel",
                "detail": "Conteneur lancé avec /dev/bus/usb et /dev/net/tun pour piloter le Pluto UE."
              },
              {
                "badge": "UE",
                "title": "srsUE",
                "detail": "Recherche réseau lancée avec EARFCN 3350, freq_offset 4500, gains UE TX 80 et RX 70 dans le rapport final."
              },
              {
                "badge": "PSS",
                "title": "Détection cellule",
                "detail": "Les logs montrent PSS/SSS detected, Mode FDD, PCI 2, CFO 1.5 KHz."
              },
              {
                "badge": "PBCH",
                "title": "Blocage radio",
                "detail": "PBCH non décodé de façon stable : pas de lecture système complète, pas de PLMN ni d’attach NAS final."
              }
            ]
          }
        ],
        "note": "Le schéma sépare volontairement les parties validées des parties bloquantes : la communication cœur/eNodeB est prouvée, l’attachement UE complet ne l’est pas."
      },
      "method": [
        "Partir du sujet officiel pour cadrer le périmètre : srsUE, srsENB, srsEPC, radio virtuelle ZeroMQ puis radio réelle ADALM-Pluto.",
        "Construire une base reproductible avec Docker, scripts de lancement et fichiers de configuration séparés par composant.",
        "Valider progressivement : environnement, modules SoapySDR, démarrage EPC, connexion S1AP, démarrage eNodeB, lancement UE, observation des logs radio.",
        "Isoler les problèmes en lançant EPC et eNodeB séparément plutôt que dans une commande unique.",
        "Utiliser tcpdump et la PCAP pour prouver ce qui est réellement observé sur S1AP.",
        "Marquer explicitement les résultats non finalisés lorsque les logs ne prouvent pas la sélection PLMN, l’attachement NAS ou le trafic IP."
      ],
      "technicalParameters": [
        {
          "label": "MCC / MNC",
          "value": "001 / 01",
          "note": "PLMN de test configuré côté EPC/eNodeB/UE."
        },
        {
          "label": "TAC",
          "value": "0x0007",
          "note": "Tracking Area Code utilisé dans la configuration EPC."
        },
        {
          "label": "APN",
          "value": "srsapn",
          "note": "APN attendu côté NAS et cœur."
        },
        {
          "label": "EARFCN",
          "value": "3350",
          "note": "Fréquence LTE de test retenue dans les fichiers et le rapport."
        },
        {
          "label": "N_PRB",
          "value": "25",
          "note": "Réduction de bande utilisée dans les essais finaux documentés."
        },
        {
          "label": "Gains eNodeB",
          "value": "TX 40 / RX 20",
          "note": "Paramètres retenus dans le rapport final pour la VM cœur."
        },
        {
          "label": "Gains UE",
          "value": "TX 80 / RX 70",
          "note": "Paramètres UE avec freq_offset 4500 dans les essais finaux."
        },
        {
          "label": "Secrets LTE",
          "value": "Masqués",
          "note": "K, OPc, IMSI complet et IMEI ne sont pas publiés."
        }
      ],
      "implementationSteps": {
        "eyebrow": "Déploiement LTE",
        "title": "Mise en œuvre technique",
        "steps": [
          {
            "title": "Lecture du sujet et cadrage srsRAN",
            "objective": "Identifier les briques à déployer et les livrables attendus.",
            "tools": "Sujet officiel, documentation srsRAN, rapport final.",
            "result": "Architecture EPC/eNodeB/UE et progression ZeroMQ vers ADALM-Pluto clarifiées.",
            "proof": "Sujet officiel et captures du rapport final."
          },
          {
            "title": "Préparation Docker/ZeroMQ",
            "objective": "Disposer d’un socle reproductible avant la radio matérielle.",
            "tools": "Dockerfile, docker-compose.yml, scripts entrypoint, fichiers config.",
            "result": "Dépôt structuré avec EPC, eNodeB, UE et radio virtuelle préparatoire.",
            "proof": "Scripts et docker-compose copiés dans les assets."
          },
          {
            "title": "Installation SoapySDR / Pluto",
            "objective": "Rendre ADALM-Pluto exploitable par srsRAN.",
            "tools": "SoapySDRUtil, SoapyPlutoSDR, IIO, USB.",
            "result": "Module Pluto visible dans SoapySDR; certains probes restent des traces de diagnostic incomplètes.",
            "proof": "soapy_info.txt, soapy_probe.txt, iio_contexts.txt."
          },
          {
            "title": "Configuration du cœur LTE",
            "objective": "Lancer EPC avec des paramètres cohérents.",
            "tools": "srsepc, epc_vm.conf, user_db, paramètres LTE.",
            "result": "HSS, MME et SP-GW initialisés selon le rapport.",
            "proof": "Capture rapport page 07."
          },
          {
            "title": "Configuration eNodeB + Pluto",
            "objective": "Relier la station de base au MME et émettre la cellule.",
            "tools": "srsenb, enb_pluto.conf, SoapySDR, ADALM-Pluto.",
            "result": "eNodeB relié au MME, échange S1AP observé.",
            "proof": "pluto_core_wire.pcap et capture rapport page 08."
          },
          {
            "title": "Lancement de l’UE",
            "objective": "Faire rechercher le réseau par srsUE avec le Pluto côté terminal.",
            "tools": "srsUE, Docker, USB passthrough, TUN, ue_pluto.conf.",
            "result": "L’UE lance la sélection PLMN et détecte PSS/SSS.",
            "proof": "Capture rapport page 09."
          },
          {
            "title": "Analyse de la limite PBCH",
            "objective": "Identifier pourquoi l’attachement complet ne se termine pas.",
            "tools": "Logs UE, rapport final, analyse radio.",
            "result": "Blocage au décodage PBCH, empêchant PLMN et attach NAS.",
            "proof": "Captures rapport pages 09 et 12."
          }
        ]
      },
      "commandBlocks": [
        {
          "title": "Vérification de la couche radio",
          "description": "Commandes utilisées pour vérifier l’environnement Pluto et le backend SoapySDR.",
          "command": "lsusb\niio_info -u usb :\nSoapySDRUtil --info\nSoapySDRUtil --find=\"driver=plutosdr\"\nSoapySDRUtil --probe=\"driver=plutosdr,uri=usb :<id_pluto>\"",
          "proof": "soapy_info.txt prouve le module plutosdr; les autres sorties sont des traces de diagnostic partielles."
        },
        {
          "title": "Lancement séparé EPC / eNodeB",
          "description": "Méthode retenue dans le rapport final pour rendre le diagnostic plus lisible.",
          "command": "srsepc.run/pluto/epc_vm.conf\nsrsenb.run/pluto/enb_pluto.conf",
          "proof": "Le rapport montre le démarrage EPC et la communication S1AP."
        },
        {
          "title": "Capture réseau S1AP",
          "description": "Capture utilisée pour prouver les échanges entre l’eNodeB et le MME.",
          "command": "tcpdump -i any -w logs/pluto/pluto_core_wire.pcap \\ 'sctp port 36412 or udp port 2152 or icmp'",
          "proof": "pluto_core_wire.pcap contient 32 trames SCTP décodées."
        },
        {
          "title": "Lancement UE Docker",
          "description": "Commande de principe pour donner au conteneur accès au bus USB, au TUN et à la configuration UE.",
          "command": "docker run --rm --privileged --network host \\ -v /dev/bus/usb :/dev/bus/usb \\ -v /dev/net/tun :/dev/net/tun \\ -v./config/ue_pluto.conf :/etc/srsran/ue.conf :ro \\ srsue /etc/srsran/ue.conf \\ --rf.device_name=soapy \\ --rf.device_args=driver=plutosdr,uri=usb :<id_pluto_ue>",
          "proof": "Le rapport indique le lancement UE et la détection PSS/SSS, sans attach final."
        }
      ],
      "statusResults": [
        {
          "status": "validated",
          "icon": "fa-circle-check",
          "title": "Environnement srsRAN préparé",
          "result": "Le dépôt contient Dockerfile, docker-compose, scripts et configurations pour EPC, eNodeB et UE.",
          "proof": "Dépôt ZIP et scripts publiables."
        },
        {
          "status": "validated",
          "icon": "fa-circle-check",
          "title": "Backend Soapy Pluto visible",
          "result": "SoapySDR charge le module libPlutoSDRSupport et annonce la factory plutosdr.",
          "proof": "assets/sae4-rom-01/evidence/soapy_info.txt."
        },
        {
          "status": "validated",
          "icon": "fa-circle-check",
          "title": "Cœur EPC démarré",
          "result": "Le rapport montre HSS, MME S11, MME GTP-C, MME et SP-GW initialisés.",
          "proof": "Capture rapport page 07."
        },
        {
          "status": "validated",
          "icon": "fa-circle-check",
          "title": "eNodeB ↔ MME prouvé",
          "result": "La PCAP contient INIT, INIT_ACK, COOKIE, DATA et heartbeats SCTP/S1AP.",
          "proof": "pluto_core_wire.pcap et résumé PCAP."
        },
        {
          "status": "partial",
          "icon": "fa-tower-broadcast",
          "title": "Recherche réseau UE lancée",
          "result": "Les logs indiquent le démarrage de la sélection PLMN côté UE.",
          "proof": "Capture rapport page 08."
        },
        {
          "status": "partial",
          "icon": "fa-signal",
          "title": "Cellule LTE détectée",
          "result": "PSS/SSS détectés en FDD, PCI 2, CFO 1.5 KHz.",
          "proof": "Capture rapport page 09."
        },
        {
          "status": "blocked",
          "icon": "fa-triangle-exclamation",
          "title": "PBCH non décodé",
          "result": "Le PBCH n’est pas décodé de façon stable, ce qui bloque les informations système.",
          "proof": "Message Found PSS but could not decode PBCH."
        },
        {
          "status": "blocked",
          "icon": "fa-ban",
          "title": "Attach NAS non finalisé",
          "result": "Aucune preuve fournie ne valide la sélection PLMN complète, l’attach NAS ou un trafic IP UE en phase Pluto.",
          "proof": "Résultat à ne pas présenter comme terminé."
        }
      ],
      "limitations": [
        {
          "title": "Pas de succès LTE complet en phase ADALM-Pluto",
          "text": "Les preuves disponibles ne démontrent pas un attachement complet de l’UE. La page indique donc une validation partielle : cœur et eNodeB communiquent, l’UE détecte la cellule, mais la connexion LTE n’est pas finalisée."
        },
        {
          "title": "Blocage au niveau PBCH",
          "text": "Le rapport explique que l’UE détecte les signaux PSS/SSS mais ne décode pas correctement le PBCH. Sans PBCH stable, l’UE ne lit pas toutes les informations système, ne sélectionne pas le PLMN et ne termine pas l’attachement NAS."
        },
        {
          "title": "Preuves USB/IIO à interpréter avec prudence",
          "text": "Les fichiers lsusb, iio_contexts et soapy_probe sont conservés comme traces de diagnostic, mais certains extraits ne montrent pas une détection Pluto positive. Le backend Soapy Pluto est en revanche prouvé par soapy_info.txt."
        },
        {
          "title": "Rapport final non publié en entier",
          "text": "Le PDF complet contient des paramètres d’authentification LTE sensibles. Les captures intégrées ont été choisies pour documenter le projet sans exposer K, OPc, IMSI complet ou IMEI."
        }
      ],
      "tests": [
        {
          "title": "Vérification du backend Pluto",
          "objective": "S’assurer que SoapySDR peut charger le support ADALM-Pluto.",
          "result": "Module libPlutoSDRSupport visible et factory plutosdr disponible.",
          "proof": "soapy_info.txt.",
          "conclusion": "Backend logiciel validé, même si certaines probes USB restent incomplètes."
        },
        {
          "title": "Démarrage du cœur EPC",
          "objective": "Vérifier que les fonctions cœur LTE démarrent.",
          "result": "HSS, MME, GTP-C, GTP-U et SP-GW initialisés dans le rapport.",
          "proof": "Capture rapport page 07.",
          "conclusion": "Le blocage final ne vient pas du démarrage EPC."
        },
        {
          "title": "Communication eNodeB / MME",
          "objective": "Prouver que l’eNodeB contacte le MME sur S1AP.",
          "result": "Association SCTP établie et maintenue, DATA S1AP et heartbeats visibles.",
          "proof": "pluto_core_wire.pcap, 32 trames SCTP.",
          "conclusion": "Interface cœur/eNodeB validée."
        },
        {
          "title": "Détection de cellule par l’UE",
          "objective": "Vérifier que le terminal voit la cellule LTE émise.",
          "result": "PSS/SSS detected : Mode FDD, PCI 2, CFO 1.5 KHz.",
          "proof": "Capture rapport page 09.",
          "conclusion": "Le signal LTE est détecté, mais la procédure s’arrête ensuite."
        },
        {
          "title": "Décodage PBCH",
          "objective": "Permettre à l’UE de lire les informations système.",
          "result": "Found PSS but could not decode PBCH.",
          "proof": "Capture rapport page 09.",
          "conclusion": "Test non finalisé : le PBCH bloque la suite de l’attachement."
        },
        {
          "title": "Sélection PLMN et attach NAS",
          "objective": "Finaliser l’attachement LTE côté UE.",
          "result": "Did not find any PLMN in the set of frequencies.",
          "proof": "Aucune preuve de réussite attach NAS en phase Pluto."
        },
        {
          "title": "Trafic IP utilisateur",
          "objective": "Valider une connectivité UE ↔ cœur après attach.",
          "result": "Aucun ping ou trafic IP UE final n’est prouvé dans les traces Pluto fournies.",
          "conclusion": "Non présenté comme réalisé."
        }
      ],
      "evidenceTypes": [
        {
          "id": "official-subject",
          "title": "Sujet officiel",
          "icon": "fa-file-pdf"
        },
        {
          "id": "report-excerpts",
          "title": "Extraits du rapport final",
          "icon": "fa-file-lines"
        },
        {
          "id": "lte-architecture",
          "title": "Architecture LTE",
          "icon": "fa-diagram-project"
        },
        {
          "id": "srsran-configs",
          "title": "Configurations srsRAN",
          "icon": "fa-terminal"
        },
        {
          "id": "soapy-pluto",
          "title": "Backend Soapy / ADALM-Pluto",
          "icon": "fa-satellite-dish"
        },
        {
          "id": "s1ap-pcap",
          "title": "Capture PCAP S1AP",
          "icon": "fa-magnifying-glass-chart"
        },
        {
          "id": "epc-start",
          "title": "Démarrage EPC",
          "icon": "fa-server"
        },
        {
          "id": "ue-cell-detection",
          "title": "Détection cellule UE",
          "icon": "fa-signal"
        },
        {
          "id": "pbch-limit",
          "title": "Limite PBCH",
          "icon": "fa-triangle-exclamation"
        },
        {
          "id": "automation-scripts",
          "title": "Scripts et Docker",
          "icon": "fa-robot"
        },
        {
          "id": "nas-attach",
          "title": "Attach NAS et trafic IP",
          "icon": "fa-ban"
        }
      ],
      "evidence": [
        {
          "type": "official-subject",
          "status": "available",
          "label": "Sujet officiel disponible",
          "description": "Le sujet officiel présente la SAÉ4.ROM.01 : srsRAN 4G, déploiement des VMs, radio virtuelle ZeroMQ puis remplacement par UHD ou ADALM-Pluto.",
          "links": [
            {
              "label": "Sujet SAÉ4.ROM.01 2026",
              "href": "assets/sae4-rom-01/docs/sujet-sae4rom01-2026.pdf"
            }
          ]
        },
        {
          "type": "report-excerpts",
          "status": "available",
          "label": "Captures sans secrets intégrées",
          "description": "Le rapport final complet a été analysé, mais seules les pages utiles sans secrets LTE sont publiées sous forme d’images.",
          "images": [
            {
              "src": "assets/sae4-rom-01/captures/rapport-page-06-config-runtime.png",
              "alt": "Paramètres runtime LTE SAÉ4.ROM.01 sans secrets"
            },
            {
              "src": "assets/sae4-rom-01/captures/rapport-page-12-conclusion-limites.png",
              "alt": "Conclusion du rapport final sur la limite PBCH"
            }
          ]
        },
        {
          "type": "lte-architecture",
          "status": "available",
          "label": "Architecture documentée",
          "description": "La page décrit la séparation VM cœur LTE, eNodeB, ADALM-Pluto, conteneur UE, USB passthrough et couche S1AP.",
          "images": [
            {
              "src": "assets/sae4-rom-01/captures/rapport-page-11-tests-bilan.png",
              "alt": "Bilan technique du rapport final"
            }
          ]
        },
        {
          "type": "srsran-configs",
          "status": "available",
          "label": "Configurations assainies",
          "description": "Les paramètres non sensibles sont publiés pour expliquer la configuration. Les secrets LTE sont masqués.",
          "code": "MCC=001\nMNC=01\nTAC=0x0007\nAPN=srsapn\nEARFCN=3350\nN_PRB=25\nENB_TX_GAIN=40\nENB_RX_GAIN=20\nUE_TX_GAIN=80\nUE_RX_GAIN=70\nfreq_offset=4500\nK/OPc/IMSI/IMEI=<masqués>",
          "links": [
            {
              "label": "Résumé configuration",
              "href": "assets/sae4-rom-01/config/pluto-runtime-summary.md"
            },
            {
              "label": "eNodeB assaini",
              "href": "assets/sae4-rom-01/config/enb_pluto.sanitized.conf"
            },
            {
              "label": "EPC assaini",
              "href": "assets/sae4-rom-01/config/epc_vm.sanitized.conf"
            },
            {
              "label": "UE assaini",
              "href": "assets/sae4-rom-01/config/ue_pluto.sanitized.conf"
            }
          ]
        },
        {
          "type": "soapy-pluto",
          "status": "available",
          "label": "Trace de diagnostic disponible",
          "description": "soapy_info.txt prouve la présence du module Pluto. soapy_probe, lsusb et iio_contexts sont conservés comme traces de diagnostic mais ne suffisent pas seuls à prouver une détection matérielle complète.",
          "code": "Module found : /usr/local/lib/SoapySDR/modules0.8/libPlutoSDRSupport.so\nAvailable factories.. plutosdr",
          "links": [
            {
              "label": "soapy_info.txt",
              "href": "assets/sae4-rom-01/evidence/soapy_info.txt"
            },
            {
              "label": "soapy_probe.txt",
              "href": "assets/sae4-rom-01/evidence/soapy_probe.txt"
            },
            {
              "label": "lsusb.txt",
              "href": "assets/sae4-rom-01/evidence/lsusb.txt"
            },
            {
              "label": "iio_contexts.txt",
              "href": "assets/sae4-rom-01/evidence/iio_contexts.txt"
            }
          ]
        },
        {
          "type": "s1ap-pcap",
          "status": "available",
          "label": "PCAP réelle disponible",
          "description": "La PCAP contient 32 trames SCTP sur S1AP : INIT, INIT_ACK, COOKIE_ECHO, COOKIE_ACK, DATA, SACK et heartbeats.",
          "code": "127.0.1.1 :34755 -> 127.0.1.100 :36412 SCTP INIT\n127.0.1.100 :36412 -> 127.0.1.1 :34755 SCTP INIT_ACK\n127.0.1.1 :34755 -> 127.0.1.100 :36412 SCTP DATA\n127.0.1.100 :36412 -> 127.0.1.1 :34755 SCTP HEARTBEAT_ACK",
          "images": [
            {
              "src": "assets/sae4-rom-01/captures/rapport-page-07-soapy-epc-pcap.png",
              "alt": "Extrait du rapport sur la PCAP SCTP S1AP"
            },
            {
              "src": "assets/sae4-rom-01/captures/rapport-page-08-s1ap-ue-search.png",
              "alt": "Suite de l’analyse S1AP et recherche UE"
            }
          ],
          "links": [
            {
              "label": "pluto_core_wire.pcap",
              "href": "assets/sae4-rom-01/evidence/pluto_core_wire.pcap"
            },
            {
              "label": "Résumé PCAP",
              "href": "assets/sae4-rom-01/evidence/pluto_core_wire_summary.txt"
            }
          ]
        },
        {
          "type": "epc-start",
          "status": "available",
          "label": "Démarrage EPC documenté",
          "description": "Les captures du rapport montrent l’initialisation HSS, MME S11, MME GTP-C, MME, SPGW GTP-U et SPGW S11.",
          "images": [
            {
              "src": "assets/sae4-rom-01/captures/rapport-page-07-soapy-epc-pcap.png",
              "alt": "Démarrage EPC et preuve Soapy Pluto"
            }
          ]
        },
        {
          "type": "ue-cell-detection",
          "status": "available",
          "label": "Détection cellule partielle",
          "description": "Les logs UE montrent le lancement de la sélection PLMN et la détection PSS/SSS. Ce résultat ne suffit pas à valider un attach complet.",
          "code": "No PLMN selected. Starting PLMN Selection..\nPSS/SSS detected : Mode=FDD, PCI=2, CFO=1.5 KHz",
          "images": [
            {
              "src": "assets/sae4-rom-01/captures/rapport-page-09-pbch-limite.png",
              "alt": "Logs UE avec détection PSS SSS et limite PBCH"
            }
          ]
        },
        {
          "type": "pbch-limit",
          "status": "available",
          "label": "Limite explicitement documentée",
          "description": "Le rapport final explique que l’UE détecte la cellule mais ne décode pas PBCH de façon stable, ce qui bloque PLMN et NAS attach.",
          "code": "Found PSS but could not decode PBCH\nDid not find any PLMN in the set of frequencies.",
          "images": [
            {
              "src": "assets/sae4-rom-01/captures/rapport-page-09-pbch-limite.png",
              "alt": "Blocage PBCH dans le rapport final"
            },
            {
              "src": "assets/sae4-rom-01/captures/rapport-page-12-conclusion-limites.png",
              "alt": "Conclusion sur l’absence d’attachement complet"
            }
          ]
        },
        {
          "type": "automation-scripts",
          "status": "available",
          "label": "Scripts publiables disponibles",
          "description": "Les scripts de lancement et docker-compose sont intégrés comme preuves de méthode. Ils ne remplacent pas les preuves de résultat radio final.",
          "links": [
            {
              "label": "start_vm_pluto.sh",
              "href": "assets/sae4-rom-01/scripts/start_vm_pluto.sh"
            },
            {
              "label": "start_docker_pluto.sh",
              "href": "assets/sae4-rom-01/scripts/start_docker_pluto.sh"
            },
            {
              "label": "validate_pre_pluto.sh",
              "href": "assets/sae4-rom-01/scripts/validate_pre_pluto.sh"
            },
            {
              "label": "docker-compose.pluto.yml",
              "href": "assets/sae4-rom-01/scripts/docker-compose.pluto.yml"
            },
            {
              "label": "Dockerfile.srslte",
              "href": "assets/sae4-rom-01/scripts/Dockerfile.srslte"
            }
          ]
        }
      ],
      "referenceDocs": [
        {
          "label": "Sujet officiel SAÉ4.ROM.01",
          "href": "assets/sae4-rom-01/docs/sujet-sae4rom01-2026.pdf"
        },
        {
          "label": "Résumé configuration assainie",
          "href": "assets/sae4-rom-01/config/pluto-runtime-summary.md"
        },
        {
          "label": "Résumé PCAP S1AP",
          "href": "assets/sae4-rom-01/evidence/pluto_core_wire_summary.txt"
        }
      ],
      "extraActions": [
        {
          "label": "Retour aux compétences",
          "href": "competences.html",
          "icon": "fa-arrow-left"
        },
        {
          "label": "Voir les preuves",
          "href": "#sae-proofs",
          "icon": "fa-folder-open",
          "variant": "primary"
        }
      ],
      "reflectionDefaults": {
        "comment": "en distinguant ce que les preuves montrent et ce que j’ai effectivement réalisé.",
        "outils": "srsRAN 4G, srsEPC, srsENB, srsUE, ADALM-Pluto, SoapySDR, Docker, ZeroMQ, tcpdump, Wireshark et fichiers de configuration LTE.",
        "difficultes": "Les traces montrent toutefois des difficultés techniques autour de la détection matérielle, des gains RF, du freq_offset et du décodage PBCH.",
        "fonctionne": "Le cœur EPC démarre, le backend Pluto est présent, l’eNodeB communique avec le MME et l’UE détecte la cellule LTE.",
        "pasFonctionne": "L’attachement complet n’est pas prouvé : PBCH non décodé de façon stable, pas de PLMN sélectionné, pas d’attach NAS final ni trafic IP utilisateur en phase Pluto.",
        "appris": "Cette SAÉ m’a fait relier architecture opérateur, virtualisation, radio SDR et preuve protocolaire.",
        "autrement": "Je préparerais une collecte de logs plus complète et anonymisée dès les essais, avec captures UE/eNodeB/EPC synchronisées.",
        "progression": "La progression se voit dans le passage d’un déploiement de services à une démarche de diagnostic multicouche : cœur, S1AP, radio et terminal."
      },
      "reflections": {
        "AC24.01ROM": {
          "fait": "J’ai travaillé sur l’administration d’un accès mobile LTE expérimental : EPC, eNodeB, UE, paramètres PLMN, EARFCN, PRB et gains radio.",
          "pourquoi": "L’objectif était de comprendre comment une infrastructure d’accès mobile ne se limite pas à un service logiciel : elle dépend aussi de la couche radio, de la synchronisation UE et de la cohérence des paramètres opérateur.",
          "comment": "Je me suis appuyé sur les configurations srsRAN, les essais ADALM-Pluto et les logs UE pour distinguer la cellule détectée de l’attachement réellement terminé.",
          "outils": "srsEPC, srsENB, srsUE, ADALM-Pluto, SoapySDR, fichiers EPC/eNodeB/UE, logs UE et rapport final.",
          "difficultes": "Les traces montrent une difficulté principale : le PBCH n’est pas décodé de manière stable malgré la détection PSS/SSS.",
          "fonctionne": "Le réseau d’accès est visible côté UE jusqu’à la détection de cellule, et le cœur/eNodeB communique correctement.",
          "pasFonctionne": "L’UE ne sélectionne pas le PLMN et ne termine pas l’attachement NAS, donc le service mobile complet n’est pas validé.",
          "appris": "J’ai compris qu’administrer un accès mobile demande de valider séparément le cœur, la station de base, la radio et le comportement UE.",
          "autrement": "Je documenterais chaque essai radio avec fréquence, gains, distance entre Pluto, logs synchronisés et résultat PBCH pour mieux comparer les réglages.",
          "progression": "Je progresse d’une configuration guidée vers une analyse plus fine des couches d’un accès LTE."
        },
        "AC24.02ROM": {
          "fait": "J’ai participé à une infrastructure virtualisée avec Docker, VM, conteneur UE, scripts de lancement et passage d’une radio virtuelle ZeroMQ vers une radio matérielle.",
          "pourquoi": "La virtualisation permet de rendre les composants opérateur plus reproductibles et isolables, mais elle ajoute des contraintes d’accès matériel, de réseau host et de périphérique TUN.",
          "comment": "La démarche a consisté à préparer les services dans Docker, puis à adapter le lancement UE pour accéder au bus USB et au Pluto réel.",
          "outils": "Docker, Docker Compose, scripts shell, srsRAN, ZeroMQ, ADALM-Pluto, /dev/bus/usb et /dev/net/tun.",
          "difficultes": "Les traces montrent que l’intégration matérielle dans un environnement virtualisé est plus fragile qu’un test purement ZeroMQ.",
          "fonctionne": "Le dépôt fournit une structure Docker cohérente et les scripts rendent les étapes de test plus répétables.",
          "pasFonctionne": "La virtualisation ne résout pas seule les limites radio : même avec les services prêts, le PBCH bloque l’attachement final.",
          "appris": "J’ai appris que virtualiser un service opérateur impose aussi de penser les dépendances matérielles et les preuves d’exécution.",
          "autrement": "Je séparerais encore plus clairement les preuves ZeroMQ, VM native et Pluto réel pour éviter toute confusion de périmètre.",
          "progression": "Cette SAÉ montre ma progression dans la mise en place de services réseau virtualisés et dans l’analyse de leurs limites d’exploitation."
        },
        "AC24.03ROM": {
          "fait": "J’ai relié les rôles EPC, MME, HSS, SP-GW, eNodeB, UE et S1AP dans une architecture LTE expérimentale.",
          "pourquoi": "Comprendre une offre opérateur mobile suppose de savoir quelles briques assurent l’authentification, l’accès radio, la signalisation et le transport des données.",
          "comment": "J’ai utilisé le rapport final, les configurations et la PCAP S1AP pour expliquer quelles parties de l’architecture fonctionnent et quelles parties restent bloquées.",
          "outils": "Schéma de données du portfolio, rapport final, PCAP SCTP/S1AP, srsRAN et captures de logs.",
          "difficultes": "La difficulté est de ne pas confondre une communication eNodeB-MME réussie avec un service client LTE totalement opérationnel.",
          "fonctionne": "La relation eNodeB-MME est prouvée par SCTP/S1AP et le cœur EPC démarre correctement.",
          "pasFonctionne": "La partie client final reste incomplète : pas de PLMN sélectionné, pas d’attachement NAS complet, pas de trafic IP prouvé en phase Pluto.",
          "appris": "J’ai appris à lire une architecture opérateur par niveaux de preuve : composant démarré, interface établie, cellule détectée, service réellement utilisable.",
          "autrement": "Je présenterais dès le début un tableau de statut par brique pour éviter de transformer une réussite partielle en réussite globale.",
          "progression": "Je montre une progression dans l’analyse critique des architectures opérateurs et de leurs offres de service."
        },
        "AC24.04ROM": {
          "fait": "J’ai analysé l’interconnexion entre eNodeB et cœur EPC à travers l’interface S1AP portée par SCTP.",
          "pourquoi": "Sans interconnexion cœur/eNodeB fiable, l’accès radio ne peut pas s’intégrer au réseau opérateur et aucun attachement UE ne peut aboutir.",
          "comment": "La PCAP pluto_core_wire.pcap a été décodée pour vérifier INIT, INIT_ACK, COOKIE, DATA, SACK et heartbeats entre 127.0.1.1 et 127.0.1.100.",
          "outils": "tcpdump, PCAP, Wireshark, SCTP, S1AP, adresses loopback de test, srsEPC et srsENB.",
          "difficultes": "L’enjeu visible est de prouver une interface réseau avec une capture exploitable, pas seulement avec une configuration.",
          "fonctionne": "L’association SCTP/S1AP est établie et maintenue, ce qui valide l’interconnexion eNodeB-MME.",
          "pasFonctionne": "Cette preuve ne suffit pas à valider l’attachement UE : elle couvre la signalisation cœur/eNodeB, pas le décodage PBCH ni NAS côté terminal.",
          "appris": "J’ai appris à distinguer une interconnexion de contrôle validée d’un service client final pleinement établi.",
          "autrement": "J’enrichirais la capture par des logs synchronisés EPC/eNodeB/UE pour relier chaque événement S1AP au comportement radio.",
          "progression": "Je progresse dans l’usage de captures réseau comme preuves d’interconnexion opérateur."
        },
        "AC24.05ROM": {
          "fait": "J’ai travaillé avec des scripts de génération, de lancement et de validation pour standardiser le déploiement srsRAN et ADALM-Pluto.",
          "pourquoi": "L’automatisation réduit les erreurs de lancement et facilite la répétition des essais, surtout quand plusieurs composants doivent partager des paramètres LTE identiques.",
          "comment": "Les scripts chargent les variables, génèrent les fichiers runtime, vérifient les commandes, lancent EPC/eNodeB/UE et peuvent déclencher une capture tcpdump.",
          "outils": "Bash, Docker Compose, fichiers template, variables d’environnement, SoapySDRUtil, tcpdump et scripts start_vm_pluto / start_docker_pluto.",
          "difficultes": "Les scripts manipulent des paramètres sensibles et doivent donc être publiés avec prudence.",
          "fonctionne": "Les scripts structurent la méthode et les fichiers publiés permettent de comprendre le workflow sans exposer les secrets.",
          "pasFonctionne": "L’automatisation ne remplace pas la validation expérimentale : elle ne prouve pas à elle seule que le PBCH est décodé ou que l’attach est terminé.",
          "appris": "J’ai appris que l’automatisation doit produire des preuves vérifiables et des artefacts publiables, pas seulement exécuter des commandes.",
          "autrement": "Je prévoirais une option d’export anonymisé automatique des logs et configurations pour alimenter directement le portfolio.",
          "progression": "Je progresse dans la transformation d’un ensemble de commandes en procédure reproductible, testable et documentée."
        }
      }
    },
    "stage-rom": {
      "code": "ALT.ROM",
      "title": "Alternance chez Orange",
      "subtitle": "Technicien d’intervention réseau structurant",
      "headline": "Maintien en Condition Opérationnelle des infrastructures de télécommunications.",
      "semester": "S4",
      "page": "stage-rom.html",
      "linkedACs": [
        "AC21.01",
        "AC21.02",
        "AC21.04",
        "AC21.05",
        "AC21.06",
        "AC22.03",
        "AC22.04",
        "AC22.05",
        "AC24.01ROM",
        "AC24.03ROM",
        "AC24.04ROM",
        "AC24.05ROM"
      ],
      "competenceSlugs": [
        "administrer",
        "connecter",
        "reseaux-operateurs"
      ],
      "metaDescription": "Alternance chez Orange : réseaux structurants, télécommunications, exploitation, maintenance, intervention et diagnostic dans le parcours BUT2 ROM d’Adam Tmimi.",
      "summary": "Mon alternance me permet de développer une approche terrain des infrastructures télécoms, en participant à des activités de maintenance, de diagnostic, de préparation et de validation d’interventions.",
      "description": "Cette page présente mon alternance chez Orange sous un angle volontairement général : elle décrit le contexte, la méthode et les compétences développées sans exposer d’informations internes, de données clients, de sites, d’outils confidentiels ou de détails techniques sensibles.",
      "objectives": [
        "Relier mon parcours BUT2 Réseaux & Télécommunications - Parcours ROM à une expérience professionnelle en environnement opérateur.",
        "Développer une démarche de diagnostic, de documentation et de validation adaptée à des infrastructures réseau et télécoms.",
        "Renforcer ma compréhension de l’exploitation, de la maintenance et de la qualité de service."
      ],
      "deliverables": [
        "Analyse professionnelle non confidentielle.",
        "Synthèse des compétences développées.",
        "Lien avec les apprentissages critiques du parcours ROM."
      ],
      "personalRole": "Alternant technicien d’intervention réseau structurant chez Orange, avec une participation encadrée à des activités d’exploitation, de maintenance, de diagnostic et de documentation.",
      "company": "Orange France — UCI Nord de France",
      "brandLine": "BUT Réseaux & Télécommunications × Orange France",
      "workDone": [
        "Observation et participation à des situations techniques réelles liées aux infrastructures réseau et télécoms.",
        "Application d’une démarche méthodique : analyser le contexte, préparer l’intervention, diagnostiquer, vérifier et documenter.",
        "Mise en relation des apprentissages universitaires avec les contraintes d’un environnement professionnel orienté continuité de service."
      ],
      "interventionDomains": [
        {
          "title": "Mobile et réseaux radio",
          "icon": "fa-tower-cell",
          "role": "Comprendre et maintenir les éléments d’un site mobile 3G, 4G ou 5G en reliant radio, alimentation, fibre, transmission et supervision.",
          "missions": [
            "Interventions sur sites mobiles 3G, 4G et 5G.",
            "Participation à des contrôles de câblage radio.",
            "Découverte et maintenance autour des RRU.",
            "Télégestion énergie 48 V avec automate ELTEK.",
            "Contrôles GPS, RET, RSSI et équipements radio.",
            "Diagnostic progressif entre radio, alimentation, fibre et transmission."
          ],
          "skills": [
            "Lecture d’architecture mobile",
            "Diagnostic radio",
            "Contrôle énergie 48 V",
            "Repérage des équipements"
          ],
          "method": "Identifier le symptôme, vérifier les éléments physiques, contrôler l’énergie et les liaisons, puis valider le résultat avec les informations disponibles.",
          "takeaway": "Ce domaine m’apprend à ne pas isoler une alarme radio de son environnement : une cause peut venir du câblage, de l’alimentation, de la fibre ou de la transmission."
        },
        {
          "title": "Transmission et fibre optique",
          "icon": "fa-route",
          "role": "Participer à la continuité des liens de transmission en contrôlant les raccordements, les fibres, les modules optiques et les équipements de collecte.",
          "missions": [
            "Création, contrôle et dépannage de liens fibre.",
            "Utilisation du réflectomètre OTDR.",
            "Contrôle de connecteurs, jarretières, modules optiques et continuité.",
            "Découverte du WDM, G-PON et XGS-PON.",
            "Liens haut débit.",
            "Routeurs d’agrégation.",
            "Migrations et vérifications de liens de transmission."
          ],
          "skills": [
            "Jarretiérage fibre",
            "Mesure OTDR",
            "Contrôle optique",
            "Validation de lien"
          ],
          "method": "Préparer le cheminement, identifier les fibres et ports concernés, raccorder proprement, mesurer si nécessaire et vérifier la cohérence du lien après intervention.",
          "takeaway": "La mesure et le repérage donnent de la valeur au diagnostic : ils permettent de distinguer une hypothèse d’un résultat réellement vérifié."
        },
        {
          "title": "Faisceaux hertziens",
          "icon": "fa-satellite-dish",
          "role": "Découvrir les liaisons radio point à point et les contrôles nécessaires entre l’équipement intérieur et l’équipement extérieur.",
          "missions": [
            "Participation à des interventions de maintenance curative FH.",
            "Vérification de liaisons entre IDU et ODU.",
            "Contrôle de câblage RJ45 avec VDV II.",
            "Analyse des alarmes, connecteurs, alimentation et continuité de liaison."
          ],
          "skills": [
            "Diagnostic FH",
            "Contrôle RJ45",
            "Lecture d’alarme",
            "Compréhension IDU/ODU"
          ],
          "method": "Contrôler la liaison cuivre, vérifier les connecteurs, observer l’état des équipements et séparer les hypothèses de défaut câble, alimentation ou équipement.",
          "takeaway": "Les faisceaux hertziens montrent l’importance d’un diagnostic simple mais rigoureux : une continuité mal vérifiée peut orienter toute l’intervention dans la mauvaise direction."
        },
        {
          "title": "Commutation et équipements historiques",
          "icon": "fa-microchip",
          "role": "Participer à la maintenance et à l’évolution d’équipements de commutation, de concentration ou d’anciennes topologies réseau.",
          "missions": [
            "Participation au remplacement de cartes électroniques.",
            "Sauvegarde et contrôle d’équipements.",
            "Analyse d’anciennes topologies.",
            "Déconstruction ou reprise d’éléments réseau.",
            "Importance du repérage, de la validation et de la traçabilité."
          ],
          "skills": [
            "Repérage de cartes",
            "Manipulation d’équipements",
            "Lecture de topologie",
            "Traçabilité"
          ],
          "method": "Lire la consigne, identifier précisément le châssis et la carte, sécuriser l’action, contrôler les voyants ou alarmes et produire un compte rendu exploitable.",
          "takeaway": "Ce domaine me montre que les anciennes infrastructures restent critiques : leur maintenance demande méthode, prudence et documentation."
        },
        {
          "title": "Méthode d’intervention et qualité",
          "icon": "fa-clipboard-check",
          "role": "Structurer l’intervention pour préserver la sécurité, la qualité de service, la traçabilité et la confidentialité des informations manipulées.",
          "missions": [
            "Préparation de l’intervention.",
            "Lecture des consignes.",
            "Respect des procédures et du niveau d’habilitation.",
            "Coordination avec les équipes.",
            "Contrôle avant et après intervention.",
            "Rédaction de comptes rendus.",
            "Confidentialité et qualité de service."
          ],
          "skills": [
            "Préparation",
            "Respect des procédures",
            "Compte rendu",
            "Travail en équipe"
          ],
          "method": "Préparer, sécuriser, diagnostiquer, intervenir, vérifier et tracer chaque action pour éviter les interventions précipitées.",
          "takeaway": "La qualité d’une intervention ne dépend pas seulement du geste technique : elle dépend aussi de la préparation, de la validation et du compte rendu."
        }
      ],
      "fieldMethod": [
        {
          "title": "Préparer",
          "text": "Lecture de la consigne, vérification du matériel, identification des équipements concernés."
        },
        {
          "title": "Sécuriser",
          "text": "Respect des consignes de sécurité, des procédures et du périmètre d’intervention."
        },
        {
          "title": "Diagnostiquer",
          "text": "Analyse progressive du symptôme, contrôle du câblage, de l’alimentation, de la fibre ou des équipements."
        },
        {
          "title": "Intervenir",
          "text": "Réalisation de l’action technique selon les procédures applicables."
        },
        {
          "title": "Vérifier",
          "text": "Contrôle de la reprise de service, des voyants, des alarmes et de la cohérence du résultat."
        },
        {
          "title": "Tracer",
          "text": "Compte rendu clair de l’intervention et remontée des informations nécessaires."
        }
      ],
      "fieldMethodNote": "Cette méthode m’aide à éviter les interventions précipitées et à structurer mon diagnostic avant toute action sur une infrastructure.",
      "professionalSkills": [
        "Diagnostic technique",
        "Maintenance d’infrastructures télécoms",
        "Réseaux mobiles",
        "Fibre optique",
        "Transmission",
        "Télégestion énergie",
        "Faisceaux hertziens",
        "Contrôle qualité",
        "Documentation technique",
        "Travail en équipe",
        "Respect des procédures",
        "Continuité de service"
      ],
      "butRomLink": {
        "title": "L’alternance et mon parcours BUT2 ROM",
        "text": "Mon alternance complète les projets académiques du BUT Réseaux & Télécommunications. Elle me permet de relier les notions de réseaux, transmission, services opérateurs, sécurité, téléphonie et qualité de service à des situations techniques concrètes.",
        "academic": [
          "Réseaux",
          "Transmission",
          "Télécommunications",
          "Automatisation",
          "Services opérateurs"
        ],
        "field": [
          "Maintenance",
          "Diagnostic",
          "Infrastructure mobile",
          "Fibre",
          "Équipements de transmission",
          "Continuité de service"
        ]
      },
      "evidence": []
    }
  },
  "competences": [
    {
      "slug": "administrer",
      "shortTitle": "Administrer",
      "code": "RT1",
      "icon": "fa-server",
      "accent": "red",
      "title": "Administrer les réseaux et l’Internet",
      "level": "Niveau 2 - Administrer un réseau",
      "description": "Déployer, exploiter et faire évoluer les services indispensables au bon fonctionnement d’une infrastructure réseau.",
      "acs": [
        {
          "code": "AC21.01",
          "title": "Configurer et dépanner le routage dynamique dans un réseau",
          "description": "Mettre en place un protocole de routage dynamique, vérifier sa convergence et adopter une démarche de diagnostic structurée.",
          "saeIds": [
            "sae3-rom-03",
            "stage-rom"
          ],
          "reflection": "Je développe une méthode de dépannage fondée sur l’observation des routes, des voisinages et des résultats de tests avant de modifier une configuration."
        },
        {
          "code": "AC21.02",
          "title": "Configurer et expliquer une politique simple de QoS et les fonctions de base de la sécurité d’un réseau",
          "description": "Appliquer des règles simples de priorisation et de sécurité pour préserver la disponibilité et la qualité des communications.",
          "saeIds": [
            "sae3-rom-03",
            "stage-rom"
          ],
          "reflection": "Je relie la sécurité et la qualité de service aux usages réels du réseau afin de justifier les choix techniques de manière claire."
        },
        {
          "code": "AC21.03",
          "title": "Déployer des postes clients et des solutions virtualisées adaptées à une situation donnée",
          "description": "Préparer un environnement client ou virtualisé cohérent avec les besoins fonctionnels et les contraintes de l’infrastructure.",
          "saeIds": [
            "sae3-rom-03",
            "stage-rom"
          ],
          "reflection": "Je prends en compte l’usage, la sécurité et la facilité d’administration lorsque je conçois un environnement virtualisé."
        },
        {
          "code": "AC21.04",
          "title": "Déployer des services réseaux avancés",
          "description": "Installer et intégrer des services réseau tels que DNS, DHCP, annuaire, messagerie ou services d’administration.",
          "saeIds": [
            "sae3-rom-03",
            "stage-rom"
          ],
          "reflection": "Je cherche à documenter chaque service et ses dépendances afin de rendre son exploitation plus fiable et plus compréhensible."
        },
        {
          "code": "AC21.05",
          "title": "Identifier les réseaux opérateurs et l’architecture d’Internet",
          "description": "Situer les infrastructures d’accès, de transport et d’interconnexion dans l’écosystème Internet et opérateur.",
          "saeIds": [
            "sae3-rom-03",
            "stage-rom"
          ],
          "reflection": "Cette compétence m’aide à relier une configuration locale à l’architecture plus large des réseaux opérateurs et d’Internet."
        },
        {
          "code": "AC21.06",
          "title": "Travailler en équipe pour développer ses compétences professionnelles",
          "description": "Organiser le travail, partager l’information et contribuer efficacement à une production collective.",
          "saeIds": [
            "sae3-02",
            "sae3-rom-03",
            "stage-rom"
          ],
          "reflection": "Je veille à expliquer mes choix, à demander des retours et à produire une documentation utile à l’ensemble de l’équipe."
        }
      ]
    },
    {
      "slug": "connecter",
      "shortTitle": "Connecter",
      "code": "RT2",
      "icon": "fa-network-wired",
      "accent": "orange",
      "title": "Connecter les entreprises et les usagers",
      "level": "Niveau 2 - Maîtriser les solutions de connexion des entreprises et des usagers",
      "description": "Étudier et déployer les solutions d’accès, de transmission et d’interconnexion adaptées aux besoins des organisations et des usagers.",
      "acs": [
        {
          "code": "AC22.01",
          "title": "Déployer et caractériser des systèmes de transmissions complexes",
          "description": "Mettre en œuvre une chaîne de transmission et analyser ses paramètres afin d’en vérifier le bon fonctionnement.",
          "saeIds": [
            "sae3-01",
            "stage-rom"
          ],
          "reflection": "J’apprends à interpréter les mesures techniques pour passer d’une observation brute à un diagnostic exploitable."
        },
        {
          "code": "AC22.02",
          "title": "Mettre en place un accès distant sécurisé",
          "description": "Définir et configurer un accès distant en tenant compte de l’authentification, du chiffrement et des droits d’accès.",
          "saeIds": [
            "sae3-rom-03",
            "stage-rom"
          ],
          "reflection": "Je considère la sécurisation de l’accès distant comme une condition essentielle de l’administration d’un réseau moderne."
        },
        {
          "code": "AC22.03",
          "title": "Mettre en place une connexion multi-site via un réseau opérateur",
          "description": "Concevoir une interconnexion multi-site adaptée, en intégrant les contraintes d’adressage, de routage et de disponibilité.",
          "saeIds": [
            "sae3-01",
            "sae3-rom-03",
            "stage-rom"
          ],
          "reflection": "Je consolide ma capacité à penser un réseau à l’échelle de plusieurs sites plutôt qu’équipement par équipement."
        },
        {
          "code": "AC22.04",
          "title": "Administrer les réseaux d’accès des opérateurs",
          "description": "Comprendre les équipements et les mécanismes mobilisés dans les réseaux d’accès fixes ou mobiles.",
          "saeIds": [
            "sae3-01",
            "stage-rom"
          ],
          "reflection": "Cette compétence me permet de faire le lien entre l’usage final, l’accès au réseau et les contraintes opérationnelles d’un opérateur."
        },
        {
          "code": "AC22.05",
          "title": "Questionner un cahier des charges Réseaux & Télécommunications",
          "description": "Analyser un besoin, identifier les ambiguïtés et transformer les attentes en critères techniques vérifiables.",
          "saeIds": [
            "sae3-01",
            "sae3-02",
            "stage-rom"
          ],
          "reflection": "Je prends le temps de clarifier les besoins avant de proposer une solution, afin d’éviter les choix techniques non justifiés."
        }
      ]
    },
    {
      "slug": "programmer",
      "shortTitle": "Programmer",
      "code": "RT3",
      "icon": "fa-code",
      "accent": "yellow",
      "title": "Créer des outils et des applications informatiques pour les Réseaux & Télécommunications",
      "level": "Niveau 2 - Développer une application Réseaux & Télécommunications",
      "description": "Concevoir des scripts, applications et services de données utiles à l’administration, à l’exploitation et aux usages des réseaux.",
      "acs": [
        {
          "code": "AC23.01",
          "title": "Automatiser l’administration système avec des scripts",
          "description": "Créer des scripts fiables pour réduire les tâches répétitives, collecter des informations et assister l’administration système.",
          "saeIds": [],
          "reflection": "Je privilégie des scripts lisibles, testables et documentés afin qu’ils puissent être réutilisés et maintenus facilement."
        },
        {
          "code": "AC23.02",
          "title": "Développer une application à partir d’un cahier des charges donné, pour le Web ou les périphériques mobiles",
          "description": "Structurer une application en fonction d’un besoin, d’un parcours utilisateur et de critères de validation explicites.",
          "saeIds": [
            "sae3-02"
          ],
          "reflection": "Je cherche à produire des interfaces simples à utiliser tout en maintenant une structure de code claire et évolutive."
        },
        {
          "code": "AC23.03",
          "title": "Utiliser un protocole réseau pour programmer une application client/serveur",
          "description": "Exploiter un protocole réseau pour faire communiquer un client et un serveur de manière contrôlée et documentée.",
          "saeIds": [
            "sae3-02"
          ],
          "reflection": "Je relie le développement applicatif aux mécanismes réseau afin de comprendre les échanges au-delà de l’interface utilisateur."
        },
        {
          "code": "AC23.04",
          "title": "Installer et administrer un système de gestion de données",
          "description": "Installer, structurer et administrer un système de données tout en maîtrisant les droits, les sauvegardes et la cohérence des données.",
          "saeIds": [
            "sae3-02"
          ],
          "reflection": "Je prends en compte la sécurité et la maintenance des données dès la conception, pas seulement lors de leur utilisation."
        },
        {
          "code": "AC23.05",
          "title": "Accéder à un ensemble de données depuis une application et/ou un site web",
          "description": "Connecter une application à une source de données et présenter l’information de manière utile, sécurisée et compréhensible.",
          "saeIds": [
            "sae3-02"
          ],
          "reflection": "Je veille à ce que l’accès aux données serve réellement l’utilisateur, avec une restitution claire et des contrôles adaptés."
        }
      ]
    },
    {
      "slug": "reseaux-operateurs",
      "shortTitle": "Réseaux opérateurs",
      "code": "ROM1",
      "icon": "fa-tower-broadcast",
      "accent": "green",
      "title": "Gérer les infrastructures et les services des réseaux opérateurs",
      "level": "Niveau 1 - Gérer les infrastructures des réseaux opérateurs",
      "description": "Comprendre, exploiter et faire évoluer les réseaux d’accès, d’interconnexion et de services dans un contexte opérateur.",
      "acs": [
        {
          "code": "AC24.01ROM",
          "title": "Administrer les réseaux d’accès fixes et mobiles",
          "description": "Identifier les composants des réseaux d’accès et participer à leur administration dans une logique de continuité de service.",
          "saeIds": [
            "sae3-rom-03",
            "sae4-rom-01",
            "stage-rom"
          ],
          "reflection": "Je développe une vision terrain des réseaux d’accès, en reliant les équipements, les services fournis et la qualité perçue par l’utilisateur."
        },
        {
          "code": "AC24.02ROM",
          "title": "Virtualiser des services réseaux",
          "description": "Mettre à disposition des services réseau virtualisés en tenant compte de l’architecture, des ressources et de l’exploitation.",
          "saeIds": [
            "sae3-rom-03",
            "sae4-rom-01",
            "stage-rom"
          ],
          "reflection": "Je considère la virtualisation comme un levier de flexibilité, mais aussi comme un sujet d’administration et de supervision rigoureuses."
        },
        {
          "code": "AC24.03ROM",
          "title": "Décrire et comprendre l’architecture et les offres des opérateurs",
          "description": "Analyser l’organisation des réseaux opérateurs, leurs services et les grandes briques qui les composent.",
          "saeIds": [
            "sae3-rom-03",
            "sae4-rom-01",
            "stage-rom"
          ],
          "reflection": "Je consolide ma compréhension des offres opérateurs pour mieux relier les technologies déployées aux besoins des clients et des territoires."
        },
        {
          "code": "AC24.04ROM",
          "title": "Gérer le routage, la commutation et les interconnexions",
          "description": "Mettre en cohérence les mécanismes de commutation, de routage et d’interconnexion dans une infrastructure opérateur.",
          "saeIds": [
            "sae3-rom-03",
            "sae4-rom-01",
            "stage-rom"
          ],
          "reflection": "Je cherche à comprendre les conséquences d’un choix de routage ou de commutation sur l’ensemble du service et non sur une seule liaison."
        },
        {
          "code": "AC24.05ROM",
          "title": "Automatiser la gestion des équipements réseaux",
          "description": "Utiliser des méthodes d’automatisation pour standardiser, accélérer et fiabiliser la gestion d’équipements réseau.",
          "saeIds": [
            "sae3-rom-03",
            "sae4-rom-01",
            "stage-rom"
          ],
          "reflection": "Je vois l’automatisation comme un moyen de gagner en fiabilité tout en gardant un contrôle précis sur les changements appliqués."
        }
      ]
    },
    {
      "slug": "communications-unifiees",
      "shortTitle": "Communications unifiées",
      "code": "ROM2",
      "icon": "fa-headset",
      "accent": "blue",
      "title": "Gérer les communications unifiées et la vidéo sur Internet",
      "level": "Niveau 1 - Mettre en œuvre le système de téléphonie de l’entreprise",
      "description": "Concevoir et administrer des services de téléphonie sur IP, de communication unifiée et de qualité de service.",
      "acs": [
        {
          "code": "AC25.01ROM",
          "title": "Choisir une architecture et déployer des services de ToIP",
          "description": "Comparer les choix d’architecture et déployer un service de téléphonie sur IP adapté au besoin d’une organisation.",
          "saeIds": [
            "sae3-rom-03",
            "sae3-rom-04"
          ],
          "reflection": "Je prends en compte les besoins métier, la simplicité d’exploitation et la continuité de service dans le choix d’une architecture ToIP."
        },
        {
          "code": "AC25.02ROM",
          "title": "Administrer un service de téléphonie pour l’entreprise",
          "description": "Gérer les utilisateurs, les terminaux, les droits et les paramètres nécessaires au fonctionnement d’un service de téléphonie.",
          "saeIds": [
            "sae3-rom-04"
          ],
          "reflection": "J’apprends à rendre un service de téléphonie simple à administrer, documenté et compréhensible pour ses utilisateurs."
        },
        {
          "code": "AC25.03ROM",
          "title": "Mettre en place une politique de QoS pour les applications",
          "description": "Définir et valider une politique de qualité de service adaptée à la voix, à la vidéo et aux applications sensibles.",
          "saeIds": [
            "sae3-rom-04"
          ],
          "reflection": "Je relie la qualité de service aux contraintes concrètes des flux temps réel, notamment la latence, la gigue et la perte de paquets."
        }
      ]
    }
  ]
};
