export function Advantages() {
  const advantages = [
    {
      icon: 'fa-solid fa-arrows-rotate',
      title: 'Free Return',
      desc: '30 days money back guarantee!',
      delay: '0.1s',
    },
    {
      icon: 'fa-brands fa-telegram',
      title: 'Free Shipping',
      desc: 'Free shipping on all orders',
      delay: '0.2s',
    },
    {
      icon: 'fa-solid fa-life-ring',
      title: 'Support 24/7',
      desc: 'We support online 24 hrs a day',
      delay: '0.3s',
    },
    {
      icon: 'fa-solid fa-credit-card',
      title: 'Receive Gift Card',
      desc: 'Receive gifts on orders over $50',
      delay: '0.4s',
    },
    {
      icon: 'fa-solid fa-lock',
      title: 'Secure Payment',
      desc: 'We value your security',
      delay: '0.5s',
    },
    {
      icon: 'fa-solid fa-blog',
      title: 'Online Service',
      desc: 'Free returns within 30 days',
      delay: '0.6s',
    },
  ];

  return (
    <div className="container-fluid px-0 bg-white">
      <div className="row g-0">
        {advantages.map((adv, index) => (
          <div
            key={adv.title}
            className={`col-6 col-md-4 col-lg-2 border-end ${index === 0 ? 'border-start' : ''}`}
            data-wow-delay={adv.delay}
          >
            <div className="p-4">
              <div className="d-flex align-items-center">
                <i className={`${adv.icon} fa-2x text-primary`}></i>
                <div className="ms-4">
                  <h6 className="text-uppercase mb-2">{adv.title}</h6>
                  <p className="mb-0">{adv.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
