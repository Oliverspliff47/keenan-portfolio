const statementSections = [
  {
    id: "practice",
    number: "01",
    label: "Position",
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
    label: "Context",
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
    label: "Proposition",
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

const fieldsOfWork = [
  ["001", "Visual identity & systems", "Strategy / Identity", "practice"],
  ["002", "Publications & editorial", "Editing / Publishing", "method"],
  ["003", "Image direction & production", "Art direction / Image-making", "archive"],
  ["004", "Objects & editions", "Material / Edition", "infrastructure"],
  ["005", "Spatial communication & environments", "Exhibition / Wayfinding", "infrastructure"],
];

export default function Home() {
  return (
    <main>
      <header className="masthead" aria-label="Site header">
        <a className="wordmark" href="#top" aria-label="Keenan Oliver, home">
          Keenan Oliver
        </a>
        <p>Design / Direction / Publishing</p>
        <p className="place">Cape Town, South Africa</p>
      </header>

      <div id="top" className="page-shell">
        <div className="opening-spread">
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

          <figure className="portrait-plate">
            <img
              src="/keenan-oliver-office-portrait.png"
              alt="Photocopied self-portrait of Keenan Oliver with the word Office and assembled graphic elements"
              width="1448"
              height="2048"
            />
            <figcaption>
              <span>Fig. 01</span>
              <span>Self-portrait / Office</span>
            </figcaption>
          </figure>
        </div>

        <section className="lower-grid" aria-label="Fields of work and contact">
          <div className="index-block">
            <div className="section-heading">
              <span>Fields of Work</span>
              <span aria-hidden="true">↓</span>
            </div>

            <ol className="index-list">
              {fieldsOfWork.map(([number, title, detail, anchor]) => (
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
            <p className="section-heading">Office</p>
            <p>
              Founder of <a href="https://artefactsoffice.com">Artefacts Office</a>,
              an independent design office working through strategy, identity,
              publishing, image-making and spatial communication.
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
