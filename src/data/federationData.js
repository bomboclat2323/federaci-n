// Oficiální strukturovaná data pro portál federace / svazu
// Všechny texty jsou v českém jazyce s vysvětlujícími instrukcemi pro vedení v hranatých závorkách

export const FEDERATION_INFO = {
  name: "[Název federace / svazu]",
  legalName: "[Oficiální název organizace, z.s. / Národní federace profesních a zájmových subjektů ČR, z.s.]",
  acronym: "[NFS / ZKRATKA]",
  foundingYear: "1998",
  ico: "[IČO: 12345678]",
  dic: "[DIČ: CZ12345678 (neplátce DPH / plátce DPH)]",
  address: "[Sídlo organizace / Adresa kanceláře: Senovážné náměstí 978/23, 110 00 Praha 1 – Nové Město]",
  datovaSchranka: "[ID datové schránky: a7b9x2q]",
  registryInfo: "[Spolek je zapsán ve spolkovém rejstříku vedeném Městským soudem v Praze, oddíl L, vložka 45892]",
  bankAccount: "[Bankovní spojení: 2100894562/2010 (Fio banka, a.s. – Transparentní účet)]",
  iban: "[IBAN: CZ65 2010 0000 0021 0089 4562, BIC/SWIFT: FIOBCZPPXXX]",
  officeHours: "[Úřední hodiny sekretariátu: Pondělí – Čtvrtek 09:00 – 16:00, Pátek 09:00 – 14:00]",
  
  hero: {
    title: "[Hlavní název a oficiální poslání federace v jedné větě]",
    subtitle: "[Zde bude 2-3 řádkový oficiální popis: koho federace sdružuje, jaký sektor zastupuje a jaký je její hlavní cíl vůči veřejnosti a institucím. Reprezentujeme společné zájmy členských organizací, garantujeme profesní etiku a vedeme partnerský dialog s orgány státní správy.]",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "[Oficiální zasedání valné hromady a prezidia federace]"
  },

  stats: [
    {
      id: "members",
      number: "[48+]",
      label: "[X] Členských organizací",
      description: "[Řádní a přidružení členové ze všech sektorů s hlasovacím právem]"
    },
    {
      id: "regions",
      number: "[14]",
      label: "[X] Zastupovaných regionů",
      description: "[Aktivní krajská zastoupení pokrývající celou Českou republiku]"
    },
    {
      id: "year",
      number: "[1998]",
      label: "[Rok] Rok založení federace",
      description: "[Více než 28 let nepřetržitého hájení zájmů a rozvoje sektoru]"
    },
    {
      id: "workers",
      number: "[12 500+]",
      label: "[X] Zastupovaných odborníků",
      description: "[Kapacita sdružených subjektů s přímým vlivem na trh a legislativu]"
    }
  ],

  pillars: [
    {
      title: "[Zastupování a legislativní dialog]",
      description: "[Formální připomínkování zákonů, vyhlášek a vládních strategií v zájmu všech našich sdružených členů na celostátní i evropské úrovni.]",
      icon: "Scale"
    },
    {
      title: "[Profesní standardy a etika]",
      description: "[Uplatňování certifikovaných etických kodexů, oborových metodik a garance vysoké kvality poskytovaných služeb vůči veřejnosti.]",
      icon: "ShieldCheck"
    },
    {
      title: "[Vzdělávání a rozvoj kapacit]",
      description: "[Pořádání odborných akreditovaných seminářů, výměna zkušeností a sdílení osvědčených postupů mezi členskými subjekty.]",
      icon: "GraduationCap"
    },
    {
      title: "[Mezinárodní partnerství]",
      description: "[Přímé zastoupení v evropských střešních federacích, mezinárodní projekty a přenos know-how do českého prostředí.]",
      icon: "Globe"
    }
  ]
};

