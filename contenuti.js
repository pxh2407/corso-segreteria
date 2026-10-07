/* =========================================================
   CONTENUTI DEL CORSO — si modifica SOLO questo file.
   Tipi di slide:
     testo     { t, titolo, punti:[...], nota }
     def       { t, titolo, termine, testo }
     due       { t, titolo, sx:{titolo,punti}, dx:{titolo,punti} }
     tabella   { t, titolo, intest:[...], righe:[[...],...] }
     esercizio { t, titolo, consegna, punti?, soluzione:[...] }
     quiz      { t, domanda, opzioni:[...], giusta:indice, spiega }
     riepilogo { t, punti:[...] }
     flusso    { t, titolo, passi:[{titolo,testo}], nota }      (frecce in sequenza)
     schede    { t, titolo, voci:[{ico,titolo,testo}] }          (riquadri con icona)
     numeri    { t, titolo, voci:[{num,testo}], nota }           (numeri grandi)
     matrice   { t, titolo, colonne:[..], righe:[..], celle:[[{titolo,testo},..],..] }
     lettera   { t, titolo }                                     (fac-simile di lettera)
   Ogni slide può avere ico:"nome" per scegliere l'icona (vedi elenco ICONE in index.html).
   Per il grassetto: **parola**
   ========================================================= */

