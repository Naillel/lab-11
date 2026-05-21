class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.name   = this.getAttribute("name")   ?? "Usuario";
    this.role   = this.getAttribute("role")   ?? "Estudiante";
    this.avatar = this.getAttribute("avatar") ?? "👤";
    this.render();

    // Evento: click en el botón → dispara CustomEvent hacia warning-badge
    this.shadowRoot.querySelector(".btn").addEventListener("click", () => {
      const evento = new CustomEvent("usercard:saludar", {
        bubbles: true,   // burbujea por el DOM
        composed: true,  // atraviesa el Shadow DOM
        detail: {
          mensaje: `👋 Hola! Soy ${this.name} — ${this.role}`
        }
      });
      this.dispatchEvent(evento);
    });
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>
        :host { display: block; }

        .card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #161b22;
          border: 1px solid #30363d;
          border-radius: 10px;
          padding: 12px 16px;
        }

        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #21262d;
          border: 1px solid #30363d;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .info { flex: 1; }

        .name {
          margin: 0;
          font-family: sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #e6edf3;
        }

        .role {
          margin: 0;
          font-family: sans-serif;
          font-size: 12px;
          color: #58a6ff;
        }

        .btn {
          background: transparent;
          border: 1px solid #30363d;
          color: #8b949e;
          font-family: sans-serif;
          font-size: 12px;
          padding: 5px 14px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.15s;
        }

        .btn:hover {
          border-color: #58a6ff;
          color: #58a6ff;
        }
      </style>

      <div class="card">
        <div class="avatar">${this.avatar}</div>
        <div class="info">
          <p class="name">${this.name}</p>
          <p class="role">${this.role}</p>
        </div>
        <button class="btn">Saludar</button>
      </div>
    `;
  }
}

customElements.define("user-card", UserCard);