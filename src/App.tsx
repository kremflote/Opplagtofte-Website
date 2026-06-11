import { useState } from "react";

import logoUrl from "../images/logo.jpg";
import image023 from "./assets/photos/image023.jpg";
import mapHakadal from "./assets/photos/map_hakadal.jpg";
import mapTofte from "./assets/photos/map_tofte.jpg";
import heroBoats from "./assets/photos/pic_main.jpg";
import tofte1 from "./assets/photos/tofte1.jpg";
import tofte10 from "./assets/photos/tofte10.jpg";
import tofte2 from "./assets/photos/tofte2.jpg";
import tofte3 from "./assets/photos/tofte3.jpg";
import tofte4 from "./assets/photos/tofte4.jpg";
import tofte5 from "./assets/photos/tofte5.jpg";
import tofte6 from "./assets/photos/tofte6.jpg";
import tofte7 from "./assets/photos/tofte7.jpg";
import tofte8 from "./assets/photos/tofte8.jpg";
import tofte9 from "./assets/photos/tofte9.jpg";

type Page = "index" | "startside" | "praktisk" | "kontakt";

type IconName = "mc" | "car" | "rv" | "boat" | "camper" | "clock" | "phone";

const galleryImages = [
  { src: tofte1, alt: "Båter lagret innendørs på Tofte" },
  { src: image023, alt: "Adkomstvei ved lagerområdet på Tofte" },
  { src: tofte5, alt: "Kaikant og fjord ved Tofte Strand Næringspark" },
  { src: tofte4, alt: "Lagerhall på Tofte Strand Næringspark" },
  { src: tofte3, alt: "Båter og kjøretøy i lagerhall" },
  { src: tofte2, alt: "Båt på henger ved utlevering" },
  { src: tofte6, alt: "Lagerområde og haller på Tofte" },
  { src: tofte7, alt: "Utendørs lagring ved næringsparken" },
  { src: tofte8, alt: "Båter under innendørs opplag" },
  { src: tofte9, alt: "Opplagsplass ved Tofte Strand" },
  { src: tofte10, alt: "Båter og lagringsplass på Tofte" },
];

const storageCards = [
  {
    title: "MC",
    icon: "mc" as const,
    heading: "Vinterlagring av motorsykler",
    text: "På grunn av utbygging er vinterlagring avviklet.",
  },
  {
    title: "Bil",
    icon: "car" as const,
    heading: "Vinterlagring av biler",
    text: "På grunn av utbygging er vinterlagring avviklet.",
  },
  {
    title: "Bobil",
    icon: "rv" as const,
    heading: "Vinterlagring av bobil",
    text: "På grunn av utbygging er vinterlagring avviklet.",
  },
  {
    title: "Båt",
    icon: "boat" as const,
    heading: "Vinterlagring av fritidsbåter",
    text: "Lagringsplass inne og ute, service, vinterkonservering, skrogbehandling og hente-/bringetjenester for båter.",
  },
  {
    title: "Campingvogn",
    icon: "camper" as const,
    heading: "Vinterlagring av campingvogn",
    text: "På grunn av utbygging er vinterlagring avviklet.",
  },
];

const outboardRows = [
  ["-> 10 HK", "500.-", "650.-"],
  ["-> 25 HK", "650.-", "850.-"],
  ["-> 50 HK", "650.-", "2.000.-"],
  ["-> 70 HK", "700.-", "2.500.-"],
  ["-> 90 HK", "1.250.-", "3.000.-"],
  ["-> 150 HK", "1.400.-", "3.250.-"],
  ["-> 300 HK", "1.500.-", "3.450.-"],
];

const inboardRows = [
  ["1 - 3 CYL", "3.000.-", "3.000.-"],
  ["4 CYL", "3.200.-", "3.400.-"],
  ["6 CYL", "3.200.-", "3.600.-"],
  ["8 CYL", "3.400.-", ""],
];

const hullRows = [
  ["Stoffing", "75", "100", "150"],
  ["Polering til fenderlist", "75", "100", "150"],
  ["Vasking steam og såpe", "28 pr. fot", "28 pr. fot", "28 pr. fot"],
  ["Vask / underspyling bunnskrog", "28 pr. fot", "28 pr. fot", "28 pr. fot"],
];

