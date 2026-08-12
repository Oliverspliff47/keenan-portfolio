const statementSections = [
  {
    id: "practice",
    number: "01",
    label: "Practice",
    text: (
      <>
        My practice produces <strong>visual systems</strong>, publications,
        images, objects and spatial interventions that examine how contemporary
        culture is made, circulated and remembered.
      </>
    ),
  },
  {
    id: "method",
    number: "02",
    label: "Method",
    text: (
      <>
        I work through graphic design, publishing, creative direction and
        research, treating these not simply as forms of communication but as
        methods for organising cultural material. I collect, edit, sequence,
        reproduce and recontextualise images, language and artefacts drawn from
        popular culture, archives and the everyday. Through these processes, I
        am interested in the relationships between design and culture: how
        identities are constructed, how images acquire meaning through
        circulation, and how seemingly ordinary material can become evidence of
        a particular place and time.
      </>
    ),
  },
  {
    id: "archive",
    number: "03",
    label: "Archive",
    text: (
      <>
        This approach comes from an interest in the instability of the archive,
        particularly within a South African context. Culture is constantly
        being produced, yet much of its visual and material history remains
        dispersed across personal collections, commercial media, streets,
        institutions and digital platforms. My work responds to this condition
        by using design as both a productive and archival practice: making new
        cultural material while simultaneously developing structures through
        which existing material can be gathered, interpreted and preserved.
      </>
    ),
  },
  {
    id: "infrastructure",
    number: "04",
    label: "Infrastructure",
    text: (
      <>
        What matters to me is not preservation for its own sake, but what
        becomes possible when cultural material is brought into relation. A
        publication, exhibition, identity, image or object can become a site
        through which different histories, disciplines and communities
        encounter one another. In this sense, I understand design as a form of
        cultural infrastructure: a means of giving form to the present while
        constructing the conditions through which it might later be read.
      </>
    ),
  },
];

const indexItems = [
  ["001", "Visual systems", "Identity / Direction", "practice"],
  ["002", "Publications", "Editing / Sequence", "method"],
  ["003", "Images", "Production / Circulation", "archive"],
  ["004", "Objects", "Material / Memory", "infrastructure"],
  ["005", "Spatial interventions", "Site / Encounter", "infrastructure"],
];

export default function Home() {
  return (
    <main>
      <header className="masthead" aria-label="Site header">
        <a className="wordmark" href="#top" aria-label="Keenan Oliver, home">
          Keenan Oliver
        </a>
        <p>Interdisciplinary designer</p>
        <p className="place">Cape Town, South Africa</p>
        <p className="year">1993—</p>
      </header>

      <div id="top" className="page-shell">
        <section className="statement" aria-labelledby="statement-title">
          <h1 id="statement-title" className="sr-only">Practice statement</h1>

          {statementSections.map((section) => (
            <article className="statement-row" id={section.id} key={section.id}>
              <div className="statement-key" aria-hidden="true">
                <span>{section.number}</span>
                <span>{section.label}</span>
              </div>
              <p>{section.text}</p>
            </article>
          ))}
        </section>

        <section className="lower-grid" aria-label="Practice index and contact">
          <div className="index-block">
            <div className="section-heading">
              <span>Practice Index</span>
              <span aria-hidden="true">↓</span>
            </div>

            <ol className="index-list">
              {indexItems.map(([number, title, detail, anchor]) => (
                <li key={number}>
                  <span className="item-number">{number}</span>
                  <a href={`#${anchor}`}>
                    <span>{title}</span>
                    <span className="item-detail">{detail}</span>
                    <span className="arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <aside className="studio-note">
            <p className="section-heading">Studio</p>
            <p>
              Founder of <a href="https://artefactsoffice.com">Artefacts Office</a>,
              a design practice operating across brand strategy, visual culture
              and spatial communication.
            </p>
          </aside>

          <div className="contact-block">
            <div className="section-heading">
              <span>Contact</span>
              <span aria-hidden="true">↓</span>
            </div>
            <div className="contact-row">
              <span className="item-number">006</span>
              <a href="mailto:work@artefactsoffice.com">
                <span>Email</span>
                <span className="contact-address">work@artefactsoffice.com</span>
                <span className="arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <p>Design as cultural infrastructure.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
