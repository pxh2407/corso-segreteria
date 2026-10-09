/* =========================================================
   TESTI DELLA DISPENSA — si modifica SOLO questo file.
   Argomenti presi dal PDF "Argomenti da Trattare" del docente.

   Come si scrive il testo di un argomento:
     ## Titoletto           → sottotitolo
     - voce                 → elenco puntato
     | a | b | c |          → tabella (la prima riga è l'intestazione)
     > testo                → riquadro "Da ricordare"
     riga vuota             → nuovo paragrafo
     **parola**             → grassetto
   ========================================================= */

const CORSO = {
  titolo: "Addetto amministrativo segretariale",
  docente: "Principato Stefania",
  calendario: [
    ["Martedì", "03/11/2026", "9:00 – 12:00"],
    ["Mercoledì", "04/11/2026", "9:00 – 12:00"],
    ["Venerdì", "06/11/2026", "9:00 – 12:00"],
    ["Lunedì", "09/11/2026", "9:00 – 12:00"],
    ["Mercoledì", "11/11/2026", "9:00 – 12:00"],
    ["Venerdì", "13/11/2026", "9:00 – 12:00"]
  ],
  moduli: [
  /* ======================= MODULO 1 ======================= */
  {
    n: 1,
    titolo: "Tecniche di archiviazione",
    colore: "#1f3a5f",
    argomenti: [
    {
      titolo: "Introduzione all'archiviazione",
      sintesi: "Definizione, finalità e importanza dell'archivio in azienda.",
      testo: `
## Che cos'è un archivio
L'**archivio** è l'insieme ordinato dei documenti che un'azienda, un ente o un professionista **produce o riceve** durante la propria attività: lettere, fatture, contratti, ordini, email, verbali, pratiche dei clienti.

I documenti di un archivio non sono una semplice raccolta: sono collegati tra loro perché nascono dalla stessa attività. Questo legame si chiama **vincolo archivistico**.

Con la parola «archivio» si indica anche il **luogo** (stanza, armadio, server) in cui i documenti sono conservati.

## Che cos'è un documento
Un **documento** è qualsiasi rappresentazione di atti, fatti o dati che hanno un valore giuridico, amministrativo o informativo. Può essere:
- **cartaceo** (analogico): su carta, con firma a mano;
- **informatico** (digitale): un file, con firma digitale o elettronica.

## Le finalità dell'archivio
- **Ritrovare** rapidamente qualsiasi documento quando serve.
- **Provare** un fatto: un contratto firmato, un pagamento, una consegna.
- **Garantire la continuità** del lavoro: anche un collega deve sapere dove cercare.
- **Rispettare gli obblighi di legge**: alcuni documenti vanno conservati per anni.
- **Proteggere** le informazioni riservate e i dati personali.

## Perché è importante in azienda
Un archivio disordinato costa: tempo perso a cercare, documenti smarriti, scadenze dimenticate, errori nei pagamenti, figuracce con clienti e fornitori. Un archivio ordinato, al contrario, rende l'ufficio **efficiente, affidabile e sicuro**.

> L'archivio non è un «deposito di carte vecchie», ma uno strumento di lavoro quotidiano: si archivia **per ritrovare**.
`
    },
    {
      titolo: "Tipologie di archivio",
      sintesi: "Archivio corrente, di deposito e storico.",
      testo: `
Ogni documento attraversa nel tempo tre fasi, che corrispondono a tre tipi di archivio. Si parla di **ciclo di vita** del documento.

| Tipo | Che cosa contiene | Quanto si consulta | Dove si trova |
| **Corrente** | Pratiche in corso o appena concluse | Ogni giorno | In ufficio, a portata di mano |
| **Di deposito** | Pratiche chiuse, ancora da conservare per legge o per utilità | Raramente | In un locale apposito o magazzino |
| **Storico** | Documenti scelti per essere conservati per sempre | Per ricerche o anniversari | In un archivio storico dedicato |

## Archivio corrente
Contiene i documenti necessari al lavoro di tutti i giorni: le pratiche dei clienti attivi, le fatture dell'anno, la corrispondenza recente. Deve essere **vicino** a chi lavora e organizzato per una consultazione veloce.

## Archivio di deposito
Quando una pratica è chiusa, non serve più tenerla in ufficio, ma non si può ancora eliminare: passa all'archivio di deposito. Esempi: le fatture degli anni precedenti, i contratti scaduti, le pratiche del personale cessato.

## Archivio storico
Raccoglie i documenti che hanno un valore permanente: l'atto costitutivo della società, i verbali delle assemblee, i brevetti, le fotografie e i documenti importanti della storia dell'azienda.

## Il passaggio da una fase all'altra
Il trasferimento dal corrente al deposito va fatto con **regolarità** (ad esempio una volta l'anno, a gennaio), compilando un **elenco** di ciò che viene spostato. Dal deposito, alla scadenza dei tempi di conservazione, i documenti vengono **scartati** oppure, se di valore, passano allo storico.

> Esempio: la fattura di questo mese è nel **corrente**; la fattura di sei anni fa è nel **deposito**; l'atto costitutivo del 1975 è nello **storico**.
`
    },
    {
      titolo: "Tecniche di classificazione",
      sintesi: "Metodo alfabetico, numerico, cronologico, alfanumerico e per argomento.",
      testo: `
**Classificare** significa decidere secondo quale criterio ordinare i documenti, in modo che chiunque possa ritrovarli. La scelta dipende dal tipo di documento e da come viene cercato.

## Metodo alfabetico
I documenti si ordinano secondo il **cognome** delle persone o la **ragione sociale** delle aziende.
- Vantaggi: è intuitivo, non serve un indice.
- Svantaggi: difficoltà con nomi simili, errori di grafia, cognomi composti.
- Adatto per: clienti, fornitori, dipendenti.

Regole principali:
- si ordina per cognome, poi per nome: Rossi Anna prima di Rossi Mario;
- «il nulla precede il qualcosa»: Ross viene prima di Rossi;
- i cognomi con particella si ordinano con la particella: De Luca alla lettera D;
- nelle ditte non si considerano articoli iniziali e forme societarie: «La Bottega srl» alla lettera B;
- le sigle si leggono come una parola: ENEL alla lettera E.

## Metodo numerico
A ogni documento o pratica si assegna un **numero progressivo**.
- Vantaggi: si espande senza limiti, è più riservato (il nome non compare).
- Svantaggi: serve una rubrica o un indice per sapere quale numero corrisponde a chi.
- Adatto per: fatture, ordini, pratiche numerate.

## Metodo cronologico
I documenti si ordinano per **data** (anno, mese, giorno).
- Adatto per: corrispondenza, verbali, estratti conto.
- Spesso si combina con altri metodi: ad esempio, cartella per cliente e, dentro, documenti in ordine di data.

## Metodo alfanumerico
Combina **lettere e numeri** in un codice. Esempio: «CL-0254» (cliente n. 254) oppure «2026/AMM/015».
- Vantaggi: il codice dice subito a quale settore appartiene il documento.
- Adatto per: archivi grandi, codici articolo, pratiche di diversi uffici.

## Metodo per argomento (per materia)
I documenti si raggruppano secondo il **tema**: «Assicurazioni», «Contratti», «Personale», «Sicurezza sul lavoro».
- Adatto per: documentazione tecnica, normative, pratiche amministrative.
- È la base del **titolario**, lo schema ad albero delle categorie dell'ufficio.

| Documento | Metodo consigliato |
| Schede dei clienti | Alfabetico |
| Fatture emesse | Numerico (coincide con il cronologico) |
| Verbali delle riunioni | Cronologico |
| Pratiche di più uffici | Alfanumerico |
| Normative e documentazione tecnica | Per argomento |

> Qualunque metodo si scelga, le regole vanno **scritte** e seguite da **tutti** allo stesso modo.
`
    },
    {
      titolo: "Archiviazione cartacea",
      sintesi: "Fascicoli, raccoglitori, etichette e organizzazione degli spazi.",
      testo: `
## Il fascicolo
Il **fascicolo** è la cartella che raccoglie tutti i documenti di **una stessa pratica**, dall'inizio alla fine. Esempio: «Contratto di fornitura Bianchi srl – 2026».
- Sulla copertina: titolo, anno, eventuale codice di classificazione, data di apertura.
- Dentro: i documenti in **ordine cronologico**.
- A pratica conclusa si annota la **data di chiusura**.
- Nessun foglio «volante»: ogni documento appartiene a un fascicolo.

## I raccoglitori e gli strumenti
- **Cartelline e camicie**: per i singoli fascicoli.
- **Raccoglitori ad anelli**: per documenti consultati spesso (es. fatture dell'anno).
- **Faldoni** (scatole d'archivio): per più fascicoli dello stesso tipo, soprattutto nel deposito.
- **Cartelle sospese** negli schedari e cassettiere: accesso rapido in ufficio.
- **Divisori** alfabetici, numerici o per mese.
- **Armadi e scaffali**, anche compattabili (su binari) per risparmiare spazio.

## Le etichette
Un'etichetta ben fatta permette di trovare il contenitore giusto **senza aprirlo**.
- Sul dorso: **anno**, **contenuto**, eventuale **codice**, numero progressivo del faldone.
- Scrittura grande e leggibile, meglio stampata.
- Stesso formato per tutti i contenitori.
- **Colori** diversi per settore o per anno (es. blu = contabilità, verde = personale).

## L'organizzazione degli spazi
- I documenti più usati vicino alla scrivania, quelli meno usati più lontano.
- Ripiani alti e bassi per il materiale consultato di rado.
- Lasciare **spazio libero** per i nuovi documenti.
- Locali **asciutti**, lontani da luce diretta, umidità e fonti di calore.
- Scaffali staccati da pavimento e pareti; estintore nelle vicinanze.
- Accesso consentito solo alle persone autorizzate.

> Un **elenco di consistenza** (che cosa c'è in ogni armadio e faldone) appeso o salvato al computer fa risparmiare moltissimo tempo nelle ricerche.
`
    },
    {
      titolo: "Archiviazione digitale",
      sintesi: "Cartelle informatiche, formati dei file e organizzazione dei documenti.",
      testo: `
Oggi la maggior parte dei documenti nasce già in formato digitale (email, PEC, fatture elettroniche, file di testo) oppure viene **scansionata**. Anche l'archivio digitale ha bisogno di ordine e di regole.

## Le cartelle informatiche
- La struttura delle cartelle deve **ricalcare** quella dell'archivio cartaceo (stesse categorie).
- Non più di **3-4 livelli** di sottocartelle, per non perdersi.
- Una cartella per ogni pratica, come un fascicolo digitale.
- Evitare cartelle come «Varie», «Da sistemare», «Nuova cartella».
- Salvare i documenti in cartelle **condivise** sul server o nel cloud aziendale, non sul desktop del singolo computer.

Esempio di struttura:
- ARCHIVIO 2026 › Amministrazione › Contratti
- ARCHIVIO 2026 › Contabilità › Fatture ricevute
- ARCHIVIO 2026 › Clienti › Bianchi srl

## I formati dei file
| Formato | Uso | Adatto a conservare? |
| **PDF/A** | Documenti definitivi | Sì, è nato per durare nel tempo |
| **PDF** | Documenti da inviare | Sì, se definitivi |
| **XML** | Fattura elettronica | Sì |
| **JPG / TIFF** | Fotografie e scansioni | Sì |
| DOCX / XLSX | Documenti di lavoro, ancora da modificare | Solo finché si lavora |

## Dare il nome ai file
Il nome deve far capire il contenuto **senza aprire** il file.
- Data all'inizio nel formato **AAAA-MM-GG**, così i file si ordinano da soli.
- Poi il tipo di documento e il soggetto.
- Niente spazi, accenti o simboli: usare il trattino basso _ o il trattino -.

> Esempio corretto: **2026-11-03_Fattura_088_BianchiSrl.pdf** — da evitare: «scansione1.pdf», «documento definitivo (2).pdf».

## Le scansioni
- Risoluzione di **300 dpi**, salvataggio in **PDF**.
- Controllare che il file sia leggibile e completo (tutte le pagine, nel verso giusto).
- Dare subito il nome corretto e salvare nella cartella giusta.
`
    },
    {
      titolo: "Protocollazione dei documenti",
      sintesi: "Registrazione, numerazione, datazione e tracciabilità.",
      testo: `
## Che cos'è il protocollo
Il **registro di protocollo** è il registro in cui si annotano, in ordine progressivo, tutti i documenti **ricevuti e spediti**. Dà a ogni documento un **numero** e una **data** certi: è la sua «carta d'identità». Per le Pubbliche Amministrazioni è obbligatorio (DPR 445/2000); molte aziende lo adottano comunque per ordine e sicurezza.

## La registrazione
Per ogni documento si annotano:
- **numero di protocollo**;
- **data** di registrazione;
- **mittente** (per i documenti in entrata) o **destinatario** (per quelli in uscita);
- **oggetto**: breve, chiaro, completo;
- data e numero del documento ricevuto, se presenti;
- numero e descrizione degli **allegati**.

## La numerazione
- Il numero è **progressivo** e ricomincia da 1 ogni **1° gennaio**.
- Un numero corrisponde a **un solo** documento.
- Il numero non si cancella e non si riutilizza: gli errori si correggono con un **annullamento motivato**.

## La datazione
- Si protocolla **lo stesso giorno** in cui il documento arriva o parte.
- La data di protocollo fa fede: dimostra **quando** il documento è entrato o uscito.

## La tracciabilità
Sul documento si appone la **segnatura** (timbro o etichetta con numero, data ed eventuale classificazione). In questo modo si può sempre sapere:
- quando il documento è arrivato;
- a chi è stato assegnato;
- in quale fascicolo è stato archiviato.

| N. | Data | E/U | Mittente / Destinatario | Oggetto |
| 125 | 03/11/2026 | E | Cartoleria Rossi srl | Fattura n. 88 fornitura toner |
| 126 | 03/11/2026 | U | Studio Bianchi | Invio contratto firmato di consulenza |
| 127 | 04/11/2026 | E | Comune di Milazzo | Avviso rinnovo autorizzazione insegna |

> Un buon oggetto: «Richiesta preventivo fornitura carta A4 – anno 2027». Un cattivo oggetto: «Richiesta».
`
    },
    {
      titolo: "Gestione dei documenti aziendali",
      sintesi: "Archiviazione di fatture, DDT, ordini, contratti e documenti amministrativi.",
      testo: `
Ogni tipo di documento aziendale ha il suo modo di essere archiviato. Ecco i principali.

## Fatture
- Si tengono separate le **fatture emesse** (ai clienti) e le **fatture ricevute** (dai fornitori).
- Ordine **numerico** per le emesse, **cronologico** o per fornitore per le ricevute.
- La fattura elettronica è un file **XML** che passa dal Sistema di Interscambio (SdI) dell'Agenzia delle Entrate e va **conservata in digitale**.
- Conservazione: **10 anni** (art. 2220 del Codice civile).

## DDT (Documenti di trasporto)
- Accompagnano la merce: vanno **controllati** al ricevimento (quantità, integrità) e firmati.
- Si archiviano **insieme alla fattura** a cui si riferiscono, oppure in ordine cronologico per fornitore.
- Conservazione: come le fatture, 10 anni.

## Ordini
- Ordini **ricevuti** dai clienti e ordini **inviati** ai fornitori, separati.
- Ogni ordine si collega al **preventivo** che lo ha preceduto, al **DDT** e alla **fattura** che lo seguono.
- Ordine numerico o per cliente/fornitore.

## Contratti
- Un fascicolo per ogni contratto, ordinato per **controparte** (cliente, fornitore, dipendente).
- Annotare la **data di scadenza** e il preavviso per la disdetta.
- Conservare l'**originale firmato** in un luogo sicuro e una copia digitale.
- Conservazione: per tutta la durata e almeno **10 anni** dopo la scadenza.

## Documenti amministrativi
Comprendono: comunicazioni con banche e uffici pubblici, polizze assicurative, documenti del personale, autorizzazioni, certificati. Si archiviano **per argomento**, secondo il titolario dell'ufficio.

| Documento | Ordinamento consigliato | Conservazione |
| Fatture emesse | Numerico | 10 anni |
| Fatture ricevute | Per fornitore o cronologico | 10 anni |
| DDT | Con la fattura collegata | 10 anni |
| Ordini | Numerico o per cliente/fornitore | 10 anni |
| Contratti | Per controparte | Durata + 10 anni |

> Il collegamento **preventivo → ordine → DDT → fattura** permette di ricostruire in pochi minuti tutta la storia di una fornitura.
`
    },
    {
      titolo: "Ricerca e recupero documentale",
      sintesi: "Sistemi di indicizzazione, codifica e ricerca rapida.",
      testo: `
Archiviare serve a **ritrovare**. Un documento che non si trova è come un documento perso.

## L'indicizzazione
**Indicizzare** significa preparare degli strumenti che dicono **dove** si trova un documento.
- **Rubrica o indice** alfabetico: collega un nome al numero della pratica.
- **Elenco di consistenza**: descrive il contenuto di ogni armadio, scaffale e faldone.
- **Registro di protocollo**: permette di risalire a un documento conoscendo data, mittente o oggetto.
- **Schede o tabelle** al computer (anche un semplice foglio di calcolo) con colonne: numero, data, soggetto, oggetto, collocazione.

## La codifica
Assegnare un **codice** a ogni documento o pratica rende la ricerca univoca.
- Codice cliente o fornitore (es. CL-0254).
- Codice di classificazione del titolario (es. 3.2 = Contabilità, Fatture ricevute).
- Numero di protocollo.
- Lo stesso codice si scrive sul fascicolo cartaceo e nel nome del file digitale.

## La ricerca rapida nell'archivio digitale
- Ricerca per **nome del file**: funziona bene se i nomi sono scritti con regole precise.
- Ricerca per **data** o per tipo di file.
- Ricerca del **testo contenuto** nei documenti (possibile nei PDF «ricercabili»).
- **Parole chiave** e informazioni aggiuntive (metadati) inserite nei programmi di gestione documentale.

## Quando un documento esce dall'archivio
Chi preleva un fascicolo deve lasciare traccia: una **scheda di uscita** (o un registro dei prestiti) con nome, data e fascicolo prelevato. Al ritorno il documento va rimesso **esattamente** al suo posto.

> Regola d'oro: un documento si cerca **una volta sola** se è stato archiviato bene.
`
    },
    {
      titolo: "Sicurezza e conservazione",
      sintesi: "Privacy, GDPR, backup, accessi e conservazione digitale a norma.",
      testo: `
## Privacy e GDPR
Il **Regolamento UE 2016/679 (GDPR)** tutela i dati personali: nomi, indirizzi, codici fiscali, dati bancari, dati sulla salute. Chi archivia documenti deve:
- trattare solo i dati **necessari** allo scopo;
- conservarli solo per il **tempo necessario**;
- proteggerli da perdita, furto e accessi non autorizzati;
- prestare la **massima cautela** con i dati sanitari e giudiziari.

## Il controllo degli accessi
- Armadi e stanze dell'archivio **chiusi a chiave**.
- Al computer: ogni persona ha il proprio **utente e password**.
- Ogni dipendente vede solo le cartelle che gli servono per il lavoro.
- Password robuste, cambiate periodicamente, mai scritte su foglietti.

## Il backup
Il **backup** è la copia di sicurezza dei dati digitali. Si segue la **regola 3-2-1**:
- **3** copie dei dati;
- su **2** supporti diversi (ad esempio server e disco esterno);
- di cui **1** conservata fuori sede (cloud o altro edificio).

Il backup deve essere **automatico** e periodico; ogni tanto va fatta una **prova di ripristino** per essere sicuri che funzioni.

## La conservazione digitale a norma
Non basta salvare i file: alcuni documenti informatici (ad esempio le fatture elettroniche) vanno **conservati a norma**, cioè con un procedimento che ne garantisce nel tempo:
- **integrità**: il documento non è stato modificato;
- **autenticità**: proviene davvero da chi lo ha firmato;
- **leggibilità**: si potrà aprire anche tra molti anni.

La conservazione segue le **Linee guida AgID** in vigore dal 2022 e di solito si affida a un **conservatore** specializzato.

> Carta: nemici sono umidità, fuoco e disordine. Digitale: nemici sono guasti, virus e password deboli.
`
    },
    {
      titolo: "Scarto e aggiornamento dell'archivio",
      sintesi: "Tempi di conservazione, eliminazione autorizzata e aggiornamento documentale.",
      testo: `
## I tempi di conservazione
Non tutti i documenti vanno conservati per sempre. Ogni tipo ha il suo tempo, stabilito dalla legge o dalle regole interne.

| Documento | Conservazione |
| Fatture, DDT, libri e scritture contabili | 10 anni (art. 2220 c.c.) |
| Corrispondenza commerciale | 10 anni |
| Contratti | Durata del contratto + 10 anni |
| Documenti del personale | Lunga: verificare con il consulente del lavoro |
| Atto costitutivo, statuto, verbali di assemblea | Per sempre |
| Bozze, copie di lavoro, pubblicità ricevuta | Fino a fine utilità |

Lo strumento che elenca questi tempi si chiama **massimario di scarto**.

## L'eliminazione autorizzata (scarto)
Lo **scarto** è l'eliminazione **controllata** dei documenti che non devono più essere conservati.
- Si decide in base al massimario, mai «a occhio».
- Si compila un **elenco** dei documenti da eliminare, approvato dal responsabile.
- Nelle Pubbliche Amministrazioni serve l'**autorizzazione** della Soprintendenza archivistica.
- I documenti con dati personali si distruggono con un **distruggidocumenti** o tramite una ditta specializzata: mai nel cestino.
- Anche i file digitali vanno cancellati in modo sicuro, compresi i backup.

## L'aggiornamento dell'archivio
Un archivio è vivo e va tenuto aggiornato:
- inserire subito i nuovi documenti nel fascicolo giusto;
- chiudere i fascicoli delle pratiche concluse;
- spostare periodicamente le pratiche chiuse nel **deposito**;
- aggiornare l'elenco di consistenza e gli indici;
- sostituire i documenti superati con le versioni nuove (es. moduli, listini, procedure), indicando la data di aggiornamento.

> Conservare troppo è un errore quanto conservare troppo poco: occupa spazio, rallenta le ricerche e può violare la privacy.
`
    }
    ]
  },

  /* ======================= MODULO 2 ======================= */
  {
    n: 2,
    titolo: "Tecniche di segreteria",
    colore: "#7a2e3a",
    argomenti: [
    {
      titolo: "Introduzione alla segreteria",
      sintesi: "Ruolo, funzioni, mansioni e responsabilità dell'addetto alla segreteria.",
      testo: `
## Il ruolo
L'**addetto alla segreteria** è il punto di riferimento dell'ufficio: organizza, coordina e supporta il lavoro dei responsabili e dei colleghi, ed è spesso la **prima persona** con cui clienti e fornitori entrano in contatto. Per questo rappresenta l'immagine dell'azienda.

## Le funzioni
- **Comunicazione**: telefono, posta, email, rapporti con il pubblico.
- **Organizzazione**: agenda, appuntamenti, riunioni, scadenze.
- **Gestione documentale**: redazione di documenti, protocollo, archivio.
- **Supporto amministrativo**: preventivi, ordini, fatture, documenti di trasporto.

## Le mansioni quotidiane
- Accogliere i visitatori e rispondere al telefono.
- Ricevere, smistare e spedire la posta e le email.
- Tenere aggiornata l'agenda del responsabile.
- Scrivere lettere, comunicazioni interne, verbali.
- Protocollare e archiviare i documenti.
- Controllare le scadenze e segnalarle in tempo.

## Le responsabilità
- **Riservatezza**: ciò che si vede e si sente in ufficio non esce dall'ufficio.
- **Precisione**: un errore in una data, un importo o un nome può costare caro.
- **Affidabilità e puntualità**: gli altri contano sul lavoro della segreteria.
- **Cortesia e imparzialità**: stesso rispetto per tutti.

## Le competenze richieste
| Competenze tecniche | Competenze personali |
| Uso del computer, videoscrittura, foglio di calcolo | Cortesia e pazienza |
| Posta elettronica e PEC | Capacità di organizzazione |
| Scrittura corretta | Riservatezza |
| Tecniche di archiviazione | Capacità di ascolto |
| Nozioni amministrative di base | Lavoro di squadra e problem solving |
`
    },
    {
      titolo: "Organizzazione dell'ufficio",
      sintesi: "Gestione degli spazi, strumenti di lavoro, materiali e procedure operative.",
      testo: `
## La gestione degli spazi
- La **postazione** di segreteria deve essere visibile all'ingresso e facilmente raggiungibile.
- Scrivania **sgombra**: sopra solo ciò che serve in quel momento.
- Vaschette o cartelline per separare: **da fare**, **in attesa**, **da archiviare**.
- Telefono, agenda e materiale di uso frequente a portata di mano.
- Schermo all'altezza degli occhi, a circa un braccio di distanza; buona illuminazione.
- A fine giornata: scrivania in ordine e documenti riservati chiusi a chiave.

## Gli strumenti di lavoro
- **Computer** con programmi di videoscrittura, foglio di calcolo, posta elettronica e calendario.
- **Telefono** e centralino (trasferimento, attesa, conferenza).
- **Stampante multifunzione**: stampa, fotocopia, scansione.
- **Distruggidocumenti**.
- Eventuali programmi gestionali (protocollo, contabilità, gestione clienti).

## I materiali
- Cancelleria: carta, buste, penne, cucitrice, graffette, evidenziatori, post-it.
- Materiale d'archivio: cartelline, raccoglitori, faldoni, etichette.
- Carta intestata e buste intestate.
- Toner e carta di scorta.

Conviene tenere un **elenco delle scorte** e riordinare **prima** che il materiale finisca.

## Le procedure operative
Una **procedura** descrive passo per passo come si svolge un'attività ricorrente, in modo che chiunque possa farla allo stesso modo. Esempi:
- come si protocolla la posta in arrivo;
- come si risponde al telefono e si prendono i messaggi;
- come si prepara una riunione;
- come si apre e si chiude l'ufficio.

> Le procedure scritte sono preziose quando un collega è assente o arriva una persona nuova.
`
    },
    {
      titolo: "Comunicazione aziendale",
      sintesi: "Comunicazione verbale, scritta, telefonica e digitale.",
      testo: `
## Gli elementi della comunicazione
Ogni comunicazione ha un **emittente** (chi parla), un **messaggio** (che cosa dice), un **canale** (voce, telefono, lettera, email) e un **ricevente** (chi ascolta). Il **feedback**, cioè la risposta, conferma che il messaggio è arrivato. I **disturbi** (rumore, fretta, parole difficili, pregiudizi) possono rovinare la comunicazione.

## La comunicazione verbale
Avviene a voce, di persona. Conta non solo **che cosa** si dice, ma anche **come**:
- **verbale**: le parole, che devono essere chiare e semplici;
- **paraverbale**: tono, volume, velocità, pause;
- **non verbale**: sorriso, sguardo, postura, gesti.

L'**ascolto attivo** è fondamentale: lasciar finire l'interlocutore, mostrare attenzione, riformulare («Se ho capito bene, lei chiede…»), fare domande per chiarire.

## La comunicazione scritta
Lettere, comunicazioni interne, circolari, verbali. Deve essere:
- **chiara**: un'idea per frase;
- **precisa**: date, numeri e importi esatti;
- **sintetica**: dire tutto, ma niente di più;
- **corretta**: senza errori di grammatica e ortografia;
- **cortese** nel tono.

## La comunicazione telefonica
Al telefono manca il linguaggio del corpo: la **voce** deve trasmettere disponibilità e professionalità. Si sorride anche al telefono, perché il sorriso «si sente».

## La comunicazione digitale
Email, PEC, messaggi, videochiamate. È veloce, ma richiede le stesse regole della scrittura formale: oggetto chiaro, saluti, firma completa, attenzione ai destinatari.

> Prima di comunicare chiedersi sempre: **a chi** scrivo o parlo, **che cosa** voglio ottenere, **qual è** il canale più adatto.
`
    },
    {
      titolo: "Accoglienza e gestione del front office",
      sintesi: "Ricevimento dei visitatori, gestione delle richieste e relazione con clienti e fornitori.",
      testo: `
Il **front office** è la parte dell'ufficio a contatto diretto con il pubblico. Chi vi lavora è il «biglietto da visita» dell'azienda.

## Il ricevimento dei visitatori
- **Alzare lo sguardo** e salutare subito; se si è al telefono, un cenno con il capo.
- Presentarsi e chiedere **nome** e **motivo** della visita.
- Verificare se il visitatore ha un appuntamento.
- Avvisare la persona interessata.
- Far accomodare il visitatore e, se previsto, offrire acqua o un caffè.
- Se l'attesa si allunga, **aggiornarlo** spesso.
- Accompagnarlo, invece di indicare soltanto la strada.

## La gestione delle richieste
- Ascoltare con attenzione e prendere nota.
- Se si può rispondere subito, farlo con precisione.
- Se non si è competenti, indirizzare alla persona giusta: «Verifico subito chi può aiutarla».
- Se serve tempo, dare un **termine preciso** e rispettarlo: «La richiamo entro le 12».
- Non promettere mai ciò che non si può mantenere.

## La relazione con clienti e fornitori
- **Clienti**: sono la ragione d'essere dell'azienda; vanno trattati con cortesia, rapidità e disponibilità, ricordando le loro esigenze.
- **Fornitori**: rapporto corretto e professionale, rispetto degli accordi, comunicazioni chiare su ordini, consegne e pagamenti.
- Con entrambi: dare del **Lei**, usare un linguaggio adeguato, mantenere la calma anche nelle situazioni difficili.

| Frasi da evitare | Frasi da usare |
| «Non è compito mio» | «Verifico subito chi può aiutarla» |
| «Non so niente» | «Mi informo e le faccio sapere entro oggi» |
| «Ripassi più tardi» | «Posso farla richiamare? A che numero?» |
`
    },
    {
      titolo: "Gestione delle telefonate",
      sintesi: "Tecniche di risposta, trasferimento delle chiamate, raccolta dei messaggi e gestione dei reclami.",
      testo: `
## Le tecniche di risposta
- Rispondere entro **tre squilli**.
- Formula: **saluto + nome dell'azienda + proprio nome + offerta di aiuto**.

> «Buongiorno, Studio Rossi, sono Anna, come posso aiutarla?»

- Parlare con voce chiara, non troppo veloce, e con un sorriso.
- Avere sempre **carta e penna** (o il computer) a portata di mano.
- Usare il nome dell'interlocutore durante la conversazione.

## Il trasferimento delle chiamate
- Chiedere **chi parla** e il **motivo** della chiamata.
- «Attenda un momento, verifico se il dottore è disponibile.»
- Prima di trasferire, **annunciare** la chiamata al collega (nome e motivo).
- Non lasciare in attesa senza notizie per più di 30-40 secondi.
- Se il collega non può rispondere: proporre di **richiamare** o di lasciare un messaggio.

## La raccolta dei messaggi
Un messaggio telefonico completo contiene:
- **per chi** è il messaggio;
- **data e ora** della chiamata;
- **chi** ha chiamato (nome e azienda);
- **recapito** per richiamare (ripeterlo al chiamante per verifica);
- **motivo** della chiamata, in breve;
- **azione** richiesta (richiamare, inviare un documento, attendere);
- **firma** di chi ha preso il messaggio.

## La gestione dei reclami
1. **Ascoltare** fino in fondo, senza interrompere.
2. Restare **calmi**: non è un attacco personale.
3. Mostrare **comprensione**: «Capisco il suo disagio».
4. Raccogliere tutti i **dati** (nome, recapito, ordine o pratica, problema).
5. Proporre una **soluzione** o un tempo preciso per averla.
6. **Registrare** il reclamo e **richiamare** come promesso.

## La telefonata in uscita
Prepararla (scopo, dati, documenti sottomano), presentarsi subito, chiedere se è un buon momento per parlare, andare al punto, concludere **riassumendo** gli accordi presi.
`
    },
    {
      titolo: "Gestione della posta elettronica",
      sintesi: "Scrittura di email professionali, PEC, organizzazione della casella di posta e gestione degli allegati.",
      testo: `
## Scrivere un'email professionale
- **Oggetto** sempre presente e specifico: «Preventivo n. 45 – fornitura carta A4».
- **Saluto** iniziale adeguato: «Gentile Dott. Bianchi,» / «Gentili Signori,».
- Testo **breve**, diviso in paragrafi; una richiesta chiara.
- **Chiusura** e **firma** completa: nome, ruolo, azienda, telefono.
- Rileggere sempre prima di inviare.
- Rispondere entro **24 ore**, anche solo per confermare la ricezione.

Da evitare: scrivere tutto in MAIUSCOLO (equivale a urlare), emoticon, abbreviazioni da chat, scrivere quando si è arrabbiati.

## I destinatari: A, CC e CCN
- **A**: chi deve leggere e agire.
- **CC** (copia conoscenza): chi deve essere informato.
- **CCN** (copia nascosta): per invii a molte persone senza mostrare gli indirizzi a tutti, nel rispetto della privacy.
- «Rispondi a tutti» solo se la risposta serve davvero a tutti.

## La PEC
La **Posta Elettronica Certificata** ha lo stesso valore legale di una raccomandata con ricevuta di ritorno, se anche il destinatario usa una PEC. Il gestore rilascia una **ricevuta di accettazione** e una **ricevuta di consegna**, che vanno **conservate**. La casella PEC va controllata **ogni giorno** e i messaggi ricevuti vanno protocollati.

## Organizzare la casella di posta
- Creare **cartelle** per cliente, fornitore o argomento.
- Usare le **regole** (filtri) per smistare automaticamente alcune email.
- Usare i **contrassegni** per le email da gestire.
- Spostare le email già trattate nelle cartelle: la posta in arrivo deve contenere solo ciò che è ancora da fare.
- Eliminare pubblicità e messaggi inutili; svuotare periodicamente il cestino.

## Gestire gli allegati
- Inviare preferibilmente in **PDF**, con nomi chiari.
- Citare sempre gli allegati nel testo e controllare di averli inseriti.
- Per file molto grandi usare un **link** di condivisione.
- **Non aprire** allegati sospetti o di mittenti sconosciuti: possono contenere virus (phishing).
- Salvare gli allegati importanti nell'archivio digitale, nella cartella giusta.
`
    },
    {
      titolo: "Gestione della corrispondenza",
      sintesi: "Ricezione, smistamento, registrazione e invio della posta in entrata e in uscita.",
      testo: `
## La ricezione
La corrispondenza arriva per posta ordinaria, raccomandata, corriere, consegna a mano, email e PEC.
- Controllare che sia davvero indirizzata all'azienda.
- Per le raccomandate e le consegne a mano: firmare la ricevuta e annotare data e ora.
- Aprire la posta (salvo quella indicata come **personale** o **riservata**, che va consegnata chiusa).
- Verificare che gli allegati annunciati siano presenti.

## Lo smistamento
- Separare la posta per **ufficio** o **persona** competente.
- Distinguere: documenti da protocollare, pubblicità, riviste, comunicazioni personali.
- Dare la precedenza a ciò che è **urgente** o ha una **scadenza**.

## La registrazione
- La posta importante in entrata si registra nel **protocollo** (numero, data, mittente, oggetto).
- Si appone la **segnatura** sul documento.
- Si consegna al destinatario interno e si archivia nel fascicolo della pratica.

## L'invio della posta in uscita
- Controllare che il documento sia **firmato**, completo di allegati e senza errori.
- Registrare nel protocollo la posta in uscita.
- Scegliere il mezzo più adatto:

| Mezzo | Quando usarlo |
| Posta ordinaria | Comunicazioni senza valore legale |
| Raccomandata | Quando serve la prova della spedizione |
| Raccomandata con ricevuta di ritorno | Quando serve la prova della consegna |
| PEC | Come la raccomandata con ricevuta di ritorno, ma in digitale |
| Corriere | Pacchi e documenti urgenti |
| Email | Comunicazioni rapide di lavoro |

- Conservare le **ricevute** di spedizione e di consegna insieme alla copia del documento inviato.

> Il percorso è sempre lo stesso: **ricevo → smisto → registro → assegno → archivio**.
`
    },
    {
      titolo: "Tecniche di archiviazione",
      sintesi: "Classificazione, fascicolazione, protocollazione e archiviazione cartacea e digitale.",
      testo: `
Questo argomento riprende, dal punto di vista del lavoro quotidiano di segreteria, quanto spiegato nel **Modulo 1 – Tecniche di archiviazione**.

## La classificazione
Ogni documento riceve una **categoria** secondo il criterio scelto dall'ufficio: alfabetico, numerico, cronologico, alfanumerico o per argomento. Lo schema delle categorie si chiama **titolario**.

## La fascicolazione
Ogni documento va inserito nel **fascicolo** della pratica a cui appartiene, in ordine cronologico. Il fascicolo si apre con il primo documento e si chiude quando la pratica è conclusa.

## La protocollazione
I documenti in entrata e in uscita si registrano nel **protocollo**, che assegna un numero e una data certi e permette di seguirne il percorso.

## L'archiviazione cartacea
Fascicoli, raccoglitori e faldoni con **etichette** chiare, sistemati in armadi e scaffali in locali asciutti e protetti.

## L'archiviazione digitale
Cartelle informatiche ordinate come l'archivio cartaceo, file con **nomi** chiari (data nel formato AAAA-MM-GG), formati adatti alla conservazione come il **PDF/A**, **backup** regolari.

## La routine di segreteria
- Ogni giorno: protocollare e smistare la posta, archiviare i documenti trattati.
- Ogni settimana: controllare che non ci siano documenti «volanti» sulle scrivanie.
- Ogni anno: chiudere i fascicoli conclusi e trasferirli nell'archivio di deposito.

> Archiviare **subito**, non «quando avrò tempo»: il tempo per riordinare un mese di carte non arriva mai.
`
    },
    {
      titolo: "Gestione dell'agenda e degli appuntamenti",
      sintesi: "Pianificazione delle attività, organizzazione delle riunioni e gestione delle scadenze.",
      testo: `
## L'agenda
- Usare **una sola** agenda, cartacea o digitale (es. Google Calendar, Outlook), non foglietti sparsi.
- Per ogni appuntamento annotare: **chi**, **quando**, **dove**, **perché** e un **recapito**.
- Lasciare **margini di tempo** tra un impegno e l'altro.
- Condividere l'agenda con il responsabile, se richiesto.
- **Confermare** gli appuntamenti il giorno prima.

## La pianificazione delle attività
- Iniziare la giornata con la **lista delle cose da fare**.
- Stabilire le **priorità**: prima ciò che è urgente e importante.
- Raggruppare le attività simili (es. tutte le telefonate insieme).
- Limitare le interruzioni: controllare la posta a orari fissi.

| | Urgente | Non urgente |
| **Importante** | Fallo subito | Pianificalo |
| **Non importante** | Delegalo | Eliminalo |

## L'organizzazione delle riunioni
**Prima**
- Definire scopo, partecipanti, data, ora e durata.
- Prenotare la sala o preparare il collegamento online.
- Inviare la **convocazione** con l'**ordine del giorno** (l'elenco numerato degli argomenti, che di solito termina con «Varie ed eventuali»).
- Preparare documenti e materiali; confermare il giorno prima.

**Durante**
- Raccogliere le firme di presenza, assicurarsi che tutto funzioni, prendere appunti su decisioni, compiti e scadenze.

**Dopo**
- Redigere il **verbale** entro 1-2 giorni, farlo approvare, inviarlo ai partecipanti, inserire in agenda le scadenze decise.

## La gestione delle scadenze
- Tenere uno **scadenzario**: pagamenti, rinnovi, contratti, dichiarazioni, revisioni.
- Impostare promemoria con **anticipo** (ad esempio 15 giorni e 3 giorni prima).
- Controllarlo **ogni mattina**.
`
    },
    {
      titolo: "Redazione di documenti aziendali",
      sintesi: "Lettere commerciali, comunicazioni interne, verbali, circolari e modulistica.",
      testo: `
## La lettera commerciale
Le parti della lettera:
- **intestazione** del mittente (nome, indirizzo, contatti);
- **luogo e data**;
- **destinatario** con indirizzo;
- eventuale **riferimento** (Vs. rif., Ns. rif., numero di protocollo);
- **oggetto**;
- **formula di apertura** («Spett.le Ditta», «Gentile Sig.ra Rossi»);
- **corpo** della lettera: introduzione, sviluppo, conclusione;
- **formula di chiusura** («Distinti saluti», «Cordiali saluti») e **firma**;
- indicazione degli **allegati**.

| Abbreviazione | Significato |
| Spett.le | Spettabile |
| Vs. / Ns. | Vostro / Nostro |
| c.a. | Alla cortese attenzione |
| p.c. | Per conoscenza |
| All. | Allegato/i |

## Le comunicazioni interne
Messaggi tra uffici o colleghi della stessa azienda (note, promemoria, email interne). Devono indicare **mittente**, **destinatari**, **data**, **oggetto** e un testo breve e chiaro. Il tono è meno formale di una lettera, ma sempre professionale.

## La circolare
Comunicazione inviata **a molte persone** contemporaneamente (tutto il personale, tutti i clienti) per dare informazioni o disposizioni: nuovi orari, chiusure, procedure. Contiene:
- numero progressivo e data;
- destinatari («A tutto il personale»);
- oggetto;
- testo con le informazioni o le disposizioni;
- firma del responsabile.

## Il verbale
Documento che riporta in modo **sintetico** ciò che è avvenuto e ciò che si è deciso in una riunione:
- tipo di riunione, data, ora e luogo;
- presenti e assenti; chi presiede e chi verbalizza;
- per ogni punto dell'ordine del giorno: sintesi della discussione e **decisioni**;
- ora di chiusura;
- firme del presidente e del segretario.

## La modulistica
I **moduli** sono documenti già impostati da compilare (richieste di ferie, ordini, schede clienti, ricevute).
- Usare sempre la **versione aggiornata** del modulo.
- Indicare chiaramente i campi **obbligatori**.
- Conservare i modelli in una cartella condivisa, con la data di aggiornamento.
`
    },
    {
      titolo: "Elementi di segreteria amministrativa",
      sintesi: "Gestione di ordini, preventivi, fatture, DDT e documentazione aziendale.",
      testo: `
La segreteria collabora spesso con l'amministrazione nella gestione dei documenti commerciali. È importante conoscerne il **ciclo**:

| Documento | Chi lo emette | A che cosa serve |
| **Preventivo** | Venditore | Proporre prezzi e condizioni |
| **Ordine** | Compratore | Chiedere la merce o il servizio |
| **Conferma d'ordine** | Venditore | Accettare l'ordine |
| **DDT** | Venditore | Accompagnare la merce durante il trasporto |
| **Fattura** | Venditore | Chiedere il pagamento; documento fiscale |

## Il preventivo
Indica descrizione dei beni o servizi, quantità, prezzi, IVA, tempi di consegna, condizioni di pagamento e **validità** dell'offerta. Va numerato, datato e archiviato, anche se non viene accettato.

## L'ordine
Contiene: dati del cliente e del fornitore, riferimento al preventivo, descrizione e quantità, prezzo, luogo e data di consegna, modalità di pagamento. La segreteria lo registra, lo inoltra all'ufficio competente e ne controlla l'esecuzione.

## Il DDT (Documento di trasporto)
Accompagna la merce. Riporta: numero e data, mittente e destinatario, descrizione e quantità dei beni, causale del trasporto (vendita, reso, riparazione), firma di chi consegna e di chi riceve. Al ricevimento si **controlla** che la merce corrisponda a quanto indicato.

## La fattura
Contiene:
- numero progressivo e data;
- dati di venditore e acquirente (denominazione, indirizzo, partita IVA o codice fiscale);
- descrizione, quantità e prezzo;
- imponibile, aliquota IVA e importo dell'IVA;
- totale da pagare;
- modalità e scadenza del pagamento.

Dal 1° gennaio 2019 la fattura tra operatori italiani è, salvo eccezioni, **elettronica**: un file XML inviato tramite il **Sistema di Interscambio (SdI)**. Per riceverla l'azienda comunica un **codice destinatario** o un indirizzo **PEC**.

## La documentazione aziendale
Preventivi, ordini, DDT e fatture di una stessa fornitura vanno **collegati** tra loro (stesso fascicolo o stessi riferimenti), in modo da poter controllare che ciò che è stato ordinato sia stato consegnato e fatturato correttamente.

> Controllo incrociato: **ordine = DDT = fattura**. Se qualcosa non corrisponde, va segnalato subito.
`
    },
    {
      titolo: "Privacy e riservatezza in ufficio",
      sintesi: "Protezione dei dati personali, GDPR, sicurezza delle informazioni e comportamento professionale.",
      testo: `
## La protezione dei dati personali
In segreteria passano ogni giorno dati personali: nomi, indirizzi, telefoni, codici fiscali, coordinate bancarie, a volte dati sulla salute. Proteggerli è un **obbligo di legge** e un dovere professionale.

## Il GDPR
Il **Regolamento UE 2016/679** stabilisce i principi per il trattamento dei dati personali:
- **liceità e trasparenza**: la persona deve sapere come vengono usati i suoi dati (informativa);
- **limitazione della finalità**: i dati si usano solo per lo scopo per cui sono stati raccolti;
- **minimizzazione**: si raccolgono solo i dati necessari;
- **esattezza**: i dati vanno tenuti aggiornati;
- **limitazione della conservazione**: si conservano solo per il tempo necessario;
- **sicurezza**: vanno protetti da perdita, furto e accessi non autorizzati.

Le persone hanno diritto di **accedere** ai propri dati, di chiederne la **correzione** e, in certi casi, la **cancellazione**. Se si verifica una violazione (furto di dati, invio a persone sbagliate), va segnalata **subito** al responsabile: l'azienda può avere l'obbligo di comunicarla al Garante entro 72 ore.

## La sicurezza delle informazioni
- Bloccare lo schermo quando ci si allontana dalla scrivania.
- Password personali e robuste, mai comunicate a nessuno.
- Non lasciare documenti sulla scrivania, nella stampante o nella fotocopiatrice.
- Chiudere a chiave armadi e cassetti con documenti riservati.
- Distruggere i documenti con il distruggidocumenti, non gettarli nel cestino.
- Diffidare di email e telefonate che chiedono dati o password.
- Usare la **copia nascosta (CCN)** negli invii a molti destinatari.

## Il comportamento professionale
- Non parlare di clienti, colleghi o pratiche fuori dall'ufficio né nelle aree comuni.
- Al telefono, non dare informazioni su altre persone senza verificare chi chiama.
- Allo sportello, garantire una **distanza** di cortesia tra chi è servito e chi attende.
- Non usare i dati dell'azienda per scopi personali.

> La riservatezza è la qualità più apprezzata in chi lavora in segreteria: si costruisce in anni e si perde in un attimo.
`
    }
    ]
  }
  ]
};
