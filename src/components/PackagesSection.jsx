import React from "react";

export default function PackagesSection() {
  return (
    <section id="packages" className="section packagesSection">
      <div className="container">
        <h2 className="packagesTitle">Packages</h2>
        <p className="sectionTitle">
          Simple, transparent packages for predictable growth
        </p>
        <p className="sectionSubtitle">
          Pick the package that matches your sales goals. No hidden fees, no
          long-term lock-in – just clear numbers and real outreach.
        </p>

        <div className="categoryGrid">
          {/* ================= B2B LEAD GEN ================ */}
          <div className="categoryBlock">
            <h3 className="categoryTitle">B2B Lead Generation</h3>
            <p className="categorySubtitle">
              Targeted business leads, ready for your sales team.
            </p>

            <div className="tierGrid">
              <div className="tierCard">
                <p className="tierLabel">Basic</p>
                <p className="tierPrice">$20</p>
                <p className="tierMeta">one-time</p>
                <p className="tierDetail">100 qualified B2B leads</p>
              </div>

              <div className="tierCard">
                <p className="tierLabel">Medium</p>
                <p className="tierPrice">$40</p>
                <p className="tierMeta">one-time</p>
                <p className="tierDetail">250 qualified B2B leads</p>
              </div>

              <div className="tierCard">
                <p className="tierLabel">Premium</p>
                <p className="tierPrice">$80</p>
                <p className="tierMeta">one-time</p>
                <p className="tierDetail">500 qualified B2B leads</p>
              </div>
            </div>
          </div>

          {/* ================= B2C LEAD GEN ================ */}
          <div className="categoryBlock">
            <h3 className="categoryTitle">B2C Lead Generation</h3>
            <p className="categorySubtitle">
              Consumer-focused leads for faster conversions.
            </p>

            <div className="tierGrid">
              <div className="tierCard">
                <p className="tierLabel">Basic</p>
                <p className="tierPrice">$20</p>
                <p className="tierMeta">one-time</p>
                <p className="tierDetail">100 targeted B2C leads</p>
              </div>

              <div className="tierCard">
                <p className="tierLabel">Medium</p>
                <p className="tierPrice">$40</p>
                <p className="tierMeta">one-time</p>
                <p className="tierDetail">250 targeted B2C leads</p>
              </div>

              <div className="tierCard">
                <p className="tierLabel">Premium</p>
                <p className="tierPrice">$80</p>
                <p className="tierMeta">one-time</p>
                <p className="tierDetail">500 targeted B2C leads</p>
              </div>
            </div>
          </div>

          {/* ================= B2B COLD CALLING ================ */}
          <div className="categoryBlock">
            <h3 className="categoryTitle">B2B Cold Calling</h3>
            <p className="categorySubtitle">
              Human-first calls to decision makers, fully compliant.
            </p>

            <div className="tierGrid">
              <div className="tierCard">
                <p className="tierLabel">Basic</p>
                <p className="tierPrice">$20</p>
                <p className="tierMeta">one-time</p>
                <p className="tierDetail">100 B2B cold calls</p>
              </div>

              <div className="tierCard">
                <p className="tierLabel">Medium</p>
                <p className="tierPrice">$40</p>
                <p className="tierMeta">one-time</p>
                <p className="tierDetail">250 B2B cold calls</p>
              </div>

              <div className="tierCard">
                <p className="tierLabel">Premium</p>
                <p className="tierPrice">$80</p>
                <p className="tierMeta">one-time</p>
                <p className="tierDetail">500 B2B cold calls</p>
              </div>
            </div>
          </div>

          {/* ================= B2C COLD CALLING ================ */}
          <div className="categoryBlock">
            <h3 className="categoryTitle">B2C Cold Calling</h3>
            <p className="categorySubtitle">
              Friendly, compliant outreach to your ideal customers.
            </p>

            <div className="tierGrid">
              <div className="tierCard">
                <p className="tierLabel">Basic</p>
                <p className="tierPrice">$20</p>
                <p className="tierMeta">one-time</p>
                <p className="tierDetail">100 B2C cold calls</p>
              </div>

              <div className="tierCard">
                <p className="tierLabel">Medium</p>
                <p className="tierPrice">$40</p>
                <p className="tierMeta">one-time</p>
                <p className="tierDetail">250 B2C cold calls</p>
              </div>

              <div className="tierCard">
                <p className="tierLabel">Premium</p>
                <p className="tierPrice">$80</p>
                <p className="tierMeta">one-time</p>
                <p className="tierDetail">500 B2C cold calls</p>
              </div>
            </div>
          </div>
        </div>

        <p className="packageNote">
          Need a custom volume or a mix of services? {" "}
          <a className="contactMail" href="mailto:info@grentechit.com">Contact us</a> for a tailored quote.
        </p>
      </div>
    </section>
  );
}