const CORSO = {
  titolo: "Addetto amministrativo segretariale",
  sottotitolo: "Corso di formazione professionale · 9 lezioni da 4 ore",
  moduli: [
  /* ======================= MODULO 1 ======================= */
  {
    n: 1,
    titolo: "Tecniche di archiviazione",
    colore: "#1f3a5f",
    lezioni: [
    /* ---------------- LEZIONE 1 ---------------- */
    {
      n: 1,
      titolo: "Il documento e l'archivio",
      sottotitolo: "Concetti di base, ciclo di vita, norme di riferimento",
      obiettivi: [
        "Sapere cos'è un documento e cos'è un archivio",
        "Distinguere archivio corrente, di deposito e storico",
        "Conoscere le principali norme che regolano i documenti",
        "Capire perché un buon archivio fa risparmiare tempo e denaro"
      ],
      scaletta: [
        ["0:00 – 0:20", "Accoglienza, presentazione del corso e dei partecipanti"],
        ["0:20 – 1:30", "Il documento: definizione, tipi, elementi"],
        ["1:30 – 1:45", "Pausa"],
        ["1:45 – 2:50", "L'archivio e il suo ciclo di vita · le norme"],
        ["2:50 – 3:35", "Esercitazioni in gruppo"],
        ["3:35 – 4:00", "Quiz, riepilogo e domande"]
      ],
      slide: [
        { t: "def", titolo: "Che cos'è un documento", termine: "Documento",
          testo: "Qualsiasi rappresentazione — su carta o in formato digitale — di **atti, fatti o dati** che hanno un valore giuridico, amministrativo o informativo." },
        { t: "testo", titolo: "Gli elementi di un documento", punti: [
          "**Autore**: chi lo ha prodotto (persona, ufficio, azienda)",
          "**Destinatario**: a chi è rivolto",
          "**Data** e luogo di redazione",
          "**Oggetto**: di che cosa tratta, in poche parole",
          "**Contenuto**: il testo vero e proprio",
          "**Sottoscrizione**: firma autografa o firma digitale"
        ]},
        { t: "due", titolo: "Documento analogico e informatico",
          sx: { titolo: "Analogico", punti: ["Su supporto fisico (carta)", "Firma autografa", "Si conserva in faldoni e armadi", "Rischi: umidità, fuoco, smarrimento"] },
          dx: { titolo: "Informatico", punti: ["File su computer o server", "Firma digitale o elettronica", "Si conserva in sistemi digitali", "Rischi: guasti, virus, file illeggibili"] } },
        { t: "schede", titolo: "Documenti in entrata, in uscita, interni", voci: [
          { ico: "entrata", titolo: "In entrata", testo: "Ricevuti dall'esterno: lettere, fatture dei fornitori, PEC, reclami" },
          { ico: "uscita", titolo: "In uscita", testo: "Spediti all'esterno: preventivi, lettere, fatture ai clienti" },
          { ico: "interno", titolo: "Interni", testo: "Circolano solo in ufficio: circolari, note, verbali di riunione" }
        ]},
        { t: "testo", titolo: "Originale, copia, duplicato", punti: [
          "**Originale**: il documento nella sua prima stesura definitiva, firmato",
          "**Copia**: riproduzione dell'originale; vale come prova se è **conforme**",
          "**Copia conforme**: copia attestata come identica all'originale da chi ne ha titolo",
          "**Duplicato**: nel digitale, file identico bit per bit all'originale",
          "**Estratto**: riporta solo una parte del documento"
        ]},
        { t: "def", titolo: "Che cos'è un archivio", termine: "Archivio",
          testo: "L'insieme ordinato dei documenti **prodotti o ricevuti** da un ufficio, un'azienda o un ente durante la propria attività. I documenti sono legati tra loro da un rapporto naturale: il **vincolo archivistico**." },
        { t: "testo", titolo: "Perché archiviare bene", punti: [
          "**Ritrovare** un documento in pochi secondi, non in mezz'ora",
          "**Provare** un fatto: un contratto, un pagamento, una consegna",
          "**Continuità**: chiunque, anche un collega, sa dove cercare",
          "**Obblighi di legge**: alcuni documenti vanno conservati per anni",
          "**Riservatezza**: i dati personali vanno protetti",
          "**Immagine**: un ufficio ordinato ispira fiducia"
        ]},
        { t: "flusso", titolo: "Il ciclo di vita dell'archivio", passi: [
          { titolo: "Corrente", testo: "Pratiche in corso, consultate ogni giorno. In ufficio, a portata di mano." },
          { titolo: "Di deposito", testo: "Pratiche chiuse, consultate di rado. In un locale apposito." },
          { titolo: "Storico", testo: "Documenti scelti da conservare per sempre." }
        ], nota: "I documenti passano da una fase all'altra con il tempo: il passaggio va fatto con regolarità, ad esempio una volta l'anno." },
        { t: "testo", titolo: "Le norme di riferimento", punti: [
          "**DPR 445/2000** — documentazione amministrativa e protocollo",
          "**D.Lgs. 82/2005 (CAD)** — Codice dell'Amministrazione Digitale",
          "**D.Lgs. 42/2004** — gli archivi pubblici sono beni culturali",
          "**Codice civile, artt. 2214-2220** — scritture contabili, conservazione **10 anni**",
          "**Regolamento UE 2016/679 (GDPR)** — protezione dei dati personali"
        ], nota: "Gli uffici pubblici hanno obblighi più rigidi; le aziende private seguono comunque le stesse buone pratiche." },
        { t: "testo", titolo: "Le qualità dell'addetto all'archivio", punti: [
          "**Ordine** e **precisione**: un documento fuori posto è un documento perso",
          "**Metodo**: stesse regole, sempre, per tutti",
          "**Riservatezza**: ciò che si legge in archivio resta in archivio",
          "**Tempestività**: archiviare subito, non «quando avrò tempo»",
          "**Collaborazione**: l'archivio serve a tutto l'ufficio"
        ]},
        { t: "esercizio", titolo: "Esercizio 1 · In quale fase?",
          consegna: "Indica per ciascun documento se appartiene all'archivio corrente, di deposito o storico.",
          punti: ["a) Pratica di un cliente ancora aperta", "b) Fatture di 6 anni fa", "c) Atto costitutivo della società del 1975", "d) Preventivo inviato ieri", "e) Contratto di affitto scaduto nel 2019"],
          soluzione: ["a) Corrente", "b) Deposito (da conservare 10 anni)", "c) Storico", "d) Corrente", "e) Deposito"] },
        { t: "esercizio", titolo: "Esercizio 2 · Entrata, uscita o interno?",
          consegna: "Classifica i documenti.",
          punti: ["a) Fattura ricevuta da un fornitore", "b) Circolare del direttore sugli orari estivi", "c) Lettera di risposta a un reclamo", "d) PEC ricevuta dal Comune", "e) Verbale della riunione di reparto"],
          soluzione: ["a) Entrata", "b) Interno", "c) Uscita", "d) Entrata", "e) Interno"] },
        { t: "quiz", domanda: "Che cos'è il «vincolo archivistico»?",
          opzioni: ["Il lucchetto dell'armadio dell'archivio", "Il legame naturale che unisce i documenti prodotti da uno stesso soggetto", "L'obbligo di conservare i documenti per 10 anni"],
          giusta: 1, spiega: "I documenti di un archivio non sono una semplice raccolta: sono collegati perché nascono dalla stessa attività." },
        { t: "quiz", domanda: "Per quanti anni vanno conservate le scritture contabili?",
          opzioni: ["5 anni", "10 anni", "20 anni"],
          giusta: 1, spiega: "Lo stabilisce l'articolo 2220 del Codice civile." },
        { t: "quiz", domanda: "Una pratica chiusa da 3 anni, consultata raramente, si trova di solito…",
          opzioni: ["nell'archivio corrente", "nell'archivio di deposito", "nell'archivio storico"],
          giusta: 1, spiega: "Il deposito accoglie le pratiche concluse ma ancora soggette a obblighi di conservazione." },
        { t: "riepilogo", punti: [
          "Il documento rappresenta atti o fatti rilevanti, su carta o in digitale",
          "L'archivio è l'insieme ordinato e collegato dei documenti di un soggetto",
          "Tre fasi: corrente → deposito → storico",
          "Norme chiave: DPR 445/2000, CAD, Codice civile, GDPR"
        ]}
      ]
    },
    /* ---------------- LEZIONE 2 ---------------- */
    {
      n: 2,
      titolo: "Protocollo, classificazione e fascicolo",
      sottotitolo: "Come entra un documento e come trova il suo posto",
      obiettivi: [
        "Conoscere la funzione del registro di protocollo",
        "Saper registrare un documento con tutti gli elementi",
        "Capire che cos'è un titolario di classificazione",
        "Saper aprire e tenere in ordine un fascicolo"
      ],
      scaletta: [
        ["0:00 – 0:15", "Ripasso della lezione 1"],
        ["0:15 – 1:30", "Il protocollo: funzione, elementi, procedure"],
        ["1:30 – 1:45", "Pausa"],
        ["1:45 – 2:45", "Titolario, classificazione, fascicolazione"],
        ["2:45 – 3:35", "Esercitazione: protocollare la posta del giorno"],
        ["3:35 – 4:00", "Quiz e riepilogo"]
      ],
      slide: [
        { t: "def", titolo: "Il protocollo", termine: "Registro di protocollo",
          testo: "Il registro in cui si annotano, in ordine progressivo, tutti i documenti **ricevuti e spediti**. Dà a ogni documento un **numero e una data certi**: è la sua «carta d'identità»." },
        { t: "testo", titolo: "A che cosa serve il protocollo", punti: [
          "**Prova** che un documento è arrivato o è partito in una certa data",
          "**Rintraccia** il documento in qualsiasi momento",
          "**Controlla** i tempi di risposta",
          "Per le Pubbliche Amministrazioni è **obbligatorio** (DPR 445/2000)",
          "Molte aziende lo adottano comunque per ordine e sicurezza"
        ]},
        { t: "testo", titolo: "Gli elementi della registrazione", punti: [
          "**Numero di protocollo** — progressivo, ricomincia ogni 1° gennaio",
          "**Data** di registrazione",
          "**Mittente** (documenti in entrata) o **destinatario** (in uscita)",
          "**Oggetto** — breve, chiaro, completo",
          "Numero e data del documento ricevuto, se presenti",
          "Numero e descrizione degli **allegati**"
        ], nota: "Per i documenti informatici si registra anche l'impronta digitale del file." },
        { t: "testo", titolo: "Come si scrive un buon oggetto", punti: [
          "Deve far capire il contenuto **senza aprire** il documento",
          "Evitare parole vaghe: «comunicazione», «varie», «richiesta»",
          "Sì: «Richiesta preventivo fornitura carta A4 – anno 2027»",
          "No: «Richiesta»",
          "Usare sempre le stesse parole per le stesse cose"
        ]},
        { t: "tabella", titolo: "Esempio di registro di protocollo",
          intest: ["N.", "Data", "E/U", "Mittente / Destinatario", "Oggetto"],
          righe: [
            ["125", "07/10/2026", "E", "Cartoleria Rossi srl", "Fattura n. 88 fornitura toner"],
            ["126", "07/10/2026", "U", "Studio Bianchi", "Invio contratto firmato di consulenza"],
            ["127", "08/10/2026", "E", "Comune di Milazzo", "Avviso rinnovo autorizzazione insegna"]
          ]},
        { t: "testo", titolo: "Le regole d'oro del protocollo", punti: [
          "Un numero = **un solo** documento",
          "Il numero **non si cancella** e non si riutilizza",
          "Gli errori si correggono con **annullamento motivato**, mai con il bianchetto",
          "Si protocolla **lo stesso giorno** in cui il documento arriva",
          "Sul documento si appone la **segnatura**: numero, data, classifica"
        ]},
        { t: "def", titolo: "Il titolario di classificazione", termine: "Titolario",
          testo: "Uno schema **ad albero** che divide tutte le attività dell'ufficio in categorie (titoli) e sottocategorie (classi). Ogni documento riceve un **codice** che indica a quale attività appartiene." },
        { t: "tabella", titolo: "Esempio di titolario per una piccola azienda",
          intest: ["Titolo", "Classi"],
          righe: [
            ["**1 – Amministrazione**", "1.1 Organi sociali · 1.2 Contratti · 1.3 Assicurazioni"],
            ["**2 – Personale**", "2.1 Assunzioni · 2.2 Presenze · 2.3 Formazione"],
            ["**3 – Contabilità**", "3.1 Fatture attive · 3.2 Fatture passive · 3.3 Banca"],
            ["**4 – Clienti**", "4.1 Preventivi · 4.2 Ordini · 4.3 Reclami"],
            ["**5 – Fornitori**", "5.1 Offerte · 5.2 Ordini · 5.3 Contestazioni"]
          ]},
        { t: "def", titolo: "Il fascicolo", termine: "Fascicolo",
          testo: "La cartella che raccoglie **tutti i documenti di una stessa pratica**, dall'inizio alla fine, in ordine cronologico. Esempio: «Assunzione Mario Rossi – 2026»." },
        { t: "testo", titolo: "Come si tiene un fascicolo", punti: [
          "Sulla copertina: **codice di classifica**, titolo, anno, numero",
          "Dentro: documenti in **ordine cronologico**",
          "Si **apre** con il primo documento, si **chiude** a pratica conclusa",
          "Data di chiusura annotata in copertina",
          "Nessun documento «volante»: ogni foglio ha il suo fascicolo"
        ]},
        { t: "flusso", titolo: "Il percorso di un documento in entrata", passi: [
          { titolo: "Ricezione", testo: "Posta, PEC, email, a mano" },
          { titolo: "Protocollo", testo: "Numero, data, segnatura" },
          { titolo: "Classifica", testo: "Codice del titolario" },
          { titolo: "Assegnazione", testo: "All'ufficio competente" },
          { titolo: "Fascicolo", testo: "Nella cartella della pratica" },
          { titolo: "Archivio", testo: "A pratica conclusa" }
        ]},
        { t: "esercizio", titolo: "Esercizio · Protocolliamo la posta",
          consegna: "Usando il titolario della slide precedente, assegna a ciascun documento la classe corretta e scrivi un oggetto chiaro.",
          punti: ["a) Fattura del fornitore di cancelleria", "b) Curriculum di un candidato", "c) Lamentela di un cliente per ritardo nella consegna", "d) Polizza assicurativa dell'automezzo"],
          soluzione: ["a) 3.2 Fatture passive — «Fattura n. … fornitura cancelleria»", "b) 2.1 Assunzioni — «Candidatura spontanea di … per impiegato amministrativo»", "c) 4.3 Reclami — «Reclamo cliente … per ritardo consegna ordine n. …»", "d) 1.3 Assicurazioni — «Polizza RC auto furgone targa …»"] },
        { t: "quiz", domanda: "Il numero di protocollo…",
          opzioni: ["si può riutilizzare se il documento viene annullato", "ricomincia da 1 ogni anno ed è unico per ogni documento", "viene assegnato solo ai documenti in uscita"],
          giusta: 1, spiega: "È progressivo, annuale, e ogni numero identifica un solo documento, in entrata o in uscita." },
        { t: "quiz", domanda: "A che cosa serve il titolario?",
          opzioni: ["A classificare i documenti per attività", "A registrare la data di arrivo", "A conservare le firme"],
          giusta: 0, spiega: "Il titolario è lo schema che collega ogni documento all'attività a cui si riferisce." },
        { t: "quiz", domanda: "Ho sbagliato l'oggetto di una registrazione. Cosa faccio?",
          opzioni: ["Lo cancello con il bianchetto", "Annullo la registrazione indicando il motivo", "Faccio finta di niente"],
          giusta: 1, spiega: "Il registro di protocollo è un atto con valore di prova: si annulla in modo tracciato, mai si cancella." },
        { t: "riepilogo", punti: [
          "Il protocollo dà a ogni documento numero e data certi",
          "Elementi: numero, data, mittente/destinatario, oggetto, allegati",
          "Il titolario classifica i documenti per attività",
          "Il fascicolo raccoglie tutta una pratica in ordine cronologico"
        ]}
      ]
    },
    /* ---------------- LEZIONE 3 ---------------- */
    {
      n: 3,
      titolo: "Sistemi di ordinamento e archivio cartaceo",
      sottotitolo: "Metodi, strumenti, conservazione e scarto",
      obiettivi: [
        "Conoscere i principali metodi di ordinamento",
        "Applicare correttamente le regole di ordinamento alfabetico",
        "Scegliere gli strumenti fisici adatti",
        "Sapere quando e come si scarta un documento"
      ],
      scaletta: [
        ["0:00 – 0:15", "Ripasso della lezione 2"],
        ["0:15 – 1:30", "I metodi di ordinamento e le regole alfabetiche"],
        ["1:30 – 1:45", "Pausa"],
        ["1:45 – 2:40", "Strumenti, conservazione e scarto"],
        ["2:40 – 3:35", "Esercitazioni pratiche di ordinamento"],
        ["3:35 – 4:00", "Quiz e riepilogo"]
      ],
      slide: [
        { t: "tabella", titolo: "I metodi di ordinamento",
          intest: ["Metodo", "Criterio", "Adatto per"],
          righe: [
            ["**Alfabetico**", "Cognome o ragione sociale", "Clienti, fornitori, dipendenti"],
            ["**Numerico**", "Numero progressivo", "Fatture, ordini, pratiche numerate"],
            ["**Cronologico**", "Data", "Corrispondenza, verbali"],
            ["**Geografico**", "Luogo (regione, città)", "Reti di vendita, agenti"],
            ["**Per materia**", "Argomento", "Normative, documentazione tecnica"],
            ["**Alfanumerico**", "Lettere + numeri", "Codici articolo, classifiche"]
          ]},
        { t: "due", titolo: "Pregi e limiti",
          sx: { titolo: "Alfabetico", punti: ["Intuitivo, non serve un indice", "Difficile con nomi simili o errori di grafia", "Bisogna lasciare spazi per le aggiunte"] },
          dx: { titolo: "Numerico", punti: ["Espandibile all'infinito", "Più riservato (il nome non compare)", "Serve un indice o una rubrica per trovare il numero"] } },
        { t: "testo", titolo: "Regole dell'ordinamento alfabetico (1)", punti: [
          "Si ordina per **cognome**, poi per **nome**: Rossi Anna prima di Rossi Mario",
          "A parità di cognome e nome: per **data di nascita** o città",
          "**Il nulla precede il qualcosa**: Ross prima di Rossi",
          "Cognomi con particella (**De**, **Di**, **La**) si ordinano con la particella: De Luca alla D",
          "Cognomi doppi: si considera il **primo**: Rossi Bianchi alla R"
        ]},
        { t: "testo", titolo: "Regole dell'ordinamento alfabetico (2)", punti: [
          "Ditte: per **ragione sociale**, senza contare srl, spa, snc",
          "Si ignorano articoli iniziali: «La Bottega» alla **B**",
          "Sigle: come se fossero una parola: **ENEL** alla E",
          "Nomi di persona nelle ditte: «Mario Rossi srl» → **Rossi Mario srl**",
          "Numeri: si scrivono in lettere o si mettono **prima** delle lettere (scegliere e rimanere coerenti)"
        ], nota: "L'importante è che l'ufficio adotti regole scritte e le segua tutti." },
        { t: "testo", titolo: "Gli strumenti dell'archivio cartaceo", punti: [
          "**Cartelline** e **camicie**: per i singoli fascicoli",
          "**Faldoni** (raccoglitori a scatola): per più fascicoli dello stesso tipo",
          "**Raccoglitori ad anelli**: per documenti da consultare spesso",
          "**Cartelle sospese** negli schedari: accesso rapido",
          "**Armadi compattabili** (rotanti o su binari): grandi volumi in poco spazio",
          "**Etichette** e **colori**: per riconoscere a colpo d'occhio"
        ]},
        { t: "testo", titolo: "Etichettare bene", punti: [
          "Sul dorso: **anno**, **classifica**, **contenuto**, numero del faldone",
          "Scrittura **grande e leggibile**, meglio stampata",
          "Stesso formato per tutti i faldoni",
          "Colori diversi per anno o per settore (es. blu = contabilità)",
          "Un **elenco di consistenza**: dice cosa contiene ogni faldone e dove sta"
        ]},
        { t: "testo", titolo: "Conservare la carta", punti: [
          "Locali **asciutti**, temperatura stabile (circa 18-20 °C)",
          "Lontano da **luce solare** diretta e fonti di calore",
          "Niente graffette metalliche a lungo termine: **arrugginiscono**",
          "Scaffali staccati da pavimento e pareti",
          "Estintori e rilevatori di fumo",
          "Accesso **riservato** alle persone autorizzate"
        ]},
        { t: "def", titolo: "Lo scarto", termine: "Scarto d'archivio",
          testo: "L'eliminazione **controllata** dei documenti che hanno esaurito la loro utilità e non devono più essere conservati per legge. Si decide in base al **massimario di scarto**." },
        { t: "tabella", titolo: "Tempi di conservazione indicativi",
          intest: ["Documento", "Conservazione"],
          righe: [
            ["Libri e scritture contabili, fatture", "**10 anni** (art. 2220 c.c.)"],
            ["Corrispondenza commerciale", "**10 anni**"],
            ["Documenti del personale (cedolini, contributi)", "Lunga: verificare con il consulente del lavoro"],
            ["Atti costitutivi, verbali di assemblea, brevetti", "**Illimitata**"],
            ["Bozze, copie di lavoro, pubblicità ricevuta", "Fino a fine utilità"]
          ]},
        { t: "testo", titolo: "Come si scarta in sicurezza", punti: [
          "Mai buttare documenti interi nel cestino",
          "Usare un **distruggidocumenti** o una ditta certificata",
          "Redigere un **elenco** di ciò che si scarta, firmato dal responsabile",
          "Nelle PA lo scarto richiede l'**autorizzazione** della Soprintendenza archivistica",
          "Attenzione ai **dati personali**: vanno distrutti in modo irreversibile"
        ]},
        { t: "esercizio", titolo: "Esercizio · Ordina alfabeticamente",
          consegna: "Metti in ordine alfabetico questi nominativi.",
          punti: ["Rossi Mario · De Santis Luca · Ross Anna · La Bottega del Pane · Rossi Anna · ENEL spa · Bianchi Carlo · Di Stefano Rita"],
          soluzione: ["1. Bianchi Carlo", "2. Bottega del Pane (La)", "3. De Santis Luca", "4. Di Stefano Rita", "5. ENEL spa", "6. Ross Anna", "7. Rossi Anna", "8. Rossi Mario"] },
        { t: "esercizio", titolo: "Esercizio · Quale metodo?",
          consegna: "Scegli il metodo di ordinamento più adatto.",
          punti: ["a) Schede dei 300 clienti", "b) Fatture emesse nell'anno", "c) Verbali delle riunioni", "d) Pratiche degli agenti di vendita nelle varie province"],
          soluzione: ["a) Alfabetico", "b) Numerico (che coincide con il cronologico)", "c) Cronologico", "d) Geografico"] },
        { t: "quiz", domanda: "In ordine alfabetico, chi viene prima?",
          opzioni: ["Rossi", "Ross", "Rossini"],
          giusta: 1, spiega: "«Il nulla precede il qualcosa»: Ross è più corto e viene prima di Rossi e Rossini." },
        { t: "quiz", domanda: "Dove si archivia «La Rinascente spa»?",
          opzioni: ["Alla L", "Alla R", "Alla S"],
          giusta: 1, spiega: "Si ignorano l'articolo iniziale e la forma societaria: conta «Rinascente»." },
        { t: "quiz", domanda: "Come si eliminano documenti con dati personali?",
          opzioni: ["Nel cestino della carta", "Con il distruggidocumenti o una ditta certificata", "Si portano a casa"],
          giusta: 1, spiega: "La distruzione deve essere irreversibile per rispettare la normativa sulla privacy." },
        { t: "riepilogo", punti: [
          "Metodi: alfabetico, numerico, cronologico, geografico, per materia, alfanumerico",
          "Regole alfabetiche scritte e uguali per tutti",
          "Strumenti ed etichette uniformi; locali asciutti e protetti",
          "Lo scarto è controllato, documentato e sicuro"
        ]}
      ]
    },
    /* ---------------- LEZIONE 4 ---------------- */
    {
      n: 4,
      titolo: "Archivio digitale e dematerializzazione",
      sottotitolo: "Documento informatico, firma digitale, PEC, conservazione, privacy",
      obiettivi: [
        "Conoscere il documento informatico e il suo valore",
        "Distinguere firma elettronica, digitale e PEC",
        "Organizzare cartelle e nomi dei file in modo efficace",
        "Conoscere le basi di backup, conservazione e privacy"
      ],
      scaletta: [
        ["0:00 – 0:15", "Ripasso della lezione 3"],
        ["0:15 – 1:30", "Documento informatico, firme, PEC, formati"],
        ["1:30 – 1:45", "Pausa"],
        ["1:45 – 2:40", "Cartelle, nomi dei file, backup, conservazione, GDPR"],
        ["2:40 – 3:30", "Esercitazione al computer: creare un archivio digitale"],
        ["3:30 – 4:00", "Quiz finale del Modulo 1"]
      ],
      slide: [
        { t: "def", titolo: "La dematerializzazione", termine: "Dematerializzazione",
          testo: "Il passaggio dalla carta al **digitale**: i documenti nascono, circolano e si conservano come file, con lo stesso valore legale della carta." },
        { t: "due", titolo: "Vantaggi e attenzioni",
          sx: { titolo: "Vantaggi", punti: ["Ricerca immediata", "Meno spazio e meno carta", "Condivisione tra colleghi", "Lavoro anche a distanza"] },
          dx: { titolo: "Attenzioni", punti: ["Copie di sicurezza (backup)", "Formati leggibili nel tempo", "Protezione da accessi non autorizzati", "Ordine nelle cartelle"] } },
        { t: "schede", titolo: "Firme elettroniche", voci: [
          { ico: "mail", titolo: "Semplice", testo: "Es. il nome in fondo all'email. Valore limitato." },
          { ico: "tablet", titolo: "Avanzata", testo: "Legata in modo univoco a chi firma. Es. firma su tablet in banca." },
          { ico: "firma", titolo: "Digitale", testo: "Con certificato e dispositivo. **Equivale alla firma a mano.** File .p7m o PDF firmato." }
        ]},
        { t: "def", titolo: "La PEC", termine: "Posta Elettronica Certificata",
          testo: "Email con **valore legale** pari a una raccomandata con ricevuta di ritorno. Il gestore rilascia una **ricevuta di accettazione** e una **ricevuta di consegna**, che fanno prova." },
        { t: "testo", titolo: "Usare bene la PEC", punti: [
          "Conservare **sempre** le ricevute di accettazione e consegna",
          "Ha valore legale solo se **anche il destinatario** usa una PEC",
          "Controllarla ogni giorno: i termini decorrono dalla consegna",
          "Protocollare i messaggi PEC ricevuti come qualsiasi documento",
          "Imprese e professionisti hanno l'obbligo di avere un **domicilio digitale**"
        ]},
        { t: "tabella", titolo: "I formati giusti per conservare",
          intest: ["Formato", "Uso", "Conservazione"],
          righe: [
            ["**PDF/A**", "Documenti definitivi", "Ottimo: nato per durare"],
            ["**XML**", "Fattura elettronica", "Ottimo"],
            ["**TIFF / JPG**", "Immagini, scansioni", "Buono"],
            ["DOCX / XLSX", "Documenti di lavoro", "Solo finché si modificano"],
            ["Formati di programmi particolari", "—", "Da evitare: rischio di non poterli più aprire"]
          ]},
        { t: "testo", titolo: "Organizzare le cartelle", punti: [
          "Ricalcare il **titolario**: stessa struttura della carta",
          "Non più di **3-4 livelli** di sottocartelle",
          "Una cartella per pratica (= fascicolo digitale)",
          "Niente cartelle «Varie», «Da sistemare», «Nuova cartella»",
          "Cartelle condivise in rete, **non** sul desktop del singolo PC"
        ]},
        { t: "testo", titolo: "Dare il nome ai file", punti: [
          "Data all'inizio in formato **AAAA-MM-GG**: così si ordinano da soli",
          "Poi tipo di documento e soggetto",
          "Esempio: **2026-10-07_Fattura_088_CartoleriaRossi.pdf**",
          "Niente spazi, accenti o simboli strani: usare _ o -",
          "Mai «documento1», «scansione», «definitivo_definitivo2»"
        ]},
        { t: "numeri", titolo: "Il backup: regola 3-2-1", voci: [
          { num: "3", testo: "copie dei dati" },
          { num: "2", testo: "supporti diversi (es. server + disco esterno)" },
          { num: "1", testo: "copia fuori sede (cloud o altro edificio)" }
        ], nota: "Backup **automatico** e periodico. Ogni tanto **provare il ripristino**: un backup mai verificato è solo una speranza." },
        { t: "def", titolo: "La conservazione digitale", termine: "Conservazione a norma",
          testo: "Il processo che garantisce nel tempo **integrità, autenticità e leggibilità** dei documenti informatici, secondo le **Linee guida AgID** in vigore dal 2022. Di solito ci si affida a un **conservatore** specializzato." },
        { t: "testo", titolo: "Privacy e GDPR in ufficio", punti: [
          "Il **Regolamento UE 2016/679** protegge i dati personali",
          "Trattare solo i dati **necessari** (minimizzazione)",
          "Accesso solo a chi è **autorizzato**",
          "Password robuste, schermo bloccato quando ci si alza",
          "Non lasciare documenti sulla scrivania o in stampante",
          "Dati sanitari e giudiziari: **massima** cautela"
        ]},
        { t: "esercizio", titolo: "Esercizio al computer",
          consegna: "Create sul PC un piccolo archivio digitale.",
          punti: ["1. Una cartella principale «ARCHIVIO 2026»", "2. Le sottocartelle del titolario (Amministrazione, Personale, Contabilità, Clienti, Fornitori)", "3. Salvate 3 documenti di prova con nomi corretti", "4. Convertite un documento Word in PDF/A"],
          soluzione: ["Esempio: ARCHIVIO 2026 › 3_Contabilita › 3.2_Fatture_passive › 2026-10-07_Fattura_088_CartoleriaRossi.pdf", "In Word: File › Salva con nome › PDF › Opzioni › «Conforme a PDF/A»"] },
        { t: "quiz", domanda: "Quale firma equivale alla firma autografa?",
          opzioni: ["Il nome scritto in fondo all'email", "La firma digitale qualificata", "Una scansione della propria firma"],
          giusta: 1, spiega: "Solo la firma digitale (qualificata) ha lo stesso valore della firma a mano." },
        { t: "quiz", domanda: "Qual è il nome di file più corretto?",
          opzioni: ["scansione nuova.pdf", "2026-10-07_Contratto_Bianchi.pdf", "contratto DEFINITIVO (2).pdf"],
          giusta: 1, spiega: "Data in formato AAAA-MM-GG, tipo di documento e soggetto, senza spazi." },
        { t: "quiz", domanda: "La regola del backup 3-2-1 prevede…",
          opzioni: ["3 copie, 2 supporti, 1 fuori sede", "3 password, 2 computer, 1 server", "un backup ogni 3 giorni"],
          giusta: 0, spiega: "Tre copie, su due supporti diversi, di cui una conservata altrove." },
        { t: "riepilogo", punti: [
          "Il documento informatico ha pieno valore legale",
          "Firma digitale = firma autografa; PEC = raccomandata A/R",
          "PDF/A per conservare; nomi file con data AAAA-MM-GG",
          "Backup 3-2-1 e rispetto del GDPR",
          "Fine del Modulo 1 — Tecniche di archiviazione"
        ]}
      ]
    }
    ]
  },

  /* ======================= MODULO 2 ======================= */
  {
    n: 2,
    titolo: "Tecniche di segreteria",
    colore: "#7a2e3a",
    lezioni: [
    /* ---------------- LEZIONE 5 ---------------- */
    {
      n: 5,
      titolo: "La figura professionale e l'organizzazione del lavoro",
      sottotitolo: "Ruolo, competenze, tempo, agenda e priorità",
      obiettivi: [
        "Conoscere compiti e competenze dell'addetto di segreteria",
        "Organizzare la propria postazione di lavoro",
        "Gestire agenda, scadenze e priorità",
        "Usare tecniche semplici di gestione del tempo"
      ],
      scaletta: [
        ["0:00 – 0:20", "Presentazione del Modulo 2"],
        ["0:20 – 1:30", "Ruolo, compiti, competenze, deontologia"],
        ["1:30 – 1:45", "Pausa"],
        ["1:45 – 2:45", "Postazione, agenda, scadenzario, priorità"],
        ["2:45 – 3:35", "Esercitazione: pianificare una settimana"],
        ["3:35 – 4:00", "Quiz e riepilogo"]
      ],
      slide: [
        { t: "def", titolo: "Chi è l'addetto di segreteria", termine: "Addetto amministrativo segretariale",
          testo: "Il professionista che **organizza, coordina e supporta** il lavoro di un ufficio: gestisce comunicazioni, documenti, agenda e rapporti con il pubblico. È il **punto di riferimento** dell'ufficio." },
        { t: "testo", titolo: "I compiti principali", punti: [
          "Accoglienza di visitatori e clienti",
          "Gestione di **telefono**, **posta** ed **email**",
          "Tenuta dell'**agenda** e degli appuntamenti",
          "Redazione di lettere, comunicazioni e verbali",
          "**Protocollo** e **archivio**",
          "Organizzazione di riunioni e trasferte",
          "Semplici adempimenti amministrativi"
        ]},
        { t: "due", titolo: "Le competenze",
          sx: { titolo: "Competenze tecniche", punti: ["Videoscrittura e foglio di calcolo", "Posta elettronica e PEC", "Archiviazione", "Scrittura corretta", "Nozioni di base amministrative"] },
          dx: { titolo: "Competenze personali", punti: ["Cortesia e pazienza", "Organizzazione", "Riservatezza", "Capacità di ascolto", "Problem solving", "Lavoro in squadra"] } },
        { t: "testo", titolo: "Deontologia: le regole di comportamento", punti: [
          "**Riservatezza** assoluta su ciò che si vede e si sente",
          "**Lealtà** verso l'organizzazione e i colleghi",
          "**Imparzialità**: stessa cortesia con tutti",
          "**Puntualità** e affidabilità",
          "Aspetto e linguaggio **adeguati** al contesto"
        ]},
        { t: "testo", titolo: "La postazione di lavoro", punti: [
          "Scrivania **sgombra**: solo ciò che serve ora",
          "Vaschette: **da fare** · **in attesa** · **da archiviare**",
          "Telefono e agenda a portata di mano, a sinistra se si scrive con la destra",
          "Schermo all'altezza degli occhi, a un braccio di distanza",
          "A fine giornata: scrivania in ordine, documenti riservati sotto chiave"
        ]},
        { t: "testo", titolo: "L'agenda", punti: [
          "**Una sola** agenda (cartacea o digitale), non foglietti sparsi",
          "Per ogni appuntamento: **chi**, **quando**, **dove**, **perché**, recapito",
          "Lasciare **margini** tra un impegno e l'altro",
          "Agenda **condivisa** con il responsabile (es. Google Calendar, Outlook)",
          "Conferma degli appuntamenti il giorno prima"
        ]},
        { t: "testo", titolo: "Lo scadenzario", punti: [
          "Elenco di tutte le **scadenze** ricorrenti e straordinarie",
          "Pagamenti, rinnovi, dichiarazioni, contratti, revisioni",
          "Promemoria con **anticipo** (es. 15 giorni e 3 giorni prima)",
          "Si controlla **ogni mattina**",
          "Chi riceve un compito ha anche una **data**"
        ]},
        { t: "matrice", titolo: "La matrice delle priorità (Eisenhower)",
          colonne: ["URGENTE", "NON URGENTE"], righe: ["IMPORTANTE", "NON IMPORTANTE"],
          celle: [
            [{ titolo: "① Fallo subito", testo: "Scadenza di oggi, emergenza" }, { titolo: "② Pianificalo", testo: "Progetti, formazione" }],
            [{ titolo: "③ Delegalo", testo: "Molte telefonate, interruzioni" }, { titolo: "④ Eliminalo", testo: "Attività inutili" }]
          ]},
        { t: "testo", titolo: "Consigli per gestire il tempo", punti: [
          "Iniziare la giornata con la **lista delle cose da fare**",
          "Fare per prime le attività **difficili**, quando si è più freschi",
          "Raggruppare attività simili (es. tutte le telefonate insieme)",
          "Limitare le **interruzioni**: controllare la posta a orari fissi",
          "Saper dire **«no»** con garbo, o «sì, ma dopo le 11»"
        ]},
        { t: "esercizio", titolo: "Esercizio · Applica la matrice",
          consegna: "In quale quadrante metteresti queste attività?",
          punti: ["a) Il direttore chiede un documento per la riunione tra un'ora", "b) Riordinare l'archivio del 2024", "c) Un rappresentante telefona senza appuntamento", "d) Scadenza del pagamento F24 oggi", "e) Leggere pubblicità arrivata per email"],
          soluzione: ["a) ① Fallo subito", "b) ② Pianificalo", "c) ③ Delegalo o rimandalo", "d) ① Fallo subito", "e) ④ Eliminalo"] },
        { t: "esercizio", titolo: "Esercizio · Pianifica la settimana",
          consegna: "Inserisci in un'agenda settimanale (lun-ven, 9-13 e 15-18) questi impegni, lasciando i margini necessari.",
          punti: ["Riunione di reparto (2 ore) · 4 appuntamenti con clienti (1 ora) · Protocollo posta ogni mattina (30 min) · Preparazione verbale riunione (1 ora) · Ordine di cancelleria (30 min)"],
          soluzione: ["Non c'è una sola soluzione giusta. Verificare che:", "– il protocollo sia ogni giorno alla stessa ora", "– il verbale sia dopo la riunione, entro 1-2 giorni", "– tra gli appuntamenti ci siano almeno 15 minuti di margine"] },
        { t: "quiz", domanda: "Un'attività importante ma non urgente va…",
          opzioni: ["fatta subito", "pianificata", "eliminata"],
          giusta: 1, spiega: "È il quadrante ②: va messa in agenda con una data, prima che diventi urgente." },
        { t: "quiz", domanda: "Qual è la regola più importante per l'agenda?",
          opzioni: ["Usarne tante, una per argomento", "Usarne una sola, completa e aggiornata", "Scrivere solo gli appuntamenti importanti"],
          giusta: 1, spiega: "Più agende = appuntamenti dimenticati o sovrapposti." },
        { t: "riepilogo", punti: [
          "L'addetto di segreteria è il punto di riferimento dell'ufficio",
          "Servono competenze tecniche e personali, e tanta riservatezza",
          "Una sola agenda, uno scadenzario controllato ogni giorno",
          "Matrice delle priorità: fai, pianifica, delega, elimina"
        ]}
      ]
    },
    /* ---------------- LEZIONE 6 ---------------- */
    {
      n: 6,
      titolo: "Comunicazione, telefono e accoglienza",
      sottotitolo: "Parlare, ascoltare, accogliere, gestire i reclami",
      obiettivi: [
        "Conoscere gli elementi della comunicazione",
        "Gestire telefonate in entrata e in uscita",
        "Accogliere i visitatori in modo professionale",
        "Affrontare un cliente insoddisfatto"
      ],
      scaletta: [
        ["0:00 – 0:15", "Ripasso della lezione 5"],
        ["0:15 – 1:20", "La comunicazione: verbale, paraverbale, non verbale"],
        ["1:20 – 1:35", "Pausa"],
        ["1:35 – 2:40", "Telefono, messaggi, accoglienza, reclami"],
        ["2:40 – 3:35", "Simulazioni a coppie (giochi di ruolo)"],
        ["3:35 – 4:00", "Quiz e riepilogo"]
      ],
      slide: [
        { t: "flusso", titolo: "Gli elementi della comunicazione", passi: [
          { titolo: "Emittente", testo: "Chi comunica" },
          { titolo: "Messaggio", testo: "Che cosa si dice" },
          { titolo: "Canale", testo: "Voce, telefono, email, lettera" },
          { titolo: "Ricevente", testo: "Chi riceve" },
          { titolo: "Feedback", testo: "La risposta: conferma che il messaggio è arrivato" }
        ], nota: "**Disturbi** possono rovinare tutto: rumore, fretta, pregiudizi, parole difficili." },
        { t: "schede", titolo: "Tre livelli di comunicazione", voci: [
          { ico: "fumetto", titolo: "Verbale", testo: "Le **parole**: lessico, chiarezza, frasi brevi" },
          { ico: "voce", titolo: "Paraverbale", testo: "**Come** si dice: tono, volume, velocità, pause" },
          { ico: "persona", titolo: "Non verbale", testo: "Il **corpo**: sorriso, sguardo, postura, gesti" }
        ]},
        { t: "testo", titolo: "L'ascolto attivo", punti: [
          "Lasciar **finire** l'interlocutore, senza interrompere",
          "Mostrare attenzione: «sì», «capisco», cenni del capo",
          "**Riformulare**: «Se ho capito bene, lei chiede…»",
          "Fare **domande** per chiarire",
          "Prendere **appunti**"
        ]},
        { t: "testo", titolo: "Rispondere al telefono", punti: [
          "Rispondere entro **3 squilli**",
          "Formula: **saluto + nome dell'azienda + proprio nome + offerta di aiuto**",
          "«Buongiorno, Studio Rossi, sono Anna, come posso aiutarla?»",
          "**Sorridere**: il sorriso si sente nella voce",
          "Dare del **Lei**, salvo diversa indicazione",
          "Avere sempre **carta e penna** a portata di mano"
        ]},
        { t: "testo", titolo: "Filtrare e trasferire le chiamate", punti: [
          "Chiedere **chi parla** e **il motivo** della chiamata",
          "«Attenda un momento, verifico se il dottore è disponibile»",
          "Prima di trasferire, **annunciare** la chiamata al collega",
          "Se il collega non può: proporre di **richiamare** o di lasciare un messaggio",
          "Mai lasciare in attesa senza notizie per più di 30-40 secondi"
        ]},
        { t: "testo", titolo: "Il messaggio telefonico completo", punti: [
          "**Per** chi è il messaggio",
          "**Data e ora** della chiamata",
          "**Chi** ha chiamato (nome, azienda)",
          "**Recapito** per richiamare (ripetere il numero!)",
          "**Motivo** in breve",
          "**Azione** richiesta: richiamare, attendere, inviare documento",
          "**Firma** di chi ha preso il messaggio"
        ]},
        { t: "testo", titolo: "La telefonata in uscita", punti: [
          "**Prepararla**: scopo, dati, documenti sottomano",
          "Presentarsi subito: nome e azienda",
          "Chiedere se è **un buon momento** per parlare",
          "Andare al punto, con cortesia",
          "Concludere **riassumendo** gli accordi presi",
          "Annotare l'esito"
        ]},
        { t: "testo", titolo: "Accogliere i visitatori", punti: [
          "**Alzare lo sguardo** e salutare subito, anche se si è al telefono (con un cenno)",
          "Chiedere nome e motivo della visita",
          "Avvisare la persona attesa",
          "Far accomodare, offrire acqua o un caffè se previsto",
          "Se l'attesa si allunga: **aggiornare** il visitatore",
          "Accompagnare, non indicare soltanto la strada"
        ]},
        { t: "testo", titolo: "Il cliente insoddisfatto", punti: [
          "**Ascoltare** fino in fondo, senza interrompere",
          "Restare **calmi**: non è un attacco personale",
          "Mostrare **comprensione**: «Capisco il suo disagio»",
          "**Non promettere** ciò che non si può mantenere",
          "Proporre una **soluzione** o un tempo preciso per averla",
          "Registrare il reclamo e **richiamare** come promesso"
        ]},
        { t: "due", titolo: "Frasi da evitare e da usare",
          sx: { titolo: "Da evitare", punti: ["«Non è compito mio»", "«Non so niente»", "«Deve calmarsi!»", "«Richiami più tardi»"] },
          dx: { titolo: "Da usare", punti: ["«Verifico subito chi può aiutarla»", "«Mi informo e la richiamo entro le 12»", "«Capisco, vediamo insieme»", "«Posso farla richiamare? A che numero?»"] } },
        { t: "esercizio", titolo: "Gioco di ruolo a coppie",
          consegna: "Uno fa il cliente, l'altro l'addetto di segreteria. Poi ci si scambia.",
          punti: ["1) Un cliente chiama per parlare con il titolare, che è in riunione", "2) Un fornitore arriva senza appuntamento", "3) Un cliente telefona arrabbiato perché la fattura è sbagliata"],
          soluzione: ["Osservare: formula di risposta, tono di voce, ascolto, completezza del messaggio, soluzione proposta, saluto finale."] },
        { t: "quiz", domanda: "Che cosa NON può mancare in un messaggio telefonico?",
          opzioni: ["Il colore della penna", "Il recapito per richiamare", "Il nome del centralino"],
          giusta: 1, spiega: "Senza recapito il messaggio è inutile; va anche ripetuto al chiamante per verifica." },
        { t: "quiz", domanda: "Il tono e la velocità della voce sono comunicazione…",
          opzioni: ["verbale", "paraverbale", "non verbale"],
          giusta: 1, spiega: "Il paraverbale riguarda il come si dicono le cose: tono, volume, ritmo, pause." },
        { t: "riepilogo", punti: [
          "Si comunica con parole, voce e corpo",
          "Al telefono: formula completa, sorriso, messaggi precisi",
          "Accoglienza: salutare subito e aggiornare chi attende",
          "Reclami: ascolto, calma, soluzione, richiamata"
        ]}
      ]
    },
    /* ---------------- LEZIONE 7 ---------------- */
    {
      n: 7,
      titolo: "La corrispondenza commerciale",
      sottotitolo: "Lettera, email professionale e PEC",
      obiettivi: [
        "Conoscere la struttura della lettera commerciale",
        "Scrivere email professionali chiare ed efficaci",
        "Usare le formule di apertura e di chiusura corrette",
        "Gestire la posta in entrata e in uscita"
      ],
      scaletta: [
        ["0:00 – 0:15", "Ripasso della lezione 6"],
        ["0:15 – 1:20", "La lettera commerciale: parti e impaginazione"],
        ["1:20 – 1:35", "Pausa"],
        ["1:35 – 2:30", "Stile, formule, email e PEC"],
        ["2:30 – 3:35", "Esercitazione: scrivere lettere ed email"],
        ["3:35 – 4:00", "Quiz e riepilogo"]
      ],
      slide: [
        { t: "lettera", titolo: "Le parti della lettera commerciale" },
        { t: "testo", titolo: "Il corpo della lettera: tre parti", punti: [
          "**Introduzione**: perché si scrive (« Facendo seguito alla Vs. richiesta del… »)",
          "**Sviluppo**: i fatti, le informazioni, le proposte",
          "**Conclusione**: che cosa si chiede o si propone ora",
          "Un **paragrafo** per ogni argomento",
          "Frasi brevi: massimo 20-25 parole"
        ]},
        { t: "tabella", titolo: "Formule di apertura e chiusura",
          intest: ["Destinatario", "Apertura", "Chiusura"],
          righe: [
            ["Azienda / ufficio", "Spett.le Ditta… / Gentili Signori,", "Distinti saluti"],
            ["Persona nota", "Gentile Sig.ra Rossi,", "Cordiali saluti"],
            ["Autorità, ente", "Egregio Sig. Sindaco,", "Con osservanza / Distinti saluti"],
            ["Professionista", "Gentile Dott. Bianchi,", "Cordiali saluti"]
          ]},
        { t: "testo", titolo: "Lo stile della corrispondenza", punti: [
          "**Chiaro**: una idea per frase",
          "**Cortese** ma non servile",
          "**Preciso**: date, numeri, importi esatti",
          "**Sintetico**: dire tutto, ma niente di più",
          "Evitare il «burocratese»: «in relazione a quanto in oggetto…»",
          "**Rileggere sempre** prima di inviare"
        ]},
        { t: "tabella", titolo: "Abbreviazioni d'uso comune",
          intest: ["Sigla", "Significato"],
          righe: [
            ["Spett.le", "Spettabile"],
            ["Vs. / Ns.", "Vostro / Nostro"],
            ["c.a.", "Alla cortese attenzione"],
            ["p.c.", "Per conoscenza"],
            ["All.", "Allegato/i"],
            ["c.m. / u.s.", "Corrente mese / Ultimo scorso"],
            ["p.p.", "Per procura"]
          ]},
        { t: "testo", titolo: "I principali tipi di lettera", punti: [
          "**Richiesta** di informazioni o di preventivo",
          "**Offerta** e preventivo",
          "**Ordine** e conferma d'ordine",
          "**Reclamo** e risposta al reclamo",
          "**Sollecito** di pagamento",
          "**Comunicazioni** (cambio sede, orari, auguri)"
        ]},
        { t: "testo", titolo: "L'email professionale", punti: [
          "**Oggetto** sempre presente e specifico",
          "Saluto iniziale e chiusura, come in una lettera",
          "Testo breve: se serve scorrere troppo, meglio un allegato",
          "**Firma** completa: nome, ruolo, azienda, telefono",
          "Allegati con nomi chiari, in PDF; citarli nel testo",
          "Rispondere entro **24 ore**, anche solo per dire «ricevuto»"
        ]},
        { t: "testo", titolo: "A, CC e CCN", punti: [
          "**A**: il destinatario che deve agire",
          "**CC** (copia conoscenza): chi deve essere informato",
          "**CCN** (copia nascosta): per invii a molti senza mostrare gli indirizzi — tutela la privacy",
          "«**Rispondi a tutti**» solo se serve davvero a tutti",
          "Controllare i destinatari **prima** di premere Invia"
        ]},
        { t: "testo", titolo: "Errori da non fare", punti: [
          "SCRIVERE TUTTO IN MAIUSCOLO (equivale a urlare)",
          "Emoticon e abbreviazioni da chat",
          "Dimenticare l'allegato annunciato",
          "Inoltrare catene di messaggi senza togliere le parti inutili",
          "Scrivere quando si è arrabbiati: meglio aspettare un'ora"
        ]},
        { t: "esercizio", titolo: "Esercizio · Scrivi una lettera",
          consegna: "Scrivi una lettera di richiesta preventivo.",
          punti: ["Mittente: Studio Rossi, Via Roma 10, Milazzo", "Destinatario: Cartoleria Bianchi srl", "Richiesta: 50 risme di carta A4 e 20 toner, consegna entro fine mese"],
          soluzione: ["Verificare: intestazione, luogo e data, destinatario, oggetto chiaro (es. «Richiesta preventivo materiale di cancelleria»), apertura «Spett.le», richiesta precisa con quantità e termini, chiusura «Distinti saluti», firma."] },
        { t: "esercizio", titolo: "Esercizio · Riscrivi l'email",
          consegna: "Migliora questa email.",
          punti: ["Oggetto: (vuoto)", "«ciao allora x la fattura NON VA BENE rimandatela grz»"],
          soluzione: ["Oggetto: Fattura n. 88 del 01/10/2026 – richiesta di correzione", "«Gentili Signori, abbiamo ricevuto la fattura in oggetto e rileviamo che l'importo non corrisponde all'ordine n. 45. Vi chiediamo cortesemente di inviarci una nota di credito e la fattura corretta. Cordiali saluti, Anna Verdi – Studio Rossi – tel. …»"] },
        { t: "quiz", domanda: "Che cosa significa «c.a.»?",
          opzioni: ["Con allegato", "Alla cortese attenzione", "Corrente anno"],
          giusta: 1, spiega: "Si usa per indicare la persona a cui è indirizzata una lettera inviata a un'azienda." },
        { t: "quiz", domanda: "Devo scrivere a 40 clienti diversi. Dove metto gli indirizzi?",
          opzioni: ["Tutti in «A»", "Tutti in «CC»", "In «CCN»"],
          giusta: 2, spiega: "La copia nascosta evita di mostrare a tutti gli indirizzi degli altri: rispetta la privacy." },
        { t: "riepilogo", punti: [
          "La lettera ha parti fisse: intestazione, oggetto, corpo, firma, allegati",
          "Stile chiaro, cortese, preciso e sintetico",
          "Email: oggetto, firma completa, attenzione ad A / CC / CCN",
          "Rileggere sempre prima di inviare"
        ]}
      ]
    },
    /* ---------------- LEZIONE 8 ---------------- */
    {
      n: 8,
      titolo: "Riunioni, eventi e trasferte",
      sottotitolo: "Organizzare, verbalizzare, prenotare",
      obiettivi: [
        "Organizzare una riunione dalla convocazione al verbale",
        "Redigere ordine del giorno e verbale",
        "Organizzare un piccolo evento",
        "Pianificare una trasferta e gestire la nota spese"
      ],
      scaletta: [
        ["0:00 – 0:15", "Ripasso della lezione 7"],
        ["0:15 – 1:20", "La riunione: prima, durante, dopo · il verbale"],
        ["1:20 – 1:35", "Pausa"],
        ["1:35 – 2:35", "Eventi e trasferte · nota spese"],
        ["2:35 – 3:35", "Simulazione: riunione con verbale"],
        ["3:35 – 4:00", "Quiz e riepilogo"]
      ],
      slide: [
        { t: "flusso", titolo: "Le tre fasi di una riunione", passi: [
          { titolo: "Prima", testo: "Scopo, partecipanti, sala, convocazione con l'ordine del giorno" },
          { titolo: "Durante", testo: "Firme di presenza, assistenza, appunti su decisioni e compiti" },
          { titolo: "Dopo", testo: "Verbale, invio ai partecipanti, scadenze in agenda, archivio" }
        ]},
        { t: "testo", titolo: "Prima della riunione", punti: [
          "Definire **scopo**, **partecipanti**, **data**, **durata**",
          "Verificare le **disponibilità** (agenda condivisa, sondaggio)",
          "Prenotare la **sala** o il collegamento online",
          "Inviare la **convocazione** con l'ordine del giorno",
          "Preparare documenti, proiettore, acqua, cartellini",
          "Il giorno prima: **conferma** ai partecipanti"
        ]},
        { t: "testo", titolo: "La convocazione", punti: [
          "**Chi** convoca",
          "**Data, ora** di inizio e di fine",
          "**Luogo** (o link per la riunione online)",
          "**Ordine del giorno**",
          "Documenti da leggere **prima**",
          "Richiesta di **conferma** della presenza"
        ]},
        { t: "def", titolo: "L'ordine del giorno", termine: "Ordine del giorno (O.d.G.)",
          testo: "L'elenco **numerato** degli argomenti da trattare, nell'ordine in cui saranno discussi. Di solito si chiude con «**Varie ed eventuali**»." },
        { t: "testo", titolo: "Durante la riunione", punti: [
          "Accogliere i partecipanti, raccogliere le **firme di presenza**",
          "Controllare che tutto funzioni (proiettore, audio, collegamento)",
          "Prendere **appunti** per il verbale",
          "Annotare **decisioni**, **compiti** e **scadenze**",
          "Discreta assistenza: copie, telefonate, ospiti"
        ]},
        { t: "testo", titolo: "Il verbale", punti: [
          "**Intestazione**: tipo di riunione, data, ora, luogo",
          "**Presenti** e assenti; chi presiede e chi verbalizza",
          "Per ogni punto dell'O.d.G.: sintesi della discussione e **decisioni**",
          "Eventuali **votazioni** con l'esito",
          "Ora di **chiusura**",
          "**Firme** del presidente e del segretario"
        ], nota: "Il verbale è sintetico: riporta le decisioni, non ogni parola detta." },
        { t: "testo", titolo: "Dopo la riunione", punti: [
          "Riordinare la sala",
          "Redigere il verbale **entro 1-2 giorni**",
          "Farlo controllare a chi ha presieduto",
          "Inviarlo ai partecipanti",
          "Inserire in agenda le **scadenze** decise",
          "Archiviare verbale e documenti nel fascicolo"
        ]},
        { t: "testo", titolo: "Le riunioni online", punti: [
          "Strumenti: Zoom, Microsoft Teams, Google Meet",
          "Inviare il **link** nella convocazione e nel promemoria",
          "Provare audio e video **15 minuti prima**",
          "Chiedere di tenere il microfono **spento** quando non si parla",
          "Se si registra: **avvisare** i partecipanti"
        ]},
        { t: "testo", titolo: "Organizzare un piccolo evento", punti: [
          "**Obiettivo** e pubblico (convegno, inaugurazione, corso)",
          "**Budget** disponibile",
          "Sede, data, programma, relatori",
          "Inviti e **raccolta adesioni**",
          "Fornitori: catering, allestimento, audio",
          "Una **lista di controllo** (checklist) con responsabili e scadenze"
        ]},
        { t: "testo", titolo: "Organizzare una trasferta", punti: [
          "Raccogliere: **destinazione**, date, orari degli impegni, preferenze",
          "Prenotare **trasporto** (treno, aereo, auto) e **alloggio**",
          "Rispettare la **policy aziendale** sui costi",
          "Preparare il **foglio di viaggio**: orari, indirizzi, numeri di prenotazione, contatti",
          "Documenti: carta d'identità, biglietti, eventuale anticipo spese"
        ]},
        { t: "def", titolo: "La nota spese", termine: "Nota spese",
          testo: "Il modulo con cui chi è stato in trasferta chiede il **rimborso** delle spese sostenute. Ogni voce deve avere il suo **giustificativo** (scontrino, fattura, biglietto)." },
        { t: "tabella", titolo: "Esempio di nota spese",
          intest: ["Data", "Voce", "Giustificativo", "Importo"],
          righe: [
            ["12/10", "Treno Milazzo–Palermo A/R", "Biglietto", "€ 25,60"],
            ["12/10", "Pranzo", "Ricevuta", "€ 18,00"],
            ["12/10", "Parcheggio stazione", "Scontrino", "€ 6,00"],
            ["", "**Totale**", "", "**€ 49,60**"]
          ]},
        { t: "esercizio", titolo: "Simulazione · La riunione",
          consegna: "Dividetevi in gruppi: un presidente, un segretario, i partecipanti.",
          punti: ["Argomento: organizzazione della festa di fine anno dell'ufficio", "O.d.G.: 1) Data e luogo  2) Budget  3) Compiti  4) Varie ed eventuali", "Il segretario redige il verbale (20 minuti)"],
          soluzione: ["Verificare che il verbale contenga: intestazione, presenti, decisioni per ogni punto, chi fa cosa ed entro quando, ora di chiusura, firme."] },
        { t: "quiz", domanda: "Con che cosa si chiude di solito l'ordine del giorno?",
          opzioni: ["Saluti finali", "Varie ed eventuali", "Approvazione del bilancio"],
          giusta: 1, spiega: "«Varie ed eventuali» permette di trattare brevemente argomenti non previsti." },
        { t: "quiz", domanda: "Il verbale deve riportare…",
          opzioni: ["ogni parola detta da ciascuno", "le decisioni prese e chi deve fare cosa", "solo l'elenco dei presenti"],
          giusta: 1, spiega: "Il verbale è un documento sintetico: conta che cosa si è deciso." },
        { t: "riepilogo", punti: [
          "Riunione: convocazione con O.d.G., preparazione, conferma",
          "Verbale: presenti, decisioni, firme — entro 1-2 giorni",
          "Eventi: obiettivo, budget e checklist",
          "Trasferte: foglio di viaggio e nota spese con giustificativi"
        ]}
      ]
    },
    /* ---------------- LEZIONE 9 ---------------- */
    {
      n: 9,
      titolo: "Strumenti d'ufficio e documenti amministrativi",
      sottotitolo: "Informatica di base, documenti commerciali, verifica finale",
      obiettivi: [
        "Conoscere gli strumenti informatici dell'ufficio",
        "Riconoscere i principali documenti commerciali",
        "Conoscere le basi della fattura elettronica",
        "Ripassare l'intero corso con la verifica finale"
      ],
      scaletta: [
        ["0:00 – 0:15", "Ripasso della lezione 8"],
        ["0:15 – 1:10", "Strumenti informatici e attrezzature d'ufficio"],
        ["1:10 – 1:25", "Pausa"],
        ["1:25 – 2:30", "Documenti commerciali e fattura elettronica"],
        ["2:30 – 3:30", "Verifica finale del corso"],
        ["3:30 – 4:00", "Correzione, valutazione del corso e saluti"]
      ],
      slide: [
        { t: "tabella", titolo: "Gli strumenti informatici",
          intest: ["Strumento", "Esempi", "Serve per"],
          righe: [
            ["**Videoscrittura**", "Word, Google Documenti, LibreOffice Writer", "Lettere, verbali, modelli"],
            ["**Foglio di calcolo**", "Excel, Google Fogli", "Elenchi, scadenzari, calcoli, note spese"],
            ["**Posta elettronica**", "Outlook, Gmail", "Email e PEC"],
            ["**Calendario**", "Outlook, Google Calendar", "Agenda condivisa"],
            ["**Cloud**", "OneDrive, Google Drive", "Documenti condivisi"],
            ["**Gestionali**", "Programmi di contabilità e protocollo", "Fatture, registri"]
          ]},
        { t: "testo", titolo: "Trucchi utili di videoscrittura", punti: [
          "Usare i **modelli**: carta intestata pronta, non rifatta ogni volta",
          "**Stampa unione**: la stessa lettera a 100 destinatari, ognuno col suo nome",
          "**Stili** per titoli e paragrafi: impaginazione uniforme",
          "Controllo **ortografico** sempre attivo",
          "Scorciatoie: **Ctrl+C** copia · **Ctrl+V** incolla · **Ctrl+Z** annulla · **Ctrl+S** salva"
        ]},
        { t: "testo", titolo: "Il foglio di calcolo in segreteria", punti: [
          "**Elenchi**: clienti, fornitori, presenze",
          "**Ordinare** e **filtrare** i dati in un clic",
          "Formule semplici: **=SOMMA()**, **=MEDIA()**",
          "Scadenzario con colori automatici (formattazione condizionale)",
          "Una riga = un elemento; una colonna = un'informazione"
        ]},
        { t: "testo", titolo: "Le attrezzature d'ufficio", punti: [
          "**Stampante multifunzione**: stampa, copia, scansione",
          "Scansione: risoluzione 300 dpi, in PDF, con nome corretto",
          "**Centralino** e telefoni: trasferimento, attesa, conferenza",
          "**Distruggidocumenti**",
          "Piccola manutenzione: carta, toner, inceppamenti; per il resto, l'assistenza"
        ]},
        { t: "flusso", titolo: "Il ciclo dei documenti commerciali", passi: [
          { titolo: "Preventivo", testo: "Il venditore propone prezzo e condizioni" },
          { titolo: "Ordine", testo: "Il compratore chiede la merce" },
          { titolo: "Conferma", testo: "Il venditore accetta l'ordine" },
          { titolo: "DDT", testo: "Accompagna la merce nel trasporto" },
          { titolo: "Fattura", testo: "Chiede il pagamento; documento fiscale" },
          { titolo: "Ricevuta", testo: "Attesta l'avvenuto pagamento" }
        ]},
        { t: "testo", titolo: "Che cosa contiene una fattura", punti: [
          "Numero progressivo e **data**",
          "Dati di **venditore** e **acquirente** (denominazione, indirizzo, P.IVA o codice fiscale)",
          "**Descrizione**, quantità e prezzo dei beni o servizi",
          "**Imponibile**, aliquota **IVA**, importo IVA",
          "**Totale** da pagare",
          "Modalità e scadenza di **pagamento**"
        ]},
        { t: "def", titolo: "La fattura elettronica", termine: "Fattura elettronica",
          testo: "Dal **1° gennaio 2019** quasi tutte le fatture tra operatori italiani sono elettroniche: un file **XML** trasmesso tramite il **Sistema di Interscambio (SdI)** dell'Agenzia delle Entrate. Per riceverla servono un **codice destinatario** o un indirizzo **PEC**." },
        { t: "testo", titolo: "La prima nota", punti: [
          "Registro semplice di tutte le **entrate** e **uscite** di denaro",
          "Per ogni movimento: **data**, **descrizione**, **importo**, cassa o banca",
          "Si aggiorna **ogni giorno**",
          "Si controlla con il saldo di cassa e l'estratto conto",
          "È la base per il lavoro del commercialista"
        ]},
        { t: "tabella", titolo: "Esempio di prima nota",
          intest: ["Data", "Descrizione", "Entrate", "Uscite"],
          righe: [
            ["01/10", "Saldo iniziale cassa", "€ 300,00", ""],
            ["03/10", "Acquisto francobolli", "", "€ 12,50"],
            ["05/10", "Incasso fattura n. 40", "€ 150,00", ""],
            ["07/10", "Acquisto cancelleria", "", "€ 37,80"],
            ["", "**Saldo finale**", "**€ 399,70**", ""]
          ]},
        { t: "testo", titolo: "Ripasso generale del corso", punti: [
          "**Modulo 1**: documento, archivio, protocollo, titolario, fascicolo, ordinamenti, scarto, archivio digitale, firma, PEC, backup, GDPR",
          "**Modulo 2**: ruolo e organizzazione, agenda e priorità, comunicazione e telefono, corrispondenza, riunioni e trasferte, documenti amministrativi"
        ]},
        { t: "quiz", domanda: "VERIFICA 1 · Il registro di protocollo serve a…",
          opzioni: ["dare numero e data certi ai documenti", "stampare le lettere", "calcolare l'IVA"],
          giusta: 0, spiega: "Lezione 2: il protocollo è la «carta d'identità» del documento." },
        { t: "quiz", domanda: "VERIFICA 2 · Dove si archivia «Il Mulino srl»?",
          opzioni: ["Alla I", "Alla M", "Alla S"],
          giusta: 1, spiega: "Lezione 3: si ignorano articolo e forma societaria." },
        { t: "quiz", domanda: "VERIFICA 3 · Quale formato è adatto alla conservazione?",
          opzioni: ["DOCX", "PDF/A", "Un formato di un vecchio programma"],
          giusta: 1, spiega: "Lezione 4: il PDF/A è nato apposta per durare nel tempo." },
        { t: "quiz", domanda: "VERIFICA 4 · Un'attività urgente e importante va…",
          opzioni: ["fatta subito", "delegata", "eliminata"],
          giusta: 0, spiega: "Lezione 5: primo quadrante della matrice di Eisenhower." },
        { t: "quiz", domanda: "VERIFICA 5 · Come si risponde al telefono?",
          opzioni: ["«Pronto?»", "«Buongiorno, Studio Rossi, sono Anna, come posso aiutarla?»", "«Sì, dica»"],
          giusta: 1, spiega: "Lezione 6: saluto, azienda, nome, offerta di aiuto." },
        { t: "quiz", domanda: "VERIFICA 6 · «Distinti saluti» si usa con…",
          opzioni: ["un amico", "un'azienda", "un collega con cui si dà del tu"],
          giusta: 1, spiega: "Lezione 7: è la chiusura formale per aziende ed enti." },
        { t: "quiz", domanda: "VERIFICA 7 · Il verbale va redatto…",
          opzioni: ["entro 1-2 giorni dalla riunione", "dopo un mese", "solo se qualcuno lo chiede"],
          giusta: 0, spiega: "Lezione 8: a memoria fresca, poi va controllato e inviato." },
        { t: "quiz", domanda: "VERIFICA 8 · Quale documento accompagna la merce durante il trasporto?",
          opzioni: ["Il preventivo", "Il DDT", "La prima nota"],
          giusta: 1, spiega: "Lezione 9: il Documento di Trasporto." },
        { t: "riepilogo", punti: [
          "Strumenti: videoscrittura, foglio di calcolo, posta, calendario, cloud",
          "Ciclo commerciale: preventivo → ordine → DDT → fattura → pagamento",
          "Fattura elettronica XML tramite SdI dal 2019",
          "Grazie a tutti e buon lavoro!"
        ]}
      ]
    }
    ]
  }
  ]
};