export const LEADERSHIP_TEAM = [
  {
    role: "[Předseda / Prezident]",
    title: "[Statutární zástupce federace]",
    name: "[Ing. Jan Novotný, Ph.D. — Vzorové jméno předsedy]",
    bio: "[Zde uveďte profil předsedy: zodpovídá za strategické řízení svazu, reprezentaci vůči ministerstvům, médiím a mezinárodním orgánům. Funkční období 2024–2028.]",
    email: "prezident@federace-vzor.cz",
    phone: "+420 220 123 450",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    role: "[Místopředseda]",
    title: "[Zástupce pro legislativu a vnější vztahy]",
    name: "[JUDr. Marie Dvořáková — Vzorové jméno místopředsedkyně]",
    bio: "[Zde uveďte profil místopředsedy: řízení legislativní komise, koordinace připomínkových řízení a vztahy s partnerskými profesními komorami.]",
    email: "mistopredsedkyne@federace-vzor.cz",
    phone: "+420 220 123 451",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  },
  {
    role: "[Tajemník]",
    title: "[Výkonný ředitel kanceláře svazu]",
    name: "[Mgr. Pavel Černý — Vzorové jméno tajemníka]",
    bio: "[Zde uveďte profil tajemníka: vedení stálého sekretariátu, operativní agenda, komunikace s členskou základnou a příprava valných hromad.]",
    email: "tajemnik@federace-vzor.cz",
    phone: "+420 220 123 452",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  },
  {
    role: "[Revizní komise]",
    title: "[Nezávislý kontrolní orgán federace]",
    name: "[Předseda revizní komise: Ing. Tomáš Kučera]",
    bio: "[Dohlíží na hospodaření svazu podle schváleného rozpočtu, kontroluje plnění usnesení valné hromady a předkládá výroční revizní zprávu.]",
    email: "revize@federace-vzor.cz",
    phone: "+420 220 123 453",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
  }
];

export const TIMELINE_MILESTONES = [
  {
    year: "1998",
    title: "[Založení federace a podpis ustavující deklarace]",
    description: "[Sedm zakládajících organizací podepsalo ustavující smlouvu s cílem sjednotit profesní hlas v České republice a hájit společné oborové zájmy.]"
  },
  {
    year: "2004",
    title: "[Vstup do celoevropské střešní asociace]",
    description: "[Rozšíření členské základny na 20 subjektů a získání plnoprávného členství v Evropské konfederaci, umožňující připomínkování směrnic EU.]"
  },
  {
    year: "2012",
    title: "[Schválení Etického kodexu a akreditačního systému]",
    description: "[Zavedení závazných profesních standardů pro všechny členské subjekty a vytvoření transparentního smírčího a revizního mechanismu.]"
  },
  {
    year: "2019",
    title: "[Založení Akademie svazu a digitalizace agend]",
    description: "[Spuštění členského portálu, digitalizace hlasování valné hromady a zahájení pravidelného dotačního a legislativního monitoringu.]"
  },
  {
    year: "2024",
    title: "[Překročení hranice 45 řádných členských subjektů]",
    description: "[Konsolidace regionálních odboček a upevnění pozice oficiálního připomínkového místa při legislativních návrzích příslušných ministerstev.]"
  },
  {
    year: "2026",
    title: "[Současnost: Strategický plán rozvoje 2026–2030]",
    description: "[Moderní, plně transparentní federace propojující tradiční organizace s inovativními lídry sektoru v digitální éře.]"
  }
];

