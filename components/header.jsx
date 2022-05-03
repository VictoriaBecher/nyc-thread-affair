export default function Header() {
  return (
  <header className="header container mt-4">
    <section className="header-secondary d-flex justify-content-between">
      <div className="header-connect">
        <ul>
          <li>
          <a href="tel:+1-877-666-1840" title="Call us">
          <i className="fa-solid fa-phone"></i>
            Toll Free 1-877-666-1840
            </a>
          </li>

          <li>
          <a href="mailto:office@traidaffairs.com" title="Email Us">
          office@traidaffairs.com
          </a>
          </li>
        </ul>
      </div>

      <div className="header-controls">
        <section className="user-controls">
          <a href="" title="Account">
            <img src="/images/user-avatar.png" alt="User"></img>
          <i className="fa-solid fa-angle-down"></i>
          </a>
        </section>

        <section className="cart-control">
          <a href="" title="Cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-qty">3</span>
          </a>
        </section>
      </div>
    </section>

    <section className="header-primary">

      </section>
  </header>
  );
}
