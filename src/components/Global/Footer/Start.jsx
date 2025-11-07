export function Start() {
  const contacts = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Address',
      text: '123 Street, New York, USA',
    },
    {
      icon: 'fas fa-envelope',
      title: 'Mail Us',
      text: 'info@example.com',
    },
    {
      icon: 'fa fa-phone-alt',
      title: 'Telephone',
      text: '(+012) 3456 7890',
    },
    {
      icon: 'fab fa-firefox-browser',
      title: 'Yoursite@ex.com',
      text: '(+012) 3456 7890',
    },
  ];
  return (
    <div
      className="container-fluid footer py-5 wow fadeIn bg-bsdark"
      data-wow-delay="0.2s"
      style={{ background: '#484848' }}
    >
      <div className="container py-5">
        <div className="row g-4 rounded mb-5" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
          {contacts.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-6 col-xl-3">
              <div className="rounded p-4 text-center text-md-start">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mb-4 mx-auto mx-md-0"
                  style={{ width: '70px', height: '70px', background: '#f92400' }}
                >
                  <i className={`${item.icon} fa-2x text-primary`} />
                </div>
                <div>
                  <h4 className="text-white">{item.title}</h4>
                  <p className="mb-2 text-light">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