export const MEMBER_ORGANIZATIONS = [
  {
    id: 1,
    name: "[Asociace regionálního rozvoje a inovací, z.s.]",
    category: "[Řádný člen]",
    region: "Praha / Celostátní",
    ico: "[12345678]",
    website: "https://www.priklad-clena-1.cz",
    memberSince: "1998",
    description: "[Zde uveďte profil člena: Zaměření na podporu regionálních inovačních ekosystémů a transfer technologií do praxe.]"
  },
  {
    id: 2,
    name: "[Svaz moravských profesních spolků]",
    category: "[Řádný člen]",
    region: "Jihomoravský kraj",
    ico: "[23456789]",
    website: "https://www.priklad-clena-2.cz",
    memberSince: "2001",
    description: "[Zde uveďte profil člena: Reprezentace zájmů hospodářských a vzdělávacích subjektů v brněnské a jihomoravské aglomeraci.]"
  },
  {
    id: 3,
    name: "[Česká unie specializovaných pracovišť]",
    category: "[Řádný člen]",
    region: "Středočeský kraj",
    ico: "[34567890]",
    website: "https://www.priklad-clena-3.cz",
    memberSince: "2006",
    description: "[Zde uveďte profil člena: Odborná platforma pro certifikaci, normotvorbu a aplikovaný výzkum v oboru.]"
  },
  {
    id: 4,
    name: "[Severočeská komora oborových subjektů]",
    category: "[Řádný člen]",
    region: "Ústecký kraj",
    ico: "[45678901]",
    website: "https://www.priklad-clena-4.cz",
    memberSince: "2010",
    description: "[Zde uveďte profil člena: Koordinace transformačních a rekvalifikačních projektů s důrazem na strukturálně postižené regiony.]"
  },
  {
    id: 5,
    name: "[Institut pro etiku a standardy v praxi, z.ú.]",
    category: "[Přidružený člen]",
    region: "Praha",
    ico: "[56789012]",
    website: "https://www.priklad-clena-5.cz",
    memberSince: "2015",
    description: "[Zde uveďte profil člena: Nezávislá výzkumná a analytická instituce poskytující metodické zázemí etické komisi svazu.]"
  },
  {
    id: 6,
    name: "[Slezské sdružení koordinátorů a manažerů]",
    category: "[Řádný člen]",
    region: "Moravskoslezský kraj",
    ico: "[67890123]",
    website: "https://www.priklad-clena-6.cz",
    memberSince: "2018",
    description: "[Zde uveďte profil člena: Podpora manažerské excelence, mezinárodní kooperace a rozvoj zaměstnanosti na Ostravsku.]"
  },
  {
    id: 7,
    name: "[Západočeské fórum neziskových partnerů]",
    category: "[Přidružený člen]",
    region: "Plzeňský kraj",
    ico: "[78901234]",
    website: "https://www.priklad-clena-7.cz",
    memberSince: "2021",
    description: "[Zde uveďte profil člena: Regionální síť podporující spolupráci mezi samosprávami a veřejně prospěšnými organizacemi.]"
  },
  {
    id: 8,
    name: "[Východočeská rada pro odborné vzdělávání]",
    category: "[Řádný člen]",
    region: "Královéhradecký kraj",
    ico: "[89012345]",
    website: "https://www.priklad-clena-8.cz",
    memberSince: "2023",
    description: "[Zde uveďte profil člena: Rozvoj duálního vzdělávání, učňovského školství a celoživotní profesní přípravy.]"
  }
];