const navItems: Array<{ id: Page; label: string }> = [
  { id: "startside", label: "Startside" },
  { id: "praktisk", label: "Praktisk info" },
  { id: "kontakt", label: "Kontakt" },
];

function Icon({ name }: { name: IconName }) {
  if (name === "boat") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M7 27h34l-5 9H15L7 27Z" />
        <path d="M15 25V12h13l7 13" />
        <path d="M4 38c4 0 4-2 8-2s4 2 8 2 4-2 8-2 4 2 8 2 4-2 8-2" />
      </svg>
    );
  }

  if (name === "car") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="m10 27 4-10h20l4 10" />
        <path d="M8 27h32v9H8z" />
        <path d="M14 36a4 4 0 1 0 0 .1M34 36a4 4 0 1 0 0 .1" />
      </svg>
    );
  }

  if (name === "rv" || name === "camper") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M7 15h22l8 8h4v13H7z" />
        <path d="M13 20h8v6h-8zM27 20h5l4 4h-9z" />
        <path d="M16 36a4 4 0 1 0 0 .1M35 36a4 4 0 1 0 0 .1" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="17" />
        <path d="M24 14v11l8 5" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M17 8 10 14c1 12 12 23 24 24l6-7-8-7-5 4c-4-2-7-5-9-9l4-5-5-6Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M14 30a7 7 0 1 0 0 .1M36 30a5 5 0 1 0 0 .1" />
      <path d="M18 29h9l5-10h5M20 15h7M27 19l-5 10M14 30l7-11" />
    </svg>
  );
}

