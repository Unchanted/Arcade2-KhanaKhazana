const Location = () => {
  return (
    <div>
      <h1 className="display-5 fw-bold text-body-emphasis text-center p-5">
        Location
      </h1>
      <div className="row mb-3 text-center table">
        <div className="col-md-6 themed-grid-col">
          <div className="location-component" style={{ display: "flex" }}>
            <img src="https://dummyimage.com/180x120/343a40/6c757d" alt="" />
            <h2>Punjab Grill Bandra Kurla Complex</h2>
            <p>
              G5, The Capital, G Block Rd, G Block BKC, Bandra Kurla Complex,
              Bandra East, Mumbai, Maharashtra 400098
            </p>
          </div>
        </div>
        <div className="col-md-3 themed-grid-col">Open Details</div>
        <div className="col-md-3 themed-grid-col">10 mins ago</div>
      </div>
      <div className="row mb-3 text-center table">
        <div className="col-md-6 themed-grid-col">
          <div className="location-component" style={{ display: "flex" }}>
            <img src="https://dummyimage.com/180x120/343a40/6c757d" alt="" />
            <h2>Masala Library by Jiggs Kalra</h2>
            <p>
              Ground Floor, First International Financial Centre, Citi Bank
              Building, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai,
              Maharashtra 400051
            </p>
          </div>
        </div>
        <div className="col-md-3 themed-grid-col">Open Details</div>
        <div className="col-md-3 themed-grid-col">10 mins ago</div>
      </div>
      <div className="row mb-3 text-center table">
        <div className="col-md-6 themed-grid-col">
          <div className="location-component" style={{ display: "flex" }}>
            <img src="https://dummyimage.com/180x120/343a40/6c757d" alt="" />
            <h2>Dakshin Coastal</h2>
            <p>
              31/1, 31/2, Itc Maratha, 31/3, IA Project Rd, Sahar Village,
              Andheri East, Mumbai, Maharashtra 400059
            </p>
          </div>
        </div>
        <div className="col-md-3 themed-grid-col">Open Details</div>
        <div className="col-md-3 themed-grid-col">10 mins ago</div>
      </div>
    </div>
  );
};
export default Location;