export const OFFICIAL_DOCUMENTS = [
  {
    id: "doc-1",
    title: "[Stanovy federace (platné znění)]",
    category: "[Základní právní dokumenty]",
    fileType: "PDF",
    size: "2.4 MB",
    version: "v4.2 / 2024",
    approvedDate: "15. 11. 2024",
    approvedBy: "[Valná hromada federace]",
    description: "[Zde uveďte anotaci: Základní zakladatelský a organizační dokument upravující účel, orgány, členství, práva a povinnosti sdružených subjektů.]"
  },
  {
    id: "doc-2",
    title: "[Jednací řád a volební řád]",
    category: "[Vnitřní předpisy]",
    fileType: "PDF",
    size: "1.1 MB",
    version: "v3.0 / 2023",
    approvedDate: "20. 05. 2023",
    approvedBy: "[Valná hromada federace]",
    description: "[Zde uveďte anotaci: Pravidla jednání orgánů federace, způsob svolávání, usnášeníschopnost a procedurální řád volby statutárních zástupců.]"
  },
  {
    id: "doc-3",
    title: "[Zápisy z valné hromady]",
    category: "[Zápisy a usnesení]",
    fileType: "PDF",
    size: "3.8 MB",
    version: "Ročník 2025",
    approvedDate: "10. 12. 2025",
    approvedBy: "[Ověřovatelé zápisu valné hromady]",
    description: "[Zde uveďte anotaci: Úplný soubor usnesení z řádné valné hromady včetně schválených závěrů, výsledků hlasování a seznamu přítomných delegátů.]"
  },
  {
    id: "doc-4",
    title: "[Výroční zpráva a hospodaření za minulý rok]",
    category: "[Výroční zprávy a audit]",
    fileType: "PDF",
    size: "5.6 MB",
    version: "Audit 2025",
    approvedDate: "28. 02. 2026",
    approvedBy: "[Revizní komise a nezávislý auditor]",
    description: "[Zde uveďte anotaci: Komplexní přehled o činnosti, hospodářský výsledek, stav majetku, transparentní čerpání rozpočtu a zpráva nezávislého auditora.]"
  },
  {
    id: "doc-5",
    title: "[Formulář přihlášky pro nové členy]",
    category: "[Členská agenda]",
    fileType: "DOCX / PDF",
    size: "820 KB",
    version: "Formulář 2026",
    approvedDate: "05. 01. 2026",
    approvedBy: "[Kancelář tajemníka svazu]",
    description: "[Zde uveďte anotaci: Závazný formulář žádosti o řádné nebo přidružené členství v naší federaci včetně seznamu požadovaných povinných příloh.]"
  },
  {
    id: "doc-6",
    title: "[Etický kodex člena federace a pravidla dobré praxe]",
    category: "[Vnitřní předpisy]",
    fileType: "PDF",
    size: "950 KB",
    version: "v2.1",
    approvedDate: "18. 09. 2022",
    approvedBy: "[Etická rada federace]",
    description: "[Zde uveďte anotaci: Závazné zásady transparentního, odpovědného a nestranného jednání pro všechny představitele členských subjektů.]"
  },
  {
    id: "doc-7",
    title: "[Rozpočet a finanční plán na stávající rok]",
    category: "[Výroční zprávy a audit]",
    fileType: "PDF",
    size: "1.4 MB",
    version: "Rozpočet 2026",
    approvedDate: "10. 12. 2025",
    approvedBy: "[Valná hromada federace]",
    description: "[Zde uveďte anotaci: Schválené příjmy, výdaje a projektové alokace svazu pro rozpočtový rok 2026 s transparentním rozúčtováním.]"
  }
];

export const NEWS_ARTICLES = [
  {
    id: "akt-1",
    date: "24. září 2026",
    isoDate: "2026-09-24",
    category: "[Oficiální oznámení]",
    badgeColor: "blue",
    title: "[Stanovisko prezidia federace k návrhu novely zákona o zájmových spolcích]",
    summary: "[Zde uveďte stručný anotovaný souhrn: Prezidium federace oficiálně odeslalo meziresortnímu připomínkovému řízení soubor 14 zásadních připomínek chránících autonomii profesních a spolkových organizací.]",
    content: "[Plné znění zprávy: Dne 24. září 2026 zasedalo mimořádné prezidium naší federace k projednání vládního návrhu novely legislativních předpisů. Na základě konzultací se všemi 48 členskými organizacemi jsme formulovali jednotné zásadní stanovisko. Požadujeme zachování stávajících pravidel pro finanční samostatnost spolků a zjednodušení administrativní zátěže při podávání výročních zpráv. Kompletní znění připomínek je k dispozici členským organizacím v Klientské zóně.]",
    author: "[Tiskový mluvčí federace]",
    readTime: "3 min"
  },
  {
    id: "akt-2",
    date: "12. září 2026",
    isoDate: "2026-09-12",
    category: "[Valná hromada]",
    badgeColor: "amber",
    title: "[Svolání řádné volební valné hromady federace na podzim 2026]",
    summary: "[Zde uveďte stručný anotovaný souhrn: Prezidium vyhlašuje termín, program a volební kalendář pro nadcházející valnou hromadu, která se uskuteční v Kongresovém centru v Praze.]",
    content: "[Plné znění zprávy: V souladu s článkem VII stanov svolává statutární orgán řádnou volební valnou hromadu delegátů. Součástí programu bude schválení výroční zprávy za uplynulý rok, volba nových členů revizní komise a projednání strategie na období 2027–2030. Zástupci členských organizací obdrží oficiální pozvánku s podklady elektronicky nejpozději 30 dnů před konáním zasedání.]",
    author: "[Kancelář tajemníka]",
    readTime: "4 min"
  },
  {
    id: "akt-3",
    date: "28. srpna 2026",
    isoDate: "2026-08-28",
    category: "[Událost]",
    badgeColor: "emerald",
    title: "[Národní konference o budoucnosti odvětví a mezisektorovém partnerství]",
    summary: "[Zde uveďte stručný anotovaný souhrn: Zpráva o úspěšném průběhu výroční odborné konference za účasti více než 250 expertů, zástupců ministerstev a zahraničních delegací.]",
    content: "[Plné znění zprávy: Ve dnech 27. a 28. srpna proběhl již 15. ročník naší celostátní konference. Hlavním tématem byla modernizace legislativního rámce, digitální transformace členských organizací a udržitelné financování neziskového sektoru. V rámci panelových diskusí vystoupili klíčoví představitelé státní správy i mezinárodních střešních organizací. Záznamy všech panelů a prezentace přednášejících jsou k dispozici ke stažení pro registrované účastníky.]",
    author: "[Sekce pro vzdělávání a akce]",
    readTime: "5 min"
  },
  {
    id: "akt-4",
    date: "15. srpna 2026",
    isoDate: "2026-08-15",
    category: "[Oficiální oznámení]",
    badgeColor: "blue",
    title: "[Přijetí dvou nových členských subjektů do řad naší federace]",
    summary: "[Zde uveďte stručný anotovaný souhrn: Rozhodnutím prezidia byly po splnění všech formálních náležitostí přijaty nové partnerské organizace rozšiřující naši celorepublikovou působnost.]",
    content: "[Plné znění zprávy: S potěšením oznamujeme, že revizní i etická komise jednomyslně doporučily schválení přihlášek dvou nových členských subjektů. Tímto krokem naše federace posiluje svou působnost v Plzeňském a Moravskoslezském kraji. Vítáme nové kolegy v našich odborných sekcích a těšíme se na plodnou spolupráci.]",
    author: "[Členská sekce]",
    readTime: "2 min"
  }
];