function Header({ page, onNavigate }: { page: Page; onNavigate: (page: Page) => void }) {
  const showSiteNav = page !== "index";

  return (
    <header className="site-header">
      <button className="brand" type="button" onClick={() => onNavigate("index")}>
        <img src={logoUrl} alt="Opplag Tofte" />
        <span>
          <strong>Opplag Tofte</strong>
          <small>Sentralt plassert vinteropplag og lagringsplass</small>
        </span>
      </button>

      {showSiteNav && (
        <nav className="main-nav" aria-label="Hovedmeny">
          {navItems.map((item) => (
            <button
              className={page === item.id ? "active" : ""}
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}

      <a className="phone-link" href="tel:+4792085605">
        <Icon name="phone" />
        <span>
          Ring nå på:
          <strong>920 85 605</strong>
        </span>
      </a>
    </header>
  );
}

function LocationChoice({ onChooseTofte }: { onChooseTofte: () => void }) {
  return (
    <section className="choice-page">
      <div className="intro-copy">
        <p className="eyebrow">Velkommen</p>
        <h1>Opplag Oslo</h1>
        <p>
          Opplag Oslo er per i dag landets største tilbyder av sesongopplag for kategoriene båt, bil,
          bobil, campingvogn, og MC.
        </p>
        <p>
          Vi huser hver sesong rundt 400 båter samt over 100 bobiler, biler samt campingvogner. Vi har
          over 10 års erfaring i bransjen med lagring og håndtering båter i alle størrelser, klassiske,
          ekslusive kjøretøy til det helt ordinære som man trenger å settes bort for en periode. Vi har
          en trofast kundeportefølje som kommer hovedsakelig fra østlandet, men også fra vest- og
          sørlandet.
        </p>
        <p>
          Fra våre to næringsparker lokalisert hhv. nord og sør i Oslo disponerer vi tilsammen over
          15.000 kvadratmeter med inneareal og over 20.000 kvadrat med uteareal.
        </p>
        <p>
          Trykk på ikonene Oslo Sør og Oslo Nord nedenfor for en oversikt over våre tjenester, priser
          og hva som passer best for ditt lagringsbehov.
        </p>
      </div>

      <div className="location-grid">
        <button className="location-card" type="button" onClick={onChooseTofte}>
          <img src={mapTofte} alt="Kart til Opplag Oslo Sør på Tofte" />
          <span>Opplag Oslo Sør</span>
          <strong>Tofte</strong>
          <p>
            Oslo Sør ligger på Hurumlandet, nærmere bestemt Tofte. Her disponerer totalt 12.000
            kvadrat med innendørs haller, alt fra enkle RUB haller til isolerte oppvarmede. Vi tar i
            mot båter opp 40 fot sjøveien så vel som på hengere, og tilbyr alle type maritime tjenester
            under opplag. Våre samarbeidspartnere er Lasa Båt og Motor, AB Marine, Finset Outboard
            samt flere andre mekanikere som er spesialister på sitt fagfelt.
          </p>
        </button>

        <a className="location-card" href="http://opplagoslo.no/hakadal/index.php">
          <img src={mapHakadal} alt="Kart til Opplag Oslo Nord i Hakadal" />
          <span>Opplag Oslo Nord</span>
          <strong>Hakadal</strong>
          <p>
            Oslo Nord befinner seg kun 30 minutter nord for sentrum i Nittedal kommune. Vi har 6
            romslige haller på tilsammen 3500 m2 av god standard for trygg og sikkert sesong opplag.
            Vi tar i mot alle type lette kjøretøyer, campingvogner samt båter på hengere inntil ca. 20
            fot.
          </p>
        </a>
      </div>
    </section>
  );
}

function Startside({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <>
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Tofte Strand Næringspark</p>
          <h1>Sentralt plassert vinteropplag og lagringsplass for ditt behov</h1>
          <p>
            Opplag Oslo AS har hovedsete ved Tofte Strand Næringspark rett ved vannkanten ytterst i
            Oslofjorden, ca. 50 minutter sør for Oslo sentrum.
          </p>
          <div className="hero-actions">
            <button type="button" onClick={() => onNavigate("praktisk")}>
              <Icon name="clock" />
              Praktisk info
            </button>
            <a href="tel:+4792085605">
              <Icon name="phone" />
              Ring oss
            </a>
          </div>
        </div>
        <img src={heroBoats} alt="Båter lagret på stativer ved Opplag Tofte" />
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Kundekategorier</p>
          <h2>Velg opplagstype</h2>
        </div>
        <div className="storage-grid">
          {storageCards.map((card) => (
            <article className="storage-card" key={card.title}>
              <span className="service-icon">
                <Icon name={card.icon} />
              </span>
              <h3>{card.title}</h3>
              <strong>{card.heading}</strong>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2>Velkommen</h2>
        <p>
          Tofte Strand næringspark ligger sentralt plassert mellom Oslo, Akershus, Buskerud, Vestfold
          og Østfold ytterst i Oslo Fjorden.
        </p>
        <p>
          Her disponerer vi rundt 15.000 m2 uteareal, og ca 12.000 m2 innendørs lagringskapasitet, fra
          helt enkle RUB haller til over 2000 m2 oppvarmet og isolert innendørs lagringsareale. Området
          er fysisk sperret med bom, kameraovervåket og intern aktivitet døgnet rundt sørger for at det
          alltid er folk på området om noe skulle dukke opp.
        </p>
        <p>
          Her har vi eget verksted med erfarne mekanikere innen Volvo Penta, Mercruiser, Yanmarin, og
          kan tilby maritime / mekaniske tjenester av god kvalitet til gunstige priser både for
          innenbords og utenbords. Se under ikonet båt for nærmere beskrivelse av våre tjenester /
          priser. Vi disponerer opptak for småbåter tom 24 fot og har egen dypvannsbrygge på området.
          Opptak båter o. 24 fot skjer til fastsatte datoer.
        </p>
        <p>
          Vi tar i mot fra primo oktober, og opplagsperioden varer ut mai. Vi har sommerstengt perioden
          juni tom august, og uavhentede opplagsobjekter vil etter kontraktens utløp ultimo mai bli
          stående over i sommeropplag og belastes sesongleie tilsvarende vintersesongen. Deretter løper
          automatisk en ny leieperiode for neste vintersesong etter at hallene begynner å fylles opp
          igjen. Opplagsobjekter vil ikke uten videre kunne hentes ut i perioden etter innlevering for
          inneværende sesong har startet, da det er mye logistikk forbundet med å flytte på alt som er
          innlevert og står foran. Evt. må dette avklares om mulig og jobben vil belastes på times
          basis.
        </p>
        <p>
          Vi har et hundretalls klassiske- og sportsbiler i innendørs opplag. Disse blir flyttet litt
          på under opplaget slik de ikke står seg fast på samme sted under opplagsperioden. For en del
          klassiske sportsveteraner inngår en høst- og vårsjekk i opplaget. Her tilbyr vi blant annet
          pakkeløsninger til forskjellige sportsbil klubber.
        </p>
        <p>Trykk på ikonene for å velge din kundekategori og få mer informasjon om hva vi kan tilby deg.</p>
      </section>

      <BoatDetails />

      <section className="section gallery-section">
        <div className="section-heading">
          <p className="eyebrow">Galleri</p>
          <h2>Bilder fra Tofte</h2>
          <p>Bilder fra og rundt våre lagerhaller på Tofte Strand Næringspark.</p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <a href={image.src} key={image.src}>
              <img src={image.src} alt={image.alt} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

function BoatDetails() {
  return (
    <section className="content-section price-section">
      <h2>Vinterlagring av fritidsbåter</h2>
      <p className="eyebrow">Prisliste pr. 01.01.2026</p>
      <p>
        Prisen på din opplagsplass er avhengig av størrelsen på båten og hvilke tilleggstjenester du
        ønsker å benytte deg av. Vi tilbyr lagringsplass både inne og ute, tilpasset ditt behov. Vi
        tilbyr komplette pakkepriser med rabatter for den som ønsker å sette bort alt av båtstell. Ta
        kontakt for et konkret tilbud for din båt.
      </p>
      <p>
        Det er dessverre ikke anledning til å utføre noen som helst form for selvpuss hverken på båter
        lagret ute eller inne på våre områder. Området er fysisk avsperret og eventuell tilgang til båt
        kun etter avtale.
      </p>

      <div className="info-block">
        <h3>Båter tom 25 fot</h3>
        <p>
          For innendørs lagring av små fritidsbåter tom 25 fot tilbyr vi opplag inne og ute. Uteopplag
          kr 250.- + mva pr fot inkl. tildekking. Innendørs kr. 350.- + mva pr fot. Prisene over er
          med / uten henger. For båter uten henger er opplagsutstyr, bukker, inkludert.
        </p>
      </div>

      <div className="table-grid">
        <PriceTable
          caption="Service og vinterkonservering motor utenbords"
          headers={["Utenbords", "Sesongkonservering", "Sesongservice"]}
          rows={outboardRows}
        />
        <PriceTable caption="Innenbords motor" headers={["Innenbords", "Bensin", "Diesel"]} rows={inboardRows} />
      </div>

      <p>
        Vi tilbyr konservering og service for de fleste motor-typer. Listen er ment å gi en pekepinn.
        For alle mekaniske tjenester tilkommer moms på oppgitte priser. Gjennom våre samarbeidspartnere
        kan vi tilby garantiservice på alle utenbordsmotorer. Her kan priser avvike noe fra våre egne,
        så ta kontakt for estimat på din motor.
      </p>
      <p>
        Sesongkonservering bør utføres hvert år, og omhandler rengjøring, ferskvannskjøring, smøre
        styring, smøre propellaksel, smøre alle bevegelige deler, kontroll av motor og girolje,
        konserveringsolje innvendig motor / utvendig. Materiell til konservering av bensin / diesel
        kommer i tillegg. Her konserverer vi hele bensinlinjen fra tank til motor. Dette er viktig for
        å unngå kondens i bensin og tæring på bensinslanger og pakninger på grunn av bioethanol
        tilsetningen i miljøbensinen. Vi oppfordrer derfor alle om å fylle 98 om mulig og sørge for at
        man bruker en tank eller to i året for å skifte ut bensin i tanken.
      </p>
      <p>
        Sesongservice inkluderer konservering som over, men er mer omfattende: bytte olje motor,
        girhus, sinkanode, sjekke / bytte plugger, filtre, sjekke kjøling, forgasser, tenning,
        kompresjon, lading samt elektriske koblinger.
      </p>
      <p>
        Materiell og deler som olje, filter, anoder, frostvæske og tenningsdeler kommer i tillegg til
        oppgitte priser. Kun originaldeler brukes av garantihensyn og delepriser baseres iht. over disk
        priser hos den respektive forhandler. Alle priser er ekskl. 25% merverdiavgift.
      </p>

      <div className="info-block">
        <h3>I sesongservice inngår blant annet</h3>
        <p>
          Rengjøre / ferskvannskjøre samt frostsikre motor, drev / gir slik at den er klar for våren.
          Motor blir kjørt varm med ferskvann samt konservert med frostvæske. Motor blir også satt inn
          med utvendig konserveringsolje.
        </p>
        <p>
          Servicepunkter for innenbordsmotor omfatter en årlig service som skift av olje, filtre,
          tæresink innvendig, reimer etter behov, impeller etter behov, evt. plugger,
          fordelerlokk/rotor etc. Generell visuell sjekk av pakninger, koblinger og eksosmanifoiler,
          spesielt Volvo Penta D-serie.
        </p>
        <p>
          Servicepunkter drev: rengjøring ved opptak, visuell sjekk, av og på etter behov, smøre opp
          smørepunkter / sjekk prop aksel, smøre splines, sjekk / bytte girolje, sjekk / bytte anoder,
          sjekke hydraulikkslanger, koblinger, øvrige servicepunkter samt stoffing før utsett. Pris fra
          kr. 2.000.- + mva.
        </p>
      </div>

      <p>
        For alle Volvo Penta drev samt Mercruiser Bravo/Alpha, Stern drev anbefales drev av og på
        årlig med noen få unntak. Dette for sjekk av lekkasjer, inspeksjon og måling av nivå drivaksel
        mot motor. Ta kontakt for informasjon / priser for din drevtype. Garantiutbedringer på Volvo
        Penta drev, motor og eksosmanifoiler foretas av Lasa Båt og Motor etter gjeldende timesatser
        og delepriser.
      </p>

      <PriceTable
        caption="Skrog utvendig"
        headers={["Tjeneste", "=> 25 fot", "=> 45 fot", "=> 45 fot og over"]}
        rows={hullRows}
      />

      <p>
        Stoffing inkluderer rengjøring, avfetting, skraping / pussing samt 1 - 2 strøk etter behov
        inkludert alt materiell for påføring / pussing. Polering inkluderer vask og påføring av voks
        med maskin i 2 - 3 omganger med Meguiars Maritim Pro Serie 110, 205 og High Gloss Eukabana
        toppsjikt. Polish tilkommer ca kr. 250 - 350 pr båt + mva.
      </p>
      <p>
        Polering utføres med maskin i flere omganger med proffserien til Meguiars. Dette er vokstype
        som er tykk og krevende å jobbe med da det kreves en arbeidstemperatur på rundt 70 grader på
        rondellen for at voksen skal få god flyt og legge seg godt i gelcoaten. De ulike vokstypene
        legges på i flere omganger. Da renser den optimalt og legger seg på i et godt lag som gir meget
        god slitestyrke og glans.
      </p>
      <p>
        Vi bruker for tiden Hempel Mille NCT bunnstoff. Pris pr. enhet, boks 0.8l, kr. 450.- + mva. Vi
        har prøvd flere merker, men denne har vi best erfaring med i Oslofjorden generelt. Ulike
        bunnstoff kan ha ulik heft på hverandre, og det er derfor viktig at du opplyser om hva som er
        brukt tidligere for best mulig resultat. Generelt gir mørkere bunnstoff bedre beskyttelse.
      </p>

      <div className="note-grid">
        <span>Forventet behov tom 19 fot: 1 - 2 enheter</span>
        <span>Tom 24 fot: 2 - 3 enheter</span>
        <span>Tom 30 fot: 3 - 4 enheter</span>
      </div>

      <div className="info-block">
        <h3>Hente / bringe tjenester</h3>
        <p>
          Vi tilbyr hente-/bringeordning for båter tom 26 fot, maks 3 tonn, i Oslo-region. Henting
          Oslo / Asker region: kr. 1.800.- til 2.400.- pr gang + moms.
        </p>
      </div>

      <div className="info-block">
        <h3>Øvrige tjenester</h3>
        <ul>
          <li>Lading batteri kr. 200.- pr stk. + moms.</li>
          <li>Konservering ferskvannsystem m. toalett kr. 750.- + moms.</li>
          <li>Øvrig polering / behandling trevirke faktureres på timebasis kr. 650.- + moms.</li>
          <li>Mekaniske tjenester motor/drev - øvrig kr. 760.- til 1.250.- + moms.</li>
          <li>
            Lagring båthenger: liten henger kr. 1.200.- + mva pr sesong, stor båthenger kr. 2.000.- +
            mva pr sesong.
          </li>
        </ul>
        <p>
          Dersom det finnes brukes kundens eget ladesystem og det forutsettes at dette er intakt om
          ikke annet er oppgitt skriftlig ved mottak. Opplag Oslo stiller ingen garanti for batterier
          som forringes eller blir defekte i løpet av opplagsperioden.
        </p>
        <p>
          For lagring av båthenger gjelder permanent lagring for perioden. Det er kun adgang til å
          hente ut / levere inn hengere etter avtale da dette området er avstengt til daglig.
        </p>
        <p>Se mer under Praktisk info for generelle betingelser samt forsikring.</p>
      </div>
    </section>
  );
}

function PriceTable({ caption, headers, rows }: { caption: string; headers: string[]; rows: string[][] }) {
  return (
    <div className="price-table-wrap">
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")}>
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`}>{cell || "-"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PraktiskInfo() {
  return (
    <section className="content-section practical-page">
      <p className="eyebrow">Inn- og utlevering</p>
      <h1>Praktisk informasjon</h1>
      <div className="highlight-box">
        <Icon name="clock" />
        <p>
          <strong>Våre åpningstider er 8 til 17 hverdager. Helger stengt.</strong>
          <span>
            På vinteren og sommeren er vi mye på farten og det er derfor viktig at man ringer og
            avtaler på forhånd.
          </span>
        </p>
      </div>
      <p>
        I innlevering og utleveringsperioden høst, september - november, og vår, mars - mai, er det
        åpent til 19.00 på torsdager, 10.00 til 15.00 på lørdager. Utover dette evt. etter avtale.
        Søndag / helligdager stengt.
      </p>
      <p>
        Våren er en spesielt hektisk tid med til tider veldig krevende logistikk da mye styres av
        været. Med over 600 opplagsobjekter er det derfor nødvendig med minst 14 dagers forvarsel. I
        tillegg kan utleveringstid påvirkes av hvor i hallene opplagsobjektene står. Spesielt tidlig
        på våren med fulle haller er det mye håndtering å ta hensyn til, så her oppfordrer vi alle til
        å vise forståelse for at ikke alt kan håndteres på de godværsdagene. Vær ute i god tid - helst
        6 uker, eller så snart man vet noe, for at dette skal gå så smidig som mulig.
      </p>

      <div className="info-block">
        <h2>Sesongperiode og priser</h2>
        <p>
          Sesongperioden / vinteropplaget løper fra medio oktober til og med mai påfølgende år. Utover
          dette blir uavhentede leieobjekter belastet med kr. 850.- + mva for påbegynt måned juni /
          evt. juli. For lagringsobjekter som ikke blir avhentet etter endt sesongleie, vinteropplag,
          og stående hele perioden til neste vintersesong, beregnes sesongleie for sommersesong
          tilsvarende vintersesong.
        </p>
      </div>
    </section>
  );
}

function Kontakt() {
  return (
    <section className="contact-page">
      <div className="contact-card">
        <p className="eyebrow">Kontakt</p>
        <h1>Opplag Oslo AS</h1>
        <address>
          <strong>Tofte Strand Næringspark</strong>
          <span>Vestre Strandvei 93</span>
          <span>3482 Tofte i Hurum</span>
        </address>
        <div className="contact-actions">
          <a href="tel:+4792085605">Tlf.: 920 85 605</a>
          <a href="mailto:opplag@dinmg.no">Email: opplag@dinmg.no</a>
        </div>
      </div>
      <div className="map-card" aria-label="Adressekart">
        <img src={mapTofte} alt="Kartutsnitt som viser Tofte" />
      </div>
    </section>
  );
}

function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <footer>
      <nav aria-label="Bunnmeny">
        {navItems.map((item) => (
          <button key={item.id} type="button" onClick={() => onNavigate(item.id)}>
            {item.label}
          </button>
        ))}
      </nav>
      <p>Copyright © 2010-2017 Opplag Oslo. All rights reserved.</p>
    </footer>
  );
}

function App() {
  const [page, setPage] = useState<Page>("index");

  return (
    <div className="app-shell">
      <Header page={page} onNavigate={setPage} />
      <main>
        {page === "index" && <LocationChoice onChooseTofte={() => setPage("startside")} />}
        {page === "startside" && <Startside onNavigate={setPage} />}
        {page === "praktisk" && <PraktiskInfo />}
        {page === "kontakt" && <Kontakt />}
      </main>
      {page !== "index" && <Footer onNavigate={setPage} />}
    </div>
  );
}

export default App;