export const DIRECT_CONTACTS = [
  {
    section: "[Kancelář předsednictva]",
    contactPerson: "[Sekretariát prezidenta a místopředsedy]",
    phone: "+420 220 123 450",
    email: "prezidium@federace-vzor.cz",
    note: "[Protokolární záležitosti, jednání s úřady a strategická partnerství]"
  },
  {
    section: "[Kancelář tajemníka a administrativa]",
    contactPerson: "[Všeobecná agenda a členská evidence]",
    phone: "+420 220 123 452",
    email: "tajemnik@federace-vzor.cz",
    note: "[Dotazy ke stanovám, členským poplatkům a přihláškám nových subjektů]"
  },
  {
    section: "[Tiskové oddělení a vztahy s veřejností]",
    contactPerson: "[Tiskový mluvčí a mediální servis]",
    phone: "+420 220 123 455",
    email: "media@federace-vzor.cz",
    note: "[Oficiální tiskové zprávy, žádosti o rozhovory a mediální akreditace]"
  },
  {
    section: "[Právní a legislativní poradna]",
    contactPerson: "[Odborná legislativní komise]",
    phone: "+420 220 123 456",
    email: "legislativa@federace-vzor.cz",
    note: "[Konzultace k meziresortnímu připomínkovému řízení pro členy svazu]"
  }
];

export const MEMBERSHIP_STEPS = [
  {
    step: "01",
    title: "[Krok 1: Podání oficiální přihlášky]",
    description: "[Vyplnění závazného formuláře členské přihlášky statutárním orgánem žadatele včetně přiložení stanov a výpisu z veřejného rejstříku.]"
  },
  {
    step: "02",
    title: "[Krok 2: Přezkoumání revizní komisí]",
    description: "[Formální a etická kontrola souladu cílů žadatele s posláním federace a platným Etickým kodexem (lhůta pro posouzení: 30 dnů).]"
  },
  {
    step: "03",
    title: "[Krok 3: Projednání v prezidiu]",
    description: "[Ústní prezentace zástupce žadatele na zasedání prezidia a vydání oficiálního doporučení pro valnou hromadu.]"
  },
  {
    step: "04",
    title: "[Krok 4: Hlasování a zápis do registru]",
    description: "[Finální hlasování delegátů valné hromady, úhrada členského příspěvku a vystavení certifikátu řádného člena federace.]"
  }
];
